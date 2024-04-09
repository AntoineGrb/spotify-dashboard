import { useMediaQuery } from 'usehooks-ts';
import Nav from "../nav/page"
import HeaderMenuDesktop from '../headerMenuDesktop/page';

export default function MenuDesktop() {

    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        !isMobile && (
            <section className="w-80 h-screen max-h-screen bg-gray-dark flex flex-col">
                <HeaderMenuDesktop />
                <Nav />
                <footer className='flex justify-center p-4'>
                    <small className=' text-white'> Design & developed by AntoineGrb </small>
                </footer>
            </section> 
        )
    )
}