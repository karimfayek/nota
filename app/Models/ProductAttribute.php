<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    /**
     * @var string
     */
    protected $table = 'product_attributes';

    /**
     * @var array
     */
    protected $fillable = ['attribute_id', 'product_id', 'value', 'quantity', 'price','image', 'valuear','colorcode' ,'valueid'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
    public function getLocalValueAttribute()
    {
	$local= session()->get('local');

	if($local == 'ar'){
		return  $this->valuear;
	}else{
		return  $this->value;
	}
    
    }
}
