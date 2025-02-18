import Categories from "@/Components/Categories"
import { useSelector } from "react-redux";

import { Link } from "@inertiajs/react"

export default function CategoriesPage({ cats }) {

    const translations = useSelector((state) => state.translations.translations);
    // const itemsN = category?.children.length > 6 ? 7 :  category?.children.length


    return (
        <>
        <div class="before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]">
            <div class="container relative z-1 table h-full">
                <div class="text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]">
                    <h1 class="mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white"> {translations.depts}
                    </h1>
                    <nav>
                        <ul class="text-white">
                            <li class="mr-[3px] inline-block text-base font-medium"><Link href="/" class="text-white"> {translations.home}</Link></li>
                            <li class="mr-[3px] pl-2 inline-block text-base font-medium ">/</li>
                            <li class="mr-[3px] pl-2 inline-block text-base font-medium ">
                                {translations.depts}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div><div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

                <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 container">
                    {cats && cats.map((cat) => (

                        <div className="group/portfolio-box" key={cat.id}>
                            <div className="overflow-hidden relative rounded-2xl">
                                <Link aria-label={cat.name} className="group" href={route('category.show' , cat.slug)}>
                                    <img loading="lazy" className="w-full group-hover:scale-105 transition ease-custom duration-500"
                                        src="/cat1.jpg" alt={cat.name} />
                                </Link>
                            </div>
                            <div className="pt-6">
                                <div className="mt-2">
                                    <h2 className="text-right relative font-outfit font-medium text-3xl">
                                        <Link aria-label={cat.name} className="text-center text-sm group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200" href="/category/alaklam">
                                            <span className=" absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                                                </svg>
                                            </span>{cat.name} </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div></>
    )
}