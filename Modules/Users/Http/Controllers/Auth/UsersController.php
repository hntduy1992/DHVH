<?php

namespace Modules\Users\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Users\Entities\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        $users = User::orderBy('fullNane')->get(['id', 'userName', 'fullNane']);
        return response()->json(['data' => $users, 'success' => true]);
    }

    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function pagination(): JsonResponse
    {
        $users = User::with('organization:id,tenDonVi')
            ->when(!empty(request('content')), function ($query) {
            $content = request('content');
            $query->where('username', 'like', "%${content}%")
                ->orWhere('fullName', 'like', "%${content}%")
                ->orWhere('email', 'like', "%${content}%")
                ->orWhere('phone', 'like', "%${content}%");
        })
            ->with('roles:id,name')
            ->orderBy(request('sortBy', 'id'),request('sortDesc') ? 'desc' : 'asc')
            ->paginate(request('limit'));
        return response()->json(['data' => $users->items(), 'totalRow' => $users->total(), 'success' => true]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $user = User::create($request->all());
        $user->syncRoles($request->get('roles'));
        return response()->json(['data' => $user, 'message' => 'Bạn đã thêm thành công!', 'success' => true]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param  $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        $user = User::with(['roles:id,name'])->findOrFail($id);
        return response()->json(['data' => $user, 'success' => true]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        $user->syncRoles($request->get('roles'));
        return response()->json(['data' => $user, 'message' => 'Bạn đã cập nhật thành công!', 'success' => true]);
    }
    /**
     * Show the form for editing the specified resource.
     * @param  $id
     * @return JsonResponse
     */
    public function getProfile(): JsonResponse
    {
        $user = User::with(['roles:id,name'])->findOrFail(auth('api')->id());
        return response()->json(['data' => $user, 'success' => true]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function saveProfile(Request $request): JsonResponse
    {
        $user = User::findOrFail(auth('api')->id());
        $user->update([
            'email' => $request->get('email'),
            'fullName' => $request->get('fullName'),
            'phone' => $request->get('phone'),
            'image' => $request->get('image'),
            'password' => $request->get('password')
        ]);
        return response()->json(['data' => $user, 'message' => 'Bạn đã cập nhật thành công!', 'success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     * @return JsonResponse
     */
    public function destroy(): JsonResponse
    {
        $count = User::whereIn('id', request('ids'))->delete();
        return response()->json(['message' => "Bạn đã xóa thành công ${count} dòng!", 'success' => true]);
    }
}
