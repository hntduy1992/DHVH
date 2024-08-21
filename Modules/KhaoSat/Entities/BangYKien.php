<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class BangYKien extends Model
{
    use LogsActivity;
    protected $table = 'khaosat_ykien';
    protected $fillable = ['maDanhMuc', 'maCauHoi', 'noiDung', 'maDonVi', 'maNguoiYKien'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
