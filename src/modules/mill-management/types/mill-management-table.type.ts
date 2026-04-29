import type { MillManagementRow } from './mill-management-row.type';

export interface MillManagementTableProps {
  data: MillManagementRow[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onEdit?: (row: MillManagementRow) => void;
}
