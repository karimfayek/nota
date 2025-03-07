<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'      =>  'required|max:255',            
            'price'     =>  'required|regex:/^\d+(\.\d{1,2})?$/',
            'price2'     =>  'required|regex:/^\d+(\.\d{1,2})?$/',
            'special_price'     =>  'regex:/^\d+(\.\d{1,2})?$/',
            'quantity'  =>  'required|numeric',
            'min_req'  =>  'required|numeric',
            'max_req'  =>  'required|numeric',
        ];
    }
}
