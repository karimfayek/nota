<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Contracts\CategoryContract;
use App\Contracts\ProductContract;
use App\Http\Controllers\BaseController;
use App\Http\Requests\StoreProductFormRequest;

class ProductController extends BaseController
{
   

    protected $categoryRepository;

    protected $productRepository;

    public function __construct(
       
        CategoryContract $categoryRepository,
        ProductContract $productRepository
    )
    {
      
        $this->categoryRepository = $categoryRepository;
        $this->productRepository = $productRepository;
    }

    public function index()
    {
		
        $products = \App\Models\Product::all();

        $this->setPageTitle('Products', 'Products List');
        return view('admin.products.index', compact('products'));
    }

    public function create()
    {
     
        $categories = $this->categoryRepository->listCategories('name', 'asc');

        $this->setPageTitle('Products', 'Create Product');
        return view('admin.products.create', compact('categories'));
    }

    public function store(StoreProductFormRequest $request)
    {
        $params = $request->except('_token');

        $product = $this->productRepository->createProduct($params);

        if (!$product) {
            return $this->responseRedirectBack('Error occurred while creating product.', 'error', true, true);
        }
        return $this->responseRedirect('admin.products.index', 'Product added successfully' ,'success',false, false);
    }

    public function edit($id)
    {
        $product = $this->productRepository->findProductById($id);
        
        $categories = $this->categoryRepository->listCategories('name', 'asc');
       $colors = \App\Models\Color::all();
     //dd($sizes);

    

        $this->setPageTitle('Products', 'Edit Product');
        return view('admin.products.edit', compact('categories',
         'product', 'colors'));
    }

    public function update(StoreProductFormRequest $request)
    {
        $params = $request->except('_token');

        $product = $this->productRepository->updateProduct($params);

        if (!$product) {
            return $this->responseRedirectBack('Error occurred while updating product.', 'error', true, true);
        }
        return $this->responseRedirect('admin.products.index', 'Product updated successfully' ,'success',false, false);
    }
    public function quantity(Request $request , $id)
    {
        
        $page = $this->productRepository->findProductById($id);
        $page->quantity = $request->quantity ;
        $page->save() ; 
        return response(array(
                'success' => true,
                'message' => 'updated'
            ),200,[]);
    }
    public function price(Request $request , $id)
    {
        
        $page = $this->productRepository->findProductById($id);
        $page->price = $request->price;
        $page->save() ; 
        return response(array(
                'success' => true,
                'message' => 'updated'
            ),200,[]);
    }

 public function saleprice(Request $request , $id)
    {
        
        $page = $this->productRepository->findProductById($id);
        $page->sale_price = $request->price;
        $page->save() ; 
        return response(array(
                'success' => true,
                'message' => 'updated'
            ),200,[]);
    }

    // delete product
	public function delete($id)
    {
        $product = $this->productRepository->deleteProduct($id);

        if (!$product) {
            return $this->responseRedirectBack('Error occurred while deleting Product.', 'error', true, true);
        }
        return $this->responseRedirect('admin.products.index', 'Product deleted successfully' ,'success',false, false);
    }


    public function variationDelete($id)
    {
        $productVariation =   \App\Models\ProductVariation::where('id' , $id)->first();
        $productVariation ->delete();

        if (!$productVariation) {
            return $this->responseRedirectBack('Error occurred while deleting Variation.', 'error', true, true);
        }
        return $this->responseRedirectBack('Variation deleted successfully' ,'success',false, false);
    }


    public function variationDeleteAll($id)
    {
        $productVariations =   \App\Models\ProductVariation::where('product_id' , $id)->get();
        foreach($productVariations as $prVar){
            $prVar ->delete();
        }
        if (!$productVariations) {
            return $this->responseRedirectBack('Error occurred while deleting Variations.', 'error', true, true);
        }
        return $this->responseRedirectBack('Variations deleted successfully' ,'success',false, false);
    }


     
    public function variationUpdate(Request $request){
     
    $productId = $request->input('product_id');
        $variations = $request->input('attributes');
        
        foreach ($variations as  $variationId => $variation) {
// dd($variations);
          
            $variationId = $variationId;
            $quantity = $variation['qty'];
            $price = $variation['price'];
            $image = $variation['image'];
    
            // Update the variation in the database
            \App\Models\ProductVariation::where('id', $variationId)
                ->update(['qty' => $quantity, 'price' => $price ,'image' =>$image]);
        }
    
        // Redirect back or return a response as needed
        return $this->responseRedirectBack('Variation Updated successfully' ,'success',false, false);
      
    }

    //create variation
    public function variation(Request $request){
    //check if already exist from update page
      foreach ($request->input('attributes') as $attribute) {
        $VarFound = \App\Models\ProductVariation::where('product_id' , $request->input('product_id'))
                    ->where('size' , $request->input('attributes')[0]['size'])
                    ->where('color' ,$request->input('attributes')[0]['color'])
                    ->where('style' , $request->input('attributes')[0]['style'])
                    ->first();
        if($VarFound){
            return $this->responseRedirectBack('Variation already exist.', 'error', true, true);
        }
        \App\Models\ProductVariation::create([
            'product_id' => $request->input('product_id'),
            'size' => $attribute['size'],
            'color' => $attribute['color'],
            'style' => $attribute['style'],
            'qty' => $attribute['qty'],
            'price' => $attribute['price'],
            'image' => $attribute['image'],
        ]);
    }
    return $this->responseRedirectBack('Variation Added successfully' ,'success',false, false);

    }

    public function chooseVariations(Request $request)
{
    // Process the form data
    $selectedSizes = $request->sizes;
    $selectedColors = $request->colors;
    $selectedStyles = $request->styles;

    $sizes = \App\Models\AttributeValue::whereIn('id' , $selectedSizes)->get();
    $colors = \App\Models\AttributeValue::whereIn('id' , $selectedColors)->get();
    $styles = \App\Models\AttributeValue::whereIn('id' , $selectedStyles)->get();
   
    $response = [
        'sizes' => $sizes,
        'colors' => $colors,
        'styles' => $styles
    ];

    return response()->json($response);
}


}
