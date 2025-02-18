
import {  usePage } from '@inertiajs/react';
import { useState } from 'react';
export default function Contact (){
    
  const {  configs} = usePage().props; 
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [message , setMessage] = useState('')
  const [success , setSuccess] = useState(false)
  const [errors , setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const bod = {
        name: name,
        phone: phone,
        message: message,
        email: email,
      };
      try {
    const response = await fetch('/contactm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(bod)
      });
      if(response.status){
        setSuccess(true)
        setEmail('')
        setMessage('')
        setName('')
        setPhone('')
    }
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 422) {
          // Handle validation errors
          setErrors(errorData.errors);
        } else {
          // Handle other types of errors
          setErrors({});
          setSuccessMessage('Something went wrong. Please try again.');
        }
      } else {
        // Clear errors and show success message if the request was successful
        setErrors({});
        const responseData = await response.json();
      //  setSuccessMessage(responseData.message);
        setEmail('');
        setMessage('');
        setName('');
        setPhone('');
      }
    } catch (error) {
      // Handle network errors or any unexpected issues
      setErrors({});
      setSuccessMessage('An error occurred. Please try again later.');
    }
  
   
  }
 
    return (
        <>
        <div id="contact" className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28">
       
            <div className="w-full lg:flex space-y-6 lg:space-y-0">
                <div className="w-full lg:w-1/3">
                    <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider /40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">Contact</h6>
                    <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl  mt-2">Let's <span className="bg-themeGradient bg-clip-text ">Talk</span></h2>
                  
                </div>
                <div className="w-full lg:w-2/3">

                    <div className="md:flex">
                        <div className="w-full md:w-1/2">
                            <h6 className="font-outfit font-medium uppercase text-sm tracking-wider  mb-2">Email:</h6>
                            <h3 className="font-outfit font-medium text-2xl lg:text-3xl "  dangerouslySetInnerHTML={{ __html: configs.default_email_address }}></h3>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h6 className="font-outfit font-medium uppercase text-sm tracking-wider  mb-2">Call:</h6>
                            <h3 className="font-outfit font-medium text-2xl lg:text-3xl " dangerouslySetInnerHTML={{ __html: configs.phones }}></h3>
                        </div>
                    </div>

                    <div className="mt-8 lg:text-right">
                        <form className="space-y-4" method="post" id="contactform">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <input className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none" type="text" id="name" name="name" placeholder="Name" required="" value={name} onChange={(e) => setName(e.target.value)}/>
                                    {errors.name && <p className="text-red-500">{errors.name[0]}</p>}
                                </div>
                                <div className="w-1/2">
                                    <input className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none" type="email" id="email" name="email" placeholder="E-Mail" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
                                </div>
                            </div>
                            <input className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none" type="text" id="Phone" name="Phone" placeholder="Phone" required="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {errors.phone && <p className="text-red-500">{errors.phone[0]}</p>}
                            <textarea className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 h-[160px] focus:outline-none" name="message" id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            {errors.message && <p className="text-red-500">{errors.message[0]}</p>}
                            <div class="mt-6"><a class="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40" data-headlessui-state="" href="#" onClick={(e)=>handleSubmit(e)}>Send Message</a></div>
                        </form>

                        <div className="submit-result">
                            {success && 
                            
                            <span className="transition duration-200 ease-out text-green-700" id="success">Thank you! Your Message has been sent.</span>
                            }
                           {Object.keys(errors).length > 0  && 
                            
                            <span className="transition duration-200 ease-out text-red-600" id="error">Something went wrong, Please try again!</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 mt-14">
        <div className="gmap w-full h-[400px] rounded-2xl" dangerouslySetInnerHTML={{ __html: configs.map }}>
        
        </div>
            </div>
            </>
    )
}