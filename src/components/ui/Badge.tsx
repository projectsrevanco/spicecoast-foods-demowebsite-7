import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variants = {
    default: 'bg-primary/10 text-primary',
    success: 'bg-accent-green/10 text-accent-green',
    warning: 'bg-accent-saffron/20 text-text-main',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
