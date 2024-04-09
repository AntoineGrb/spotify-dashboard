import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { useAuth } from '@/app/lib/context/AuthContext';
import Nav from "../nav/page"
import HeaderMenuDesktop from '../HeaderMenuDesktop/HeaderMenuDesktop';

export default function MenuDesktop() {

    const {user} = useAuth();
    const isMobile = useMediaQuery('(max-width: 1024px)');

    useEffect(() => {
        console.log('user state change' , user);
        if (!user) {
            console.log('no user');
        }
    },[user])

    return (
        !isMobile && (
            <section className="w-80 h-screen max-h-screen bg-gray-dark flex flex-col">
                <HeaderMenuDesktop />
                {user && <Nav />}
                <footer className='flex justify-center p-4'>
                    <small className=' text-white'> Design & developed by AntoineGrb </small>
                </footer>
            </section> 
        )
    )
}