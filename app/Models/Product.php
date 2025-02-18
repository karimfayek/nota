<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    /**
     * @var string
     */
    protected $table = 'products';

    /**
     * @var array
     */
    protected $fillable = [
        'brand_id', 'sku', 'name', 'slug', 'description', 'quantity','short_des',
        'weight', 'price', 'sale_price', 'status', 'featured', 'name2', 'description2','seller_id','shore_des' ,'min_req','max_req','price2'
    ];

    /**
     * @var array
     */
    protected $casts = [
        'quantity'  =>  'integer',
        'brand_id'  =>  'integer',
        'seller_id'  =>  'integer',
        'status'    =>  'boolean',
        'featured'  =>  'boolean'
    ];

    /**
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories', 'product_id', 'category_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
     /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function attributes()
    {
        return $this->hasMany(ProductAttribute::class);
    }

    public function getLocalNameAttribute()
    {
         $local= session()->get('local');
         if($local == "ar"){
              return "{$this->name2}";
         }else{
              return "{$this->name}";
         }
        
    }
    public function getFirstImageAttribute()
    {
        $lastImage = $this->images->first();

        return $lastImage ?  $lastImage->full : "/pr-placeholder.webp";
 
        
    }
    public function getLastImageAttribute()
    {
       
        $firstImage = $this->images->last();

        return $firstImage ?  $firstImage->full : "/pr-placeholder.webp";
 
        
    }
    public function getLocalDescriptionAttribute()
    {
        $local= session()->get('local');
        if($local == "ar"){
            return "{$this->description2}";
        }else{
            return "{$this->description}";
        }
    
    }
    public function getLocalSpecsAttribute()
    {
        $local= session()->get('local');
        if($local == "ar"){
            return "{$this->specsar}";
        }else{
            return "{$this->specs}";
        }
    
    }
    public function reviews()
    {
        return $this->hasMany(Review::class)->where('status', 1);
    }
  
    public function getComputedPriceAttribute()
    {
        // Check the authentication guard && Auth::guard('seller')->user()->active
        if (Auth::guard('seller')->check() ) {
            return $this->price; // Return the price for sellers
        }
        //&& auth()->user()->active
        if (Auth::guard('company')->check() ) {
            return $this->price2; // Return the price for companies
        }

        return 0; // Return 0 if no authentication
    }

    public function colors()
{
    return $this->belongsToMany(Color::class, 'product_color')->withPivot('quantity');
}
   
    
    protected $appends = ['LocalName', 'LocalDescription', 'FirstImage' , 'LastImage' ,'computed_price' ];
}
