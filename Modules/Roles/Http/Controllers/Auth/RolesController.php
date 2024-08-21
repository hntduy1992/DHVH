<?php

namespace Modules\Roles\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Roles\Entities\Role;
use Modules\Roles\Http\Requests\RoleEdit;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        $roles = Role::orderBy('name')->get(['id', 'name']);
        return response()->json(['data' => $roles, 'success' => true]);
    }

    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function pagination(): JsonResponse
    {
        $roles = Role::with('permissions')->when(!empty(request('content')), function ($query) {
            $content = request('content');
            $query->where('username', 'like', "%${content}%")
                ->orWhere('fullName', 'like', "%${content}%")
                ->orWhere('email', 'like', "%${content}%")
                ->orWhere('phone', 'like', "%${content}%");
        })
            ->orderBy(request('sortBy', 'id'), request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));
        return response()->json(['data' => $roles->items(), 'totalRow' => $roles->total(), 'success' => true]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $role = Role::create($request->all());
        $role->syncPermissions(request('permissions'));
        return response()->json(['data' => $role, 'message' => 'Bạn đã thêm thành công!', 'success' => true]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param  $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        $role = Role::with('permissions:id,display_name as displayName')->findOrFail($id);
        return response()->json(['data' => $role, 'success' => true]);
    }

    /**
     * Update the specified resource in storage.
     * @param RoleEdit $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(RoleEdit $request, $id): JsonResponse
    {
        $role = Role::findOrFail($id);
        $role->update($request->all());
        $role->syncPermissions($request->get('permissions'));
        return response()->json(['data' => $role, 'message' => 'Bạn đã cập nhật thành công!', 'success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @return JsonResponse
     */
    public function destroy(): JsonResponse
    {
        $count = Role::whereIn('id', request('ids'))->delete();
        return response()->json(['message' => "Bạn đã xóa thành công ${count} dòng!", 'success' => true]);
    }
}
