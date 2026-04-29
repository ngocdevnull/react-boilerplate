import { DayPicker } from 'react-day-picker';
import type { DateRange } from '../date-picker/types';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  selected?: Maybe<DateRange>;
  onSelect?: (range: Maybe<DateRange>) => void;
};
