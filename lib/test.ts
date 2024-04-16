import { z } from 'zod';

type FiledError<T> = {
    [K in keyof T]?: string[];
};
type ActionState<TInput, TOutput> = {
    fieldError?: FiledError<TInput>;
    error?: string | undefined;
    data?: TOutput;
};
const createActionSafe = <TInput, TOutput>(
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
    return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
        const validateData = schema.safeParse(data);
        if (!validateData.success) {
            return {
                fieldError: validateData.error.flatten()
                    .fieldErrors as FiledError<TInput>,
            };
        }
        return handler(validateData.data);
    };
};
const CreateBoardSchema = z.object({
    title: z.string(),
});

const TInput = z.infer(typeof CreateBoardSchema);
