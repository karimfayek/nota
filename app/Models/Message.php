<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
       /**
     * @var string
     */
    protected $table = 'messages';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone', 'notes', 'dept', 'type','clientport','country' ,'dept','requested-product',
        'company','shippingterms','productspecs','servicedate','requestreason','service','quantityunit','qty','portaccess'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'requested-product');
    }
 
    public function messagecountry()
    {
        return $this->belongsTo(Country::class, 'country');
    }
}
