import { Button } from '@/components/ui/button';
import React from 'react';
import { deleteBoard } from '@/actions/delete-board';
type BoardProp = {
    id: string;
    title: string;
};
export default function BoardCard({ id, title }: BoardProp) {
    const deleteByID = deleteBoard.bind(null, id);
    return (
        <form action={deleteByID} className="flex items-center gap-x-2">
            <p key={id}>Board title: {title}</p>
            <Button type="submit" variant={'destructive'}>
                Delete
            </Button>
        </form>
    );
}
