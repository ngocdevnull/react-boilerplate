import type { VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';
import type { DateRange } from 'react-day-picker';
import type { Control, FieldValues, Path } from 'react-hook-form';

import { datePickerVariants } from './variant';

export type { DateRange };

export interface DatePickerProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof datePickerVariants> {}

export interface DateRangePickerProps {
  className?: string;
  value?: Maybe<DateRange>;
  onChange?: (range: Maybe<DateRange>) => void;
  placeholder?: string;
}

export interface DateRangePickerFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  className?: string;
  placeholder?: string;
}

export interface DateRangePickerPresetsProps {
  onSelect: (range: Maybe<DateRange>) => void;
}

export interface DateRangePickerFooterProps {
  tempValue?: Maybe<DateRange>;
  onCancel: () => void;
  onApply: () => void;
}
