import { format } from 'date-fns';
import { Button } from '../button/button';
import type { DateRangePickerFooterProps } from './types';

export const DateRangePickerFooter = ({
  tempValue,
  onCancel,
  onApply,
}: DateRangePickerFooterProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-t border-border-primary gap-4">
      <div className="flex items-center gap-2">
        <div className="border border-border-primary rounded-md px-3 py-2 text-sm w-32 bg-white text-text-secondary">
          {tempValue?.from ? format(tempValue.from, 'MMM dd, yyyy') : 'Start date'}
        </div>
        <span className="text-black-40">-</span>
        <div className="border border-border-primary rounded-md px-3 py-2 text-sm w-32 bg-white text-text-secondary">
          {tempValue?.to ? format(tempValue.to, 'MMM dd, yyyy') : 'End date'}
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onCancel} className="h-10 px-4">
          Cancel
        </Button>
        <Button
          onClick={onApply}
          className="bg-brand-green hover:bg-brand-secondary h-10 px-6 text-white"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
