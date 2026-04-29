import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '../../common/cn';
import type { AccordionItemProps } from './types';
import { accordionItemVariants } from './variant';

export const AccordionItem = React.forwardRef<
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
