import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@shared/components/header/header';
import { Sidebar } from '@shared/components/sidebar/sidebar';
interface PlaceholderPageProps {
  activeKey: string;
}
export const PlaceholderPage = ({ activeKey }: PlaceholderPageProps) => {
  const { t } = useTranslation('common');
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background font-sans">
      <Sidebar activeKey={activeKey} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-slate-50/30 p-8 dark:bg-slate-900/30">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground capitalize">
              {activeKey.replace('-', ' ')}
            </h1>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 dark:border-slate-700 dark:bg-slate-950">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <div className="h-8 w-8 text-primary">⚡</div>
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  {t('common.underConstruction', 'Page Under Construction')}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {t(
                    'common.placeholderDescription',
                    'We are working hard to bring you this feature.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
