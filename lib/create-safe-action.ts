import { z } from 'zod';

//Khởi tạo type chứa lỗi của các field
export type FieldErrors<T> = {
    [K in keyof T]?: string[];
};
// K in keyof T:
// K: Biến đại diện cho từng khóa trong T.
// keyof: Toán tử lấy ra các khóa (key) của một loại.
// T: Loại tham chiếu, cung cấp các khóa cho K.

export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>;
    error?: string | null;
    data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>> //kết quả của promise này là ActionState<TInput, TOutput>
) => {
    return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
        const validationResult = schema.safeParse(data);

        if (!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten()
                    .fieldErrors as FieldErrors<TInput>,
            };
        }

        return handler(validationResult.data);
    };
};
/*
Đoạn code trên định nghĩa một hàm createSafeAction, nhận vào hai đối số:

schema: Một đối tượng kiểu z.Schema<TInput>, đại diện cho một schema được xác định bằng thư viện zod. Thư viện này thường được sử dụng để xác thực dữ liệu.
handler: Một hàm nhận vào dữ liệu đã được xác thực và trả về một promise của ActionState<TInput, TOutput>.
Hàm createSafeAction trả về một hàm khác, nhận vào đối số data có kiểu TInput, và trả về một promise của ActionState<TInput, TOutput>.

Bên trong hàm này, đầu tiên, dữ liệu data được xác thực bằng cách gọi phương thức safeParse() của đối tượng schema. Kết quả của việc xác thực này được lưu trữ trong biến validationResult.

Nếu việc xác thực không thành công (có lỗi xảy ra), hàm sẽ trả về một đối tượng chứa các lỗi (fieldErrors) được trích xuất từ kết quả xác thực.

Nếu việc xác thực thành công, hàm sẽ gọi hàm handler với dữ liệu đã được xác thực và trả về kết quả của hàm handler.

Nhìn chung, mục đích của đoạn code này là tạo ra một hàm để xác thực dữ liệu đầu vào (data) bằng schema được cung cấp (schema) và sau đó gọi một hàm xử lý (handler) với dữ liệu đã xác thực, và trả về kết quả của hàm xử lý đó.*/
