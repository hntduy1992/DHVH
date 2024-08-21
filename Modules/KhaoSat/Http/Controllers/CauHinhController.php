<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\KhaoSat\Entities\ThoiGian;

class CauHinhController extends Controller
{
    public function layThoiGian(): JsonResponse
    {
        $questions = ThoiGian::all();
        return response()->json(['data' => $questions, 'success' => true]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function capNhatThoiGian(Request $request)
    {
        $question = [];
        if ($request->all()) {
            foreach ($request->all() as $item) {

                $question[] = ThoiGian::where('id', $item['id'])->update($item);
            }
        }

        return response()->json(['data' =>$request->all(), 'message' => 'Bạn đã cập nhật thành công!', 'success' => true]);
    }
}
