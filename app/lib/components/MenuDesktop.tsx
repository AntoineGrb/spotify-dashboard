'use client'

import { useAuth } from '@/app/lib/context/AuthContext';
import Nav from "./Nav"
import MenuDesktopHeader from './MenuDesktopHeader';

export default function MenuDesktop() {

    const {user} = useAuth();

    return (
        <section className="hidden lg:flex lg:flex-col w-[380px] h-screen max-h-screen bg-gray-dark ">
            <MenuDesktopHeader />
            <div className='w-full grow'>
                {user && <Nav />}
            </div>
            <footer className='w-full flex justify-center p-4'>
                <small className=' text-white'> Design & developed by AntoineGrb </small>
            </footer>
        </section> 
    )
}