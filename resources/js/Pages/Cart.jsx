import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartItem, updateCart } from '@/slices/cartSlice';
import BreadCrumb from '@/Components/BreadCrumb';
import { Link, usePage } from '@inertiajs/react';
export default function Cart() {

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
    // const itemsN = category?.children.length > 6 ? 7 :  category?.children.length
    const handleQuantityChange = (id, qty) => {
        dispatch(updateCart(id, qty))
    };


    return (
        <>
            <BreadCrumb name={translations.cart} />

            <div className="container mx-auto p-4">
                {cartArray.length > 0 &&
                    <div className='flex flex-col md:flex md:flex-row justify-between w-full'>
                        <div className=' w-full md:w-[59.0362%]'>


                            {cartArray.map((item) => (
                                <div className='flex flex-col gap-6 mb-4'>
                                    <div className='flex bg-white p-3 relative flex-col gap-6'>
                                        <div className='flex gap-6 justify-between'>
                                            <div className='flex gap-6'>
                                                <div className='product-image h-[140px] w-[98px] relative'>
                                                    <Link href={`/product/${item.associatedModel.slug}`} >
                                                        <img
                                                            src='/product.jpg'
                                                            alt={item.name}
                                                            className="w-full h-full absolute" />
                                                    </Link>
                                                </div>
                                                <div className='product-info flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <span className='text-[#686e7d] text-xs'>{item.name}</span>
                                                        <Link href={`/product/${item.associatedModel.slug}`} className='text-xl'>{item.name}</Link>
                                                        <div className='flex flex-col'>
                                                            <div className='flex flex-col gap-2'>
                                                                <span className='flex flex-col gap-2'>
                                                                    <span className='text-base'>{item.price} ج.م</span>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className='flex flex-col '>
                                                            {item.attributes.color !== 'null' &&
                                                                <span class="mb-2 font-medium text-[#3d4750]"> {item.attributes.color}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-6 max-h-[140px]'>
                                                <div className='delete-item flex text-left justify-end'>
                                                    <span className='cursor-pointer' style={{ height: '2.4rem', width: '2.4rem' }} onClick={() => dispatch(removeFromCartItem(item.id))}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>

                                                    </span>
                                                </div>
                                                <div>

                                                    <select
                                                        id={`quantity-${item.id}`}
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    >
                                                        {Array.from(
                                                            {
                                                                length: item.associatedModel.max_req === 0 ? 100 : item.associatedModel.max_req - Math.max(item.associatedModel.min_req, 1) + 1
                                                            },
                                                            (_, i) => i + Math.max(item.associatedModel.min_req, 1)
                                                        ).map((qty) => (
                                                            <option key={qty} value={qty}>
                                                                {qty}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className=' w-full md:w-[38.5543%]'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='text-3xl'>{translations.ordersumary}</h2>
                                <div className='summary bg-white p-4'>
                                    <div className='flex items-center justify-between'>
                                        <span>{translations.subtotaltrans}</span>
                                        <span>ج.م{subTotal?.toFixed(2)}</span>
                                    </div>
                                    <hr style={{ margin: '1rem 0' }} />
                                    <div className='flex items-center justify-between'>
                                        <span className='font-bold'>{translations.total}</span>
                                        <span>ج.م{total?.toFixed(2)}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-xs'>{translations.exdelever}</span>
                                        <span className='text-xs'>{translations.incltax}</span>
                                    </div>
                                </div>
                                <div className='fixed md:relative shadow-sm bottom-0 left-0 right-0 w-full bg-white'>
                                    <Link href="/checkout" className='my-4 w-full bg-black flex items-center justify-center h-[3rem]'>
                                        <span className='text-white w-full text-center'>
                                            {translations.checkout}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {cartArray.length < 1 &&
                    <div className='flex items-center justify-center bg-white p-6'>
                        {translations.cartempty}
                    </div>
                }

            </div>




        </>


    )
}