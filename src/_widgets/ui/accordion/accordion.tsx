import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../common/cn';

import type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps,
} from './types';
import {
  accordionContentWrapperVariants,
  accordionContentVariants,
  accordionIconVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionVariants,
} from './variant';

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  if (props.type === 'multiple') {
    return (
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(accordionVariants({ className }))}
        {...(rest as AccordionPrimitive.AccordionMultipleProps)}
        type="multiple"
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(accordionVariants({ className }))}
      {...(rest as AccordionPrimitive.AccordionSingleProps)}
      type="single"
      collapsible={props.collapsible ?? true}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ className }))}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ children, className, hideIcon, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants(), 'group w-full', className)}
        {...props}
      >
        {children}
        {!hideIcon && (
          <ChevronDown
            className={cn(accordionIconVariants(), 'group-data-[state=open]:rotate-180')}
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContentWrapperVariants())}
      {...props}
    >
      <div className={cn(accordionContentVariants(), className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
