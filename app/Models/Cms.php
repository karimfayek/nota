<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cms extends Model
{
     /**
     * @var string
     */
    protected $table = 'cmss';

    /**
     * @var array
     */
    protected $fillable = ['name', 'name2', 'content', 'content2' , 'morecontenten','morecontentar'];

    /**
     * @param $value
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
    public function getLocalDescriptionAttribute()
	{
	$local= session()->get('local');
	if($local == "ar"){
		return "{$this->content2}";
	}else{
		return "{$this->content}";
	}
	}
	  public function getLocalMoreContentAttribute()
	{
	$local= session()->get('local');
	if($local == "ar"){
		return "{$this->morecontentar}";
	}else{
		return "{$this->morecontenten}";
	}
    
}
}
