<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Seller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect('/');
    }

    public function registerSeller(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'building' => 'required|string|max:255',
            'mktba_name' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.Seller::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'lat' => 'required|numeric|between:-90,90', // Validate latitude
             'lng' => 'required|numeric|between:-180,180', 
        ]);

        $seller = Seller::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,            
            'city' => $request->city,        
            'district' => $request->district,
            'street' => $request->street,
            'building' => $request->building,
            'mktba_name' => $request->mktba_name,
            'lat' => $request->lat,
            'lng' => $request->lng,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($seller));

        Auth::guard('seller')->login($seller);


        return redirect('/');
    }

}
