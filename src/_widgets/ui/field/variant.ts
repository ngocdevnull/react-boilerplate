import { cva } from 'class-variance-authority';

export const fieldVariants = cva('flex w-full flex-col gap-1.5');

export const fieldAsteriskVariants = cva('ml-1 text-error');

export const fieldErrorVariants = cva('text-xs text-error');

export const fieldHintVariants = cva('text-xs text-black-40');
