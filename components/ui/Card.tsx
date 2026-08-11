import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

const styles = {
  base: 'rounded-[var(--sng-radius-md)] transition-all duration-[var(--sng-duration-base)]',

  variant: {
    elevated: [
      'bg-[var(--sng-color-bg-surface)]',
      'shadow-[var(--sng-shadow-md)]',
    ].join(' '),

    outlined: [
      'bg-[var(--sng-color-bg-surface)]',
      'border-2 border-[var(--sng-color-border-default)]',
    ].join(' '),

    filled: ['bg-[var(--sng-color-bg-overlay)]'].join(' '),
  },

  hoverable: [
    'cursor-pointer',
    'hover:-translate-y-1',
    'hover:shadow-[var(--sng-shadow-lg)]',
    'hover:border-[var(--sng-color-border-strong)]',
  ].join(' '),
} as const;

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  (
    { children, className, variant = 'elevated', hoverable = false, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.base,
          styles.variant[variant],
          hoverable && styles.hoverable,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card';

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
export type CardBodyProps = HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 pt-6 pb-4', className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
);
CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 pt-4 pb-6', className)} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
