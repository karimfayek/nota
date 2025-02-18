<?php

namespace App\Http\Controllers\admin;



use App\Traits\UploadAble;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use Session;

use Illuminate\Support\Str;

use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;

class BlogController extends BaseController
{
		
	
      public function index()
    {
        $banners = Blog::all();

        $this->setPageTitle('Blogs', 'blogs List');
        return view('admin.blogs.index', compact('banners'));
    }
	 public function create()
    {
		$banners = Blog::all();

        $this->setPageTitle('Blogs', 'Create Blog');
		return view('admin.blogs.create', compact('banners'));
    }
	 public function store(Request $request)
	 {
		   $status = $request->has('status') ? 1 : 0;
            //dd($status);
            $images = new Blog;
            $images->title = $request->title;
            $images->slug =  Str::slug($request->title);
			$images->content = $request->content;
			$images->seo_kw = $request->seo_kw;
			$file = $request->file('image');
			if ($file) {
				//dd($file);
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/blogs/' . $filename)) ) {
					
					$images->image = $filename;
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
            $images = Blog::find($request->product_id);
            
            $images->title = $request->title;
			$images->content = $request->content;
			
            $images->slug =  Str::slug($request->title);
			$images->seo_kw = $request->seo_kw;
			$file = $request->file('image');
			if ($file) {
				//dd($file);
				$upload_path =public_path('storage/blogs/');
				$filename = time() .'.webp';
				$webp = Image::read($file);
				$webp ->encode( new WebpEncoder(79) );
				
				
				
				if ( $webp->save(public_path('storage/blogs/' . $filename)) ) {
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
		$product = Blog::find($id);

        $this->setPageTitle('Blogs', 'Create Blog');
		return view('admin.blogs.edit', compact('product'));
    }
	
	 public function delete($id)
    {

        $images = Blog::find($id);
		
		$upload_path = public_path('storage/blogs/');
		@unlink($upload_path.$images->image);
        $images->delete($images);
        return back();

    }
       
    
}
