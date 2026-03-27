import * as React from 'react';
import { X } from 'lucide-react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../common/cn';
import type { MultiSelectProps } from './types';

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Select items...',
  className,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '' && selected.length > 0) {
            onChange(selected.slice(0, -1));
          }
        }
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [onChange, selected],
  );

  const selectables = options.filter((option) => !selected.includes(option.value));

  return (
    <CommandPrimitive
      onKeyDown={handleKeyDown}
      className={cn('overflow-visible bg-transparent', className)}
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((item) => {
            const option = options.find((o) => o.value === item);
            return (
              <div
                key={item}
                className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium bg-zinc-100 text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {option?.label || item}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={selected.length === 0 ? placeholder : undefined}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground min-w-[80px]"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none bg-white dark:bg-zinc-950 animate-in">
            <CommandPrimitive.List className="max-h-60 overflow-auto p-1">
              {selectables.map((option) => {
                return (
                  <CommandPrimitive.Item
                    key={option.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue('');
                      onChange([...selected, option.value]);
                    }}
                    className={
                      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                    }
                  >
                    {option.label}
                  </CommandPrimitive.Item>
                );
              })}
            </CommandPrimitive.List>
          </div>
        ) : null}
      </div>
    </CommandPrimitive>
  );
}
