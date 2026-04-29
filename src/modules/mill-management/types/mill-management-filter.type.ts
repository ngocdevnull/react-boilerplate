export interface MillManagementFilterData {
  keyword: string;
  status: string;
  countries: ID[];
}

export interface MillManagementFilterProps {
  onFilterChange: (filters: Partial<MillManagementFilterData>) => void;
}
