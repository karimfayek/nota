<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
   
       /**
     * @var string
     */
    protected $table = 'galleries';

    /**
     * @var array
     */
    protected $fillable = [
        'image', 'page', 'seo_kw'
    ];
}
