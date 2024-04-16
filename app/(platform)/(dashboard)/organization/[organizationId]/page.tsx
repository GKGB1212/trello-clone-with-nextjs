import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import React from 'react';
import BoardCard from './board';
import Form from './form';

export default async function OrganizationPage() {
    const boards = await db.board.findMany();
    return (
        <div className="flex flex-col gap-y-4">
            <Form />
            <div className="space-y-4">
                {boards.map((board) => (
                    <BoardCard
                        key={board.id}
                        id={board.id}
                        title={board.title}
                    />
                ))}
            </div>
        </div>
    );
}
