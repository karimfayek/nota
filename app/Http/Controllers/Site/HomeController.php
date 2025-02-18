<?php
namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Models\Cms;
use App\Models\Message;
use Mail;
use App\Mail\SendEmail;
use App\Mail\SendEmailHR;
use Response;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
class HomeController extends Controller
{

	
  
 
    public function newsletter(Request $request)
    {
		     $this->validate($request, [
            'email'      =>  'required|email',
	]);
   
    $subscribed = Message::where('type' , 'newsletter')->where('email' , $request->email)->first();

        if (  !$subscribed  ) 
        {
            $message = new Message;
            $message->type ='newsletter';
            $message->email = $request->email;            
            $message->save();
            if($request->lang == 'ar'){
            return 'شكرا , تم الاشتراك فى النشرة الاخبارية ';
            }else{
                return 'Thanks , You are successfuly subscribed ';
            }
        }
        if($request->lang == 'ar'){
            return 'انت مشترك بالفعل';
            }else{
                return 'You are already Subscribed ';
            }
      
            
    }
    public function contactm(Request $request, $lang = null)
    {
        // Validation using the Validator facade
        $validator = \Validator::make($request->all(), [
            'email' => 'email|nullable',
            'name' => 'required|min:3',
            'phone' => 'required',
            'message' => 'required|min:6',
        ]);
    
        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);  // 422 is the standard HTTP status code for unprocessable entity
        }
    
        // Custom success message based on language
        if ($lang == 'ar') {
            $resMessage = 'تم ارسال طلبك بنجاح';
        } else {
            $resMessage = 'Message Sent Successfully';
        }
    
        // Store message in the database
        $messageM = new Message();
        $messageM->type = 'contact';
        $messageM->email = $request->email;
        $messageM->name = $request->name;
        $messageM->phone = $request->phone;
        $messageM->message = $request->message;
        $messageM->save();
    
        // Return a success response
        return response()->json(
            ['message' => $resMessage,
            'status' => true
        ]);
    }
    

}
