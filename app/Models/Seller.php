<?php
namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Seller extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'last_name', 'phone' , 'company' , 'city' , 'address','approved_at' ,'district' , 
        'lat' , 'lng' , 'street' , 'mktba_name', 'building'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getFullNameAttribute()
    {
        return $this->first_name. ' '. $this->last_name;
    }

   
    public function orders()
    {
        return $this->hasMany(Order::class , 'id');
    }
    public function state()
    {
        return $this->belongsTo(State::class , 'city');
    }
}
