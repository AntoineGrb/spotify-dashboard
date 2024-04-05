import React from 'react';
import { Home, History, User, Disc3, ListMusic } from 'lucide-react';

interface HeaderTitleProps { 
    title: string;
}

const HeaderTitle = ({title}: HeaderTitleProps) => { 

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
        <header className='flex gap-2 items-center justify-start pb-8'>
            <div className='w-10 h-10 rounded-lg border flex justify-center items-center'>
                {getIconWithTitle(title)}
            </div>
            <h1> {title} </h1>
        </header>
    )
}

export default HeaderTitle;