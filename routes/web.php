<?php

use App\Http\Controllers\Site\CheckoutController;
use App\Http\Controllers\Site\ProductController;
use App\Http\Controllers\Site\CategoryController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Site\CartController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Product;
use App\Models\Gallery;
use App\Models\Blog;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/refresh-csrf', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get('/', function () {

      return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'banners' => App\Models\Banner::where('status' , 1)->get(),
        'keywords' => config('settings.seo_kw'),
        'blogs' => App\Models\Blog::get(),
    ]);

    })->name('welcome');

    Route::get('/approval-notice', function () {
        return inertia::render('ApprovalNotice');
    })->name('approval.notice');


Route::get('/about', function () {   

    return Inertia::render('About', [
        'canLogin' => Route::has('login'),
        'galleries' => Gallery::where('page' , 'about')->get(),
    ]);

})->name('about');

Route::get('/contact', function () {   

    return Inertia::render('Contact', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);

})->name('contact');

Route::get('/cart', function () {   

    return Inertia::render('Cart', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);

})->name('cart');

Route::get('/api/sale-products', function () {

    if (Auth::guard('seller')->check() ) {
        $cat = \App\Models\Category::where('featured' , 1)->first(); 
        $saleproducts = $cat->products()->limit(14)->get();
        return response()->json($saleproducts);
     }
     //&& auth()->user()->active
     if (Auth::guard('company')->check() ) {
        $cat = \App\Models\Category::where('featured' , 2)->first(); 
        $saleproducts = $cat->products()->limit(14)->get();
        return response()->json($saleproducts);
     }

    $saleproducts = [];
    return response()->json($saleproducts);
});



Route::get('/product/{slug}', [ProductController::class, 'show'])->name('product.show');
Route::get('/sales', [ProductController::class, 'sales'])->name('sales.show');
Route::get('/category/{slug}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/categories', [CategoryController::class, 'cats'])->name('cats.show');
Route::post('/contactm', [HomeController::class, 'contactm'])->name('contactm');

//Cart
Route::middleware('multi.auth')->group(function () {
Route::get('/product/add/cart/react',  [ProductController::class, 'addToCartReact'])->name('product.add.cart.react');
Route::get('/product/add/cart/react/qty',  [ProductController::class, 'addToCartReactQty'])->name('product.add.cart.react.qty');
Route::get('/product/update/cart/react/qty',  [ProductController::class, 'updateCart'])->name('product.update.cart.react.qty');
Route::get('/product/remove/cart/react',  [ProductController::class, 'removeFromCartReact'])->name('product.remove.cart.react');
Route::get('/cart/react', [CartController::class, 'getCart'])->name('checkout.cart');
Route::post('/store-order', [CheckoutController::class, 'storeOrder'])->name('order.store');
Route::get('/getstates', [CheckoutController::class, 'getStates'])->name('getStates');
Route::get('/checkout', function () {   

    return Inertia::render('CheckoutPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);

})->name('checkout');
});


require __DIR__.'/auth.php';
require 'admin.php';
require 'seller.php';
require 'company.php';
/* 
view()->composer(['*'], function ($view) {
    $heading = \App\Models\Translation::all()->pluck('LocalName', 'header');
    $data=[
        'heading' =>$heading,
    ];
}); */

Route::get('/translations', function () {
    $heading = \App\Models\Translation::all()->pluck('ar', 'header');
    return response()->json($heading);
});




Route::get('/sitemap', function () {
    // Create a new sitemap
    $sitemap = Sitemap::create()
        ->add(Url::create('/')
            ->setPriority(1.0))
        ->add(Url::create('/blogs')
            ->setPriority(0.8))
        ->add(Url::create('/about')
            ->setPriority(0.6));

    // Add all products to the sitemap
    $products = Product::all(); // Fetch all products
    foreach ($products as $product) {
        $sitemap->add(
            Url::create('/product/' . $product->slug) // Assuming 'slug' is used for URLs
                ->setLastModificationDate($product->updated_at)
                ->setPriority(0.7)
        );
    }

    // Add all blog posts to the sitemap
    $blogPosts = Blog::all(); // Fetch all blog posts
    foreach ($blogPosts as $post) {
        $lastModified = $post->updated_at ?? $post->created_at; 
        $sitemap->add(
            Url::create('/blogpost/' . $post->slug) // Assuming 'slug' is used for URLs
                ->setLastModificationDate($lastModified)
                ->setPriority(0.6)
        );
    }

    // Return the sitemap
    return $sitemap->toResponse(request());
});