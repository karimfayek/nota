import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
export default function About({ galleries }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  return (
    <div className="sm:px-8 mt-16 sm:mt-32 mx-auto w-full max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12 mb-20">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover "
                  src="/images/salt.jpg" style={{ color: 'transparent' }} />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl ">Egyptian Lebanese company for food industry</h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 ">
                <p>Our company establish in 2005 as first private salt
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
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <li className="flex">
                  <a className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500" href="https://x.com/ElfiSalt">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                    </svg>
                    <span className="ml-4">Follow on X</span>
                  </a>
                </li>
                <li className="flex mt-4">
                  <a className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500" href="https://www.facebook.com/profile.php?id=61563373169918">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 16 16">
<path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path>
</svg>
                    <span className="ml-4">Follow on Facebook</span>
                  </a>
                </li>

                <li className="mt-4 flex">
                  <a className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 " href="https://eg.linkedin.com/in/elfi-salt-24655031b">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                    <span className="ml-4">Follow on LinkedIn</span>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleries.map((image, index) => (
        <img
          key={image.id}
          src={"/storage/galleries/" + image.image}
          alt={image.seo_kw}
          className="cursor-pointer rounded shadow"
          onClick={() => openLightbox(index)}
        />
      ))}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleries.map((img) => ({ src: "/storage/galleries/" + img.image}))}
          index={currentIndex}
        />
      )}
    </div>
    
    </div>
  )
}