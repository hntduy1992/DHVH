<?php

use Illuminate\Support\Facades\Route;
use Modules\DonViHanhChinh\Http\Controllers\DonViHanhChinhController;

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


Route::prefix('auth/don-vi')->middleware('auth:api')->group(function () {
    Route::get('/', [DonViHanhChinhController::class, 'danhSachPhanTrang'])->middleware('role_or_permission:admin|organization-list');
    Route::get('/select', [DonViHanhChinhController::class, 'danhSachSelect'])->middleware('role_or_permission:admin|organization-list');
    Route::post('/them-moi', [DonViHanhChinhController::class, 'themMoi'])->middleware('role_or_permission:admin|organization-create');
    Route::get('/id/{id}', [DonViHanhChinhController::class, 'layChiTiet'])->middleware('role_or_permission:admin|organization-create|organization-edit');
    Route::get('/id/{id}', [DonViHanhChinhController::class, 'layChiTiet'])->middleware('role_or_permission:admin|thamdinh|xacnhan');
    Route::post('/id/{id}', [DonViHanhChinhController::class, 'capNhat'])->middleware('role_or_permission:admin|organization-create|organization-edit');
    Route::post('/xoa-don-vi', [DonViHanhChinhController::class, 'xoaDanhMuc'])->middleware('role_or_permission:admin|organization-delete');
});
