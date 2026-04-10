import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../common/cn';
import { radioGroupVariants } from './variant';
import type { RadioGroupProps } from './types';

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(radioGroupVariants({ className }))}
    {...props}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
