import BreadCrumb from "@/Components/BreadCrumb"
import { Link, Head, usePage } from '@inertiajs/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { addToCartQty } from '@/slices/cartSlice';
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Products from "@/Components/Products";

import { useSelector, useDispatch } from 'react-redux';

export default function Product({ product, related, keywords }) {
    const [qty, setQty] = useState(product.min_req > 0 ? product.min_req : 1)
    const translations = useSelector((state) => state.translations.translations);
    const loading = useSelector((state) => state.cart.loading);
    const [selectedColor, setSelectedColor] = useState(null);
    const dispatch = useDispatch();

    const { auth } = usePage().props
    const title = product.name
    const description = product.description.replace(/<[^>]+>/g, '')
    const image_url = "https://elfisalt.com/storage/products/mobile_photos/" + product.FirstImage
    const url = 'https://elfisalt.com/product/' + product.slug
    const breakpointsProducts = {
        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    }
    const handleQtyChange = (v) => {
        if (v < 1) {
            return
        }
        if (product.min_req > 0 && v < product.min_req || product.max_req > 0 && v > product.max_req) {
            console.log('min req > 0')
            return
        }
        setQty(v)
        console.log(' outside ')


    }
    const handleAddToCart = (id) => {
      
        if (!selectedColor && product.colors.length > 0) {
            alert("Please select a color.");
            return;
        }
        dispatch(addToCartQty(qty, id, selectedColor));
        console.log('adding..')
        // Add product with selected color to cart
       
    };
    return (
        <>
            <Head title={product?.name} />
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image_url} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image_url} />
                <link rel="canonical" href={url} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": product.name,
                        "image": 'https://elfisalt.com/storage/products/mobile_photos/' + product.FirstImage,
                        "description": product.description.replace(/<[^>]+>/g, ''),
                        "brand": 'ELFI-Salt',
                        "review": {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": 5,
                                "bestRating": 5
                            }
                        }
                    })}
                </script>
            </Head>
            <BreadCrumb name={product?.name} />
            <section className="section-product py-[50px] max-[1199px]:py-[35px]">
                <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full mb-[-24px]">
                        <div className="w-full px-[12px] mb-[24px]">
                            <div className="bb-single-pro mb-[24px]">
                                <div className="flex flex-wrap mx-[-12px]">
                                    <div className="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
                                        <Swiper className='owl-theme mt-10' loop margin={10} nav items={1} >
                                            {product && product.images && product.images.map((image) => (
                                                <SwiperSlide>
                                                    <img loading="lazy" src={`/product.jpg`} key={image.id} />
                                                    {/* <img loading="lazy" src={`/storage/products/original_photos/${image.full}`} key={image.id} /> */}
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
                                        <div className="bb-single-pro-contact prose">
                                            <div className="bb-sub-title mb-[20px]">
                                                <h1 className="lg:text-4xl sm:text-3xl text-2xl mb-1">{product?.name}</h1>
                                                {product?.computed_price > 0 &&
                                                    <div className="mt-4 mb-4 font-medium text-2xl"> EGP {product.computed_price}
                                                        {product.sale_price > 0 &&
                                                            <del className="py-1.1 opacity-60 text-lg text-body">EGP {product.sale_price}</del>
                                                        }
                                                    </div>
                                                }
                                            </div>

                                            <p className="mb-4 text-2sm" dangerouslySetInnerHTML={{ __html: product?.short_des }}>

                                            </p>

                                            <div className="border-gray-400 border-t ">
                                                {product.min_req > 0 &&
                                                    <p>{translations.minreq} :  <b> {product.min_req}</b></p>
                                                }
                                                {product.max_req > 0 &&
                                                    <p>{translations.maxreq}  :  <b>{product.max_req} </b></p>
                                                }
                                            </div>
                                            {product.colors.length > 0 &&

                                                <><h3>{translations.color}: <span className="text-[#686e7d] text-base">{selectedColor ? selectedColor : <span className="text-[red]">{translations.selectcolor}</span>}</span></h3><div className="flex items-center gap-4 mb-6">

                                                    {product.colors.map((color) => (
                                                        <div
                                                            key={color.id}
                                                            className={`w-10 h-10 rounded-lg border-2 ${selectedColor === color.name
                                                                ? "border-gray-800"
                                                                : "border-gray-300"} cursor-pointer`}
                                                            style={{ backgroundColor: color.hex_code }}
                                                            onClick={() => setSelectedColor(color.name)}
                                                        ></div>
                                                    ))}
                                                </div></>
                                            }
                                            {product?.computed_price > 0 && auth.user &&
                                                <><div className=" flex items-start mt-3 pt-12 gap-2">

                                                    <input type="number" value={qty} onChange={(e) => handleQtyChange(e.target.value)} />

                                                    <button
                                                        onClick={() => handleAddToCart(product.id)}
                                                        disabled={!selectedColor && product.colors.length > 0 || loading}
                                                        className={` h-[2.7rem] border duration-700 font-medium hover:bg-gray-700 hover:text-white inline-block leading-[1.2] max-sm:text-sm  overflow-hidden relative text-center text-white w-full
                                                         ${selectedColor && product.colors.length > 0 || !selectedColor && product.colors.length < 1 || loading
                                                                ? "bg-black text-white"
                                                                : "bg-gray-300 text-gray-700 cursor-not-allowed"}`}
                                                    >
                                                        {translations.addtocart } { loading ? '..' : ''}
                                                    </button>

                                                </div>
                                                    {!selectedColor &&  product.colors.length > 0 && 
                                                        <div className="flex justify-end text-[red] text-sm">
                                                            <p className="m-[0]">{translations.selectcolor}</p>
                                                        </div>
                                                    }

                                                </>
                                            }
                                            {!auth.user &&
                                                <Link href="/login" className="bg-black text-white border duration-700 font-medium hover:bg-gray-700 hover:text-white inline-block leading-[1.2] max-sm:px-6 max-sm:text-sm mb-5 overflow-hidden px-7.5 py-3 relative text-center text-white w-full" >
                                                    {translations.login}
                                                </Link>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-related-product py-[50px] max-[1199px]:py-[35px] bg-[#f8f8fb]">
                <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full px-[12px]">
                            <div className="section-title mb-[20px] pb-[20px] z-[5] relative flex flex-col items-center text-center max-[991px]:pb-[0] ">
                                <div className="section-detail max-[991px]:mb-[12px]">
                                    <h2 className="bb-title  mb-[0] p-[0] text-[25px] font-bold  relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">{translations.relatedprs}</h2>

                                </div>

                            </div>

                        </div>
                        <div className="w-full ">

                            <Products products={related} swiperSpcae={30} breakPoints={breakpointsProducts} swipe />

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}