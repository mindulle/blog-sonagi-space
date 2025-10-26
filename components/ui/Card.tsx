import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 카드 스타일 변형
   */
  variant?: CardVariant;
  
  /**
   * Hover 효과 활성화
   */
  hoverable?: boolean;
}

/**
 * Card 컴포넌트
 * 
 * 콘텐츠를 담는 카드 컨테이너
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'elevated', hoverable = false, ...props }, ref) => {
    const baseStyles = 'rounded-lg transition-all';
    
    const variantStyles = {
      elevated: 'bg-white shadow-md dark:bg-neutral-800',
      outlined: 'bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700',
      filled: 'bg-neutral-50 dark:bg-neutral-900',
    };
    
    const hoverStyles = hoverable && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          hoverStyles,
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

// Card 서브 컴포넌트들
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 pt-6 pb-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 pt-4 pb-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

// Card에 서브 컴포넌트 연결
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
