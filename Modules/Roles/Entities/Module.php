<?php

namespace Modules\Roles\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    protected $hidden = ['pivot'];

    protected $fillable = ['name'];

    public function permissions(): HasMany
    {
        return $this->hasMany(Permission::class, 'module_id', 'id');
    }

}
