<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class BienBan extends Model
{
    use LogsActivity;
    protected $table = 'khaosat_bienban';
    protected $fillable = ['maDanhMuc', 'maDonVi', 'fileName', 'maNguoiGuiDiem'];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
