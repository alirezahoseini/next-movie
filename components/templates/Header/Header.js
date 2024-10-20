"use client"
import React, { useState, useCallback, useEffect } from 'react'
import DesktopHeader from '@/components/modules/Headers/DesktopHeader/DesktopHeader'
import MobileHeader from '@/components/modules/Headers/MobileHeader/MobileHeader'

export default function Header() {
    // Manage search box display 
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
    // Manage Header bg-color with scroll
    const [isOverlayHeader, setIsOverlayHeader] = useState(false);
    const onScroll = useCallback(event => {
        const { scrollY } = window;
        if (scrollY < 5) {

            setIsOverlayHeader(false);
            return false
        } else {
            setIsOverlayHeader(true);
            return true
        }
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

    return (
        <header >
            <MobileHeader isOverlayHeader={isOverlayHeader} isOpenSearchBox={isOpenSearchBox} setIsOpenSearchBox={setIsOpenSearchBox} />
            <DesktopHeader isOverlayHeader={isOverlayHeader} isOpenSearchBox={isOpenSearchBox} setIsOpenSearchBox={setIsOpenSearchBox} />
        </header>
    )
}
