import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { cn } from '../../../common/cn';
import { Button } from '../../button/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../../command/command';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover/popover';
import { ScrollArea } from '../../scroll-area/scroll-area';

import type { CountrySelectProps } from '../types';
import { FlagComponent } from './flag-component';
import { CountrySelectOption } from './country-select-option';

export const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setTimeout(() => {
      const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) viewport.scrollTop = 0;
    }, 0);
  };

  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open: boolean) => {
        setIsOpen(open);
        if (open) setSearchValue('');
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            'flex h-input gap-1 rounded-e-none rounded-s-input border-r-0 border-0 shadow-none px-3 focus:z-10 bg-auth-bg hover:bg-auth-bg',
            disabled && 'opacity-50',
          )}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown
            className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={handleSearchChange}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
