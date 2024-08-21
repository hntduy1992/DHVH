<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class CauHoi extends Model
{
    use LogsActivity;
    protected $table = 'khaosat_cauhoi';
    protected $fillable = ['parentId', 'maDanhMuc', 'stt', 'tenCauHoi', 'diemNhoNhat', 'buocNhay', 'diemLonNhat', 'loaiCauHoi', 'loaiDieuKien', 'danhDauCau', 'kieuNhapLieu', 'sapXep', 'trangThai'];
    protected $hidden = ['created_at', 'updated_at'];

    public function parent()
    {
        return $this->belongsTo(CauHoi::class, 'parentId', 'id');
    }

    public function children()
    {
        return $this->hasMany(CauHoi::class, 'parentId', 'id');
    }

    public function bangdiem()
    {
        return $this->hasOne(BangDiem::class, 'maCauHoi', 'id');
    }

    public function danhmuc()
    {
        return $this->belongsTo(DanhMuc::class, 'maDanhMuc', 'id');
    }

    public function donvithamdinh()
    {
        return $this->hasOne(CauHoiThamDinh::class, 'maCauHoi', 'id');
    }

    public function ykien()
    {
        return $this->hasOne(BangYKien::class, 'maCauHoi', 'id');
    }
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }

}
