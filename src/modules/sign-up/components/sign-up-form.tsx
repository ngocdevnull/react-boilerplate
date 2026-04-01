import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input, InputPassword, LoadingOverlay, Notice, PhoneInput } from '@ui';

import { signUpSchema } from '../schema/sign-up.schema';
import { toSignUpPayload } from '../utils/to-sign-up-payload';
import { useSignUp } from '../hooks/use-sign-up';
import type { SignUpFormValues } from '../types/sign-up-form.type';

export function SignUpForm() {
  const { t } = useTranslation('authentication');
  const { signUp, isSubmitting, error: authError, clearError } = useSignUp();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      agreeTerms: false,
      phone: '',
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    await signUp(toSignUpPayload(data));
  };

  return (
    <>
      <LoadingOverlay loading={isSubmitting} />
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <h1 className="text-xl font-bold text-black-10">{t('signUp.title')}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {t('signUp.hasAccount')}{' '}
            <Link to="/sign-in" className="text-secondary font-medium hover:underline">
              {t('signUp.signInLink')}
            </Link>
          </p>
        </div>

        <fieldset className="flex flex-col gap-4 border-0 p-0 m-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Input
                id="firstName"
                placeholder={t('signUp.firstNamePlaceholder')}
                variant="borderless"
                isError={!!errors.firstName}
                {...register('firstName')}
              />
              {errors.firstName && (
                <span className="text-xs text-error">{errors.firstName.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                id="lastName"
                placeholder={t('signUp.lastNamePlaceholder')}
                variant="borderless"
                isError={!!errors.lastName}
                {...register('lastName')}
              />
              {errors.lastName && (
                <span className="text-xs text-error">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="email"
              type="email"
              placeholder={t('signUp.emailPlaceholder')}
              variant="borderless"
              isError={!!errors.email}
              {...register('email')}
            />
            {errors.email && <span className="text-xs text-error">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <InputPassword
              id="password"
              placeholder={t('signUp.passwordPlaceholder')}
              variant="borderless"
              isError={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <span className="text-xs text-error">{errors.password.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <InputPassword
              id="confirmPassword"
              placeholder={t('signUp.confirmPasswordPlaceholder')}
              variant="borderless"
              isError={!!errors.confirmPassword}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <span className="text-xs text-error">{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <PhoneInput
                  defaultCountry="VN"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            {errors.phone && <span className="text-xs text-error">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="address"
              placeholder={t('signUp.addressPlaceholder')}
              variant="borderless"
              isError={!!errors.address}
              {...register('address')}
            />
            {errors.address && (
              <span className="text-xs text-error">{errors.address.message}</span>
            )}
          </div>
        </fieldset>

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <Checkbox id="agreeTerms" {...register('agreeTerms')} />
            <span className="text-sm text-gray-600">
              {t('signUp.agreePrefix')}{' '}
              <Link to="/terms" className="text-secondary hover:underline">
                {t('signUp.termsLink')}
              </Link>
            </span>
          </label>
          {errors.agreeTerms && (
            <span className="text-xs text-error">{errors.agreeTerms.message}</span>
          )}
        </div>

        {authError && (
          <Notice
            variant="error"
            className="rounded-[5px]"
            icon={<AlertTriangle className="h-5 w-5 text-error" />}
            onClose={clearError}
          >
            {authError}
          </Notice>
        )}

        <Button
          type="submit"
          isLoading={isSubmitting}
          className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
        >
          {t('signUp.submitButton')}
        </Button>
      </form>
    </>
  );
}
