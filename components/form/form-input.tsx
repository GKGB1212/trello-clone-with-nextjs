'use client';
import React, { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import FormErrors from './form-error';

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disable?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    defaultValue?: string;
    onBlur?: () => void;
}
/*
HTMLInputElement: Kiểu này cho biết loại của DOM element mà ref sẽ trỏ tới. 
Trong trường hợp này, ref được chuyển tiếp đến một element input, 
vì vậy kiểu của ref được xác định là HTMLInputElement. 
Điều này nghĩa là ref có thể sử dụng để tham chiếu đến một phần tử input HTML, 
và bạn có thể truy cập các thuộc tính và phương thức đặc trưng của input như focus(), value, v.v.

FormInputProps: Kiểu này xác định kiểu của các props mà component FormInput nhận.
 Điều này bao gồm các thông tin như id, label, type, placeholder, v.v., 
 và đảm bảo rằng mọi prop truyền vào FormInput đều tuân theo định nghĩa được chỉ rõ trong FormInputProps.
*/
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    (
        {
            id,
            label,
            type,
            placeholder,
            required,
            disable,
            errors,
            className,
            defaultValue,
            onBlur,
        },
        ref
    ) => {
        const { pending } = useFormStatus();
        return (
            <div className="space-y-2">
                <div className="space-y-1">
                    {label ? (
                        <Label
                            htmlFor={id}
                            className="text-xs font-semibold text-neutral-700"
                        >
                            {label}
                        </Label>
                    ) : null}
                    <Input
                        name={id}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        disabled={pending || disable}
                        defaultValue={defaultValue}
                        onBlur={onBlur}
                        className={cn('h-7 px-2 py-1 text-sm', className)}
                        aria-describedby={`${id}-error`}
                    />
                </div>
                <FormErrors id={id} errors={errors} />
            </div>
        );
    }
);
FormInput.displayName = 'FormInput';
