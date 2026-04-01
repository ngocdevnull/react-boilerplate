import { Link } from 'react-router-dom';
import {
  CalendarDays,
  CreditCard,
  FileText,
  LayoutGrid,
  Mail,
  Settings,
  UserRound,
  Clock3,
} from 'lucide-react';

import logoIcon from '@/assets/icons/doct.svg';
import { cn } from '@/_widgets/common/cn';

import type { SidebarItem, SidebarProps } from './types';

const defaultItems: SidebarItem[] = [
  { key: 'overview', label: 'Overview', href: '/home', icon: LayoutGrid },
  { key: 'appointment', label: 'Appointment', href: '/appointments', icon: CalendarDays },
  { key: 'my-patient', label: 'My Patient', href: '/patients', icon: UserRound },
  { key: 'schedule-timings', label: 'Schedule Timings', href: '/schedule-timings', icon: Clock3 },
  { key: 'payments', label: 'Payments', href: '/payments', icon: CreditCard },
  { key: 'message', label: 'Message', href: '/messages', icon: Mail },
  { key: 'blog', label: 'Blog', href: '/blog', icon: FileText },
  { key: 'settings', label: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebard({
  items = defaultItems,
  activeKey = 'overview',
  className,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-screen w-[280px] flex-col border-r border-border bg-white p-5',
        className,
      )}
    >
      <div className="mb-8">
        <img src={logoIcon} alt="React Boilerplate logo" width={55} height={16} />
      </div>

      <nav className="flex flex-col gap-2">
        {items.map(({ key, label, href, icon: Icon }) => {
          const isActive = key === activeKey;
          return (
            <Link
              key={key}
              to={href}
              className={cn(
                'flex h-10 items-center gap-3 rounded-[8px] px-4 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-active-bg text-white'
                  : 'text-sidebar-inactive hover:bg-sidebar-hover-bg hover:text-sidebar-hover-text',
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
