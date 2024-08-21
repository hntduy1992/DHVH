<?php

namespace Modules\Sidebars\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\Roles\Entities\Permission;

class Sidebar extends Model
{

    protected $fillable = ['parent_id','name','icon','url','order','status'];
    protected $hidden = ['created_at','updated_at'];

    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class,'sidebar_has_permissions','sidebarId','permissionId');
    }
}
