<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Roles\Http\Controllers\Auth\ModulesController;
use Modules\Roles\Http\Controllers\Auth\RolesController;

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

Route::prefix('auth/roles')->middleware('auth:api')->group(function () {
    Route::get('/', [RolesController::class, 'pagination'])->middleware('role_or_permission:admin|role-list');
    Route::get('/all', [RolesController::class, 'all'])->middleware('role_or_permission:admin|role-list');
    Route::post('/create', [RolesController::class, 'store'])->middleware('role_or_permission:admin|role-create');
    Route::get('/edit/{id}', [RolesController::class, 'edit'])->middleware('role_or_permission:admin|role-edit');
    Route::post('/edit/{id}', [RolesController::class, 'update'])->middleware('role_or_permission:admin|role-edit');
    Route::post('/delete', [RolesController::class, 'destroy'])->middleware('role_or_permission:admin|role-delete');
    Route::get('/modules', [ModulesController::class, 'all'])->middleware('role_or_permission:admin|role-list|role-edit|role-create');
});
