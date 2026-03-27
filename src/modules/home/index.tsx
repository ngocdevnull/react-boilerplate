import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, LogIn } from 'lucide-react';
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

export function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGenericDialogOpen, setIsGenericDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 font-sans dark:from-slate-900 dark:via-slate-950 dark:to-black p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-10 py-12 px-10 bg-card/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-[var(--radius)] shadow-2xl sm:items-start text-center sm:text-left transition-all hover:shadow-primary/5">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">
            React Boilerplate (Home)
          </h1>
          <p className="text-muted-foreground text-lg">
            Streamlining grain management with intelligent automation.
          </p>
        </div>

        <div className="flex flex-col w-full gap-8">
          <Notice
            variant="info"
            className="border-primary/20 bg-primary/5 text-primary-foreground dark:text-primary"
          >
            Welcome to React Boilerplate! Please authenticate to access your tools and dashboards.
          </Notice>

          <div className="grid w-full gap-6 p-6 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Quick Test: Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="example@smartgrain.com"
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
                Agree to system protocols
              </Label>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="default"
              className="shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Launch Overview
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(true)}
              className="hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Dialog Demo
            </Button>
            <Button asChild variant="secondary" className="ml-auto group">
              <Link to="/sign-in" className="flex items-center gap-2">
                <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Sign in
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <DynamicDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Confirm Operation"
        footer={
          <div className="flex gap-3 w-full">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={() => setIsDialogOpen(false)}
              className="flex-1 bg-primary hover:bg-primary-hover"
            >
              Confirm
            </Button>
          </div>
        }
      >
        <Notice
          variant="warning"
          icon={<AlertTriangle className="h-5 w-5" />}
          className="mb-4 bg-error/5 text-error border-error/20"
        >
          Ongoing automated processes will be halted immediately.
          <br />
          <span className="font-semibold text-xs opacity-80 uppercase tracking-widest mt-1 block italic">
            CRITICAL ACTION REQUIRED
          </span>
        </Notice>
        <div className="space-y-3">
          <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Reason for Halt
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <SelectValue placeholder="Select diagnostic reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-available">Sensor not available</SelectItem>
              <SelectItem value="patient-canceled">Protocol canceled</SelectItem>
              <SelectItem value="other">Other mechanical failure</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DynamicDialog>
    </div>
  );
}
