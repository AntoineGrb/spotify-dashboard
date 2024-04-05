'use client'
import React, {useState} from 'react';
import HeaderMobile from '@/src/components/headerMobile/page';
import MenuMobile from '@/src/components/menuMobile/page';

export default function ClientApplication({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [isMenuMobileActive, setIsMenuMobileActive] = useState(true);

    return (
        <>
            <HeaderMobile openMenu={() => setIsMenuMobileActive(true)} />
            <MenuMobile isActive={isMenuMobileActive} closeMenu={() => setIsMenuMobileActive(false)} />
            {children}
        </>
    )
}