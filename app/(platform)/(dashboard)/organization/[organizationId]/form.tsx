'use client';
import { createBoard } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import FormInput from './form-input';
import FormButton from './form-button';
import { useAction } from '@/hooks/use-action';

export default function Form() {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess(data) {
            console.log(data, 'SUCCESS');
        },
        onError(error) {
            console.error(error);
        },
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;
        execute({ title });
    };
    // const initialState = { message: null, errors: {} };
    // const [state, dispatch] = useFormState(create, initialState);
    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-0">
                <FormInput errors={fieldErrors} />
            </div>
            <FormButton />
        </form>
    );
}
