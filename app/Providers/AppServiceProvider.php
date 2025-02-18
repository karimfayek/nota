<?php

namespace App\Providers;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'csrf_token' => csrf_token(),
            'auth' => function () {
                return [
                    'user' => auth()->user() ? auth()->user()->only('id', 'name', 'email') : null,
                ];
            },
        ]);
    }
}
