<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    /**
     * @var string
     */
    protected $table = 'brands';

    /**
     * @var array
     */
    protected $fillable = ['name', 'slug', 'logo', 'name2'];

    /**
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

     public function getLocalNameAttribute()
     {
          $local= session()->get('local');
          if($local == "ar"){
               return "{$this->name2}";
          }else{
               return "{$this->name}";
          }
         
     }
    public function products()
    {
        return $this->hasMany(Product::class)
        ->where(function ($query) {
            $query->whereHas('seller', function ($subquery) {
                $subquery->where('active', '=', 1);
            })
            ->orWhereDoesntHave('seller');
        })
        ->where('status', '=', 1)
     ;
    }

    protected $appends = ['LocalName'];
}
