<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class DanhMucDonVi extends Model
{
    use LogsActivity;
    public $timestamps = false;
    protected $hidden = ['id'];
    protected $table = 'khaosat_danhmuc_donvi';
    protected $fillable = ['maDonVi', 'maDanhMuc'];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }

}
