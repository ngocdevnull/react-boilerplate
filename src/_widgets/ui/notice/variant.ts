import { cva } from 'class-variance-authority';

export const noticeVariants = cva(
  'relative flex w-full items-center rounded-xl transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-900',
        error: 'bg-error text-error-foreground border border-error/20',
        warning: 'bg-warning text-warning-foreground',
        info: 'bg-info text-info-foreground',
        success: 'bg-success text-success-foreground',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      size: {
        sm: 'p-3 text-xs',
        default: 'p-4 text-sm',
        lg: 'p-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      align: 'left',
      size: 'default',
    },
  },
);
