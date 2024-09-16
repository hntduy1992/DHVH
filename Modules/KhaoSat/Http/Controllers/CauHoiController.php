<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Modules\KhaoSat\Entities\CauHoi;
use Modules\KhaoSat\Entities\CauHoiThamDinh;
use PhpOffice\PhpSpreadsheet\IOFactory;

class CauHoiController extends Controller
{
   //Lưu lại khi nào xong mở ra
  /*
    public function danhSachPhanTrang()
    {
        $cauHoi = CauHoi::with(['danhmuc:id,tenDanhMuc','parent:id,tenCauHoi'])->when(!empty(request('content')), function ($query) {
            $content = request('content');
            $query->where('tenCauHoi', 'like', "%${content}%");
        })
            ->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));
        return response()->json(['data' => $cauHoi->items(), 'totalRow' => $cauHoi->total(), 'success' => true]);
    } */

    public function danhSachPhanTrang()
    {
        $cauHoi = CauHoi::with(['danhmuc:id,tenDanhMuc','parent:id,tenCauHoi'])->where('maDanhMuc','=',request('maDanhMuc'))->when(!empty(request('content')), function ($query) {
            $content = request('content');
            //$query->where('tenCauHoi', 'like', "%${content}%");
             $query->whereHas('danhmuc', function ($q) use ($content) {
                    $q->where('tenDanhMuc', 'like', "%${content}%");
                });
        })
           // ->where('maDanhMuc', 4) // Lệnh Tạm dùng để sửa câu hỏi
            //->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));

        $questions = collect();
        foreach ($cauHoi->where('parentId', 0) as $item) {
            $item->level = 0;
            $questions->push($item);
            $this->children($questions, $cauHoi, $item);
        }


        return response()->json(['data' => $cauHoi->items(), 'totalRow' => $cauHoi->total(), 'success' => true]);
    }

    public function danhSachSelect()
    {
        $cauHoi = CauHoi::where('trangThai', 1)->orderBy(request('sortBy', 'created_at'), request('sortDesc') ? 'desc' : 'asc')->get(['id', 'tenCauHoi']);
        return response()->json(['data' => $cauHoi, 'success' => true]);
    }

    public function thuMuc()
    {
        $questions = collect();
        $cauHoi = CauHoi::withCount('children')->with('bangdiem')->where('trangThai', 1)
            ->when(!empty(request('categoryId')), function ($q) {
                $q->where('maDanhMuc', request('categoryId'));
            })
            ->orderBy('sapXep')
            ->orderBy('id')
            ->get();
        foreach ($cauHoi->where('parentId', 0) as $item) {
            $item->level = 0;
            $item->makeHidden(['created_at', 'updated_at']);
            $questions->push($item);
            $this->children($questions, $cauHoi, $item);
        }
        return response()->json(['data' => $questions, 'success' => true]);
    }

    public function getCauHoiTheoDanhMucVaThamDinh()
    {
        $questions = collect();
        $cauHoi = CauHoi::with('donvithamdinh')
            ->where('trangThai', 1)
            ->where('maDanhMuc', request('categoryId'))
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

    public function phanCongDonViThamDinh($id)
    {
        CauHoiThamDinh::where('maDanhMuc', $id)->delete();
        foreach (request()->all() as $val) {
            CauHoiThamDinh::create($val);
        }
        return response()->json(['data' => request()->all(), 'message' => 'Bạn đã phân công thẩm định thành công', 'success' => true]);
    }

    public function themMoi(Request $request)
    {
        $cauHoi = CauHoi::create($request->all());
        return response()->json(['data' => $cauHoi, 'message' => 'Bạn đã thêm câu hỏi thành công', 'success' => true]);
    }

    public function layChiTiet($id)
    {
        $cauHoi = CauHoi::findOrFail($id);
        return response()->json(['data' => $cauHoi, 'success' => true]);
    }

    public function capNhat(Request $request, $id)
    {
        $cauHoi = CauHoi::findOrFail($id);
        $cauHoi->update($request->all());
        return response()->json(['data' => $cauHoi, 'message' => 'Bạn đã thêm danh mục thành công', 'success' => true]);
    }

    public function xoaDanhMuc()
    {
        $count = CauHoi::whereIn('id', request('ids', []))->delete();
        return response()->json(['message' => "Bạn đã xóa thành công ${count} dòng!", 'success' => true]);
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

    public function importFileExcel()
    {
        /*$inputFileName = Storage::disk('public')->path('BoTieuChi.xlsx');
        $spreadsheet = IOFactory::load($inputFileName);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
        $excel = [];
        echo '<pre>';
        if ($sheetData) {
            $temp1 = 0;
            foreach ($sheetData as $key => $val) {
                if ($key > 1) {
                    $parentId = 0;
                    $ex = explode('.', $val['A']);
                    if (count($ex) != 1) {
                        if (is_null($val['A'])) {
                            $parentId = $temp1;
                        }
                    }
                    $cauHoi = CauHoi::create( [
                        'parentId' => $parentId,
                        'maDanhMuc' => 1,
                        'stt' => $val['A'],
                        'tenCauHoi' => $val['B'],
                        'diemNhoNhat' => $val['C'],
                        'buocNhay' => $val['E'],
                        'diemLonNhat' => $val['D'],
                        'loaiCauHoi' => 1,
                        'loaiDieuKien' => 'AND',
                        'laCauTraTraLoi' => is_null($val['A']) ? 1 : 0,
                        'kieuNhapLieu' => null
                    ]);
                    if (!is_null($val['A'])) {
                       $temp1 = $cauHoi->id;
                    }
                    $excel[] =  $cauHoi->toArray();
                }
            }
        }
        print_r($excel);*/
    }
}
