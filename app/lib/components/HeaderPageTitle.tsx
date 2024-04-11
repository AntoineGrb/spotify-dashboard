import React from 'react';

interface HeaderPageTitleProps { 
    title: string;
}

const HeaderPageTitle = ({title}: HeaderPageTitleProps) => { 

    return (
        <header className='flex gap-2 items-center justify-start pb-16'>
            <h1> {title} </h1>
        </header>
    )
}

export default HeaderPageTitle;