<?php

namespace App\Http\Controllers\Admin;

use App\Traits\UploadAble;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Contracts\ProductContract;
use App\Http\Controllers\Controller;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Str;

class ProductImageController extends Controller
{
    use UploadAble;

    protected $productRepository;

    public function __construct(ProductContract $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function upload(Request $request)
    {
        $product = $this->productRepository->findProductById($request->product_id);
//dd($request->image);
        if ($request->has('image')) {
          
            $file = request()-> file('image');
           // $image = Image::read($request->file('image'));
           // dd($image);
            $original_photo_storage = public_path('storage/products/original_photos/');
            $medium_photos_storage = public_path('storage/products/medium_photos/');
            $mobile_photos_storage = public_path('storage/products/mobile_photos/');
            $thumbnail_storage = public_path('storage/products/thumbnail/');
            $tiny_photos_storage = public_path('storage/products/tiny_photos/');
            $image = Image::read($file->getRealPath());
            $filename = Str::random(15) . '.webp';
            $e = Image::read($file);
            $encodedImage = $e->encode(new WebpEncoder(79)); 
            $encodedImage->save($original_photo_storage.$filename);
           
            $e->scale(width:600)
            ->encode( new WebpEncoder(79) )
            ->save($medium_photos_storage.$filename);

            $e->scale(width:420)
            ->encode( new WebpEncoder(79) )->save($mobile_photos_storage.$filename);

                    
            $e->scale(width:120)
            ->encode( new WebpEncoder(79) )->save($thumbnail_storage.$filename);

            $e->scale(width:10)
            ->encode( new WebpEncoder(79) )->save($tiny_photos_storage.$filename);

            $productImage = new ProductImage([
                'full'      =>  $filename,
            ]);

        $product->images()->save($productImage);
        }
       // dd($)

        return response()->json(['status' => 'Success']);
    }

    public function delete($id)
    {
        $image = ProductImage::findOrFail($id);

       
        if ($image->full != '') {
			     
            $original_photo_storage = public_path('storage\\products\\original_photos\\');
            $medium_photos_storage = public_path('storage\\products\\medium_photos\\');
            $mobile_photos_storage = public_path('storage\\products\\mobile_photos\\');
            $tiny_photos_storage = public_path('storage\\products\\tiny_photos\\');
            $thumbnail_storage = public_path('storage\\products\\thumbnail\\');
			
            @unlink($original_photo_storage .$image->full);
            @unlink($medium_photos_storage .$image->full);
            @unlink($mobile_photos_storage .$image->full);
            @unlink($tiny_photos_storage .$image->full);
            @unlink($thumbnail_storage .$image->full);
            @unlink($image->full);
        }

        $image->delete();

       
        return redirect()->back();
    }
}
