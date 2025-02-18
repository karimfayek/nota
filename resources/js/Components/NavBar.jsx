import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, removeFromCartItem } from '@/slices/cartSlice';
import NavSearch from './NavSearch';
import CartSidebar from './CartSidebar';

import { Inertia } from '@inertiajs/inertia';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const translations = useSelector((state) => state.translations.translations);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isLoading = useSelector((state) => state.cart.loading);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const total = useSelector((state) => state.cart.total);
  const error = useSelector((state) => state.cart.error);
  const copyCart = { ...cart };
  const cartArray = Object.values(copyCart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { auth } = usePage().props;

  const profileRoute = auth.guard === 'seller'
    ? route('seller.profile.edit')
    : route('company.profile.edit');
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  useEffect(
    () => {
      dispatch(fetchCart());
    }, [cartArray.length]
  );
  useEffect(() => {
    // Listen for Inertia navigation events
    const unlisten = Inertia.on('navigate', (event) => {
      setDropdownOpen(false); // Close the sidebar when navigation occurs
    });

    // Clean up the listener when the component unmounts
    return () => {
      unlisten();
    };
  }, [toggleDropdown]);
  return (


    <header className="sticky top-0 bg-transparent  top-0 left-0 w-full z-50">
      <div className=" bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center relative w w-48">
            <Link href="/">
              <img src="/logo.png" alt="logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>
          <div className="lg:hidden flex items-center gap-x-6">

            {/* Cart Icon */}
            <Link href="/cart" className="cart flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary">
              <span className='text-red-600'>{totalQty && totalQty}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>


            </Link>

            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="seaarch flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary">
              {isSearchOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
            </button>

          </div>
          {/* Hamburger Button for Mobile */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-secondary rounded-full"
            type="button"
          >
            {isMenuOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            }


          </button>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40">
              <ul className="flex flex-col items-center py-4 space-y-4">
                <li>
                  <Link href="/" className="text-gray-800 hover:text-secondary">
                    {translations?.home || 'Home'}
                  </Link>
                </li>
                <li>
                  <Link href={route('cats.show')} className="text-gray-800 hover:text-secondary">
                    {translations?.depts || 'Departments'}
                  </Link>
                </li>
                <li>
                  <Link href={route('cats.show')} className="text-gray-800 hover:text-secondary">
                    {translations?.sales || 'Departments'}
                  </Link>
                </li>
                <li>
                  <Link href="shop-my-account.html" className="text-gray-800 hover:text-secondary">
                    {translations?.loginReg || 'Loading'}
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Navbar */}
          <div className="hidden lg:flex flex-grow justify-start">
            <ul className="flex gap-x-6 text-gray-800 font-medium">
              <li>
                <Link href="/" className="hover:text-secondary">
                  {translations?.home || 'Loading...'}
                </Link>
              </li>
              <li>
                <Link href={route('cats.show')} className="hover:text-secondary">
                  {translations?.depts || 'Loading...'}
                </Link>
              </li>
              <li>
                <Link href={route('sales.show')} className="hover:text-secondary">
                  {translations?.sales || 'Loading...'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right-Side Extra Navigation */}
          <div className="gap-4 hidden lg:flex ml-12 relative">
            {auth.user ?
              <Link onClick={toggleDropdown}
                href={profileRoute}
                className="text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary"
              >
                {translations.profile || 'Loading...'}
              </Link>
              :


              <>
                <span onClick={toggleDropdown}

                  className="cursor-pointer text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary"
                >
                  {translations.register || 'Loading...'}
                </span>
                <Link href="/login"

                  className="cursor-pointer text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary"
                >
                  {translations.login || 'Loading...'}
                </Link>

              </>
            }

            {dropdownOpen && !auth.user && (
              <><div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`}
                onClick={toggleDropdown}
              ></div><div
                className="z-40 absolute top-1/2 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"

              >
                  <Link
                    href="/seller/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {translations.mktba}
                  </Link>
                  <Link
                    href="/company/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {translations.co}
                  </Link>

                </div></>
            )}
          </div>
          <div className="hidden lg:flex items-center gap-x-6">

            {/* Cart Icon */}
            <button onClick={() => setIsCartOpen(true)} className="cart flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary">
              <span className='text-red-600'>{totalQty && totalQty}</span>
              {cartOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              }

            </button>

            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="seaarch flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary">
            {isSearchOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
}
            </button>

          </div>
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {
        cartOpen &&
        <div className='absolute bg-gray-800 flex-grow left-0 max-sm:px-3.6 max-sm:py-13.5 overflow-y-auto px-[75px] py-14.5  text-white'>

          <ul className="flex flex-wrap justify-center border-b border-[#D7D7D7]" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="w-full py-2.5 px-5 text-start font-medium font-Lufga border-b-2 border-transparent mb-[-1px] !border-secondary" id="shoppingcart">سلة التسوق
                <span className="text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-1.1 px-0.5 bg-secondary text-white">{totalQty && totalQty}</span>
              </button>
            </li>
          </ul>
          <div className='pt-6'>
            <div className='flex flex-col min-h-[calc(100vh_-_190px)]'>
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

      }
      {
        isSearchOpen &&
        <NavSearch />
      }
    </header >


  );
}

export default Navbar;