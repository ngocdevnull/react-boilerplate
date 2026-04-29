import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '../../common/cn';
import type { AccordionContentProps } from './types';
import { accordionContentVariants, accordionContentWrapperVariants } from './variant';

export const AccordionContent = React.forwardRef<
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
