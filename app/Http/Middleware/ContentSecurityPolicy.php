<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ContentSecurityPolicy
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);       
        $response->headers->set('Content-Security-Policy', 
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.jquery.com http://new.elfisalt.com:5173; connect-src 'self' ws://elfisalt.com:5173 http://elfisalt.com:5173;  style-src 'self' 'unsafe-inline' https://fonts.bunny.net;  font-src 'self' https://fonts.bunny.net; object-src 'none' ; "
    );
        return $response;
    }
}
