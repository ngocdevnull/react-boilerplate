import { cva } from 'class-variance-authority';

export const progressVariants = cva('flex w-full items-center gap-3');

export const progressTrackVariants = cva('h-2.5 flex-1 overflow-hidden rounded-full bg-border');

export const progressValueVariants = cva(
  'h-full rounded-full bg-secondary transition-[width] duration-200 ease-in-out',
);

export const progressLabelVariants = cva('text-xs font-medium text-black-40');
