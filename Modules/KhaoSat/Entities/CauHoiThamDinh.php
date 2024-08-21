<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class CauHoiThamDinh extends Model
{
    use LogsActivity;
    protected $hidden = ['id', 'created_at', 'updated_at'];
    protected $table = 'khaosat_cauhoi_thamdinh';
    protected $fillable = ['maDonVi', 'maCauHoi', 'maDanhMuc'];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
