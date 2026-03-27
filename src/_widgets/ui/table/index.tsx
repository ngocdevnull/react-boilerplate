import { cn } from '../../common/cn';

import type { TableProps } from './table.type';
import {
  tableCellVariants,
  tableEmptyCellVariants,
  tableHeadVariants,
  tableHeaderCellVariants,
  tableRowVariants,
  tableVariants,
  tableWrapperVariants,
} from './variant';

const DEFAULT_EMPTY_MESSAGE = 'No data available.';

function getRowKey<TData>(
  row: TData,
  rowIndex: number,
  rowKey?: keyof TData | ((row: TData, rowIndex: number) => string | number),
): string | number {
  if (typeof rowKey === 'function') {
    return rowKey(row, rowIndex);
  }

  if (typeof rowKey === 'string') {
    return String(row[rowKey]);
  }

  return rowIndex;
}

export function Table<TData>({
  data,
  columns,
  rowKey,
  wrapperClassName,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  className,
  ...props
}: TableProps<TData>) {
  return (
    <div className={cn(tableWrapperVariants(), wrapperClassName)}>
      <table className={cn(tableVariants({ className }))} {...props}>
        <thead className={cn(tableHeadVariants())}>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(tableHeaderCellVariants(), column.headerClassName)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn(tableEmptyCellVariants())}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={getRowKey(row, rowIndex, rowKey)} className={cn(tableRowVariants())}>
                {columns.map((column) => (
                  <td key={String(column.key)} className={cn(tableCellVariants(), column.className)}>
                    {column.render ? column.render(row, rowIndex) : String(row[column.key as keyof TData] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
