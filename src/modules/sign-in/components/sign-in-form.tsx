import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  InputPassword,
  Input,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  InputField,
  RadioField,
  useToast,
} from '@ui';

import { signInSchema } from '../schema/sign-in.schema';
import { useSignIn } from '../hooks/use-sign-in';
import type { SignInFormValues } from '../types/sign-in-form.type';

export function SignInForm() {
  const { t } = useTranslation('authentication');
  const { signIn: submitSignIn, isSubmitting, error: authError, clearError } = useSignIn();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { role: 'doctor', rememberMe: false },
  });

  const role = useWatch({ control, name: 'role' });

  useEffect(() => {
    if (authError) {
      toast({
        variant: 'error',
        message: authError,
        icon: <AlertTriangle className="h-5 w-5 text-error" />,
        onClose: clearError,
      });

    }
  }, [authError, toast, clearError]);

  const onSubmit = (data: SignInFormValues) => submitSignIn(data);

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="text-xl font-bold text-black-10">{t('signIn.title')}</h1>
      <p className="mt-1 text-sm text-gray-500">
        {t('signIn.noAccount')}{' '}
        <Link to="/sign-up" className="text-secondary font-medium hover:underline">
          {t('signIn.signUpLink')}
        </Link>
      </p>

      <RadioField error={errors.role?.message}>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid grid-cols-2 gap-3"
            >
              <Label
                htmlFor="role-doctor"
                className={`flex items-center justify-center h-12 rounded-[5px] text-sm font-semibold cursor-pointer transition-all border border-secondary
              ${role === 'doctor'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-auth-bg text-auth-radio-inactive'
                  }`}
              >
                <RadioGroupItem id="role-doctor" value="doctor" className="sr-only" />
                {t('signIn.doctorRole')}
              </Label>

              <Label
                htmlFor="role-patient"
                className={`flex items-center justify-center h-12 rounded-[5px] text-sm font-semibold cursor-pointer transition-all border border-secondary
              ${role === 'patient'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-auth-bg text-auth-radio-inactive'
                  }`}
              >
                <RadioGroupItem id="role-patient" value="patient" className="sr-only" />
                {t('signIn.patientRole')}
              </Label>
            </RadioGroup>
          )}
        />
      </RadioField>

      <fieldset className="flex flex-col gap-4 border-0 p-0 m-0">
        <InputField error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder={t('signIn.emailPlaceholder')}
            variant="borderless"
            isError={!!errors.email}
            {...register('email')}
          />
        </InputField>

        <InputField error={errors.password?.message}>
          <InputPassword
            id="password"
            placeholder="••••••••••••"
            variant="borderless"
            isError={!!errors.password}
            {...register('password')}
          />
        </InputField>
      </fieldset>

      <Button

        type="submit"
        isLoading={isSubmitting}
        className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
      >
        {t('signIn.loginButton')}
      </Button>

      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-2 cursor-pointer select-none">
          <Checkbox id="rememberMe" {...register('rememberMe')} />
          <span className="text-sm text-gray-600">{t('signIn.rememberMe')}</span>
        </Label>
        <Link
          to="/forgot-password"
          className="text-sm text-primary font-medium hover:underline"
        >
          {t('signIn.forgotPassword')}
        </Link>
      </div>
    </form>
  );
}
