<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Modules\KhaoSat\Entities\BangDiem;
use Modules\KhaoSat\Entities\CauHoi;
use Modules\KhaoSat\Entities\CauHoiThamDinh;
use Modules\KhaoSat\Entities\DanhMuc;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use Modules\KhaoSat\Entities\ThoiGian;

class ThamDinhController extends Controller
{
    public function danhMuc(Request $request)
    {
        $maDonVi = $request->get('maDonVi');
        $danhMuc = DanhMuc::query()->when($maDonVi, function ($q) use ($maDonVi) {
            return $q->whereHas('donvi', function ($q) use ($maDonVi) {
                $q->where('maDonVi', $maDonVi);
            });
        });
        $danhMuc = $danhMuc->whereHas('thamdinh', function ($q) use ($request) {
            $q->where('maDonVi', auth('api')->user()->organizationId);
        })->where(['trangThai' => 1])
            ->orderBy('tenDanhMuc')->get(['id', 'tenDanhMuc','namApDung']);
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function donVi(Request $request)
    {
        $cauHoiThamDinh = DonViHanhChinh::with([
            'thamdinh' => function ($q) use ($request) {
                $q->where([
                    'maDanhMuc' => $request->get('categoryId', -1),
                    'maDonVi' => auth('api')->user()->organizationId
                ]);
            }
        ])
            ->with('thamdinh', function ($q) use ($request) {
                $q->where([
                    'maDanhMuc' => $request->get('categoryId', -1)
                ]);
            })
            ->where([
                'trangThai' => 1,
                'id' => auth('api')->user()->organizationId
            ])
            ->firstOrFail();


        $danhMuc = DonViHanhChinh::whereHas('danhgia', function ($q) use ($request) {
            $q->where('maDanhMuc', $request->get('categoryId', -1));
        })->with(['bangdiem' => function ($q) use ($request) {
            $q->where('maDanhMuc', $request->get('categoryId', -1));
        }])->where(['trangThai' => 1])
            ->orderBy('tenDonVi')->get(['id', 'tenDonVi']);
        foreach ($danhMuc as $item) {
            $item->diemdanhgia = $item->bangdiem->where('trangThai', '>=', 2)->sum('diem');
            $item->diemthamdinh = $item->bangdiem->where('maDonViThamDinh', auth('api')->user()->organizationId)->sum('diemThamDinh');
            $item->dathamdinh = $item->bangdiem->where('maDonViThamDinh', auth('api')->user()->organizationId)->count('maDonViThamDinh') ? 1 : 0;
            $item->trangThaiHienTai = $item->bangdiem->whereIn('maCauHoi', $cauHoiThamDinh->thamdinh?->pluck('maCauHoi'))->max('trangThai');
            $item->makeHidden(['bangdiem']);
        }
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function cauHoi()
    {
        $questions = collect();
        DanhMucDonVi::where(['maDanhMuc' => request('maDanhMuc', -1), 'maDonVi' => request('maDonVi', -1)])->firstOrFail();
        $trangThai = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonVi', -1)
        ])->where('trangThai', '>=', 2)->firstOrFail();

        if (!$trangThai) {
            return response()->json(['success' => false, 'message' => 'Đơn vị chưa gửi đánh giá'], 404);
        }

        $cauHoi = CauHoi::with(
            [
                'bangdiem' => function ($q) {
                    $q->where('maDonViDanhGia', request('maDonVi', -1));
                },

                'ykien' => function ($q) {
                    $q->where('maDonVi', request('maDonVi', -1));
                }
            ])->whereHas('danhmuc', function ($q) {
            $q->where([
                'id' => request('maDanhMuc', -1)
            ]);
        })
            ->with('donvithamdinh')
            // ->withCount('children')
            ->withCount(['children' => function ($q) {
                $q->where('trangThai', 1);
            }])
            ->where('trangThai', 1)
            ->orderBy('sapXep')
            ->orderBy('id')
            ->get();

        CauHoiThamDinh::where(['maDanhMuc' => request('maDanhMuc', -1), 'maDonVi' => auth('api')->user()->organizationId])->firstOrFail();

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
        collect($request->all())->each(function ($item) use ($q) {
            $qr = BangDiem::updateOrCreate([
                'maDonViDanhGia' => $item['maDonViDanhGia'],
                'maCauHoi' => $item['maCauHoi'],
                'parentId' => $item['parentId'],
                'maDanhMuc' => $item['maDanhMuc']
            ], [
                'maDonViThamDinh' => auth('api')->user()->organizationId,
                'maNguoiThamDinh' => auth('api')->id(),
                'noiDungThamDinh' => $item['noiDungThamDinh'],
                'ghiChuThamDinh' => $item['ghiChuThamDinh'],
                'diemThamDinh' => $item['diemThamDinh']
            ]);
            $q->push($qr);
        });
        return response()->json(['data' => $q, 'message' => 'Bạn đã lưu điểm thẩm định thành công', 'success' => true]);
    }

    public function guiDiem(Request $request)
    {
        $max = BangDiem::where([
            'maDanhMuc' => $request->get('maDanhMuc'),
            'maDonViDanhGia' => $request->get('maDonVi'),
            'maDonViThamDinh' => auth('api')->user()->organizationId,
        ])
            ->max('trangThai');

        $row = BangDiem::where([
            'maDanhMuc' => $request->get('maDanhMuc'),
            'maDonViDanhGia' => $request->get('maDonVi'),
            'maDonViThamDinh' => auth('api')->user()->organizationId,
        ])
            ->update([
                'trangThai' => $max == 2 ? 3 : 7,
                'maNguoiThamDinh' => auth('api')->id()
            ]);
        return response()->json(['data' => $row, 'message' => 'Bạn đã gửi điểm thẩm định thành công', 'success' => true]);
    }

    public function kiemTraHopLe()
    {
        //Kiểm tra thời hạn thẩm định
        $conHan = ThoiGian::whereDate('batDau', '<=', now())->whereDate('ketThuc', '>=', now())->where('id', 2)->first();

        //Kiểm tra danh mục có dược phân quyền cho đơn vị thẩm định
        $coQuyen = CauHoiThamDinh::where(['maDanhMuc' => request('maDanhMuc', -1), 'maDonVi' => auth('api')->user()->organizationId])->get();

        //Kiểm tra đơn vị đã gửi tự đánh giá hay chưa
        $chuaGuiThamDinh = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => request('maDonVi', -1),
        ])->whereIn('maCauHoi', $coQuyen->pluck('maCauHoi'))->max('trangThai');

        return response()->json(['data' => ($conHan && count($coQuyen) > 0 && ($chuaGuiThamDinh == 2 || $chuaGuiThamDinh == 6 || empty($chuaGuiThamDinh))), 'a' => $conHan, 'b' => count($coQuyen), 'c' => $chuaGuiThamDinh]);
    }
}
