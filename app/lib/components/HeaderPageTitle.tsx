import React from 'react';
import { Home, History, User, Disc3, ListMusic } from 'lucide-react';

interface HeaderPageTitleProps { 
    title: string;
}

const HeaderPageTitle = ({title}: HeaderPageTitleProps) => { 

    const getIconWithTitle = (title: string) => { 
        switch (title) { 
            case 'Dashboard': 
                return <Home size={24} color='white' />;
            case 'Recently Played': 
                return <History size={24} color='white' />;
            case 'Top artists': 
                return <User size={24} color='white' />;
            case 'Top tracks': 
                return <Disc3 size={24} color='white' />;
            case 'Playlists': 
                return <ListMusic size={24} color='white' />;
            default: 
                return <Home size={24} color='white' />;
        }
    }

    return (
        <header className='flex gap-2 items-center justify-start pb-16'>
            <div className='w-10 h-10 rounded-md border flex justify-center items-center relative top-[-2px]'>
                {getIconWithTitle(title)}
            </div>
            <h1> {title} </h1>
        </header>
    )
}

export default HeaderPageTitle;