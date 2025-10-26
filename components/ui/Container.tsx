import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 최대 너비 설정
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  
  /**
   * 패딩 적용 여부
   */
  noPadding?: boolean;
}

/**
 * Container 컴포넌트
 * 
 * 콘텐츠를 중앙 정렬하고 최대 너비를 제한하는 레이아웃 컴포넌트
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, maxWidth = 'xl', noPadding = false, ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          maxWidthClasses[maxWidth],
          !noPadding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
