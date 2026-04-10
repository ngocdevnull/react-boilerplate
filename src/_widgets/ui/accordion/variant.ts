import { cva } from 'class-variance-authority';

export const accordionVariants = cva('flex w-full flex-col rounded-md border border-border');

export const accordionItemVariants = cva('group border-b border-border last:border-b-0');

export const accordionTriggerVariants = cva(
  'flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-primary',
);

export const accordionContentVariants = cva('px-4 pb-4 text-sm text-black-40');

export const accordionContentWrapperVariants = cva(
  'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
);

export const accordionIconVariants = cva('h-4 w-4 shrink-0 transition-transform duration-200');
