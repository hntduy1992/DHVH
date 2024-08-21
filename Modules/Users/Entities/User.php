<?php

namespace Modules\Users\Entities;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\DonViHanhChinh\Entities\DonViHanhChinh;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use HasRoles, Notifiable;
    protected $guarded = 'api';
    public const CREATED_AT = 'createdAt';
    public const UPDATED_AT = 'updatedAt';
    protected $hidden = ['password'];
    protected $fillable = ['userName', 'password', 'fullName', 'image', 'email', 'phone', 'provinceId', 'districtId', 'wardId', 'organizationId', 'status'];

    public function setPasswordAttribute($val)
    {
        if (!empty($val)) {
            $this->attributes['password'] = md5($val);
        }
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(DonViHanhChinh::class,'organizationId', 'id');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier(): mixed
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims(): array
    {
        return [];
    }

}
