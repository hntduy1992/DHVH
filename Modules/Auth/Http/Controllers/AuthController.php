<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Modules\Users\Entities\User;

class AuthController extends Controller
{
    private $data;
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'userName' => 'required',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $user = User::where(['userName' => $request->get('userName'), 'password' => md5($request->get('password'))])->first();

        if (!$user) {
            return response()->json(['message' => 'Thông tin tài khoản không đúng', 'success' => false]);
        }

        $this->data = [
            'id' => $user->id,
            'fullName' => $user->fullName,
            'userName' => $user->userName,
            'organizationId' => $user->organizationId,
            'permission' => $user->getAllPermissions()->pluck('name'),
            'roles' => $user->roles->pluck('name')
        ];

        $token = auth('api')->login($user);
        return response()->json(['data' => $this->createNewToken($token), 'message' => 'Bạn đã đăng nhập thành công!', 'success' => true]);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): JsonResponse
    {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function userProfile(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return array
     */
    protected function createNewToken(string $token): array
    {
        return [
            'accessToken' => $token,
            'tokenType' => 'bearer',
            'expired' => auth()->factory()->getTTL() * 60,
            'user' => $this->data,
        ];
    }

}
