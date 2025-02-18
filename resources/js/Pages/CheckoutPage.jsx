import React, { useEffect, useState } from "react";

import { Link, usePage } from '@inertiajs/react';
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  
  const translations = useSelector((state) => state.translations.translations);
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const total = useSelector((state) => state.cart.total);

  const [loading, setLoading] = useState(false);
  const [shippingVal, setShippingVal] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('');
  // State for order notes
  const [orderNotes, setOrderNotes] = useState("");
  const { auth } = usePage().props;
  useEffect(
    () => {
        setLoading(true)
        fetch(
            '/getstates', {
            method: 'GET',

        }
        ).then(response => response.json())
            .then(result => {
              setShippingVal(result.shipprice)
                setLoading(false)
            }
            )
            .catch(
                error => console.log(error)
            )

    }, []
)

  // Function to handle placing the order
  const handlePlaceOrder = () => {
    const orderDetails = {
      payment:selectedPayment,
     notes: orderNotes,
    };
    setLoading(true)
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        // Create a data object to send to Laravel
        

        // Send the data to Laravel Controller
        fetch('/store-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(orderDetails),
        })
            .then(response => response.json())
            .then(result => {
                // Handle the response from Laravel
                if (selectedPayment === 'credit-card' && result.success) {
                   // window.location.href = '/payment/' + result.order.id;
                   alert('waiting for Payment integration instructions and information')
                   setLoading(false)
                } else if (!result.success) {

                    setErrors(result.errors)
                    setLoading(false)
                } else if (result.success && selectedPayment !== 'credit-card') {
                    setSubmited(true)
                    setOrder(result.order)
                    dispatch(fetchCart())

                    setLoading(false)
                }
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
  };
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);

};
if(cart.length < 1 ){
  return(
    <div className='mt-10 flex items-center justify-center bg-white p-6'>
    {translations.cartempty}
</div>
  )
}
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center underline">{translations.checkout}</h1>

      {/* Customer Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{translations.customer_info}</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p>
            <span className="font-medium">{translations.name}:</span> {auth.user.name}
          </p>
          {auth.guard === 'seller' &&
           <p>
           <span className="font-medium">{translations.mktba}:</span> {auth.user.mktba_name}
         </p>
          }
           {auth.guard === 'company' &&
           <p>
           <span className="font-medium">{translations.company}:</span> {auth.user.company}
         </p>
          }
          <p>
            <span className="font-medium">{translations.address}:</span> {auth.user.address}
          </p>
          <p>
            <span className="font-medium">{translations.phone}:</span> {auth.user.phone}
          </p>
        </div>
      </div>
         {/* Cart Information */}
         <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{translations.ordersumary}</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p>
            <span className="font-medium">{translations.subtotaltrans}:</span> <span className="font-bold">{subTotal?.toFixed(2)} {translations.currency}</span>
          </p>
          <p>
            <span className="font-medium">{translations.codfees}:</span> <span className="font-bold">  {shippingVal}  {translations.currency}</span>
          </p>
           <p className="my-3 text-xl">
            <span className="font-medium">{translations.total}:</span> <span className="font-bold">  {total + shippingVal}  {translations.currency}</span>
          </p>
         
        </div>
      </div>
 {/*paymwnt method */}
 <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{translations.payment_method}</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
        <label className="block  my-3">
          <input id="cod" type="radio" className="form-check-input" name="payment_method" defaultValue='cash-on-delivery'
          checked={selectedPayment === 'cash-on-delivery'} onChange={handlePaymentChange} />
          <span className='form-check-label m-2'>{translations.cod}</span>
        
        </label>
        <label className="block  my-3">
          <input id="insta" type="radio" className="form-check-input" name="payment_method" defaultValue='insta'
          checked={selectedPayment === 'insta'} onChange={handlePaymentChange} />
          <span className='form-check-label m-2'>{translations.instapay}</span>
        
        </label>
        </div>
      </div>
      {/* Order Notes */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{translations.notes}</h2>
        <textarea
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          placeholder="Add any special instructions or notes for your order..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-black text-white py-2  hover:bg-green-600"
      >
        {translations.complete_order}
      </button>
    </div>
  );
};

export default CheckoutPage;