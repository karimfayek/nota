<?php

namespace App\Http\Controllers\Seller;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Inertia\Inertia;
use Inertia\Response;
class LoginController extends Controller
{

    /**
     * Where to redirect sellers after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:seller')->except('logout');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showLoginForm()
    {
      
        return view('seller.auth.login');
    }
	
	 public function showRegisterForm(): Response
    {
        $states = \App\Models\State::where('ship' , 1)->get();
        
        return Inertia::render('Auth/Seller/Register', [
            'states' => $states
        ]);
        return Inertia::render('Auth/Seller/Register');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
      
        
  
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);
        if (Auth::guard('seller')->attempt([
            'email' => $request->email,
            'password' => $request->password
        ], $request->get('remember'))) {
            return redirect()->intended(route('welcome'));
        }
        return back()->withInput($request->only('email', 'remember'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function logout(Request $request)
    {
        Auth::guard('seller')->logout();
        $request->session()->invalidate();
        return redirect()->route('welcome');
    }
}
