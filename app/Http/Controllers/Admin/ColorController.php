<?php

namespace App\Http\Controllers\admin;



use App\Traits\UploadAble;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Color;
use Session;

use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;

class ColorController extends BaseController
{
		
	
      public function index()
    {
        $colors = Color::all();

        $this->setPageTitle('Colors', 'colors List');
        return view('admin.colors.index', compact('colors'));
    }
	 public function create()
    {
		$colors = Color::all();

        $this->setPageTitle('Colors', 'Create banner');
		return view('admin.colors.create', compact('colors'));
    }
	 public function store(Request $request)
	 {
		   $status = $request->has('status') ? 1 : 0;
            //dd($status);
            $images = new Color;
            $images->name = $request->name;
			$images->hex_code  = $request->hex_code ;
			
            $images->save();
		   if (!$images) {
            return $this->responseRedirectBack('Error occurred while updating .', 'error', true, true);
        }
        return $this->responseRedirectBack(' updated successfully' ,'success',false, false);
	}
	 public function update(Request $request)
	 {
            //dd($status);
            $images =Color::find($request->product_id);
            
            $images->name = $request->name;
			$images->hex_code  = $request->hex_code ;
		    $images->save();
			 
		   if (!$images) {
            return $this->responseRedirectBack('Error occurred while updating .', 'error', true, true);
        }
        return $this->responseRedirectBack(' updated successfully' ,'success',false, false);
	}
	 public function edit($id)
    {
		$product =Color::find($id);

        $this->setPageTitle('Colors', 'Create banner');
		return view('admin.colors.edit', compact('product'));
    }
	
	 public function delete($id)
    {

        $images =Color::find($id);
		
		$upload_path = public_path('storage/colors/');
		@unlink($upload_path.$images->full);
        $images->delete($images);
        return back();

    }
       
    
}
