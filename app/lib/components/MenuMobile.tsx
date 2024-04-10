'use client'

import { CircleX } from 'lucide-react';
import Nav from '@/app/lib/components/Nav';

interface MenuMobileProps { 
    isActive: boolean;
    closeMenu: () => void;
}

export default function MenuMobile({isActive, closeMenu}: MenuMobileProps) {

    //! Ajouter une animation déroulante du menu

    return (
        isActive && (
            <section className={`fixed top-0 right-0 w-72 h-full pt-8 pb-2 z-10 bg-gray-dark shadow-lg flex flex-col lg:hidden transition-all ease-in-out duration-700 ${isActive ? 'max-w-72' : 'max-w-0'}`}>
                <header className='flex justify-end pb-10 pr-4'>
                    <CircleX color='white' size={28} cursor={'pointer'} onClick={closeMenu} />
                </header>
                <div className='grow'>
                    <Nav closeMenu={closeMenu} />
                </div>
                <footer className='flex justify-center'>
                    <small className=' text-white'> Design & developed by AntoineGrb </small>
                </footer>
            </section>
        )
       
    )
}