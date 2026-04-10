import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button, InputField, RadioField, CheckboxField, useToast } from '@ui';
import { signInSchema } from '../schema/sign-in.schema';
import { useSignIn } from '../hooks/use-sign-in';
import type { SignInFormValues } from '../types/sign-in-form.type';
export const SignInForm = () => {
  const { t } = useTranslation('authentication');
  const { signIn: submitSignIn, isSubmitting, error: authError, clearError } = useSignIn();
  const { toast } = useToast();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { role: 'doctor', rememberMe: false },
  });

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

      <RadioField
        name="role"
        control={control}
        options={[
          { label: t('signIn.doctorRole'), value: 'doctor' },
          { label: t('signIn.patientRole'), value: 'patient' },
        ]}
        error={errors.role?.message}
      />

      <fieldset className="flex flex-col gap-4 border-0 p-0 m-0">
        <InputField
          name="email"
          control={control}
          type="email"
          placeholder={t('signIn.emailPlaceholder')}
          variant="borderless"
          error={errors.email?.message}
        />

        <InputField
          name="password"
          control={control}
          type="password"
          placeholder="••••••••••••"
          variant="borderless"
          error={errors.password?.message}
        />
      </fieldset>

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
      >
        {t('signIn.loginButton')}
      </Button>

      <div className="flex items-center justify-between">
        <CheckboxField
          name="rememberMe"
          control={control}
          label={t('signIn.rememberMe')}
        />
        <Link to="/forgot-password" className="text-sm text-primary font-medium hover:underline">
          {t('signIn.forgotPassword')}
        </Link>
      </div>
    </form>
  );
};
