<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class DiemTongHop extends Model
{
    use LogsActivity;
    protected $table = 'khaosat_diemtonghop';
    protected $fillable = ['diem', 'namApDung', 'maDanhMuc', 'maDonVi', 'maNguoiTongHop'];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
