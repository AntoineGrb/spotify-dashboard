import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const HeaderMobile = () => { 
    return (
        <header className='h-24 w-full px-5 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div className='w-12 h-12 rounded-full bg-white'>
                    {/* <Image src="" alt="profile picture" width={50} height={50} /> */}
                </div>
                <p> User Name </p>
            </div>
            <Menu size={24} color='white' />
        </header>
    )
}

export default HeaderMobile;