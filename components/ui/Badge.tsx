import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'outline';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'medium',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-full font-medium transition-colors',
        // Variant styles
        {
          'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300':
            variant === 'default',
          'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300':
            variant === 'primary',
          'bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200':
            variant === 'secondary',
          'border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300':
            variant === 'outline',
        },
        // Size styles
        {
          'px-2 py-0.5 text-xs': size === 'small',
          'px-3 py-1 text-sm': size === 'medium',
          'px-4 py-1.5 text-base': size === 'large',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
