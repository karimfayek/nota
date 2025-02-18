<?php
use App\Models\Order;
use Illuminate\Support\Facades\DB;


Route::namespace('App\Http\Controllers\Admin')->group(function () {
    Route::group(['prefix'  =>  'admin'], function () {

    Route::get('login', 'LoginController@showLoginForm')->name('admin.login');
    Route::post('login', 'LoginController@login')->name('admin.login.post');

    Route::group(['middleware' => ['auth:admin']], function () {
      
        Route::get('/', function () {
            $salesValues =null;
            $labels = null ;
            return view('admin.dashboard.index', compact('labels', 'salesValues'));
        })->name('admin.dashboard');



        Route::get('logout', 'LoginController@logout')->name('admin.logout');
        Route::get('changepass', 'Auth\UpdatePasswordController@index')->name('password.form');
        Route::post('change-password', 'Auth\UpdatePasswordController@update')->name('password.updates');
        
        Route::get('/settings', 'SettingController@index')->name('admin.settings');
        Route::post('/settings', 'SettingController@update')->name('admin.settings.update');

        Route::group(['prefix'  =>   'categories'], function() {

            Route::get('/', 'CategoryController@index')->name('admin.categories.index');
            Route::get('/create', 'CategoryController@create')->name('admin.categories.create');
            Route::post('/store', 'CategoryController@store')->name('admin.categories.store');
            Route::get('/{id}/edit', 'CategoryController@edit')->name('admin.categories.edit');
            Route::post('/update', 'CategoryController@update')->name('admin.categories.update');
            Route::get('/{id}/delete', 'CategoryController@delete')->name('admin.categories.delete');

        });
        
        Route::group(['prefix' => 'products'], function () {

           Route::get('/', 'ProductController@index')->name('admin.products.index');
           Route::get('/create', 'ProductController@create')->name('admin.products.create');
           Route::post('/store', 'ProductController@store')->name('admin.products.store');
           Route::get('/edit/{id}', 'ProductController@edit')->name('admin.products.edit');
           Route::post('/update', 'ProductController@update')->name('admin.products.update');
            Route::get('/{id}/delete', 'ProductController@delete')->name('admin.products.delete');

           Route::post('images/upload', 'ProductImageController@upload')->name('admin.products.images.upload');
           Route::get('images/{id}/delete', 'ProductImageController@delete')->name('admin.products.images.delete');
        });
    
	  Route::group(['prefix' => 'banners'], function () {

	   Route::get('/', 'BannerController@index')->name('admin.banners.index');
	   Route::get('/create', 'BannerController@create')->name('admin.banners.create');
	   Route::post('/store', 'BannerController@store')->name('admin.banners.store');
	   Route::get('/edit/{id}', 'BannerController@edit')->name('admin.banners.edit');
	   Route::post('/update', 'BannerController@update')->name('admin.banners.update');
		Route::get('/{id}/delete', 'BannerController@delete')->name('admin.banners.delete');

	   Route::post('images/upload', 'BannerImageController@upload')->name('admin.banners.images.upload');
	   Route::get('images/{id}/delete', 'BannerImageController@delete')->name('admin.banners.images.delete');


        });
        
	  Route::group(['prefix' => 'colors'], function () {

        Route::get('/', 'ColorController@index')->name('admin.colors.index');
        Route::get('/create', 'ColorController@create')->name('admin.colors.create');
        Route::post('/store', 'ColorController@store')->name('admin.colors.store');
        Route::get('/edit/{id}', 'ColorController@edit')->name('admin.colors.edit');
        Route::post('/update', 'ColorController@update')->name('admin.colors.update');
         Route::get('/{id}/delete', 'ColorController@delete')->name('admin.colors.delete');
 
        Route::post('images/upload', 'ColorImageController@upload')->name('admin.colors.images.upload');
        Route::get('images/{id}/delete', 'ColorImageController@delete')->name('admin.colors.images.delete');
 
 
         });

        Route::group(['prefix' => 'galleries'], function () {

            Route::get('/', 'GalleryController@index')->name('admin.galleries.index');
            Route::get('/create', 'GalleryController@create')->name('admin.galleries.create');
            Route::post('/store', 'GalleryController@store')->name('admin.galleries.store');
            Route::get('/edit/{id}', 'GalleryController@edit')->name('admin.galleries.edit');
            Route::post('/update', 'GalleryController@update')->name('admin.galleries.update');
             Route::get('/{id}/delete', 'GalleryController@delete')->name('admin.galleries.delete');
     
            Route::post('images/upload', 'GalleryImageController@upload')->name('admin.galleries.images.upload');
            Route::get('images/{id}/delete', 'GalleryImageController@delete')->name('admin.galleries.images.delete');
     
     
             });

        Route::group(['prefix' => 'cmss'], function () {

	   Route::get('/', 'CmsController@index')->name('admin.cmss.index');
	   Route::get('/about', 'CmsController@about')->name('admin.about.index');
	   Route::get('/create', 'CmsController@create')->name('admin.cmss.create');
	   Route::post('/store', 'CmsController@store')->name('admin.cmss.store');
	   Route::get('/edit/{id}', 'CmsController@edit')->name('admin.cmss.edit');
	   Route::post('/update', 'CmsController@update')->name('admin.cmss.update');
		Route::get('/{id}/delete', 'CmsController@delete')->name('admin.cmss.delete');


        });
        Route::group(['prefix' => 'messages'], function () {

            Route::get('/contacts', 'MessageController@contacts')->name('admin.contacts.index');
            Route::get('/careers', 'MessageController@careers')->name('admin.careers.index');
            Route::get('/newsletter', 'MessageController@newsletters')->name('admin.newsletters.index');
            Route::get('/services', 'MessageController@services')->name('admin.messages.services.index');
            Route::get('/getquote', 'MessageController@getquote')->name('admin.messages.getquote.index');
            Route::get('/getProductQuote', 'MessageController@getProductQuote')->name('admin.messages.getProductQuote.index');
        Route::get('/{id}/delete', 'MessageController@delete')->name('admin.messages.delete');
    
    
        });
        Route::group(['prefix' => 'translations'], function () {

            Route::get('/', 'TranslationController@index')->name('admin.translation.index');
            Route::get('/create', 'TranslationController@create')->name('admin.translation.create');
            Route::post('/store', 'TranslationController@store')->name('admin.translation.store');
             Route::get('/edit/{id}', 'TranslationController@edit')->name('admin.translation.edit');
            Route::post('/update', 'TranslationController@update')->name('admin.translation.update');
             Route::get('/{id}/delete', 'TranslationController@delete')->name('admin.translation.delete');
    
    
        });
        Route::group(['prefix' => 'blogs'], function () {

            Route::get('/', 'BlogController@index')->name('admin.blogs.index');
            Route::get('/create', 'BlogController@create')->name('admin.blogs.create');
            Route::post('/store', 'BlogController@store')->name('admin.blogs.store');
            Route::get('/edit/{id}', 'BlogController@edit')->name('admin.blogs.edit');
            Route::post('/update', 'BlogController@update')->name('admin.blogs.update');
             Route::get('/{id}/delete', 'BlogController@delete')->name('admin.blogs.delete');
     
            Route::post('images/upload', 'BlogImageController@upload')->name('admin.blogs.images.upload');
            Route::get('images/{id}/delete', 'BlogImageController@delete')->name('admin.blogs.images.delete');
     
     
             });
    });
});
});