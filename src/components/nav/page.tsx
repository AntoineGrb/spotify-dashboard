import Link from 'next/link';
import { CircleX, Home, History, User, Disc3, ListMusic } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Nav() {

    const pathname = usePathname();
    
    return (
        <nav className=' grow'>
            <ul className='flex flex-col'>
                <Link href={`/dashboard`} className={`link ${pathname === '/dashboard' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Home size={24} color={`${pathname === '/dashboard' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/dashboard' ? 'text-green' : 'white'}`}>DASHBOARD</h2>
                    </li>
                </Link>
                <Link href={`/recently-played`} className={`link ${pathname === '/recently-played' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <History size={24} color={`${pathname === '/recently-played' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/recently-played' ? 'text-green' : 'white'}`}>RECENTLY PLAYED</h2>
                    </li>
                </Link>
                <Link href={`/top-artists`} className={`link ${pathname === '/top-artists' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <User size={24} color={`${pathname === '/top-artists' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/top-artists' ? 'text-green' : 'white'}`}>TOP ARTISTS </h2>
                    </li>
                </Link>
                <Link href={`/top-tracks`} className={`link ${pathname === '/top-tracks' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Disc3 size={24} color={`${pathname === '/top-tracks' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/top-tracks' ? 'text-green' : 'white'}`}>TOP TRACKS</h2>
                    </li>
                </Link>
                <Link href={`/playlists`} className={`link ${pathname === '/playlists' && 'bg-gray-mid'} hover:bg-gray-light`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <ListMusic size={24} color={`${pathname === '/playlists' ? '#1DB954' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${pathname === '/playlists' ? 'text-green' : 'white'}`}>PLAYLISTS</h2>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}