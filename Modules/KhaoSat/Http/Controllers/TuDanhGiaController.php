<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\KhaoSat\Entities\BangDiem;
use Modules\KhaoSat\Entities\BangYKien;
use Modules\KhaoSat\Entities\BienBan;
use Modules\KhaoSat\Entities\CauHoi;
use Modules\KhaoSat\Entities\DanhMuc;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use Modules\KhaoSat\Entities\ThoiGian;

class TuDanhGiaController extends Controller
{
    public function danhMuc(Request $request): JsonResponse
    {
        $danhMuc = DanhMuc::whereHas('donvi', function ($q) use ($request) {
            $q->where('maDonVi', auth('api')->user()->organizationId);
        })->where(['trangThai' => 1, 'namApDung' => $request->get('namApDung', -1)])
            ->orderBy('tenDanhMuc')->get(['id', 'tenDanhMuc']);
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function cauHoi()
    {
        $questions = collect();
        $cauHoi = CauHoi::whereHas('danhmuc', function ($q) {
            $q->where([
                'namApDung' => request('namApDung', -1),
                'id' => request('maDanhMuc', -1)
            ]);
        })->withCount(['children' => function ($q) {
            $q->where('trangThai', 1);
        }])
            ->with(['bangdiem' => function ($q) {
                $q->where([
                    'maDonViDanhGia' => auth()->user()->organizationId
                ]);
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

    public function cauHoiYKien()
    {
        $questions = collect();

        DanhMucDonVi::where(['maDanhMuc' => request('maDanhMuc', -1), 'maDonVi' => auth('api')->user()->organizationId])->firstOrFail();

        $trangThai = BangDiem::where([
            'maDanhMuc' => request('maDanhMuc', -1),
            'maDonViDanhGia' => auth('api')->user()->organizationId
        ])->where('trangThai', '>=', 4)->first();

        if (!$trangThai) {
            return response()->json(['success' => false, 'message' => 'Đơn vị chưa gửi đánh giá'], 404);
        }

        $cauHoi = CauHoi::with(['bangdiem' => function ($q) {
            $q->where('maDonViDanhGia', auth('api')->user()->organizationId);
        }])->whereHas('danhmuc', function ($q) {
            $q->where([
                'id' => request('maDanhMuc', -1)
            ]);
        })
            ->with('donvithamdinh')
            ->with(['ykien' => function ($q) {
                $q->where('maDonVi', auth('api')->user()->organizationId);
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
        collect($request->all())->each(function ($item) {
            BangDiem::updateOrCreate([
                'maDonViDanhGia' => auth('api')->user()->organizationId,
                'maCauHoi' => $item['maCauHoi'],
                'parentId' => $item['parentId'],
                'maDanhMuc' => $item['maDanhMuc']
            ], [
                'diem' => $item['diem'],
                'noiDungTraLoi' => $item['noiDungTraLoi'],
                'maNguoiDanhGia' => auth('api')->id(),
                'fileDanhGia' => !empty($item['fileDanhGia']) ? $item['fileDanhGia'] : null,
                'ghiChuDanhGia' => $item['ghiChuDanhGia'],
                'maDonViThamDinh' => $item['maDonViThamDinh'],
                'maNguoiThamDinh' => $item['maNguoiThamDinh'],
                'noiDungThamDinh' => $item['noiDungThamDinh'],
                'ghiChuThamDinh' => $item['ghiChuThamDinh'],
                'trangThai' => 1
            ]);
        });
        return response()->json(['data' => $request->all(), 'message' => 'Bạn đã lưu điểm tự đánh giá thành công', 'success' => true]);
    }

    public function guiDiem()
    {
        $updated = BangDiem::where(['maDonViDanhGia' => auth('api')->user()->organizationId, 'maDanhMuc' => request('maDanhMuc', -1)])->update(['trangThai' => 2]);
        BienBan::updateOrCreate([
            'maDanhMuc' => request('maDanhMuc'),
            'maDonVi' => auth()->user()->organizationId
        ], [
            'fileName' => request('fileName'),
            'maNguoiGuiDiem' => auth()->id()
        ]);
        return response()->json(['data' => $updated, 'message' => 'Bạn đã gửi đánh giá thành công', 'success' => true]);
    }

   /* public function guiYKien()
    {
        if (count(request('bangYKien', [])) > 0) {
            foreach (request('bangYKien', []) as $key => $val) {
                BangYKien::create([
                    'maDanhMuc' => request('maDanhMuc'),
                    'maCauHoi' => $val['id'],
                    'noiDung' => $val['content'],
                    'maDonVi' => auth('api')->user()->organizationId,
                    'maNguoiYKien' => auth('api')->id()
                ]);
            }
        }
        BangDiem::where(['maDonViDanhGia' => auth('api')->user()->organizationId, 'maDanhMuc' => request('maDanhMuc', -1), 'trangThai' => 4])->update(['trangThai' => 5]);
        return response()->json(['data' => true, 'message' => 'Bạn đã gửi đánh giá thành công', 'success' => true]);
    } */
    public function guiYKien()
    {
        if (count(request('bangYKien', [])) > 0) {
            foreach (request('bangYKien', []) as $key => $val) {
                BangYKien::updateOrCreate([
                    'maDanhMuc' => request('maDanhMuc', -1),
                    'maCauHoi' => $val['id'],
                    'maDonVi' => auth('api')->user()->organizationId,
                ],
                    [
                        'maNguoiYKien' => auth('api')->id(),
                        'noiDung' => $val['content']
                    ]);
            }
        }

        if (count(request('capNhatFileDanhGia', [])) > 0) {
            foreach (request('capNhatFileDanhGia', []) as $key => $v) {
                BangDiem::where([
                    'id' => $v['id'],
                    'maDonViDanhGia' => auth('api')->user()->organizationId,
                ])->update([
                    'fileDanhGia' => $v['fileDanhGia'],
                ]);
            }
        }

        if (!request()->boolean('isSave')) {
            BangDiem::where(['maDonViDanhGia' => auth('api')->user()->organizationId, 'maDanhMuc' => request('maDanhMuc', -1), 'trangThai' => 4])->update(['trangThai' => 5]);
            $mess = 'Bạn đã gửi đánh giá thành công';
        } else {
            $mess = 'Bạn đã lưu thành công';
        }

        return response()->json(['data' => true, 'message' => $mess, 'success' => true]);
    }

    public function kiemTraHopLe(Request $request)
    {
        $conHan = ThoiGian::whereDate('batDau', '<=', now())->whereDate('ketThuc', '>=', now())->where('id', 1)->first();
        $coQuyen = DanhMuc::whereHas('donvi', function ($q) {
            $q->where('maDonVi', auth('api')->user()->organizationId);
        })->where(['id' => \request('maDanhMuc', -1), 'trangThai' => 1])->first(['id', 'tenDanhMuc']);
        $chuaGuiTuDanhGia = BangDiem::where(['maDanhMuc' => $request->get('maDanhMuc'), 'maDonViDanhGia' => auth()->user()->organizationId])->max('trangThai');
        return response()->json(['data' => ($conHan && $coQuyen && ($chuaGuiTuDanhGia == 1 || empty($chuaGuiTuDanhGia)))]);
    }

    public function kiemTraYKienHopLe(Request $request)
    {
        $coQuyen = DanhMuc::whereHas('donvi', function ($q) {
            $q->where('maDonVi', auth('api')->user()->organizationId);
        })->where(['id' => \request('maDanhMuc', -1), 'trangThai' => 1])->first(['id', 'tenDanhMuc']);
        $max = BangDiem::where(['maDanhMuc' => $request->get('maDanhMuc'), 'maDonViDanhGia' => auth()->user()->organizationId])->max('trangThai');
        return response()->json(['data' => ($coQuyen && $max === 4)]);
    }

}
