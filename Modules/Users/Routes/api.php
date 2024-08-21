<?php

use Illuminate\Support\Facades\Route;
use Modules\Users\Http\Controllers\Auth\UsersController;

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

Route::prefix('auth/users')->middleware('auth:api')->group(function () {
    Route::get('/', [UsersController::class, 'pagination'])->middleware('role_or_permission:admin|user-list');
    Route::get('/all', [UsersController::class, 'all'])->middleware('role_or_permission:admin|user-list');
    Route::post('/create', [UsersController::class, 'store'])->middleware('role_or_permission:admin|user-create');
    Route::get('/edit/{id}', [UsersController::class, 'edit'])->middleware('role_or_permission:admin|user-edit');
    Route::post('/edit/{id}', [UsersController::class, 'update'])->middleware('role_or_permission:admin|user-edit');
    Route::post('/delete', [UsersController::class, 'destroy'])->middleware('role_or_permission:admin|user-delete');
    Route::get('/profile', [UsersController::class, 'getProfile']);
    Route::post('/profile', [UsersController::class, 'saveProfile']);
});
