import { CheckIcon } from 'lucide-react';
import * as RPNInput from 'react-phone-number-input';

import { cn } from '../../common/cn';
import { CommandItem } from '../command/command';
import { FlagComponent } from './phone-input-flag';
import type { CountrySelectOptionProps } from './types';

export const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
}: CountrySelectOptionProps) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem className="gap-2" onSelect={handleSelect}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon
        className={cn('ml-auto size-4', country === selectedCountry ? 'opacity-100' : 'opacity-0')}
      />
    </CommandItem>
  );
};
