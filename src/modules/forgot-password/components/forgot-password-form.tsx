import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, InputField, useToast } from '@ui';

import { useForgotPassword } from '../hooks/use-forgot-password';
import { forgotPasswordSchema } from '../schema/forgot-password.schema';
import type { ForgotPasswordFormValues } from '../types/forgot-password-form.type';

export function ForgotPasswordForm() {
  const { t } = useTranslation('authentication');
  const { forgotPassword, isSubmitting, error: authError, clearError } = useForgotPassword();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    const result = await forgotPassword({ email: data.email });
    toast({
      variant: 'success',
      message: result.message || t('forgotPassword.successMessage'),
    });
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
        <h1 className="text-xl font-bold text-black-10">{t('forgotPassword.title')}</h1>
        <p className="mt-1 text-sm text-gray-500">{t('forgotPassword.description')}</p>
      </div>

      <InputField error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          placeholder={t('forgotPassword.emailPlaceholder')}
          variant="borderless"
          isError={!!errors.email}
          {...register('email')}
        />
      </InputField>

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
      >
        {t('forgotPassword.submitButton')}
      </Button>

      <p className="text-sm text-gray-500">
        {t('forgotPassword.backToSignInPrefix')}{' '}
        <Link to="/sign-in" className="text-secondary font-medium hover:underline">
          {t('forgotPassword.backToSignInLink')}
        </Link>
      </p>
    </form>
  );
}
