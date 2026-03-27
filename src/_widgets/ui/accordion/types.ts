import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';

import { accordionItemVariants, accordionVariants } from './variant';

export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>;

export interface AccordionItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionItemVariants> {
  value: string;
  children: ReactNode;
}

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
