import Link from 'next/link';
import { CircleX, Home, History, User, Disc3, ListMusic } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavProps { 
    closeMenu?: () => void;
}

export default function Nav({closeMenu}: NavProps) {

    const pathname = usePathname();
    const isLinkActive = (path: string) => pathname?.startsWith(path)
    
    return (
        <nav>
            <ul className='flex flex-col'>
                <Link href={`/dashboard`} className={`link ${isLinkActive('/dashboard') && 'bg-stone-800'} hover:bg-stone-800/50`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Home size={24} color={`${isLinkActive('/dashboard') ? '#22c55e' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${isLinkActive('/dashboard') ? 'text-green-500' : 'white'}`} onClick={closeMenu}>DASHBOARD</h2>
                    </li>
                </Link>
                <Link href={`/top-tracks`} className={`link ${isLinkActive('/top-tracks') && 'bg-stone-800'} hover:bg-stone-800/50`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <Disc3 size={24} color={`${isLinkActive('/top-tracks') ? '#22c55e' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${isLinkActive('/top-tracks') ? 'text-green-500' : 'white'}`} onClick={closeMenu}>TOP TRACKS</h2>
                    </li>
                </Link>
                <Link href={`/top-artists`} className={`link ${isLinkActive('/top-artists') && 'bg-stone-800'} hover:bg-stone-800/50`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <User size={24} color={`${isLinkActive('/top-artists') ? '#22c55e' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${isLinkActive('/top-artists') ? 'text-green-500' : 'white'}`} onClick={closeMenu}> TOP ARTISTS </h2>
                    </li>
                </Link>
                <Link href={`/recently-played`} className={`link ${isLinkActive('/recently-played') && 'bg-stone-800'} hover:bg-stone-800/50`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <History size={24} color={`${isLinkActive('/recently-played') ? '#22c55e' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${isLinkActive('/recently-played') ? 'text-green-500' : 'white'}`} onClick={closeMenu}>RECENTLY PLAYED</h2>
                    </li>
                </Link>
                <Link href={`/playlists`} className={`link ${isLinkActive('/playlists') && 'bg-stone-800'} hover:bg-stone-800/50`}>
                    <li className='flex gap-3 items-center px-4 py-2'>
                        <ListMusic size={24} color={`${isLinkActive('/playlists') ? '#22c55e' : 'white'}`} />
                        <h2 className={`relative top-[2px] ${isLinkActive('/playlists') ? 'text-green-500' : 'white'}`} onClick={closeMenu}>PLAYLISTS</h2>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}