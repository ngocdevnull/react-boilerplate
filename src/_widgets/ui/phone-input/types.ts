import type * as RPNInput from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';


export type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  defaultCountry?: Country;
  placeholder?: string;
  isError?: boolean;
};
export type CountryEntry = { label: string; value: Maybe<RPNInput.Country> };

export type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

export interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
  onSelectComplete: () => void;
}
