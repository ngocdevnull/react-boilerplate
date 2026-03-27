import type { Country } from 'react-phone-number-input';

export type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  defaultCountry?: Country;
};
