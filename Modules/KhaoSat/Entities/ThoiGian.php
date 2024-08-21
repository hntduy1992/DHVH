<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class ThoiGian extends Model
{
    use LogsActivity;
    protected $table = 'khaosat_thoigian';
    protected $fillable = ['tenThoiGian','batDau','ketThuc'];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
