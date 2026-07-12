import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'outline';
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
    'rounded-[var(--sng-radius-full)]',
    'font-medium uppercase tracking-[0.05em]',
    'transition-colors',
  ].join(' '),

  variant: {
    default: [
      'bg-[var(--sng-color-bg-overlay)]',
      'text-[var(--sng-color-text-secondary)]',
      'border border-[var(--sng-color-border-default)]',
    ].join(' '),

    primary: [
      'bg-[var(--sng-color-brand-primary)]',
      'text-[var(--sng-color-text-inverse)]',
    ].join(' '),

    success: [
      'bg-[var(--sng-color-state-success)]',
      'text-[var(--sng-color-text-inverse)]',
    ].join(' '),

    warning: [
      'bg-[var(--sng-color-state-warning)]',
      'text-[var(--sng-color-text-inverse)]',
    ].join(' '),

    error: [
      'bg-[var(--sng-color-state-error)]',
      'text-[var(--sng-color-text-inverse)]',
    ].join(' '),

    outline: [
      'bg-transparent',
      'text-[var(--sng-color-text-primary)]',
      'border border-[var(--sng-color-text-primary)]',
    ].join(' '),
  },

  size: {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-xs',
    large: 'px-4 py-1.5 text-sm',
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
