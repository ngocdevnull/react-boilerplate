import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Input,
  Label,
  Checkbox,
  Notice,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  DynamicDialog,
} from '@ui';

import { DIAGNOSTIC_REASONS } from './constants/diagnostic-reason.constant';

export function HomePage() {
  const { t } = useTranslation('common');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const diagnoticOptions = DIAGNOSTIC_REASONS.map((opt) => ({
    label: t(opt.labelKey),
    value: opt.value,
  }));

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 font-sans dark:from-slate-900 dark:via-slate-950 dark:to-black p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-10 py-12 px-10 bg-card/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-[var(--radius)] shadow-2xl sm:items-start text-center sm:text-left transition-all hover:shadow-primary/5">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">
            {t('app.homeTitle')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('app.homeSubtitle')}
          </p>
        </div>

        <div className="flex flex-col w-full gap-8">
          <Notice
            variant="info"
            className="border-primary/20 bg-primary/5 text-primary-foreground dark:text-primary"
          >
            {t('app.welcomeNotice')}
          </Notice>

          <div className="grid w-full gap-6 p-6 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
            <div className="grid w-full max-w-sm items-center gap-2">
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

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="default"
              className="shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t('app.launchOverview')}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(true)}
              className="hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t('app.dialogDemo')}
            </Button>
            <Button asChild variant="secondary" className="ml-auto group">
              <Link to="/sign-in" className="flex items-center gap-2">
                <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                {t('app.signIn')}
              </Link>
            </Button>
          </div>
        </div>
      </main>

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
