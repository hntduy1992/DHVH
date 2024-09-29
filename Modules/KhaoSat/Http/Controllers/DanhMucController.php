<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\KhaoSat\Entities\DanhMuc;
use Modules\KhaoSat\Entities\DanhMucDonVi;

class DanhMucController extends Controller
{
    public function namApDung(){
        $namApDung =DanhMuc::query()->orderBy('namApDung','desc')->pluck('namApDung');
        return response()->json(['data'=>array_unique($namApDung->toArray())]);
    }
    public function danhSachPhanTrang()
    {
        $danhMuc = DanhMuc::when(!empty(request('content')), function ($query) {
            $content = request('content');
            $query->where('tenDanhMuc', 'like', "%${content}%")
                ->orWhere('noiDung', 'like', "%${content}%")
                ->orWhere('namApDung', 'like', "%${content}%");
        })
            ->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));
        return response()->json(['data' => $danhMuc->items(), 'totalRow' => $danhMuc->total(), 'success' => true]);
    }

    public function danhSachSelect()
    {
        $danhMuc = DanhMuc::where('trangThai', 1)
            ->when(!empty(request('year')), function ($q) {
                $q->where('namApDung', request('year'));
            })
            ->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')->get(['id', 'tenDanhMuc']);
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function themMoi(Request $request)
    {
        $danhMuc = DanhMuc::create($request->all());
        collect($request->get('donViApDung', []))->each(function ($item) use ($danhMuc) {
            DanhMucDonVi::create([
                'maDonVi' => $item,
                'maDanhMuc' => $danhMuc->id
            ]);
        });
        return response()->json(['data' => $danhMuc, 'message' => 'Bạn đã thêm danh mục thành công', 'success' => true]);
    }

    public function layChiTiet($id)
    {
        $danhMuc = DanhMuc::with('donvi')->findOrFail($id);
        return response()->json(['data' => $danhMuc, 'success' => true]);
    }

    public function capNhat(Request $request, $id)
    {
        $danhMuc = DanhMuc::with('donvi')->findOrFail($id);
        $danhMuc->update($request->all());
        DanhMucDonVi::where('maDanhMuc', $id)->delete();
        collect($request->get('donViApDung', []))->each(function ($item) use ($danhMuc) {
            DanhMucDonVi::create([
                'maDonVi' => $item,
                'maDanhMuc' => $danhMuc->id
            ]);
        });
        return response()->json(['data' => $danhMuc, 'message' => 'Bạn đã thêm danh mục thành công', 'success' => true]);
    }

    public function xoaDanhMuc()
    {
        $count = DanhMuc::whereIn('id', request('ids', []))->delete();
        DanhMucDonVi::whereIn('maDanhMuc', request('ids', []))->delete();
        return response()->json(['message' => "Bạn đã xóa thành công ${count} dòng!", 'success' => true]);
    }
}
