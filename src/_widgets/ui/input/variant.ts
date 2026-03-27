import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'h-10 rounded-md border border-input bg-background px-3 py-2 outline-none focus-visible:border-input-focus focus-visible:ring-1 focus-visible:ring-input-focus transition-colors',
        borderless:
          'h-12 rounded-[5px] border border-auth-input-border bg-auth-bg px-4 py-3 text-base transition-colors',
      },
      isError: {
        true: '!border-error focus-visible:!border-error focus-visible:!ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
