<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\KhaoSat\Http\Controllers\CauHinhController;
use Modules\KhaoSat\Http\Controllers\CauHoiController;
use Modules\KhaoSat\Http\Controllers\DanhMucController;
use Modules\KhaoSat\Http\Controllers\ThamDinhController;
use Modules\KhaoSat\Http\Controllers\ThongKeController;
use Modules\KhaoSat\Http\Controllers\TuDanhGiaController;
use Modules\KhaoSat\Http\Controllers\XacNhanController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth/khao-sat')->middleware('auth:api')->group(function () {
    Route::prefix('/danh-muc')->group(function () {
        Route::get('/', [DanhMucController::class, 'danhSachPhanTrang'])->middleware('role_or_permission:admin|botieuchi');
        Route::get('/select-nam-ap-dung', [DanhMucController::class, 'namApDung'])->middleware('role_or_permission:admin|botieuchi|tudanhgia|thamdinh|xacnhandiem');
        Route::get('/select', [DanhMucController::class, 'danhSachSelect'])->middleware('role_or_permission:admin|botieuchi');
        Route::post('/them-moi', [DanhMucController::class, 'themMoi'])->middleware('role_or_permission:admin|botieuchi');
        Route::get('/id/{id}', [DanhMucController::class, 'layChiTiet'])->middleware('role_or_permission:admin|botieuchi');
        Route::post('/id/{id}', [DanhMucController::class, 'capNhat'])->middleware('role_or_permission:admin|botieuchi');
        Route::post('/xoa-danh-muc', [DanhMucController::class, 'xoaDanhMuc'])->middleware('role_or_permission:admin|botieuchi');
    });
    Route::prefix('/cau-hoi')->group(function () {
        Route::get('/', [CauHoiController::class, 'danhSachPhanTrang'])->middleware('role_or_permission:admin|tieuchi');
        Route::get('/select', [CauHoiController::class, 'danhSachSelect'])->middleware('role_or_permission:admin|tieuchi');
        Route::get('/don-vi-tham-dinh', [CauHoiController::class, 'getCauHoiTheoDanhMucVaThamDinh'])->middleware('role_or_permission:admin|tieuchi');
        Route::post('/don-vi-tham-dinh/{id?}', [CauHoiController::class, 'phanCongDonViThamDinh'])->middleware('role_or_permission:admin|tieuchi');
        Route::get('/tree', [CauHoiController::class, 'thuMuc'])->middleware('role_or_permission:admin|tieuchi');
        Route::post('/them-moi', [CauHoiController::class, 'themMoi'])->middleware('role_or_permission:admin|tieuchi');
        Route::get('/id/{id}', [CauHoiController::class, 'layChiTiet'])->middleware('role_or_permission:admin|tieuchi');
        Route::post('/id/{id}', [CauHoiController::class, 'capNhat'])->middleware('role_or_permission:admin|tieuchi');
        Route::post('/xoa-cau-hoi', [CauHoiController::class, 'xoaDanhMuc'])->middleware('role_or_permission:admin|tieuchi');
        Route::get('/import', [CauHoiController::class, 'importFileExcel'])->middleware('role_or_permission:admin|tieuchi');
    });
    Route::prefix('/tu-danh-gia')->group(function () {
        Route::get('/danh-muc', [TuDanhGiaController::class, 'danhMuc'])->middleware('role_or_permission:admin|tudanhgia');
        Route::get('/cau-hoi', [TuDanhGiaController::class, 'cauHoi'])->middleware('role_or_permission:admin|tudanhgia');
        Route::get('/cau-hoi-y-kien', [TuDanhGiaController::class, 'cauHoiYKien'])->middleware('role_or_permission:admin|tudanhgia');
        Route::post('/luu-diem', [TuDanhGiaController::class, 'luuDiem'])->middleware('role_or_permission:admin|tudanhgia');
        Route::post('/gui-diem', [TuDanhGiaController::class, 'guiDiem'])->middleware('role_or_permission:admin|tudanhgia');
        Route::post('/gui-y-kien', [TuDanhGiaController::class, 'guiYKien'])->middleware('role_or_permission:admin|tudanhgia');
        Route::post('/kiem-tra-hop-le', [TuDanhGiaController::class, 'kiemTraHopLe'])->middleware('role_or_permission:admin|tudanhgia');
        Route::post('/kiem-tra-y-kien-hop-le', [TuDanhGiaController::class, 'kiemTraYKienHopLe'])->middleware('role_or_permission:admin|tudanhgia');
    });
    Route::prefix('/tham-dinh')->group(function () {
        Route::get('/danh-muc', [ThamDinhController::class, 'danhMuc'])->middleware('role_or_permission:admin|thamdinh');
        Route::get('/don-vi', [ThamDinhController::class, 'donVi'])->middleware('role_or_permission:admin|thamdinh');
        Route::get('/cau-hoi', [ThamDinhController::class, 'cauHoi'])->middleware('role_or_permission:admin|thamdinh');
        Route::post('/luu-diem', [ThamDinhController::class, 'luuDiem'])->middleware('role_or_permission:admin|thamdinh');
        Route::post('/gui-diem', [ThamDinhController::class, 'guiDiem'])->middleware('role_or_permission:admin|thamdinh');
        Route::post('/kiem-tra-hop-le', [ThamDinhController::class, 'kiemTraHopLe'])->middleware('role_or_permission:admin|thamdinh');
    });
    Route::prefix('/xac-nhan')->group(function () {
        Route::get('/danh-muc', [XacNhanController::class, 'danhMuc'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::get('/don-vi', [XacNhanController::class, 'donVi'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::get('/don-vi-tham-dinh', [XacNhanController::class, 'donViXacNhan'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::get('/cau-hoi', [XacNhanController::class, 'cauHoi'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::post('/gui-diem', [XacNhanController::class, 'luuDiem'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::post('/kiem-tra-hop-le', [XacNhanController::class, 'kiemTraHopLe'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::post('/gui-diem-tong-hop', [XacNhanController::class, 'guiDiemTongHop'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::post('/kiem-tra-tong-hop', [XacNhanController::class, 'kiemTraTongHop'])->middleware('role_or_permission:admin|xacnhandiem');
        Route::post('/tra-diem-tham-dinh', [XacNhanController::class, 'traDiemTongHop'])->middleware('role_or_permission:admin|xacnhandiem');
    });
    Route::prefix('/cau-hinh')->group(function () {
        Route::get('/thoi-gian', [CauHinhController::class, 'layThoiGian'])->middleware('role_or_permission:admin|thoigian');
        Route::post('/thoi-gian', [CauHinhController::class, 'capNhatThoiGian'])->middleware('role_or_permission:admin|thoigian');
    });

    Route::prefix('/thong-ke')->group(function () {
        Route::get('/bang-xep-hang', [ThongKeController::class, 'bangXepHang']);
        Route::get('/bang-xep-hang-don-vi', [ThongKeController::class, 'bangXepHangDonVi']);
        Route::get('/danh-hieu-van-hoa', [ThongKeController::class, 'danhHieuVanHoa']);

    });
});

