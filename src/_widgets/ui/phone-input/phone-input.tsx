import * as RPNInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { cn } from '../../common/cn';
import { phoneInputVariants } from './variant';
import { FlagComponent } from './components/flag-component';
import { InputComponent } from './components/input-component';
import { CountrySelect } from './components/country-select';

import type { PhoneInputProps } from './types';

export const PhoneInput = ({
  className,
  defaultCountry = 'VN',
  disabled,
  value,
  onChange,
  placeholder,
  isError,
}: PhoneInputProps) => {
  return (
    <RPNInput.default
      className={cn(phoneInputVariants({ isError }), className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      smartCaret={false}
      international
      value={(value || undefined) as Maybe<RPNInput.Value>}
      onChange={(v) => onChange?.((v || '') as unknown as string)}
      defaultCountry={defaultCountry}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
