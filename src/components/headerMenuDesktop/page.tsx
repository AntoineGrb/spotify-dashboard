import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { getUserProfile } from '@/src/lib/data';

export default function headerMenuDesktop() {

    return (
        <header className="w-full py-8 pt-8 pb-12 flex flex-col gap-3 justify-center items-center">
            <div className='w-24 h-24 rounded-full bg-white'>
                {/* <Image src="" alt="profile picture" width={50} height={50} /> */}
            </div>
            <p className=" text-xl"> User Name </p>
            <Link href={'/api/auth/logout'}>
                <LogOut color='white' />
            </Link>

        </header>
    )
}