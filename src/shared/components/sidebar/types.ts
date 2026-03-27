import type { LucideIcon } from 'lucide-react';

export type SidebarItem = {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SidebarProps = {
  items?: SidebarItem[];
  activeKey?: string;
  className?: string;
};
