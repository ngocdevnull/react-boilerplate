import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '../../common/cn';
import { Label } from '../label/label';
import { radioGroupItemVariants } from './variant';
import type { RadioGroupItemProps } from './types';

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, isError, label, ...props }, ref) => (
  <div className="flex items-center gap-2">
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ isError, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    {label && (
      <Label htmlFor={props.id} className="cursor-pointer">
        {label}
      </Label>
    )}
  </div>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
