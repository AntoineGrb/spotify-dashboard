'use client'
import React, {useState} from 'react';
import HeaderMobile from '@/src/components/headerMobile/page';
import MenuMobile from '@/src/components/menuMobile/page';
import MenuDesktop from '../menuDesktop/page';

export default function ClientApplication({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [isMenuMobileActive, setIsMenuMobileActive] = useState(true);

    return (
        <>
            <div id='app' className='flex flex-col lg:flex-row max-h-[100vh]'>
              <HeaderMobile openMenu={() => setIsMenuMobileActive(true)} />
              <MenuMobile isActive={isMenuMobileActive} closeMenu={() => setIsMenuMobileActive(false)} />
              <MenuDesktop />
              {children}
            </div>
        </>
    )
}