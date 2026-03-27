import { cva } from 'class-variance-authority';

export const tooltipRootVariants = cva('relative inline-flex');

export const tooltipContentVariants = cva(
  'pointer-events-none absolute z-50 whitespace-nowrap rounded bg-black-10 px-2 py-1 text-xs text-white shadow-md',
  {
    variants: {
      side: {
        top: 'bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2',
        bottom: 'top-[calc(100%+8px)] left-1/2 -translate-x-1/2',
        left: 'right-[calc(100%+8px)] top-1/2 -translate-y-1/2',
        right: 'left-[calc(100%+8px)] top-1/2 -translate-y-1/2',
      },
    },
    defaultVariants: {
      side: 'top',
    },
  },
);
