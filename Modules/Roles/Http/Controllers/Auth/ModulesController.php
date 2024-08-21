<?php

namespace Modules\Roles\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Roles\Entities\Module;

class ModulesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        $users = Module::with('permissions:id,name,display_name,module_id')->orderBy('name')->get();
        return response()->json(['data' => $users, 'success' => true]);
    }

}
