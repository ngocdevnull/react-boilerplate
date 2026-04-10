import type * as SelectPrimitive from '@radix-ui/react-select';

export type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  options?: Maybe<ValueOption[] | readonly ValueOption[]>;
  placeholder?: Maybe<string>;
  className?: Maybe<string>;
  isError?: boolean;
};

export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  isError?: boolean;
};

export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;

export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;

export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
export type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>;
export type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>;
