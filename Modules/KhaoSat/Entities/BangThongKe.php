<?php

namespace Modules\KhaoSat\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class BangThongKe extends Model
{
    public $timestamps = false;
    protected $hidden = ['id'];
    protected $table = 'bang_thong_ke';
    protected $fillable = ['nam','xp_tong_so','xp_dat_chuan','xp_ti_le','ka_tong_so','ka_dat_chuan','ka_ti_le'];
}
