'use client'

import { useAuth } from '@/app/lib/context/AuthContext';
import Nav from "./Nav"
import MenuDesktopHeader from './MenuDesktopHeader';

export default function MenuDesktop() {

    const {user} = useAuth();

    return (
        <section className="hidden lg:flex w-80 h-screen max-h-screen bg-gray-dark flex-col">
            <MenuDesktopHeader />
            <div className='grow'>
                {user && <Nav />}
            </div>
            <footer className='flex justify-center p-4'>
                <small className=' text-white'> Design & developed by AntoineGrb </small>
            </footer>
        </section> 
    )
}