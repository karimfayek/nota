import Products from "@/Components/Products";
import { fetchData } from "@/Utils/fetchData";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SalePage({auth , saleproducts}){
    
    const translations = useSelector((state) => state.translations.translations);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
console.log(saleproducts, 'saleprs')

   return (
<>
<div class="before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]">
                <div class="container relative z-1 table h-full">
                    <div class="text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]">
                        <h1 class="mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white"> {translations.sales}
                        </h1>
                        <nav>
                            <ul class="text-white">
                                <li class="mr-[3px] inline-block text-base font-medium"><Link href="/" class="text-white"> {translations.home}</Link></li>
                                <li class="mr-[3px] pl-2 inline-block text-base font-medium ">/</li>
                            <li class="mr-[3px] pl-2 inline-block text-base font-medium "> {translations.sales}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
{!saleproducts && 
    <div className='flex items-center justify-center min-h-[250px]'>
        <p>loading ....</p>
    </div>
    }
    {auth.user &&  saleproducts &&
    
    <Products products={saleproducts}   swiperSpcae={30}   p="pt-10 px-5"/>
    }
    {!auth.user && 
    <div className="flex items-center justify-center pt-12">
        <Link href="/login" className="bg-black px-5 py-3 text-white">{translations.login}</Link>
    </div>
    }
</>
   )
}