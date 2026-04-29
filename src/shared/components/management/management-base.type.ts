import type React from 'react';

export interface ManagementBaseProps {
  header?: React.ReactNode;
  filter?: React.ReactNode;
  table?: React.ReactNode;
  createDialog?: React.ReactNode;
  editDialog?: React.ReactNode;
}
