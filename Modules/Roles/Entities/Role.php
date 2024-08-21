<?php

namespace Modules\Roles\Entities;

use Spatie\Permission\Models\Role as Model;

class Role extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = ['name', 'guard_name'];
}
