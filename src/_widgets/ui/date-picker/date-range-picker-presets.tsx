import { Button } from '../button/button';
import { DATE_RANGE_PRESETS } from './constants';
import type { DateRangePickerPresetsProps } from './types';

export const DateRangePickerPresets = ({ onSelect }: DateRangePickerPresetsProps) => {
  return (
    <div className="flex flex-col border-r border-border-primary bg-white p-2 w-40">
      {DATE_RANGE_PRESETS.map((preset) => (
        <Button
          key={preset.label}
          variant="ghost"
          className="justify-start font-normal h-9 px-3 hover:bg-sidebar-hover-bg"
          onClick={() => onSelect(preset.getValue())}
        >
          {preset.label}
        </Button>
      ))}
    </div>
  );
};
