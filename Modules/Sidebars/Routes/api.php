<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Sidebars\Http\Controllers\Auth\SidebarsController;

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


Route::prefix('auth/sidebars')->middleware('auth:api')->group(function () {
    Route::get('/tree', [SidebarsController::class, 'treeView']);
    Route::post('/edit/{id?}', [SidebarsController::class, 'update']);
    Route::get('/all', [SidebarsController::class, 'getAll']);
});
