import React from 'react';
import { Home } from 'lucide-react';

const HeaderTitle = () => { 
    return (
        <header className='flex gap-2 items-center justify-start'>
            <div className='w-12 h-12 rounded-lg border flex justify-center items-center'>
                <Home size={32} color='white' />
            </div>
            <h1> DASHBOARD </h1>
        </header>
    )
}

export default HeaderTitle;