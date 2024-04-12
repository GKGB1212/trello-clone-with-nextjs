import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

//dùng local font
const headingFont = localFont({
    src: '../../public/fonts/montreal.ttf',
})

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className={cn(
                    'flex flex-col items-center justify-center font-extrabold',
                    headingFont.className
                )}
            >
                <div className="mb-4 flex  gap-2 rounded-full border bg-amber-100 p-4 uppercase text-amber-600 shadow-sm">
                    <Medal className="h-6 w-6" />
                    No 1 task management
                </div>
                <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">
                    Taskify help team move
                </h1>
                <div className="w-fit  rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 pb-4 text-3xl text-white md:text-6xl">
                    work forward.
                </div>
            </div>
            <div className="mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl">
                Simple, flexible, and powerful. All it takes are boards, lists,
                and cards to get a clear view of who’s doing what and what needs
                to get done. Learn more in our guide for getting started
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">Get taskify for free</Link>
            </Button>
        </div>
    )
}
