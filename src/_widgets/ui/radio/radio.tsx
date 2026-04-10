import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '../../common/cn';
import { Label } from '../label/label';
import { radioGroupVariants, radioGroupItemVariants } from './variant';
import type { RadioGroupProps, RadioGroupItemProps } from './types';

const RadioGroup = React.forwardRef<
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

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, isError, label, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(radioGroupItemVariants({ isError, className }))}
    {...props}
  >
    <div className="flex items-center justify-center h-4 w-4 rounded-full border border-border-primary group-data-[state=checked]:border-brand-green shrink-0 transition-colors">
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-brand-green" />
      </RadioGroupPrimitive.Indicator>
    </div>
    {label && (
      <Label
        htmlFor={props.id}
        className="cursor-pointer font-medium text-text-secondary select-none"
      >
        {label}
      </Label>
    )}
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
