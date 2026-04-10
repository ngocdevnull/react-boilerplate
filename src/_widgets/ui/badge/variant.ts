import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium leading-none',
  {
    variants: {
      variant: {
        success:
          'border-utility-success-500 bg-utility-success-200 text-utility-success-700',
        warning:
          'border-utility-warning-500 bg-utility-warning-200 text-utility-warning-700',
        gray: 'border-utility-gray-500 bg-utility-gray-200 text-utility-gray-700',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  },
);
