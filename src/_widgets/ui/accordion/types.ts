import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { accordionItemVariants, accordionVariants } from './variant';

export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>;

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {
  value: string;
  children: ReactNode;
  asChild?: boolean;
}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  children: ReactNode;
  asChild?: boolean;
  hideIcon?: boolean;
}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  children: ReactNode;
  asChild?: boolean;
}
