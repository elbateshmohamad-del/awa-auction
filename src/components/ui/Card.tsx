import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered' | 'elevated';
    hoverable?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hoverable = false, padding = 'md', children, ...props }, ref) => {
        const variants = {
            default: 'bg-white shadow-md',
            bordered: 'bg-white border border-gray-200',
            elevated: 'bg-white shadow-lg',
        };

        const paddings = {
            none: '',
            sm: 'p-4',
            md: 'p-6',
            lg: 'p-8',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl',
                    variants[variant],
                    paddings[padding],
                    hoverable && 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> { }

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('mb-4', className)}
            {...props}
        />
    )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> { }

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-xl font-bold text-gray-900', className)}
            {...props}
        />
    )
);

CardTitle.displayName = 'CardTitle';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> { }

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('text-gray-600', className)}
            {...props}
        />
    )
);

CardContent.displayName = 'CardContent';

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> { }

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => (
        <p ref={ref} className={cn('text-sm text-gray-500', className)} {...props} />
    )
);

CardDescription.displayName = 'CardDescription';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> { }

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('mt-4 pt-4 border-t border-gray-100', className)} {...props} />
    )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter };

