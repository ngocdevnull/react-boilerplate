import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, PhoneInputField, InputField, CheckboxField, useToast } from '@ui';
import { signUpSchema } from '../schema/sign-up.schema';
import { toSignUpPayload } from '../utils/to-sign-up-payload';
import { useSignUp } from '../hooks/use-sign-up';
import type { SignUpFormValues } from '../types/sign-up-form.type';
export const SignUpForm = () => {
  const { t } = useTranslation('authentication');
  const { signUp, isSubmitting, error: authError, clearError } = useSignUp();
  const { toast } = useToast();
  const {
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
          <InputField
            name="firstName"
            control={control}
            placeholder={t('signUp.firstNamePlaceholder')}
            variant="borderless"
            error={errors.firstName?.message}
          />

          <InputField
            name="lastName"
            control={control}
            placeholder={t('signUp.lastNamePlaceholder')}
            variant="borderless"
            error={errors.lastName?.message}
          />
        </div>

        <InputField
          name="email"
          control={control}
          type="email"
          placeholder={t('signUp.emailPlaceholder')}
          variant="borderless"
          error={errors.email?.message}
        />

        <InputField
          name="password"
          control={control}
          type="password"
          placeholder={t('signUp.passwordPlaceholder')}
          variant="borderless"
          error={errors.password?.message}
        />

        <InputField
          name="confirmPassword"
          control={control}
          type="password"
          placeholder={t('signUp.confirmPasswordPlaceholder')}
          variant="borderless"
          error={errors.confirmPassword?.message}
        />

        <PhoneInputField
          name="phone"
          control={control}
          defaultCountry="VN"
          placeholder={t('signUp.phonePlaceholder')}
          error={errors.phone?.message}
        />

        <InputField
          name="address"
          control={control}
          placeholder={t('signUp.addressPlaceholder')}
          variant="borderless"
          error={errors.address?.message}
        />
      </fieldset>

      <CheckboxField
        name="agreeTerms"
        control={control}
        error={errors.agreeTerms?.message}
        label={
          <>
            {t('signUp.agreePrefix')}{' '}
            <Link to="/terms" className="text-secondary hover:underline">
              {t('signUp.termsLink')}
            </Link>
          </>
        }
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="h-12 bg-primary hover:bg-primary-hover text-white w-full rounded-[5px] font-semibold"
      >
        {t('signUp.submitButton')}
      </Button>
    </form>
  );
};
