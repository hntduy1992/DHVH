<?php

namespace Modules\DonViHanhChinh\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;


class DonViHanhChinhController extends Controller
{
    public function danhSachPhanTrang()
    {
        $donVi = DonViHanhChinh::with('parent:id,tenDonVi')->when(!empty(request('content')), function ($query) {
            $content = request('content');
            $query->where('tenDonVi', 'like', "%${content}%")
                ->orWhere('email', 'like', "%${content}%")
                ->orWhere('dienThoai', 'like', "%${content}%");
        })
            ->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));
        return response()->json(['data' => $donVi->items(), 'totalRow' => $donVi->total(), 'success' => true]);
    }

    public function danhSachSelect(Request $request)
    {
        $phanLoai = intval($request->get('phanLoai'));
        if ($phanLoai > 0) {
            $donVi = DonViHanhChinh::query()
                ->where('phanLoai', '=', $phanLoai)
                ->where('trangThai', '=', 1)
                ->orderBy('tenDonVi')
                ->get(['id', 'tenDonVi']);
        } else
            $donVi = DonViHanhChinh::where('trangThai', 1)->orderBy('tenDonVi')->get(['id', 'tenDonVi']);
        return response()->json(['data' => $donVi, 'phanLoai' => $phanLoai, 'success' => true]);
    }

    public function themMoi(Request $request)
    {
        $donVi = DonViHanhChinh::create($request->all());
        return response()->json(['data' => $donVi, 'message' => 'Bạn đã thêm danh mục thành công', 'success' => true]);
    }

    public function layChiTiet($id)
    {
        $donVi = DonViHanhChinh::findOrFail($id);
        return response()->json(['data' => $donVi, 'success' => true]);
    }

    public function capNhat(Request $request, $id)
    {
        $donVi = DonViHanhChinh::findOrFail($id);
        $donVi->update($request->all());
        return response()->json(['data' => $donVi, 'message' => 'Bạn đã thêm danh mục thành công', 'success' => true]);
    }

    public function xoaDanhMuc()
    {
        $count = DonViHanhChinh::whereIn('id', request('ids', []))->delete();
        return response()->json(['message' => "Bạn đã xóa thành công ${count} dòng!", 'success' => true]);
    }
}
