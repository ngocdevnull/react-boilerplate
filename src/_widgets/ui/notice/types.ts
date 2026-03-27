import { type VariantProps } from 'class-variance-authority';
import { noticeVariants } from './variant';

export interface NoticeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof noticeVariants> {
  icon?: React.ReactNode;
  onClose?: () => void;
  title?: string;
}
