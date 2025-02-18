<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        //dd($request->all());
        if (Auth::guard('seller')->attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return redirect()->intended('/seller/profile'); 
        }
    
        // Attempt to authenticate as company
        if (Auth::guard('company')->attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return redirect()->intended('/company/profile'); 
        }
    
        // If authentication fails
        return back()->withErrors([
            'email' => __('The provided credentials do not match our records.'),
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
       
        $guards = ['web', 'seller', 'admin', 'company'];

    // Loop through guards to find the authenticated one
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                echo('Logging out guard: ' . $guard);
                Auth::guard($guard)->logout(); // Log out from the identified guard
                break; // Exit loop once logged out
            }
        }

        $request->session()->invalidate();

        $request->session()->regenerateToken();
       // dd($request->all());
        return redirect('/');
    }
    public function destroySeller(Request $request): RedirectResponse
    {
       
        Auth::guard($guard)->logout();
        $request->session()->invalidate();

        $request->session()->regenerateToken();
       // dd($request->all());
        return redirect('/');
    }
}
