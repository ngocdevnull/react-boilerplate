import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, HelpCircle, Bell, ChevronDown, LogOut } from 'lucide-react';

import { useAuth } from '@core/store/auth.store';
import { Avatar, Button, Input } from '@ui';

import doctorAvatarImage from '@/assets/images/doctor-avatar.png';

export function Header() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { user, clearAuth } = useAuth();

  const handleLogout = () => {
    clearAuth();
    navigate('/sign-in');
  };

  return (
    <header className="flex h-[88px] w-full items-center justify-between border-b border-border bg-card px-8">
      <div className="flex flex-1 items-center gap-3">
        <Search className="h-5 w-5 text-black-40" />
        <Input
          placeholder={t('header.searchPlaceholder')}
          variant="borderless"
          className="w-full max-w-[400px] bg-transparent text-sm text-black-10 outline-none placeholder:text-black-40"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-border pr-6">
          <Button variant="ghost" className="text-black-40 transition-colors hover:text-primary">
            <HelpCircle className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            className="relative text-black-40 transition-colors hover:text-primary"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-error" />
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex cursor-pointer items-center gap-3">
            <Avatar
              src={doctorAvatarImage}
              alt={user?.name || t('header.doctorName')}
              fallback={user?.name || t('header.doctorName')}
              className="h-11 w-11"
            />
            <div className="hidden flex-col md:flex">
              <span className="text-sm font-bold text-black-10">
                {user?.name || t('header.doctorName')}
              </span>
              <span className="text-xs text-black-40">
                {user?.role || t('header.doctorSpecialty')}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-black-40" />
          </div>

          <Button
            variant="ghost"
            onClick={handleLogout}
            className="flex items-center gap-2 text-black-40 hover:text-error transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline text-sm font-medium">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
