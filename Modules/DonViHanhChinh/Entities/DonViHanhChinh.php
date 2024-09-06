<?php

namespace Modules\DonViHanhChinh\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\KhaoSat\Entities\BangDiem;
use Modules\KhaoSat\Entities\BienBan;
use Modules\KhaoSat\Entities\CauHoiThamDinh;
use Modules\KhaoSat\Entities\DanhMucDonVi;
use Modules\KhaoSat\Entities\DiemTongHop;

class DonViHanhChinh extends Model
{
    protected $table = 'donvihanhchinh';
    protected $fillable = ['parentId', 'tenDonVi', 'image', 'email', 'dienThoai', 'sapXep', 'trangThai','phanLoai'];

    public function parent()
    {
        return $this->belongsTo(DonViHanhChinh::class,'parentId','id');
    }

    public function danhgia()
    {
        return $this->hasMany(DanhMucDonVi::class,'maDonVi','id');
    }

    public function bangdiem()
    {
        return $this->hasMany(BangDiem::class,'maDonViDanhGia','id');
    }

    public function diemtong()
    {
        return $this->hasOne(DiemTongHop::class,'maDonVi','id');
    }

    public function bienban()
    {
        return $this->hasOne(BienBan::class,'maDonVi','id');
    }

    public function thamdinh() {
        return $this->hasMany(CauHoiThamDinh::class,'maDonVi','id');
    }
}
