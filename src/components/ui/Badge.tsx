import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'secondary' | 'green' | 'red' | 'yellow' | 'bronze' | 'purple' | 'orange';
    size?: 'sm' | 'md' | 'lg';
    grade?: 'S' | 'A' | 'B' | 'C' | 'D';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', size = 'md', grade, children, ...props }, ref) => {
        const variants = {
            default: 'bg-gray-100 text-gray-700',
            success: 'bg-green-100 text-green-700',
            warning: 'bg-yellow-100 text-yellow-700',
            error: 'bg-red-100 text-red-700',
            info: 'bg-blue-100 text-blue-700',
            blue: 'bg-blue-600 text-white',
            secondary: 'bg-gray-200 text-gray-800',
            green: 'bg-green-600 text-white',
            red: 'bg-red-600 text-white',
            yellow: 'bg-yellow-500 text-white',
            bronze: 'bg-[#cd7f32] text-white',
            purple: 'bg-purple-600 text-white',
            orange: 'bg-orange-500 text-white',
        };

        const gradeStyles = {
            S: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white',
            A: 'bg-green-500 text-white',
            B: 'bg-blue-500 text-white',
            C: 'bg-gray-500 text-white',
            D: 'bg-red-500 text-white',
        };

        const sizes = {
            sm: 'px-2 py-0.5 text-xs',
            md: 'px-2.5 py-1 text-sm',
            lg: 'px-3 py-1.5 text-base',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center font-semibold rounded-full',
                    sizes[size],
                    grade ? gradeStyles[grade] : variants[variant],
                    className
                )}
                {...props}
            >
                {grade || children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
