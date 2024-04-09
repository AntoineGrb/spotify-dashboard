'use client'

import { CircleX } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import Nav from '@/app/lib/components/Nav/Nav';


interface MenuMobileProps { 
    isActive: boolean;
    closeMenu: () => void;
}

export default function MenuMobile({isActive, closeMenu}: MenuMobileProps) {

    const isMobile = useMediaQuery('(max-width: 1024px)');

    //! Ajouter une animation déroulante du menu

    return (
        isActive && isMobile && (
            <section className={`fixed top-0 right-0 w-72 h-full z-10 bg-gray-dark shadow-lg flex flex-col pt-8 pb-2 transition-all ease-in-out duration-700 ${isActive ? 'max-w-72' : 'max-w-0'}`}>
                <header className='flex justify-end pb-10 pr-4'>
                    <CircleX color='white' size={28} cursor={'pointer'} onClick={closeMenu} />
                </header>
                <Nav closeMenu={closeMenu} />
                <footer className='flex justify-center'>
                    <small className=' text-white'> Design & developed by AntoineGrb </small>
                </footer>
            </section>
        )
       
    )
}