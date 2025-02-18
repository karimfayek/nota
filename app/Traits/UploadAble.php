<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Str;
/**
 * Trait UploadAble
 * @package App\Traits
 */
trait UploadAble
{
    /**
     * @param UploadedFile $file
     * @param null $folder
     * @param string $disk
     * @param null $filename
     * @return false|string
     */
    public function uploadOne(UploadedFile $file, $folder = null, $disk = 'public', $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        $extension = $file->getClientOriginalExtension();
        $filenameWithExtension = $name . "." . $extension;
        $path = $file->storeAs($folder, $filenameWithExtension, $disk);

        // Convert to WebP and save if supported
        if (in_array($extension, ['jpg', 'jpeg', 'png'])) {
            $image = Image::read($file);
            $webpFilename = $name . '.webp';
            $image  ->encode( new WebpEncoder(79) )->save(public_path("storage/{$folder}/{$webpFilename}"));
       
            $path = $folder . '/' . $webpFilename;
        }


        return $path;
    }

    /**
     * @param null $path
     * @param string $disk
     */
    public function deleteOne($path = null, $disk = 'public')
    {
        Storage::disk($disk)->delete($path);
    }
}
