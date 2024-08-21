<?php

namespace Modules\Roles\Entities;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\Sidebars\Entities\Sidebar;
use Spatie\Permission\Models\Permission as Model;

class Permission extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'display_name', 'guard_name'];

    public function sidebars(): BelongsToMany
    {
        return $this->belongsToMany(Sidebar::class,'sidebar_has_permissions','permissionId','sidebarId');
    }
}
