import type { ManagementBaseProps } from './management-base.type';

export const ManagementBase = ({
  header,
  filter,
  table,
  createDialog,
  editDialog,
}: ManagementBaseProps) => {
  return (
    <section className="space-y-6">
      {header}
      {filter}
      {table}
      {createDialog}
      {editDialog}
    </section>
  );
};
