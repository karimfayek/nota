import { Link, Head } from '@inertiajs/react';
export default function Researches({ blogs }) {
    return (
        <>
            <Head title="Blog" />
            <main className="w-full flex-auto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div style={{ opacity: 1, transform: 'none' }}>
                            <h1>
                                <span className="block font-display text-base font-semibold text-neutral-950">Researches</span>
                                <span className="sr-only"> - </span>
                                <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">Researches and news</span>
                            </h1>

                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="space-y-24 lg:space-y-32">
                            <div style={{ opacity: 1, transform: 'none' }}>
                            <article>
                                    <div className="py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                        <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                            <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                                    <Link href={"/blogpost/"} ></Link>
                                                </h2>
                                                <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">



                                                    <dd className="mt-6 flex gap-x-4">
                                                        <div className="overflow-hidden rounded-xl">
                                                            <img style={{ maxHeight: 128 }} alt="" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className=" object-cover " src={'/pdficon.png'} />
                                                        </div>

                                                    </dd>
                                                </dl>
                                                <p className="mt-6 max-w-2xl text-base text-neutral-600" >Development of a Process to Manufacture High Quality Refined Salt from Crude Solar Salt</p>
                                                <a className="mt-8 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                                                    aria-label="Read more: The Future of Web Development: Our Predictions for 2023"
                                                    href="/4346C0114189.pdf">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"></path>
                                                    </svg>
                                                    <span>Download</span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                        <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                            <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                                    <Link href={"/blogpost/"} ></Link>
                                                </h2>
                                                <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">



                                                    <dd className="mt-6 flex gap-x-4">
                                                        <div className="overflow-hidden rounded-xl">
                                                            <img style={{ maxHeight: 128 }} alt="" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className=" object-cover " src={'/pdficon.png'} />
                                                        </div>

                                                    </dd>
                                                </dl>
                                                <p className="mt-6 max-w-2xl text-base text-neutral-600" >Purification of salt for chemical and human consumption </p>
                                                <a className="mt-8 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                                                    aria-label="Read more: The Future of Web Development: Our Predictions for 2023"
                                                    href="/Purification-of-salt-IM96.pdf">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"></path>
                                                    </svg>
                                                    <span>Download</span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12" style={{ opacity: 1, transform: 'translateY(24px) translateZ(0px)' }}>
                            <div className="mx-auto max-w-4xl">
                                <div className="max-w-xl">
                                    <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">Tell us about your project</h2>
                                    <div className="mt-6 flex">
                                        <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200" href="/contact">
                                            <span className="relative top-px">Say Hej</span>
                                        </a>
                                    </div>
                                    <div className="mt-10 border-t border-white/10 pt-10">
                                        <h3 className="font-display text-base font-semibold text-white">Our offices</h3>
                                        <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                            <li>
                                                <address className="text-sm not-italic text-neutral-300">
                                                    <strong className="text-white">Cairo</strong>
                                                    <br />1sdfsdf <br />1260, sdfsdf, sdf
                                                </address>
                                            </li>
                                            <li>
                                                <address className="text-sm not-italic text-neutral-300">
                                                    <strong className="text-white">Billund</strong>
                                                    <br />24 Lego Allé <br />7190, Billund, Denmark
                                                </address>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
