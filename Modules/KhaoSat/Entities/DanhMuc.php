<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class DanhMuc extends Model
{
    use LogsActivity;
    protected $hidden = ['created_at','updated_at'];
    protected $table = 'khaosat_danhmuc';
    protected $fillable = ['tenDanhMuc', 'namApDung', 'noiDung', 'trangThai', 'phanLoai','diemChuan'];

    public function donvi()
    {
        return $this->hasMany(DanhMucDonVi::class, 'maDanhMuc', 'id');
    }

    public function thamdinh()
    {
        return $this->hasMany(CauHoiThamDinh::class, 'maDanhMuc', 'id');
    }
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
