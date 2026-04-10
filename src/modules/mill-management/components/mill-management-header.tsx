import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@ui';

interface MillManagementHeaderProps {
  onNewMill: () => void;
}

export const MillManagementHeader = ({ onNewMill }: MillManagementHeaderProps) => {
  const { t } = useTranslation('millManagement');

  return (
    <header className="flex items-start justify-between gap-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-black-10">{t('title')}</h1>
        <p className="text-md font-normal text-text-tertiary">{t('description')}</p>
      </div>
      <Button leftIcon={<Plus className="h-4 w-4" />} className="gap-2" onClick={onNewMill}>
        <span>{t('addMill')}</span>
      </Button>
    </header>
  );
};
