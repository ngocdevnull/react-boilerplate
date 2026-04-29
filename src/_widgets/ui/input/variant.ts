import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'h-input rounded-input shadow-default border border-border-primary bg-transparent px-3 outline-none focus-visible:border-input-focus focus-visible:ring-1 focus-visible:ring-input-focus transition-colors',
        borderless:
          'h-input rounded-input shadow-default border border-border-primary bg-transparent px-4 outline-none focus-visible:border-input-focus focus-visible:ring-1 focus-visible:ring-input-focus transition-colors',
      },
      isError: {
        true: '!border-border-error-subtle focus-visible:!border-border-error-subtle focus-visible:!ring-border-error-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
