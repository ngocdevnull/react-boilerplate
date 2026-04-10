import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '../../common/cn';
import type { AccordionProps } from './types';
import { accordionVariants } from './variant';

type AccordionSingleProps = Extract<AccordionProps, { type?: 'single' }>;
type AccordionMultipleProps = Extract<AccordionProps, { type: 'multiple' }>;

export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ children, className, ...props }, ref) => {
  const type = props.type ?? 'single';

  if (type === 'multiple') {
    const multipleProps = props as AccordionMultipleProps;

    return (
      <AccordionPrimitive.Root
        ref={ref}
        type={type}
        className={cn(accordionVariants({ className }))}
        value={multipleProps.value}
        defaultValue={multipleProps.defaultValue}
        onValueChange={multipleProps.onValueChange}
        disabled={multipleProps.disabled}
        dir={multipleProps.dir}
        orientation={multipleProps.orientation}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }

  const singleProps = props as AccordionSingleProps;

  return (
    <AccordionPrimitive.Root
      ref={ref}
      type={type}
      collapsible={singleProps.collapsible ?? true}
      className={cn(accordionVariants({ className }))}
      value={singleProps.value}
      defaultValue={singleProps.defaultValue}
      onValueChange={singleProps.onValueChange}
      disabled={singleProps.disabled}
      dir={singleProps.dir}
      orientation={singleProps.orientation}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});
Accordion.displayName = 'Accordion';
