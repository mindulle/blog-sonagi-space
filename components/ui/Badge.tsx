import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const styles = {
  base: [
    'inline-flex items-center justify-center',
    'rounded-[var(--radius-full)]',
    'font-medium uppercase tracking-[0.05em]',
    'transition-colors',
  ].join(' '),

  variant: {
    default: [
      'bg-[var(--color-bg-overlay)]',
      'text-[var(--color-text-secondary)]',
      'border border-[var(--color-border-default)]',
    ].join(' '),

    primary: [
      'bg-[var(--color-brand-primary)]',
      'text-[var(--color-text-inverse)]',
    ].join(' '),

    success: [
      'bg-[var(--color-state-success)]',
      'text-[var(--color-text-inverse)]',
    ].join(' '),

    warning: [
      'bg-[var(--color-state-warning)]',
      'text-[var(--color-text-inverse)]',
    ].join(' '),

    error: [
      'bg-[var(--color-state-error)]',
      'text-[var(--color-text-inverse)]',
    ].join(' '),

    outline: [
      'bg-transparent',
      'text-[var(--color-text-primary)]',
      'border border-[var(--color-text-primary)]',
    ].join(' '),
  },

  size: {
    small:  'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-xs',
    large:  'px-4 py-1.5 text-sm',
  },
} as const;

export function Badge({
  children,
  variant = 'default',
  size = 'medium',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        styles.base,
        styles.variant[variant],
        styles.size[size],
        className
      )}
    >
      {children}
    </span>
  );
}
