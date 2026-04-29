import { cva } from 'class-variance-authority';

export const phoneInputVariants = cva(
  'flex h-input w-full rounded-input border border-border-primary bg-transparent shadow-default transition-colors overflow-hidden',
  {
    variants: {
      isError: {
        true: 'border-border-error-subtle',
        false: 'focus-within:border-input-focus focus-within:ring-1 focus-within:ring-input-focus',
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
);
