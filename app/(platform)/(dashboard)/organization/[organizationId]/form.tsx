'use client';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

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
                <FormInput
                    label="Board title"
                    errors={fieldErrors}
                    id="title"
                />
            </div>
            <FormSubmit>Submit</FormSubmit>
        </form>
    );
}
