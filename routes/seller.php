<?php

use App\Http\Controllers\Seller\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;

use Inertia\Inertia;
    

        Route::group(['prefix'  =>  'seller'], function () {  
            
           
            Route::post('register', [RegisteredUserController::class, 'registerSeller'])->name('seller.register');
            Route::get('register', [LoginController::class, 'showRegisterForm'])->name('seller.register.post');

            Route::group(['middleware' => ['auth:seller' , 'approved']], function () {


            Route::get('/orders', function () {

            return Inertia::render('Profile/Orders');

            })->name('seller.orders');
            

            Route::get('/profile', [ProfileController::class, 'edit'])->name('seller.profile.edit');
            Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('seller.logout');
           


        });
    });

