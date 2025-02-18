<?php

namespace App\Http\Controllers\admin;



use App\Traits\UploadAble;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Banner;
use Session;

use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;

class BannerController extends BaseController
{
		
	
      public function index()
    {
        $banners = Banner::all();

        $this->setPageTitle('Banners', 'banners List');
        return view('admin.banners.index', compact('banners'));
    }
	 public function create()
    {
		$banners = Banner::all();

        $this->setPageTitle('Banners', 'Create banner');
		return view('admin.banners.create', compact('banners'));
    }
	 public function store(Request $request)
	 {
		   $status = $request->has('status') ? 1 : 0;
            //dd($status);
            $images = new Banner;
            $images->name = $request->name;
			$images->namear = $request->namear;
			$images->description = $request->description;
			$images->description2 = $request->description2;
			$images->url = $request->url;
			$images->status = $status;
			$file = $request->file('full');
			if ($file) {
				//dd($file);
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/banners/' . $filename)) ) {
					
					$images->full = $filename;
				}
} 
            $images->save();
		   if (!$images) {
            return $this->responseRedirectBack('Error occurred while updating .', 'error', true, true);
        }
        return $this->responseRedirectBack(' updated successfully' ,'success',false, false);
	}
	 public function update(Request $request)
	 {
		// dd($request->all());
		   $status = $request->has('status') ? 1 : 0;
            //dd($status);
            $images = Banner::find($request->product_id);
            $images->name = $request->name;
			$images->namear = $request->namear;
			$images->description = $request->description;
			$images->description2 = $request->description2;
			$images->url = $request->url;
			$images->status = $status;
			$file = $request->file('full');
			if ($file) {
				//dd($file);
				$upload_path =public_path('storage/banners/');
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/banners/' . $filename)) ) {
					@unlink($upload_path.$images->full);
					$images->full = $filename;
				}
				
				// Continue processing the file...
			}
		$images->save();
			 
		   if (!$images) {
            return $this->responseRedirectBack('Error occurred while updating .', 'error', true, true);
        }
        return $this->responseRedirectBack(' updated successfully' ,'success',false, false);
	}
	 public function edit($id)
    {
		$product = Banner::find($id);

        $this->setPageTitle('Banners', 'Create banner');
		return view('admin.banners.edit', compact('product'));
    }
	
	 public function delete($id)
    {

        $images = Banner::find($id);
		
		$upload_path = public_path('storage/banners/');
		@unlink($upload_path.$images->full);
        $images->delete($images);
        return back();

    }
       
    
}
