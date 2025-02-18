<?php

use App\Http\Controllers\Seller\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\ProfileController;

use Inertia\Inertia;
    
    

        Route::group(['prefix'  =>  'company'], function () {   
            
            
        Route::post('register', [RegisteredUserController::class, 'registerSeller'])->name('company.register');
        Route::get('register', [LoginController::class, 'showRegisterForm'])->name('company.register.post');

        Route::group(['middleware' => ['auth:company' , 'approved']], function () {
            
            
            Route::get('/dashboard', function () {

                return Inertia::render('Dashboards/Company');
            
            })->name('company.dashboard');

            Route::get('/profile', [ProfileController::class, 'edit'])->name('company.profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('compny.profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('company.profile.destroy');
            Route::post('logout', [LoginController::class, 'logout'])->name('company.logout');


        });
    });

