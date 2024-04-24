import React, { Suspense } from 'react';
import Info from './_components/info';
import { Separator } from '@/components/ui/separator';
import BoardList from './_components/board-list';

export default async function OrganizationPage() {
    return (
        <div className="w-full pb-20">
            <Info />
            <Separator className="my-4" />
            <div className="px-2 md:px-4">
                <Suspense fallback={<BoardList.Skeleton />}>
                    <BoardList />
                </Suspense>
            </div>
        </div>
    );
}
