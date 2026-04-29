import { cn } from '../../common/cn';
import { Table } from './table';
import { TableBody } from './table-body';
import { TableCell } from './table-cell';
import { TableHead } from './table-head';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import type { TableProps } from './types';

const DEFAULT_EMPTY_MESSAGE = 'No data available.';

const getRowKey = <TData,>(
  row: TData,
  rowIndex: number,
  rowKey?: keyof TData | ((row: TData, rowIndex: number) => string | number),
): string | number => {
  if (typeof rowKey === 'function') {
    return rowKey(row, rowIndex);
  }

  if (typeof rowKey === 'string') {
    return String(row[rowKey]);
  }

  return rowIndex;
};

export const DataTable = <TData,>({
  data,
  columns,
  rowKey,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  className,
  onRowClick,
  ...props
}: TableProps<TData>) => {
  return (
    <Table
      className={cn(
        'w-full min-w-full overflow-hidden rounded-lg border border-border bg-white',
        'border-separate border-spacing-0',
        className,
      )}
      {...props}
    >
      <TableHeader className="bg-background">
        <TableRow className="border-border hover:bg-transparent">
          {columns.map((column) => (
            <TableHead
              key={String(column.key)}
              className={cn(
                'h-auto border-b border-border px-4 py-3 text-left font-semibold text-primary',
                column.headerClassName,
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0 ? (
          <TableRow className="border-border hover:bg-transparent">
            <TableCell
              colSpan={columns.length}
              className="px-4 py-6 text-center text-sm text-black-40"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, rowIndex) => {
            const isLastRow = rowIndex === data.length - 1;
            return (
              <TableRow
                key={getRowKey(row, rowIndex, rowKey)}
                className={cn('border-border hover:bg-black-40/5', onRowClick && 'cursor-pointer')}
                onClick={() => onRowClick?.(row, rowIndex)}
              >
                {columns.map((column) => (
                  <TableCell
                    key={String(column.key)}
                    className={cn(
                      'border-border px-4 py-3 text-primary',
                      !isLastRow && 'border-b',
                      column.className,
                    )}
                  >
                    {column.render
                      ? column.render(row, rowIndex)
                      : String(row[column.key as keyof TData] ?? '')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};
