<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;


use Illuminate\Support\Facades\Auth;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = null;

        // Check the seller guard
        if (Auth::guard('seller')->check()) {
            $user = Auth::guard('seller')->user();
            $user['orders'] = $user->orders ;
            $currentGuard = 'seller';
        }
        // Check the company guard
        elseif (Auth::guard('company')->check()) {
            $user = Auth::guard('company')->user();
            $currentGuard = 'company';
        }
        // Fallback to the default guard
        else {
            $user = $request->user(); // Default guard
            $currentGuard = 'auth';
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'guard' => $currentGuard,
            ],
            'csrf_token' => csrf_token(),
        ];
    }
}
