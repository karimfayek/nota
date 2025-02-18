
import { Link } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import "../custom-swiper.css";

export default function Categories({ cats, breakPoints, swiperSpcae, title = null }) {
    
    return (

        <div className="pt-10 px-5">
            <div className="container">
                {title !== null &&
                    <div className="flex justify-between mb-7.5">
                        <div className="left-content">

                            <h2 className="font-outfit font-medium text-4xl  mt-2">{title || 'Loading...'}
                            </h2>

                        </div>
                    </div>
                }


                <div className="swiper portfolio-slider overflow-visible mt-6 xl:mt-14 swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="swiper-wrapper" id="swiper-wrapper-9520635b310dd664a" aria-live="polite" >
                        <Swiper  key={JSON.stringify(breakPoints)} dir='rtl' className='mySwiper mt-10 mb-6' breakpoints={breakPoints} spaceBetween={swiperSpcae} pagination={{
                            type: "progressbar", // Enables the progress bar
                        }}
                            modules={[Pagination]}>
                            {cats && cats.map((pcat) => (
                                <SwiperSlide key={pcat.id}>

                                    <div  >
                                        <div className="group/portfolio-box">

                                            <div className="overflow-hidden relative rounded-2xl">
                                                <Link aria-label={pcat.name} href={`/category/${pcat.slug}`} className="group">
                                                    <img loading="lazy" className="w-full group-hover:scale-105 transition ease-custom duration-500" src="/cat1.jpg" alt={pcat.name} />
                                                </Link>
                                            </div>
                                            <div className="pt-6">
                                                <div className="mt-2">
                                                    <h2 className="text-right relative font-outfit font-medium text-3xl">
                                                        <Link aria-label={pcat.name} href={`/category/${pcat.slug}`} className="text-center text-sm group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200" >
                                                            <span className=" absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                                                </svg>


                                                            </span>{pcat.name}
                                                        </Link>
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
            </div>
        </div>
    )

}