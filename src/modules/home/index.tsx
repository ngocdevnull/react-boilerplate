import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Input,
  Label,
  Checkbox,
  Notice,
  Select,
  DynamicDialog,
} from '@ui';
import { Header } from '@shared/components/header';
import { Sidebar } from '@shared/components/sidebar';

import { DIAGNOSTIC_REASONS } from './constants/diagnostic-reason.constant';

export function HomePage() {
  const { t } = useTranslation('common');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const diagnoticOptions = DIAGNOSTIC_REASONS.map((opt) => ({
    label: t(opt.labelKey),
    value: opt.value,
  }));

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background font-sans">
      <Sidebar activeKey="overview" />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-slate-50/30 p-8 dark:bg-slate-900/30">
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">
                {t('app.homeTitle')}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t('app.homeSubtitle')}
              </p>
            </div>

            <div className="grid gap-8">
              <Notice
                variant="info"
                className="border-primary/20 bg-primary/5 text-primary-foreground dark:text-primary"
              >
                {t('app.welcomeNotice')}
              </Notice>

              <div className="grid gap-6 rounded-2xl border border-slate-200/50 bg-card/50 p-8 shadow-sm backdrop-blur-sm dark:border-slate-800/50">
                <div className="grid w-full max-w-md items-center gap-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {t('app.quickTestEmail')}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder={t('app.emailPlaceholder')}
                    className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:ring-primary/20"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="terms"
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                  >
                    {t('app.agreeProtocols')}
                  </Label>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button
                  variant="default"
                  className="px-8 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {t('app.launchOverview')}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(true)}
                  className="px-8 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all border-slate-200 dark:border-slate-800"
                >
                  {t('app.dialogDemo')}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <DynamicDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={t('app.dialog.confirmOperation')}
        footer={
          <div className="flex gap-3 w-full">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
              {t('app.dialog.cancel')}
            </Button>
            <Button
              variant="default"
              onClick={() => setIsDialogOpen(false)}
              className="flex-1 bg-primary hover:bg-primary-hover"
            >
              {t('app.dialog.confirm')}
            </Button>
          </div>
        }
      >
        <Notice
          variant="warning"
          icon={<AlertTriangle className="h-5 w-5" />}
          className="mb-4 bg-error/5 text-error border-error/20"
        >
          {t('app.dialog.warningLine1')}
          <br />
          <span className="font-semibold text-xs opacity-80 uppercase tracking-widest mt-1 block italic">
            {t('app.dialog.criticalActionRequired')}
          </span>
        </Notice>
        <div className="space-y-3">
          <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {t('app.dialog.reasonForHalt')}
          </Label>
          <Select
            placeholder={t('app.dialog.selectDiagnosticReason')}
            options={diagnoticOptions}
            className="w-full"
          />
        </div>
      </DynamicDialog>
    </div>
  );
}
