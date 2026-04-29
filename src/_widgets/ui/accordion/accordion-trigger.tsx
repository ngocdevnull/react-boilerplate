import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../common/cn';
import type { AccordionTriggerProps } from './types';
import { accordionIconVariants, accordionTriggerVariants } from './variant';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants(), 'group', className)}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown
          className={cn(accordionIconVariants(), 'group-data-[state=open]:rotate-180')}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';
