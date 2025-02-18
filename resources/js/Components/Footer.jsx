// resources/js/Components/Footer.jsx
import React from 'react';

import { useSelector } from 'react-redux';
import { Link, usePage } from '@inertiajs/react';
const Footer = () => {
  const translations = useSelector((state) => state.translations.translations);
  const {  configs , cats} = usePage().props; 
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40 border-t border-neutral-950/10 pt-12" >
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div >
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 ">
              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">{translations.depts}</div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                {cats && cats.map((cat) => (
                  <li  className="mt-4" key={cat.id}>
                    <Link href=""  className="transition hover:text-neutral-950" >{cat.name}</Link>
                    </li>
                  ))}
                  {cats && cats.length > 5 &&
                  <li  className="mt-4">
                  <Link href={route('cats.show')}  className="transition hover:text-neutral-950" >{translations.seeall}</Link>
                  </li>
                  }
                </ul>
              </li>
             
              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">{translations.followus}</div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  <li className="mt-4">
                    <a target="_blank" rel='no-follow' className="transition hover:text-neutral-950" href={configs && configs.social_facebook }><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg></a>
                  </li>
                  <li className="mt-4">
                    <a target="_blank" rel='no-follow' className="transition hover:text-neutral-950" href={configs && configs.social_twitter }>X</a>
                  </li>                 
                  <li className="mt-4">
                    <a target="_blank" rel='no-follow' className="transition hover:text-neutral-950" href={configs && configs.social_linkedin }>LinkedIn</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex lg:justify-end">
            <form className="max-w-sm">
              <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">Sign up for our newsletter</h2>
              <p className="mt-4 text-sm text-neutral-700">Subscribe to get the latest design news, articles, resources and inspiration.</p>
              <div className="relative mt-6">
                <input placeholder="Email address" autoComplete="email" aria-label="Email address" className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5" type="email" />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                  <button type="submit" aria-label="Submit" className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                    <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link aria-label="Home" href="/">
          <img src='/logo.png' style={{ maxWidth:100 }} loading="lazy" alt=" Logo"/>
          </Link>
          <p className="text-sm text-neutral-700">© {configs.site_name}. 2025</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
