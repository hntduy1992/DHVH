<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Modules\KhaoSat\Entities\BangDiem;
use Modules\KhaoSat\Entities\CauHoi;
use Modules\KhaoSat\Entities\DanhMuc;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use Modules\KhaoSat\Entities\DiemTongHop;

class XacNhanController extends Controller
{
    public function danhMuc(Request $request)
    {

        $maDonVi = $request->get('maDonVi');
        $danhMuc = DanhMuc::query()->when($maDonVi, function (Builder $query, $maDonVi) {
            $danhMucDonVis = DanhMucDonVi::query()->where('maDonVi', '=', $maDonVi)->pluck('maDanhMuc');
            $query->whereIn('id', $danhMucDonVis);
        })->where('trangThai', '=', 1)
            ->where('namApDung', '=', $request->get('namApDung', -1))->get(['id', 'tenDanhMuc']);
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function donVi(Request $request)
    {
        $danhMuc = DonViHanhChinh::whereHas('danhgia', function ($q) use ($request) {
            $q->where('maDanhMuc', $request->get('categoryId', -1));
        })
            ->with(['bienban' => function ($q) use ($request) {
                $q->where('maDanhMuc', $request->get('categoryId', -1));
            }])
            ->with(['bangdiem' => function ($q) use ($request) {
                $q->where('maDanhMuc', $request->get('categoryId', -1));
            }])
            ->with(['diemtong' => function ($q) use ($request) {
                $q->where('maDanhMuc', $request->get('categoryId', -1));
            }])
            ->where(['trangThai' => 1])
            ->orderBy('tenDonVi')->get(['id', 'tenDonVi']);
        foreach ($danhMuc as $item) {
            $max = $item->bangdiem?->max('trangThai');
            if ($max == 7) {
                   $arr = $item->bangdiem->where('trangThai', 6);
                   $max = count($arr) > 0 ? 6 : 7;
            }


            $item->diemdanhgia = $item->bangdiem->where('trangThai', '>=', 2)->sum('diem');
            $item->diemthamdinh = $item->bangdiem->where('trangThai', '>=', 3)->sum('diemThamDinh');
            $item->dathamdinh = $item->bangdiem->whereNull('maDonViThamDinh')->count() === 0 ? 1 : 0;
            $item->diemtonghop = $item->diemtong?->diem ?? 0;
            $item->trangThaiHienTai = $max;
            $item->dinhkem = $item->bienban?->fileName ?? null;
            $item->makeHidden(['bangdiem', 'diemtong', 'bienban']);
        }
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function donViXacNhan(Request $request)
    {
        $donVi = DonViHanhChinh::whereHas('thamdinh', function ($q) use ($request) {
            $q->where('maDanhMuc', $request->get('categoryId', -1));
        })
            ->with('thamdinh', function ($q) use ($request) {
                $q->where([
                    'maDanhMuc' => $request->get('categoryId', -1)
                ]);
            })
            ->where(['trangThai' => 1])
            ->orderBy('tenDonVi')->get(['id', 'tenDonVi']);

        foreach ($donVi as $item) {
            $count = BangDiem::where('maDanhMuc', $request->get('categoryId', -1))
                ->whereIn('maCauHoi', $item->thamdinh?->pluck('maCauHoi'))
                ->where([
                    'maDonViThamDinh' => $item->id,
                    'maDonViDanhGia' => $request->get('donVi')
                ])
                ->where('trangThai', '>=', 3)
                ->where('trangThai', '!=', 6)
                ->count('id');
            $item->trangThai = $count == $item->thamdinh?->count() ? 1 : 0;
        }

        return response()->json(['data' => $donVi, 'success' => true]);
    }

    public function cauHoi()
    {
        $questions = collect();
        $danhMucDonVi = DanhMucDonVi::where(['maDanhMuc' => request('maDanhMuc', -1), 'maDonVi' => request('maDonVi', -1)])->firstOrFail();
        $trangThai = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonVi', -1)
        ])->where('trangThai', '>=', 2)->firstOrFail();

        if (!$trangThai) {
            return response()->json(['success' => false, 'message' => 'Đơn vị chưa gửi đánh giá'], 404);
        }

        $cauHoi = CauHoi::with(['bangdiem' => function ($q) {
            $q->where('maDonViDanhGia', request('maDonVi', -1));
        }])->whereHas('danhmuc', function ($q) {
            $q->where([
                'id' => request('maDanhMuc', -1)
            ]);
        })
            ->with('donvithamdinh')
            // ->with('ykien')
            ->with(['ykien' => function ($q) {
                $q->where('maDonVi', request('maDonVi', -1));
            }])
            // ->withCount('children')
            ->withCount(['children' => function ($q) {
                $q->where('trangThai', 1);
            }])
            ->where('trangThai', 1)
            ->orderBy('sapXep')
            ->orderBy('id')
            ->get();

        foreach ($cauHoi->where('parentId', 0) as $item) {
            $item->level = 0;
            $questions->push($item);
            $this->children($questions, $cauHoi, $item);
        }
        return response()->json(['data' => $questions, 'success' => true]);
    }

    private function children(&$questions, $items, $target)
    {
        $results = $items->where('parentId', $target->id);
        if (!empty($results) && count($results) > 0) {
            foreach ($results as $item) {
                $item->level = $target->level + 1;
                $questions->push($item);
                $this->children($questions, $items, $item);
            }
        }
        return;
    }

    public function luuDiem(Request $request): JsonResponse
    {
        $q = collect();
        collect($request->get('bangDiem'))->each(function ($item) use ($q) {
            $qr = BangDiem::updateOrCreate([
                'maDonViDanhGia' => $item['maDonViDanhGia'],
                'maCauHoi' => $item['maCauHoi'],
                'parentId' => $item['parentId'],
                'maDanhMuc' => $item['maDanhMuc']
            ], [
                'diemThamDinh' => $item['diemThamDinh'],
                'noiDungThamDinh' => $item['noiDungThamDinh'],
            ]);
            $q->push($qr);
        });
        if ($q->count() > 0) {
            BangDiem::where([
                'maDanhMuc' => $request->get('maDanhMuc'),
                'maDonViDanhGia' => $request->get('maDonVi'),
            ])->update(['trangThai' => 4]);
        }
        return response()->json(['data' => $q, 'message' => 'Bạn đã cập nhật điểm thành công', 'success' => true]);
    }


    public function kiemTraHopLe()
    {
        //Kiểm tra đơn vị đã gửi tự đánh giá hay chưa
        $chuaGuiThamDinh = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonVi', -1),
        ])->max('trangThai');

        return response()->json(['data' => $chuaGuiThamDinh == 3]);
    }


    public function guiDiemTongHop(Request $request): JsonResponse
    {

        $res = DiemTongHop::updateOrCreate([
            'maDanhMuc' => $request->get('maDanhMuc'),
            'namApDung' => $request->get('namApDung'),
            'maDonVi' => $request->get('maDonVi'),
        ], [
            'diem' => $request->get('diem'),
            'maNguoiTongHop' => auth('api')->id(),
        ]);

        if ($res) {
            BangDiem::where([
                'maDanhMuc' => $request->get('maDanhMuc'),
                'maDonViDanhGia' => $request->get('maDonVi'),
            ])->update(['trangThai' => 8]);
        }

        return response()->json(['data' => $res, 'message' => 'Bạn đã cập nhật điểm thành công', 'success' => true]);
    }

    public function kiemTraTongHop()
    {
        //Kiểm tra đơn vị đã gửi tự đánh giá hay chưa
        $chuaGuiThamDinh = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonVi', -1),
        ])->max('trangThai');

        return response()->json(['data' => $chuaGuiThamDinh == 5 || $chuaGuiThamDinh == 7]);
    }

    public function traDiemTongHop()
    {
        $bangDiem = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonViDanhGia', -1),
            'maDonViThamDinh' => request('maDonViThamDinh', -1)
        ])->get();

        if ($bangDiem->max('trangThai') === 3) {
            BangDiem::whereIn('id', $bangDiem->pluck('id'))->update(['trangThai' => 2]);
        }

        if ($bangDiem->max('trangThai') === 5 || $bangDiem->max('trangThai') === 7 ) {
            BangDiem::whereIn('id', $bangDiem->pluck('id'))->update(['trangThai' => 6]);
        }

        return response()->json(['data' => $bangDiem]);
    }
}
