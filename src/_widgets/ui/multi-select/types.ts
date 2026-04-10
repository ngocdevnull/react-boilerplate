export interface Option {
  label: string;
  value: ID;
}

export interface MultiSelectProps {
  options: readonly Option[];
  selected: ID[];
  onChange: (selected: ID[]) => void;
  placeholder?: string;
  className?: string;
}
