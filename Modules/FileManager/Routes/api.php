<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\FileManager\Http\Controllers\Auth\FileManagerController;

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
Route::prefix('auth/file-manager')->middleware('auth:api')->group(function () {
    Route::post('/singleUpload', [FileManagerController::class, 'singleUpload']);
    Route::post('/singleUploadTongHop', [FileManagerController::class, 'singleUploadTongHop']);
    Route::delete('/singleRemove', [FileManagerController::class, 'singleRemove']);
    Route::post('/export-to-word', [FileManagerController::class, 'exportToWord']);
    Route::post('/export-to-word/bien-ban', [FileManagerController::class, 'exportToWordBienBan']);
    Route::post('/export-to-word/xac-nhan', [FileManagerController::class, 'exportToWordXacNhan']);
    Route::post('/export-to-word/tong-hop', [FileManagerController::class, 'exportToWordTongHop']);
});


