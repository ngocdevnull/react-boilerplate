import type { ReactNode, TableHTMLAttributes } from 'react';

export type TableCellValue = ReactNode;

export interface TableColumn<TData> {
  key: keyof TData | string;
  header: string;
  className?: string;
  headerClassName?: string;
  render?: (row: TData, rowIndex: number) => TableCellValue;
}

export interface TableProps<TData> extends TableHTMLAttributes<HTMLTableElement> {
  data: TData[];
  columns: TableColumn<TData>[];
  rowKey?: keyof TData | ((row: TData, rowIndex: number) => string | number);
  emptyMessage?: string;
  onRowClick?: (row: TData, rowIndex: number) => void;
}
