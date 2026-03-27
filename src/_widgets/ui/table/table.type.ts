import type { VariantProps } from 'class-variance-authority';
import type { ReactNode, TableHTMLAttributes } from 'react';

import { tableVariants } from './variant';

export type TableCellValue = ReactNode;

export interface TableColumn<TData> {
  key: keyof TData | string;
  header: string;
  className?: string;
  headerClassName?: string;
  render?: (row: TData, rowIndex: number) => TableCellValue;
}

export interface TableProps<TData>
  extends TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  data: TData[];
  columns: TableColumn<TData>[];
  rowKey?: keyof TData | ((row: TData, rowIndex: number) => string | number);
  wrapperClassName?: string;
  emptyMessage?: string;
}
