<?php

namespace App\Http\Controllers\admin;



use App\Traits\UploadAble;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Session;

use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;

class GalleryController extends BaseController
{
		
	
      public function index()
    {
        $banners = Gallery::all();

        $this->setPageTitle('galleries', 'banners List');
        return view('admin.galleries.index', compact('banners'));
    }
	 public function create()
    {
		$banners = Gallery::all();

        $this->setPageTitle('galleries', 'Create banner');
		return view('admin.galleries.create', compact('banners'));
    }
	 public function store(Request $request)
	 {
            //dd($status);
			if ($request->file('image')) {
			foreach($request->file('image') as $file){
			$images = new Gallery;
            $images->title = $request->title;
			$images->seo_kw = $request->seo_kw;
			$images->page = $request->page;
			
				//dd($file);
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/galleries/' . $filename)) ) {
					
					$images->image = $filename;
				}
			
            $images->save();
			
		   if (!$images) {
            return $this->responseRedirectBack('Error occurred while updating .', 'error', true, true);
			}
			} 
		}
			//dd('stop');
           
        return $this->responseRedirectBack(' updated successfully' ,'success',false, false);
	}
	 public function update(Request $request)
	 {
		// dd($request->all());
            $images = Gallery::find($request->product_id);
            
			$file = $request->file('image');
			if ($file) {
				//dd($file);
				$upload_path =public_path('storage/galleries/');
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/galleries/' . $filename)) ) {
					@unlink($upload_path.$images->image);
					$images->image = $filename;
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
		$product = Gallery::find($id);

        $this->setPageTitle('Banners', 'Create banner');
		return view('admin.galleries.edit', compact('product'));
    }
	
	 public function delete($id)
    {

        $images = Gallery::find($id);
		
		$upload_path = public_path('storage/galleries/');
		@unlink($upload_path.$images->image);
        $images->delete($images);
        return back();

    }
       
    
}
