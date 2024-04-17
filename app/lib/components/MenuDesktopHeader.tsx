import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

export default function headerMenuDesktop() {

    const { user, logout } = useAuth();
    let userImage: string = '';
    if (user && user.images[1]) {
        userImage = user.images[1].url;
    }

    return (
        <header className="w-full py-8 pt-8 pb-12 flex flex-col gap-3 justify-center items-center">
            <div 
                className='w-24 h-24 rounded-full bg-white'
                style={{backgroundImage: `url(${userImage ? userImage : ''})`, backgroundSize: 'cover'}}    
            >
            </div>
            <div className='flex gap-3 items-center'>
                <p className=" text-xl"> { user ? user.display_name : 'Connexion requise'} </p>
                {user && <LogOut color='white' size={18} onClick={logout} cursor={'pointer'} xlinkTitle='Log out'/>}
            </div>

        </header>
    )
}