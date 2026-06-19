import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const styles = {
  base: [
    'inline-flex items-center justify-center font-medium',
    'transition-colors focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
  ].join(' '),

  variant: {
    primary: [
      'text-[var(--color-text-inverse)]',
      'bg-[var(--color-brand-primary)]',
      'hover:bg-[var(--color-brand-primary-hover)]',
      'focus-visible:ring-[var(--color-brand-primary)]',
    ].join(' '),

    secondary: [
      'text-[var(--color-text-primary)]',
      'bg-[var(--color-bg-overlay)]',
      'border border-[var(--color-border-default)]',
      'hover:bg-[var(--color-bg-elevated)]',
      'hover:border-[var(--color-border-strong)]',
      'focus-visible:ring-[var(--color-brand-primary)]',
    ].join(' '),

    ghost: [
      'text-[var(--color-text-secondary)]',
      'bg-transparent',
      'hover:bg-[var(--color-bg-overlay)]',
      'hover:text-[var(--color-text-primary)]',
      'focus-visible:ring-[var(--color-brand-primary)]',
    ].join(' '),

    outline: [
      'text-[var(--color-text-primary)]',
      'bg-transparent',
      'border-2 border-[var(--color-text-primary)]',
      'hover:bg-[var(--color-bg-overlay)]',
      'focus-visible:ring-[var(--color-brand-primary)]',
    ].join(' '),
  },

  size: {
    small:  'h-8 px-3 text-sm rounded-[var(--radius-sm)]',
    medium: 'h-10 px-4 text-base rounded-[var(--radius-base)]',
    large:  'h-12 px-6 text-lg rounded-[var(--radius-md)]',
  },
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      isLoading = false,
      isDisabled = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.base,
          styles.variant[variant],
          styles.size[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
