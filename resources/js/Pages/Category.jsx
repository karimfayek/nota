import Categories from "@/Components/Categories"
import Products from "@/Components/Products"
import { Link } from "@inertiajs/react"
import { useSelector } from "react-redux";


export default function Category({ category,  products, minPrice, maxPrice, keywords }) {

   // const itemsN = category?.children.length > 6 ? 7 :  category?.children.length
    const breakpointsProducts = {
        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: category?.children.length > 6 ? 7 : category?.children.length || 1,
        },
    }
    
  const translations = useSelector((state) => state.translations.translations);
    return (
        <div>
            <div class="before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]">
                <div class="container relative z-1 table h-full">
                    <div class="text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]">
                        <h1 class="mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white"> {category.name}
                        </h1>
                        <nav>
                            <ul class="text-white">
                                <li class="mr-[3px] inline-block text-base font-medium"><Link href="/" class="text-white"> {translations.home}</Link></li>
                                <li class="mr-[3px] pl-2 inline-block text-base font-medium ">/</li>
                                <li class="mr-[3px] inline-block text-base font-medium"><Link href={route('cats.show')} class="text-white"> {translations.depts}</Link></li>
                                <li class="mr-[3px] pl-2 inline-block text-base font-medium ">/</li>
                            <li class="mr-[3px] pl-2 inline-block text-base font-medium "> {category.name}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <>
            {category?.children.length > 0 && 
             <Categories cats = {category?.children} breakPoints={breakpointsProducts} swiperSpcae={30} />
            }
            </>
           
          <hr />
           { products.data.length > 0 ? 
           
           <Products products={products.data}  swiperSpcae={30} breakPoints={breakpointsProducts}  p="pt-10 px-5" />
           :
           <div className='mt-10 flex items-center justify-center bg-white p-6'>
             {translations.noproducts}
         </div>
           }
       
        </div>
    )
}