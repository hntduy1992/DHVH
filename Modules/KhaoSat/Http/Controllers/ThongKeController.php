<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Modules\KhaoSat\Entities\BangThongKe;
use Modules\KhaoSat\Entities\DanhMuc;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use Modules\KhaoSat\Entities\DiemTongHop;

class ThongKeController extends Controller
{
    public function bangXepHang(Request $request)
    {
        $phanLoai = $request->input('phanLoai');
        $results = DonViHanhChinh::with(['diemtong' => function ($q) {
            $q->where('namApDung', request('namApDung'));
        }])->where('phanLoai', '=', $phanLoai)->get();
        foreach ($results as $result) {
            $result->diemtonghop = $result->diemtong?->diem ?? 0;
            $result->makeHidden('diemtong');
        }
        return response()->json(['data' => $results->sortBy('diemtonghop')->pluck('diemtonghop', 'tenDonVi')]);
    }

    public function bangXepHangDonVi()
    {
        $results = DiemTongHop::where('maDonVi', auth('api')->user()->organizationId)->get();
        return response()->json(['data' => $results->sortBy('namApDung')->pluck('diem', 'namApDung')]);
    }

    public function danhHieuVanHoa()
    {
        $result = BangThongKe::query()->orderByDesc('nam')->get();
        return response()->json(['data' => $result]);
    }

    public function thongKeBangXepHang(Request $request)
    {
        $namApDung = (int)$request->get('namApDung');
        $danhMucs = DanhMuc::query()->where('trangThai', '=', 1)->where('namApDung', '=', $namApDung)->get(['id', 'tenDanhMuc', 'diemChuan']);
        foreach ($danhMucs as $danhMuc) {
            $donVi = DanhMucDonVi::query()->where('khaosat_danhmuc_donvi.maDanhMuc', '=', $danhMuc->id)
                ->leftJoin('donvihanhchinh', 'khaosat_danhmuc_donvi.maDonVi', '=', 'donvihanhchinh.id')
                ->leftJoin('khaosat_diemtonghop', 'khaosat_danhmuc_donvi.maDonVi', '=', 'khaosat_diemtonghop.maDonVi')->select(['tenDonVi', 'diem']);
            $danhMuc->donVis = ['tenDonVi' => $donVi->pluck('tenDonVi'), 'diem' => $donVi->pluck('diem')];
        }
        return response()->json(['data' => $danhMucs]);
    }
}
