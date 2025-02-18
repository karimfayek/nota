
import { Link } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import "../custom-swiper.css";

import { useSelector } from 'react-redux';
export default function Products({ products, breakPoints, swiperSpcae, title = null, p = null, swipe = false }) {

    const translations = useSelector((state) => state.translations.translations);
    return (
        <div className={p == null ? '' : p} >
            <div className="container">
                {title !== null &&

                    <div className="flex justify-between mb-7.5">
                        <div className="left-content">

                            <h2 className="font-outfit font-medium text-4xl  mt-2">{title}
                            </h2>

                        </div>
                        <Link href={route('sales.show')} className='text-secondary text-sm flex items-center gap-1'>{translations?.seeall || 'Loading...'}</Link>
                    </div>
                }
                {swipe ?

                    <div className="swiper portfolio-slider overflow-visible mt-6 xl:mt-14 swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <div className="swiper-wrapper" id="swiper-wrapper-9520635b310dd664a" aria-live="polite" >
                            <Swiper key={JSON.stringify(breakPoints)} className='mt-10 mb-6' spaceBetween={swiperSpcae} dir="rtl" breakpoints={breakPoints} pagination={{
                                type: "progressbar", // Enables the progress bar
                            }}
                                modules={[Pagination]}>
                                {products && products.map((product) => (
                                    <SwiperSlide key={product.id} >

                                        <div className="swiper-slide swiper-slide-prev">
                                            <div className="group/portfolio-box">

                                                <div className="overflow-hidden relative rounded-2xl">
                                                    <Link aria-label={product.name} href={`/product/${product.slug}`} className="group ">
                                                        <img loading="lazy" className="w-full group-hover:scale-105 transition ease-custom duration-500" src={`/storage/products/medium_photos/${product.FirstImage}`} alt={product.name} />
                                                    </Link>
                                                   
                                                </div>
                                                <div className="pt-6">



                                                    <div className="mt-2">
                                                        <h2 className="relative font-outfit font-medium text-3xl">
                                                            <div className="text-start  max-sm:p-2.5 flex justify-between"><h5 className="capitalize max-sm:text-sm max-xl:w-full text-sm w-[70%]">
                                                                <Link href={`/product/${product.slug}`} >{product.name}</Link></h5>
                                                                {product?.computed_price > 0 &&

                                                                    <h5 className="max-sm:text-2xs text-2xl">L.E {product.computed_price}</h5>
                                                                }
                                                            </div>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>




                        </div>

                    </div>
                    :
                    <div className='grid grid-cols-2 sm:grid-cols-7 gap-4 container'>
                       
                        {products && products.map((product) => (
                            <>
                             <div className="group/portfolio-box">

                            <div className="overflow-hidden relative rounded-2xl">
                                <Link aria-label={product.name} href={`/product/${product.slug}`} className="group ">
                                    <img loading="lazy" className="w-full group-hover:scale-105 transition ease-custom duration-500" src="/product.jpg" alt={product.name} />
                                </Link>
                               
                            </div>
                            <div className="pt-6">
                                <div className="mt-2">
                                        <h2 className="relative font-outfit font-medium text-3xl">
                                            <div className="text-start  max-sm:p-2.5 flex justify-between"><h5 className="capitalize max-sm:text-sm max-xl:w-full text-sm w-[70%]">
                                                <Link href={`/product/${product.slug}`}>{product.name}</Link></h5>
                                                {product?.computed_price > 0 &&

                                                    <h5 className="max-sm:text-2xs text-2xl">L.E {product.computed_price}</h5>}
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                             </div>
                                </>
                              ))}
                    </div>
                }
            </div>
        </div>
    )

}