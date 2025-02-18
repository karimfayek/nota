<?php

namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\Blog;

use Inertia\Inertia;
use Inertia\Response;


class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();

       return Inertia::render('Blogs/Blogs', [
            'blogs' => $blogs,
            'status' => session('status'),
        ]);
    }

    public function BlogPost($slug)
    {
        $post = Blog::where('slug' , $slug)->First();

       return Inertia::render('Blogs/BlogPost', [
            'BlogPost' => $post,
        ]);
    }
    
    
    public function researches()
    {
        $blogs = Blog::all();

       return Inertia::render('Blogs/Researches', [
        'blogs' => $blogs,
        ]);
    }
    
}
