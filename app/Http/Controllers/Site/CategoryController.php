<?php

namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contracts\CategoryContract;
use App\Contracts\AttributeContract;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;

class CategoryController extends Controller
{
    protected $categoryRepository;
	protected $attributeRepository;

    public function __construct(CategoryContract $categoryRepository, AttributeContract $attributeRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->attributeRepository = $attributeRepository;
    }

    public function show(Request $request , $slug , $lang= null)
    {
        $category =  \App\Models\Category::where('slug' , $slug)->with('children')->with('children.products')->with('children.parent')->firstOrFail();
        $pagproducts = $category->products()->with('images')->paginate(16);
        $minPrice = $category->products()->min('price');
		$maxPrice =  $category->products()->max('price');
		
		$min = (int)$minPrice;
		$max =  (int)$maxPrice;
        return Inertia::render('Category', [
            'products' => $pagproducts,
            'minPrice' => $min,
            'maxPrice' => $max,
            'category' => $category,
            'keywords' => config('settings.seo_kw'),
        ]);
      
           
    }
    public function cats(Request $request)
    {
        $cats =  \App\Models\Category::where('featured' , 0)->where('menu' , 1)->with('children')->with('children.products')->with('children.parent')->get();
       
        return Inertia::render('CategoriesPage', [
            'cats' => $cats,
            
        ]);
      
           
    }
	public function showar($slug)
    {
        $category = $this->categoryRepository->findBySlug($slug);
        $attributes = $this->attributeRepository->listAttributes();
		$pagproducts = $category->products()->paginate(12);

        return view('site.pages.ar.category2', compact('category','attributes','pagproducts'));
    }
}
