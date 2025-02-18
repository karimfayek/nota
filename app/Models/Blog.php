<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
	
	 /**
     * @var string
     */
    protected $table = 'blogs';

    /**
     * @var array
     */
    protected $fillable = ['title', 'content', 'author' , 'slug' , 'image'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
    /**
     * @param $value
     */
    public function getLocalNameAttribute()
    {
         $local= session()->get('local');
         if($local == "ar"){
              return "{$this->title_ar}";
         }else{
              return "{$this->title}";
         }
        
    }
    public function getLocalDescriptionAttribute()
    {
        $local= session()->get('local');
        if($local == "ar"){
            return "{$this->content_ar}";
        }else{
            return "{$this->content}";
        }
        
    }

    protected $appends = ['LocalName'];
}
