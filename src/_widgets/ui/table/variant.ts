import { cva } from 'class-variance-authority';

export const tableWrapperVariants = cva('w-full overflow-x-auto rounded-md border border-border');

export const tableVariants = cva('min-w-full border-collapse text-sm');

export const tableHeadVariants = cva('bg-background');

export const tableHeaderCellVariants = cva(
  'border-b border-border px-4 py-3 text-left font-semibold text-black-10',
);

export const tableEmptyCellVariants = cva('px-4 py-6 text-center text-sm text-black-40');

export const tableRowVariants = cva('hover:bg-black-40/5');

export const tableCellVariants = cva('border-b border-border px-4 py-3 text-black-10');
