<?php

namespace Modules\KhaoSat\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Modules\KhaoSat\Entities\DiemTongHop;

class ThongKeController extends Controller
{
   public function bangXepHang() {
       $results = DonViHanhChinh::with(['diemtong' => function($q) {
           $q->where('namApDung', request('namApDung'));
       }])->get();
       foreach ($results as $result) {
           $result->diemtonghop = $result->diemtong?->diem ?? 0;
           $result->makeHidden('diemtong');
       }
       return response()->json(['data' => $results->sortBy('diemtonghop')->pluck('diemtonghop', 'tenDonVi')]);
   }
   public function bangXepHangDonVi() {
       $results = DiemTongHop::where('maDonVi', auth('api')->user()->organizationId)->get();
       return response()->json(['data' => $results->sortBy('namApDung')->pluck('diem', 'namApDung')]);
   }
}
