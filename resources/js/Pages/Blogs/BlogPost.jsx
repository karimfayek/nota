import MetaTags from "@/Components/MetaTags"
import { Link, Head } from '@inertiajs/react';
export default function BlogPost({ BlogPost }) {
  return (
    <>
    
    <Head title={BlogPost?.title} />
    <MetaTags title={BlogPost?.title} description={BlogPost?.content} keywords={BlogPost?.seo_kw} image_url={'/storage/blogs/' + BlogPost?.image}  url={'https://elfisalt.com/blogpost/' + BlogPost?.slug }/>
    <section class="wrapper !bg-[#edf2fc]">
      <div class="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="post-header !mb-[.9rem]">
           

              <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4">{BlogPost?.title}</h1>
           

            </div>

          </div>

        </div>

      </div>

    </section>
      <section class="wrapper !bg-[#ffffff]">
        <div class="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
          <div class="flex flex-wrap mx-[-15px]">
            <div class="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div class="blog single !mt-[-7rem]">
                <div class="card">
                  <figure class="card-img-top"><img src={'/storage/blogs/' + BlogPost?.image} alt={BlogPost.seo_kw ? BlogPost.seo_kw : BlogPost.title}/>

                  </figure>
                  <div class="card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]">
                    <div class="classic-view">
                      <article class="post mb-8">
                        <div class="relative mb-5"  dangerouslySetInnerHTML={{ __html: BlogPost?.content }}>
                         
                        </div>

                      </article>
                    </div>




                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}