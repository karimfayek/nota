import { Link, Head, usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import { useState, useEffect } from 'react';
import "../custom-swiper.css";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/slices/cartSlice';
import {fetchData}  from '@/Utils/fetchData';
import Categories from '@/Components/Categories';
import Products from '@/Components/Products';
export default function Welcome({  banners, keywords, blogs }) {
   const {auth} = usePage().props
    const [parentCats, setParentCats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saleProducts, setSaleProducts] = useState([]);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const { products } = usePage().props;
    const handleAdd = (id) => {
        dispatch(addToCart(id));
    };
    useEffect(() => {
        const fetchDataFromApi = async () => {
            setLoading(true)
            try {
                const apiEndpoint = '/api/parent-cats'; 
                const fetchsales = '/api/sale-products';// Laravel API route
                const result = await fetchData(apiEndpoint);
                const salesResult = await fetchData(fetchsales);
                setParentCats(result);
                setSaleProducts(salesResult);
                console.log(salesResult ,'salesResult')
            } catch (err) {
                setError(err.message);
            }
            setLoading(false)
        };

        fetchDataFromApi();
    }, []);
    const translations = useSelector((state) => state.translations.translations);
    const title = 'home Pgae'
    const description = 'notah is ....'
    const image_url = "http://notah.com/logonobg.png"
    const url = "http://notah.com/"

    const breakpointsProducts = {

        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: saleProducts.length > 6 ? 7 : saleProducts.length || 1,
        },
    }

    const breakpointsDepts = {

        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: parentCats.length > 6 ? 7 : parentCats.length || 1,
        },
    }

    return (
        <>
            <Head title="Home Page" />
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
            </Head>
            {error && error}
            <Swiper className='owl-theme' dir="rtl" pagination={{
                type: "progressbar", // Enables the progress bar
            }}
                modules={[Pagination]}  >
                {banners && banners.map((banner) => (
                    <SwiperSlide key={banner.id}>

                        <div className='item slider' >
                            <div className="relative text-center">
                                <Link href={banner?.url}>
                               
                                <img loading="lazy" src={`/storage/banners/${banner.full}`} alt="Slide 1" className="w-full h-auto" />
                                <div className="text-white z-10 absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 ">
                                    <h2 className="text-3xl md:text-4xl font-bold">{banner?.name}</h2>
                                    <p className="text-sm md:text-lg mt-2">{banner?.description}</p>
                                </div>
                                </Link>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {loading && 
            <div className='flex items-center justify-center min-h-[250px]'>
                <p>loading ....</p>
            </div>
            }
            {auth.user &&  !loading &&
            
            <Products products={saleProducts}  title={translations?.sales}  swiperSpcae={30} breakPoints={breakpointsProducts} swipe p="pt-10 px-5"/>
            }
            {loading ? 
             <div className='flex items-center justify-center min-h-[250px]'>
             <p>loading ....</p>
         </div>
         :

            <Categories cats = {parentCats} breakPoints={breakpointsDepts} swiperSpcae={30} title={translations.depts}/>
        }

            
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                 .item .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .3);
                }
               
                .item.slider:before {
                    content: "";
                    position: absolute;
                    background: #000;
                    width: 100%;
                    height: 100%;
                    opacity: .3;
                    z-index: 1;
                }
                .item.slider{
                    position : relative
                }
              
                .owl-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px; /* Space between dots */
                    margin-top:25px
                }
                
                .owl-dot span {
                    display: block;
                    width: 20px !important;
                    height: 4px !important; /* Height for all dots */
                    background-color: #ccc; /* Default color for inactive dots */
                    border-radius: 2px !important; /* Optional: rounding for line ends */
                    transition: all 0.3s ease !important; /* Smooth transition for width and color */
                    margin: 0  !important;
                }
                
                .owl-dot.active span {
                    width: 40px !important; /* Width for the active dot */
                    background-color: #333; /* Color for the active dot */
                }
                .owl-nav {
                    position: absolute;
                    top: 50%; /* Center vertically */
                    width: 100%; /* Span the slider's width */
                    display: flex;
                    justify-content: space-between; /* Place arrows on the far left and right */
                    transform: translateY(-50%); /* Adjust for centering */
                    pointer-events: none; /* Prevent overlay issues */
                }
                
                .owl-nav .owl-prev,
                .owl-nav .owl-next {
                    pointer-events: all; /* Enable clicking */
                    width: 40px;
                    height: 40px;
                    background-color:rgb(113 0 10 / 50%) !important; /* Semi-transparent background */
                    border-radius: 50% !important; /* Circular shape */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white !important; /* Arrow color */
                    font-size: 20px !important; /* Arrow size */
                    opacity: 0.8; /* Slight transparency */
                    transition: all 0.3s ease;
                }
                
                .owl-nav .owl-prev:hover,
                .owl-nav .owl-next:hover {
                    background-color:rgb(113 0 10 / 70%) !important  !important; /* Darker on hover */
                    opacity: 1; /* Fully opaque */
                }
                
                .owl-nav .owl-prev {
                    position: absolute;
                    left: 0; /* Move left arrow slightly out of the slider */
                }
                
                .owl-nav .owl-next {
                    position: absolute;
                    right: 0; /* Move right arrow slightly out of the slider */
                }
                
                /* Use Unicode thin arrow icons */
                .owl-nav .owl-prev::before {
                    content: '\\2190'; /* Left arrow symbol */
                }
                
                .owl-nav .owl-next::before {
                    content: '\\2192'; /* Right arrow symbol */
                }
                .owl-nav span{
                    display:none
                }
            `}</style>
        </>
    );
}
