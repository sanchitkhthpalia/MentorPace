import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn'; // Assuming a cn utility for class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    href,
    loading,
    disabled,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]',
        outline: 'border-2 border-accent text-accent hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]',
        ghost: 'text-secondary hover:text-primary hover:bg-background active:scale-[0.95]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
        <>
            {loading && (
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
            {children}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={styles}>
                {content}
            </Link>
        );
    }

    return (
        <button className={styles} disabled={disabled || loading} {...props}>
            {content}
        </button>
    );
};

export default Button;
