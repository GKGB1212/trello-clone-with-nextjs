import React from 'react';
import { useFormStatus } from 'react-dom';

type FormInputProps = {
    errors?: {
        title?: string[];
    };
};
export default function FormInput({ errors }: FormInputProps) {
    const { pending } = useFormStatus();
    return (
        <div>
            <input
                required
                name="title"
                id="title"
                className="border border-black p-1"
                placeholder="Enter a board name."
                disabled={pending}
            />
            {errors?.title && (
                <div>
                    {errors.title.map((error: string) => (
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
