'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SideBar from './sidebar';

export default function MobileSidebar() {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const isOpen = useMobileSidebar((state) => state.isOpen);
    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    useEffect(() => {
        //Neu co su thay doi pathname thi tat luon menu di
        onClose();
    }, [pathname, onClose]);
    if (!isMounted) {
        return null;
    }
    return (
        <>
            <Button
                onClick={onOpen}
                className="mr-2 block md:hidden"
                variant={'ghost'}
                size={'sm'}
            >
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className="p-2 pt-10">
                    <SideBar storageKey="t-sidebar-mobile-state" />
                </SheetContent>
            </Sheet>
        </>
    );
}
