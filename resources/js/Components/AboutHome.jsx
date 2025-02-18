import { Link } from "@inertiajs/react"
export default function AboutHome() {
    return (
        <>
            <div className="mt-32 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest ">Who we are</h2>
                    <h3 className="mt-2 text-pretty text-4xl font-medium tracking-tighter  sm:text-6xl">Egyptian Lebanese company for food industry</h3>

                    <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="max-w-lg">
                            <p className="text-sm/6 text-gray-600">Our company establish in 2005 as first private salt
refinery in Egypt with partners from Egypt and
Lebanon for edible salt
We start with 20000 Mt production capacity we focus
on local market initially and at 2008 we spread out of
country and increase our capacity to be 50000 Mt
and introduce new products as industrial salt and salt
tablets , 2010 we open our factory in Lebanon and at
2013 we open our new factory in Tema ghana, 2017
we introduce salt speckles as new products and our
capacity increase to 170000 Mt , in 2022 our
capacity increased to 250000 per year </p>
                            
                            <div className="mt-6">
                                <Link className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40" data-headlessui-state="" href="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div className="max-lg:order-first max-lg:max-w-lg">
                            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img loading="lazy" alt="" src="/images/salt.jpg" className="block size-full object-cover" />
                            </div>
                        </div>
                    </div>
                   
                    <hr className="mt-6 border-t border-gray-200" />
                    
                </div>
            </div>
        </>
    )
}