import { Link } from '@inertiajs/react';


import { useSelector } from 'react-redux';
export default function BreadCrumb({name}){

    const translations = useSelector((state) => state.translations.translations);
    return (
     
     <div className='p-6'>
        <ol className='flex items-center flex-warp list-none'>
            <li>
                <Link href="/">
                {translations.home}
                </Link>
            </li>
            <li><span className='ml-1 mr-1'>/</span></li>
            <li><span className='text-[#686e7d]'>{name}</span></li>
        </ol>
     </div>
    )
}