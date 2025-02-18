import React, { useEffect } from "react";

import { Link } from '@inertiajs/react';
import { fetchCart, removeFromCartItem } from '@/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Inertia } from '@inertiajs/inertia';


const CartSidebar = ({ isOpen, onClose }) => {

    
        if (!isOpen) return null;
        
        const translations = useSelector((state) => state.translations.translations);
        const dispatch = useDispatch();
        const cart = useSelector((state) => state.cart.cart);  
        const totalQty = useSelector((state) => state.cart.totalQty);
        const copyCart = { ...cart };
        const cartArray = Object.values(copyCart);

        useEffect(
            () => {
            dispatch(fetchCart());
            }, [cartArray.length]
        );
        useEffect(() => {
            // Listen for Inertia navigation events
            const unlisten = Inertia.on('navigate', (event) => {
              onClose(); // Close the sidebar when navigation occurs
            });
        
            // Clean up the listener when the component unmounts
            return () => {
              unlisten();
            };
          }, [onClose]);
  return (
    <>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`}
        onClick={onClose}
      ></div>
   <div className='bg-gray-800 fixed inset-y-0 left-0 w-96  z-50 shadow-lg overflow-y-auto px-4 text-white'>

          <ul className="flex flex-wrap justify-center border-b border-[#D7D7D7]" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="w-full py-2.5 px-5 text-start font-medium font-Lufga border-b-2 border-transparent mb-[-1px] !border-secondary" id="shoppingcart">سلة التسوق
                <span className="text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-1.1 px-0.5 bg-secondary text-white">{totalQty && totalQty}</span>
              </button>
            </li>
          </ul>
          <div className='pt-6'>
            <div className='flex flex-col min-h-[calc(100vh_-_80px)]'>
              <div className='h-full max-h-80 overflow-y-auto'>

              <ul>
                {cartArray.length > 0 && cartArray?.map((item) => (
                  <li key={item.id}>
                    <div className='py-5 border-b border-border'>
                      <div className="flex items-center justify-center">
                        <div className="size-20 rounded-3xl relative overflow-hidden ml-4">
                          <img src="/product.jpg" alt="" className="w-full" />
                        </div>
                        <div className="ml-5 flex-[1]">
                          <h6 className="mb-2 font-medium">
                            <Link href={`/product/${item.associatedModel.slug}`}> {item.name}</Link>
                          </h6>
                          {item.attributes.color !== 'null' &&                           
                          <h6 className="mb-2 font-medium"> {item.attributes.color}</h6>
                          }
                          <h6 className="mb-2 font-medium">X {item.quantity}</h6>
                          <div className="flex items-center">
                            <h6 className="font-medium"> {item.price} EGP</h6>
                          </div>
                        </div>
                        <span className="cursor-pointer size-7 flex items-center" onClick={() => dispatch(removeFromCartItem(item.id))}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>

                        </span>
                      </div>
                    </div>
                  </li>
                ))}

              </ul>
              </div>
              <div className="mt-auto">
                <Link href="/checkout" className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden text-center w-full mb-5">{translations.checkout}</Link>
                <Link href="/cart" className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden text-center w-full">{translations.viewcart} </Link>
              </div>
            </div>
          </div>
        </div>
      {/* Sidebar */}
      
    </>
  );
};

export default CartSidebar;