'use client'

import React, {useState} from 'react';
import { AuthProvider } from '@/app/lib/context/AuthContext';
import HeaderMobile from '@/app/lib/components/HeaderMobile';
import MenuMobile from '@/app/lib/components/MenuMobile';
import MenuDesktop from './lib/components/MenuDesktop';

export default function ClientApplication({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [isMenuMobileActive, setIsMenuMobileActive] = useState(false);

    return (
        <>
            <AuthProvider>
              <div id='app' className='flex flex-col lg:flex-row max-h-[100vh]'>
                <HeaderMobile openMenu={() => setIsMenuMobileActive(true)} />
                <MenuMobile isActive={isMenuMobileActive} closeMenu={() => setIsMenuMobileActive(false)} />
                <MenuDesktop />
                {children}
              </div>
            </AuthProvider>
        </>
    )
}