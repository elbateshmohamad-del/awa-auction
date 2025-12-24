import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, hint, type = 'text', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={cn(
                        'w-full px-4 py-2.5 border rounded-lg text-base transition-colors duration-200',
                        'border-gray-300 bg-white text-gray-900 placeholder-gray-400',
                        'focus:outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10',
                        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
                        props.disabled && 'bg-gray-100 cursor-not-allowed',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-red-600">{error}</p>
                )}
                {hint && !error && (
                    <p className="mt-1.5 text-sm text-gray-500">{hint}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
