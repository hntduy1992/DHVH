<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class BangDiem extends Model
{
    use LogsActivity;

    protected $table = 'khaosat_bangdiem';
    protected $casts = ['noiDungTraLoi' => 'array', 'noiDungThamDinh' => 'array'];
    protected $fillable = ['diem','diemThamDinh', 'maCauHoi', 'maDanhMuc', 'noiDungTraLoi', 'maDonViDanhGia', 'maNguoiDanhGia', 'fileDanhGia', 'ghiChuDanhGia', 'maDonViThamDinh', 'maNguoiThamDinh', 'noiDungThamDinh', 'ghiChuThamDinh', 'parentId', 'trangThai'];
    protected $hidden = ['created_at', 'updated_at'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }

}
