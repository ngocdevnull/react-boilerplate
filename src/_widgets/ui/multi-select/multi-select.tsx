import * as React from 'react';
import { X, Check, ChevronDown, Search } from 'lucide-react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '../../common/cn';
import { ScrollArea } from '../scroll-area/scroll-area';
import type { MultiSelectProps } from './types';

export const MultiSelect = ({
  options,
  selected = [],
  onChange,
  placeholder = 'Select items...',
  className,
}: MultiSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      setIsOverflowing(containerRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, [selected]);

  const handleSelect = (value: ID) => {
    const isSelected = selected.includes(value);
    if (isSelected) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleRemove = (e: React.MouseEvent, value: ID) => {
    e.stopPropagation();
    onChange(selected.filter((item) => item !== value));
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <div className={cn('relative w-full', className)}>
        <PopoverPrimitive.Trigger asChild>
          <div
            onClick={() => inputRef.current?.focus()}
            className={cn(
              'flex h-input w-full items-center justify-between rounded-input border border-border-primary bg-white px-3 text-sm transition-all cursor-pointer overflow-hidden',
              open
                ? 'border-brand-green ring-1 ring-brand-green/20'
                : 'hover:border-border-primary/80',
            )}
          >
            <div
              ref={containerRef}
              className="flex flex-nowrap gap-1.5 items-center flex-1 overflow-hidden"
            >
              {selected.length > 0 ? (
                <>
                  {selected.map((value) => {
                    const option = options.find((o) => o.value === value);
                    return (
                      <div
                        key={value}
                        className="flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20 group animate-in fade-in zoom-in-95"
                      >
                        <span>{option?.label || value}</span>
                        <button
                          type="button"
                          onClick={(e) => handleRemove(e, value)}
                          className="ml-0.5 rounded-full outline-none hover:bg-brand-green/20 p-0.5 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    );
                  })}
                  {isOverflowing && <span className="text-zinc-400 shrink-0 text-xs ml-0.5">...</span>}
                </>
              ) : (
                <span className="text-zinc-400">{placeholder}</span>
              )}
            </div>
            <ChevronDown
              className={cn(
                'h-4 w-4 text-zinc-400 transition-transform ml-2 shrink-0',
                open && 'rotate-180',
              )}
            />
          </div>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={4}
            className="z-9999 w-(--radix-popover-trigger-width) rounded-md border border-border-primary bg-white shadow-md animate-in fade-in zoom-in-95 overflow-hidden"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className="flex items-center border-b border-zinc-100 px-3 py-2">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                ref={inputRef}
                className="flex h-8 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ScrollArea className="max-h-60 h-full">
              <div className="p-1 py-1.5 space-y-0.5">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => {
                    const isSelected = selected.includes(option.value);
                    return (
                      <div
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className={cn(
                          'relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-zinc-100 text-zinc-900',
                          isSelected && 'bg-zinc-50 font-medium',
                        )}
                      >
                        <span className="absolute left-2.5 flex h-3.5 w-3.5 items-center justify-center">
                          {isSelected && <Check className="h-4 w-4 text-brand-green stroke-3" />}
                        </span>
                        {option.label}
                      </div>
                    );
                  })
                ) : (
                  <div className="py-4 text-center text-sm text-zinc-500 italic">
                    No options available
                  </div>
                )}
              </div>
            </ScrollArea>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </div>
    </PopoverPrimitive.Root>
  );
};
