import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

import type { SidebarItem, SidebarProps } from './sidebar.type';

const defaultItemsConfig = [
  { key: 'overview', labelKey: 'sidebar.overview', href: '/home', icon: LayoutGrid },
  { key: 'appointment', labelKey: 'sidebar.appointment', href: '/appointments', icon: CalendarDays },
  { key: 'my-patient', labelKey: 'sidebar.myPatient', href: '/patients', icon: UserRound },
  {
    key: 'schedule-timings',
    labelKey: 'sidebar.scheduleTimings',
    href: '/schedule-timings',
    icon: Clock3,
  },
  { key: 'payments', labelKey: 'sidebar.payments', href: '/payments', icon: CreditCard },
  { key: 'message', labelKey: 'sidebar.message', href: '/messages', icon: Mail },
  { key: 'blog', labelKey: 'sidebar.blog', href: '/blog', icon: FileText },
  { key: 'settings', labelKey: 'sidebar.settings', href: '/settings', icon: Settings },
];

export function Sidebar({
  items,
  activeKey = 'overview',
  className,
}: SidebarProps) {
  const { t } = useTranslation('common');
  const resolvedItems: SidebarItem[] =
    items ??
    defaultItemsConfig.map(({ key, labelKey, href, icon }) => ({
      key,
      label: t(labelKey),
      href,
      icon,
    }));

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
        {resolvedItems.map(({ key, label, href, icon: Icon }) => {
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
