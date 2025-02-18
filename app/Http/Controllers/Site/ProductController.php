<?php

namespace App\Http\Controllers\Site;

use Cart;
use Illuminate\Http\Request;
use App\Contracts\ProductContract;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    protected $productRepository;


    public function __construct(ProductContract $productRepository)
    {
        $this->productRepository = $productRepository;
       
    }

    public function show($slug  , $lang=null)
    {
        $product = $this->productRepository->findProductBySlug($slug);
        $local = session()->get('local');
        $related = \App\Models\Product::whereNotIn('id', [$product->id])->limit(8)->get();
        if($local == "ar" && $lang == "en"){
            session()->put('local', 'en');
        
        }elseif($local == "en" && $lang == "ar"){
            session()->put('local', 'ar');
           
        }
        return Inertia::render('Product', [
            'product' => $product,
            'related' =>$related,
            'keywords' => config('settings.seo_kw'),
        ]);
    }
	public function sales()
    {
        if (Auth::guard('seller')->check() ) {
            $cat = \App\Models\Category::where('featured' , 1)->first(); 
            $saleproducts = $cat->products()->get();
           
         }
         //&& auth()->user()->active
         if (Auth::guard('company')->check() ) {
            $cat = \App\Models\Category::where('featured' , 2)->first(); 
            $saleproducts = $cat->products()->get();
           
         }
         if(!Auth::guard('company')->check() && !Auth::guard('seller')->check()  ){

             $saleproducts = [];
         }
        return Inertia::render('SalePage', [
            'saleproducts' => $saleproducts,
        ]);
    }

    public function addToCart(Request $request)
    {
        $product = $this->productRepository->findProductById($request->input('productId'));
        $options = $request->except('_token', 'productId', 'price', 'qty');

        Cart::add(uniqid(), $product->name, $request->input('price'), $request->input('qty'), $options);

        return redirect()->back()->with('message', 'Item added to cart successfully.');
    }

    public function addToCartReact(Request $request)
    {
        try {
            $product = $this->productRepository->findProductById($request->productId);
            if($product->quantity < 1){
                $error= '<p> Out of Stock </p>' ;
                return response()->json($error);
            }
            
            $options = $request->except('_token', 'productId', 'price', 'qty');
            $options['image'] = $product->FirstImage ;
            $options['slug']= $product->slug ;
            $add =  Cart::add($product->id, $product->name, $product->price ,1 , $options )->associate($product);
            $cart_content = Cart::getContent();
            $pr = Cart::get($product->id);
            //echo($pr->associatedModel->slug);
            if($pr->quantity > $product->quantity){
               Cart::update($product->id, array(
                   'quantity' => array(
                       'relative' => false,
                       'value' => $product->quantity
                   ),
                 )); 
                 
                 $added = 'max Quantity is:'  . $product->quantity ;
                 return response()->json(['error' => 'Max QTY is ' . $product->quantity ], 200);
            }

        } catch (\Exception $e) {
            // Exception handling code


            return response()->json(['error' => $e], 500);
        }
        
         
        $totalQty = Cart::getTotalQuantity();  
        
        $subTotal = Cart::getSubTotal();
        $total = Cart::getTotal();
        if($add){
        
        return response()->json([
            'cart_content' => $cart_content ,
            'totalQty' => $totalQty,
            'subTotal' => $subTotal,
            'total' => $total,
        ]);
        }
        
       
       
        return redirect()->back()->with('message', 'Item added to cart successfully.');
    }
    public function addToCartReactQty(Request $request)
    {
        try {
            $product = $this->productRepository->findProductById($request->productId);
           
            $qty = $request->prQty ; 
            if (Auth::guard('seller')->check() ) {
               $price = $product->price; // Return the price for sellers
            }
            //&& auth()->user()->active
            if (Auth::guard('company')->check() ) {
                $price = $product->price2; // Return the price for companies
            }
            $options = $request->except('_token', 'productId', 'price', 'qty');
            $options['image'] = $product->FirstImage ;
           //dd($options['varid']);
            $options['attribs'] = ['color' => $options['color'] ];
            $options['slug']= $product->slug ;

            if($product->quantity < 1 && $product->colors()->count() < 1){
                $error= '<p> Out of Stock </p>' ;
                return response()->json($error);
            }
            if($product->max_req > 0 &&  $qty > $product->max_req  ){
                $error= '<p>Reached Max Req   </p>' ;
                return response()->json($error);
            }
            if($product->min_req > 0 &&  $qty < $product->min_req    ){
                $error= '<p>Reached Min Req  </p>' ;
                return response()->json($error);
            }
            $pr = Cart::get($product->id);
            if($pr){
                Cart::update($product->id, array(
                    'quantity' => array(
                        'relative' => false,
                        'value' => $qty
                    ),
                    )); 
            }
            else{
                if($product->colors()->count() > 0){
                    $uniq = $product->id;
					foreach($options['attribs'] as $key => $value){
						$uniq .= $value ; 
					}
                    $add =  Cart::add($uniq, $product->name, $price ,$qty , $options )->associate($product);
                }else{
                    $add =  Cart::add($product->id, $product->name, $price ,$qty , $options )->associate($product);
                }
                
            }
          
            ;
          // dd($add);
    
            
           

        } catch (\Exception $e) {
            // Exception handling code


            return response()->json(['error' => 'An error occurred while adding'.$e], 500);
        }
        
         
        $totalQty = Cart::getTotalQuantity();  
        $cart_content = Cart::getContent();
        $subTotal = Cart::getSubTotal();
        $total = Cart::getTotal();
       
        
        return response()->json([
            'cart_content' => $cart_content ,
            'totalQty' => $totalQty,
            'subTotal' => $subTotal,
            'total' => $total,
        ]);
      
        
       
       
        return redirect()->back()->with('message', 'Item added to cart successfully.');
    }
    public function updateCart(Request $request)
    {
        try {
           
            $pr = Cart::get($request->productId);
            if($pr){
                $qty = $request->prQty ; 
                if($pr->associatedModel->quantity < 1 && $pr->associatedModel->colors()->count() < 1){
                    $error= '<p> Out of Stock </p>' ;
                    return response()->json($error);
                }
                if($pr->associatedModel->max_req > 0 &&  $qty > $pr->associatedModel->max_req  ){
                    $error= '<p>Reached Max Req   </p>' ;
                    return response()->json($error);
                }
                if($pr->associatedModel->min_req > 0 &&  $qty < $pr->associatedModel->min_req    ){
                    $error= '<p>Reached Min Req  </p>' ;
                    return response()->json($error);
                }
                Cart::update($request->productId, array(
                    'quantity' => array(
                        'relative' => false,
                        'value' => $qty
                    ),
                    )); 
            }
           
          
            ;
          // dd($add);
    
            
           

        } catch (\Exception $e) {
            // Exception handling code


            return response()->json(['error' => 'An error occurred while adding'.$e], 500);
        }
        
         
        $totalQty = Cart::getTotalQuantity();  
        $cart_content = Cart::getContent();
        $subTotal = Cart::getSubTotal();
        $total = Cart::getTotal();
       
        
        return response()->json([
            'cart_content' => $cart_content ,
            'totalQty' => $totalQty,
            'subTotal' => $subTotal,
            'total' => $total,
        ]);
      
        
       
       
        return redirect()->back()->with('message', 'Item added to cart successfully.');
    }
    public function removeFromCartReact(Request $request)
    {
        try {
           $remove=  Cart::remove($request->productId);
            $cart_content = Cart::getContent();
            
        $totalQty = Cart::getTotalQuantity(); 
        if($remove){
            return response()->json([
                'cart_content' => $cart_content ,
                'totalQty' => $totalQty
            ]);
        }

        } catch (\Exception $e) {
            // Catch the exception and handle it
            // You can log the error, return an error response, or take any necessary action
            return response()->json(['error' => 'an error eccoured'], 500);
        }
        
       
       
        return redirect()->back()->with('message', 'Item added to cart successfully.');
    }
}
