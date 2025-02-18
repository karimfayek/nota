<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            switch($guard){
                case 'admin':
                    if (Auth::guard($guard)->check()) {
                        return redirect('/admin');
                    }
                    break;
                case 'seller':
                    if (Auth::guard($guard)->check()) {
                        return redirect('/seller/profile');
                    }
                    break;
                case 'company':
                    if (Auth::guard($guard)->check()) {
                        return redirect('/company/profile');
                    }
                    break;
                default:
                    if (Auth::guard($guard)->check()) {
                        return redirect('/');
                    }
                    break;
            }
         
        }

        return $next($request);
    }
}
