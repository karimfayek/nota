<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  dir="rtl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="kariem malak" >
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title inertia>{{ config('settings.site_name') }}</title>
        
	<link rel="icon" href="/storage/{{ config('settings.site_favicon') }}" type="image/x-icon">

        
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-primary">
        @inertia
    </body>
</html>
