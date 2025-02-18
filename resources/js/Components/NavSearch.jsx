export default function NavSearch() {
    return (
        <div className="bg-white h-400 h-[160px] px-[75px] w-full">
            <div class="mb-[45px] max-lg:mb-10 widget_search">
                <div class="mb-10">
                    <div class="relative flex flex-wrap items-stretch w-full mb-5">
                        <input name="dzSearch" required="required" type="search" class="bg-light border border-secondary flex-auto mt-10 outline-none px-4 py-3 rounded-xl text-2sm w-[1%]" placeholder="Search Product" />
                        <div class="absolute left-0 ml-12 mt-1 top-1/2 z-9">
                            <button name="submit" value="Submit" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}