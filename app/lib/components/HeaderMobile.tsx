import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu } from 'lucide-react';
import { LogOut } from 'lucide-react';

interface HeaderMobileProps { 
    openMenu: () => void;
}

const HeaderMobile = ({openMenu}: HeaderMobileProps) => { 

    const { user, logout } = useAuth();

    return (
        <header className='h-24 w-full px-5 flex justify-between items-center lg:hidden'>
            <div className='flex items-center gap-2'>
                <div 
                    className='w-12 h-12 rounded-full bg-white'
                    style={{backgroundImage: `url(${user?.images[1].url})`, backgroundSize: 'cover'}}
                >
                </div>
                <p className='text-lg'> { user ? user.display_name : 'Connexion requise'} </p>
                {user && <LogOut color='white' size={18} onClick={logout} cursor={'pointer'}/>}
            </div>
            {user && <Menu size={24} color='white' onClick={openMenu} className=' cursor-pointer'/>}
        </header>
    )
}

export default HeaderMobile;