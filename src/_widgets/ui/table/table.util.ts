export const getRowKey = <TData>(
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
