import Logo from '@/components/logo'
import React from 'react'
import { NavBar } from './_components/navBar'
import { Footer } from './_components/footer'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full bg-slate-100">
            <NavBar />
            <main className="pb-2 pt-40">{children}</main>
            <Footer />
        </div>
    )
}
