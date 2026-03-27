import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { radioGroupVariants, radioGroupItemVariants } from './variant';

export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioGroupVariants>;

export type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioGroupItemVariants> & {
    label?: string;
    value: string;
  };
