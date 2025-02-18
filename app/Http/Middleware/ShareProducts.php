<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Setting;

use Illuminate\Support\Facades\Auth;
class ShareProducts extends Middleware
{
    public function share(Request $request)
    {
        //&& Auth::guard('seller')->user()->active
        if (Auth::guard('seller')->check() ) {

            $products = Product::select('id', 'name','description' , 'short_des' ,'price' , 'min_req' , 'max_req' ,'slug')->with('images')->get();
            // && Auth::guard('company')->user()->active
        }elseif(Auth::guard('company')->check()){
            $products = Product::select('id', 'name','description' , 'short_des' ,'price2' , 'min_req' , 'max_req' ,'slug')->with('images')->get();
        }else{
            $products = Product::select('id', 'name','description' , 'short_des'  , 'min_req' , 'max_req' ,'slug')->with('images')->get();

        }
        $cats =  \App\Models\Category::where('featured' , 0)->where('menu' , 1)->where('parent_id' , 1)->limit(5)->get();
        return array_merge(parent::share($request), [
            // Share products globally with all Inertia views
            'products' => $products,
            'cats' => $cats,
            'configs' =>  Setting::pluck('value', 'key'),
        ]);
    }
}
