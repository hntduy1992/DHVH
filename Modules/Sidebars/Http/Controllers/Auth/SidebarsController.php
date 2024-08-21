<?php

namespace Modules\Sidebars\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Modules\Sidebars\Entities\Sidebar;
use function view;

class SidebarsController extends Controller
{
    private $permissions;


    public function getAll() {
        $sidebars = Sidebar::where(['status' => 1])->select(['id','name'])->get();
        return response()->json(['data' => $sidebars, 'success' => true]);
    }
    /**
     * Display a listing of the resource.
     * @return JsonResponse
     */
    public function treeView()
    {
        $this->permissions = auth('api')->user()->getAllPermissions()->pluck('id');
        $sidebars = collect();
        //$results = Sidebar::whereRelation('permissions','permissionId','in', )->where(['status' => 1])->orderBy('order')->get();
        $results = Sidebar::with('permissions')->where(['status' => 1])->orderBy('order')->get();
        if ($results->count() > 0) {
            // echo '<pre>';
            foreach ($results->where('parentId', 0) as $item) {
                if ($item->permissions->count() == 0 || $item->permissions->count() > 0 && count(array_intersect($item->permissions->pluck('id')->toArray(), $this->permissions->toArray())) > 0) {
                    $sidebars->push($item);
                    $this->loadChild($results, $item);
                }
            }
        }
        // return view('welcome');
        return response()->json(['data' => $sidebars, 'success' => true]);
    }

    public function loadChild($items, $target)
    {
        $results = $items->where('parentId', $target->id);
        $target->children = collect();
        if ($results->count() > 0) {
            foreach ($results as $item) {
                if ($item->permissions->count() == 0 || $item->permissions->count() > 0 && count(array_intersect($item->permissions->pluck('id')->toArray(), $this->permissions->toArray())) > 0) {
                    $target->children->push($item);
                    $this->loadChild($items, $item);
                }
            }
        }
    }

    public function update($id) {
        DB::table('sidebar_has_permissions')->where(['sidebarId' => $id])->delete();
        foreach (request('permissions') as $val) {
            DB::table('sidebar_has_permissions')->insert([
                'permissionId' => $val,
                'sidebarId' => $id
            ]);
        }
    }

}
