import type * as SelectPrimitive from '@radix-ui/react-select';

export type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  options?: Maybe<ValueOption[]>;
  placeholder?: Maybe<string>;
  className?: Maybe<string>;
};

export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;

export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;

export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
