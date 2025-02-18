import { Link, Head } from '@inertiajs/react';
export default function Blogs({blogs}) {
    return (
        <>
         <Head title="Blog" />
         <main className="w-full flex-auto">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div style={{ opacity: 1, transform: 'none' }}>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">Blog</span>
          <span className="sr-only"> - </span>
          <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">The latest articles and news</span>
        </h1>
        <div className="mt-6 max-w-3xl text-xl text-neutral-600">
          <p>Stay up-to-date with the latest industry news .</p>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="space-y-24 lg:space-y-32">
        <div style={{ opacity: 1, transform: 'none' }}>
            {blogs && blogs.map((blog)=>{
               const formattedDate = new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
      
              const datetime = new Date(blog.created_at).toISOString().split('T')[0];
              return (
<>
                 <article key={blog.id}>
                    <div className="py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                            <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                    <Link href={"/blogpost/" + blog.slug}>{blog?.title}</Link>
                                </h2>
                                <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                    <dt className="sr-only">Published</dt>
                                    <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                                    <time dateTime={datetime}>{formattedDate}</time>
                                    </dd>
                                    <dt className="sr-only">Author</dt>
                                    <dd className="mt-6 flex gap-x-4">
                                        <div className="overflow-hidden rounded-xl bg-neutral-100">
                                            <img style={{maxHeight:244}}  alt="" loading="lazy" width="1800" height="1800" decoding="async" data-nimg="1" className=" object-cover " src={'/storage/blogs/' + blog?.image} />
                                        </div>

                                    </dd>
                                </dl>
                                <p className="mt-6 max-w-2xl text-base text-neutral-600" > {blog?.content.replace(/<[^>]+>/g, '').slice(0, 500)}...</p>
                                <Link className="mt-8 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" aria-label="Read more: The Future of Web Development: Our Predictions for 2023" href={"/blogpost/" + blog.slug}>
                                    <span className="relative top-px">Read more</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
                
                    </>
              )
                 
            })}
          
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
