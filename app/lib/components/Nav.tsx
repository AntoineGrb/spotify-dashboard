import Link from 'next/link';
import { CircleX, Home, History, User, Disc3, ListMusic } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavProps { 
    closeMenu?: () => void;
}

export default function Nav({closeMenu}: NavProps) {

    const pathname = usePathname();
    
    return (
        <nav>
            <ul className='flex flex-col'>
                <Link href={`/dashboard`} className={`link ${pathname === '/dashboard' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Home size={24} color={`${pathname === '/dashboard' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/dashboard' ? 'text-green' : 'white'}`} onClick={closeMenu}>DASHBOARD</h2>
                    </li>
                </Link>
                <Link href={`/top-artists`} className={`link ${pathname === '/top-artists' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <User size={24} color={`${pathname === '/top-artists' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/top-artists' ? 'text-green' : 'white'}`} onClick={closeMenu}> TOP ARTISTS </h2>
                    </li>
                </Link>
                <Link href={`/top-tracks`} className={`link ${pathname === '/top-tracks' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Disc3 size={24} color={`${pathname === '/top-tracks' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/top-tracks' ? 'text-green' : 'white'}`} onClick={closeMenu}>TOP TRACKS</h2>
                    </li>
                </Link>
                <Link href={`/recently-played`} className={`link ${pathname === '/recently-played' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <History size={24} color={`${pathname === '/recently-played' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/recently-played' ? 'text-green' : 'white'}`} onClick={closeMenu}>RECENTLY PLAYED</h2>
                    </li>
                </Link>
                <Link href={`/playlists`} className={`link ${pathname === '/playlists' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <ListMusic size={24} color={`${pathname === '/playlists' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/playlists' ? 'text-green' : 'white'}`} onClick={closeMenu}>PLAYLISTS</h2>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}