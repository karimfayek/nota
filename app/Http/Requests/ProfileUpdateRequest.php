<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $user = null;

        // Check the seller guard
        if (Auth::guard('seller')->check()) {
            $user = Auth::guard('seller')->user();
        }
        // Check the company guard
        elseif (Auth::guard('company')->check()) {
            $user = Auth::guard('company')->user();
        }
        // Fallback to the default guard
        else {
            $user = $request->user(); // Default guard
        }
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($user->id)],
        ];
    }
}
