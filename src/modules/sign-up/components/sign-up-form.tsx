import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AlertTriangle } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input, InputPassword, PhoneInput, Label, InputField, CheckboxField, useToast } from '@ui';


import { signUpSchema } from '../schema/sign-up.schema';
import { toSignUpPayload } from '../utils/to-sign-up-payload';
import { useSignUp } from '../hooks/use-sign-up';
import type { SignUpFormValues } from '../types/sign-up-form.type';

export function SignUpForm() {
  const { t } = useTranslation('authentication');
  const { signUp, isSubmitting, error: authError, clearError } = useSignUp();
  const { toast } = useToast();

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


  return (
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
          <InputField error={errors.firstName?.message}>
            <Input
              id="firstName"
              placeholder={t('signUp.firstNamePlaceholder')}
              variant="borderless"
              isError={!!errors.firstName}
              {...register('firstName')}
            />
          </InputField>

          <InputField error={errors.lastName?.message}>
            <Input
              id="lastName"
              placeholder={t('signUp.lastNamePlaceholder')}
              variant="borderless"
              isError={!!errors.lastName}
              {...register('lastName')}
            />
          </InputField>
        </div>

        <InputField error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder={t('signUp.emailPlaceholder')}
            variant="borderless"
            isError={!!errors.email}
            {...register('email')}
          />
        </InputField>

        <InputField error={errors.password?.message}>
          <InputPassword
            id="password"
            placeholder={t('signUp.passwordPlaceholder')}
            variant="borderless"
            isError={!!errors.password}
            {...register('password')}
          />
        </InputField>

        <InputField error={errors.confirmPassword?.message}>
          <InputPassword
            id="confirmPassword"
            placeholder={t('signUp.confirmPasswordPlaceholder')}
            variant="borderless"
            isError={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
        </InputField>

        <InputField error={errors.phone?.message}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <PhoneInput
                defaultCountry="VN"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                placeholder={t('signUp.phonePlaceholder')}
              />

            )}
          />
        </InputField>

        <InputField error={errors.address?.message}>
          <Input
            id="address"
            placeholder={t('signUp.addressPlaceholder')}
            variant="borderless"
            isError={!!errors.address}
            {...register('address')}
          />
        </InputField>
      </fieldset>

      <CheckboxField error={errors.agreeTerms?.message}>
        <Label className="flex items-center gap-2 cursor-pointer select-none">
          <Checkbox id="agreeTerms" {...register('agreeTerms')} />
          <span className="text-sm text-gray-600">
            {t('signUp.agreePrefix')}{' '}
            <Link to="/terms" className="text-secondary hover:underline">
              {t('signUp.termsLink')}
            </Link>
          </span>
        </Label>
      </CheckboxField>

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
      >
        {t('signUp.submitButton')}
      </Button>
    </form>
  );
}
