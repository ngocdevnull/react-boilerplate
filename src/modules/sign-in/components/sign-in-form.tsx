import { Link } from 'react-router-dom';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react';

import {
  Button,
  InputPassword,
  Input,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Notice,
  LoadingOverlay,
} from '@ui';
import { signInSchema } from '../schema/sign-in.schema';
import { useSignIn } from '../hooks/use-sign-in';

import type { SignInFormValues } from '../types/sign-in-form.type';

export function SignInForm() {
  const { signIn: submitSignIn, isSubmitting, error: authError, clearError } = useSignIn();
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

  const onSubmit = (data: SignInFormValues) => submitSignIn(data);

  return (
    <>
      <LoadingOverlay loading={isSubmitting} />
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="text-xl font-bold text-black-10">Welcome to Doctsyl</h1>
        <p className="mt-1 text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link to="/sign-up" className="text-secondary font-medium hover:underline">
            Sign Up
          </Link>
        </p>

        <fieldset className="border-0 p-0 m-0">
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="grid grid-cols-2 gap-3"
              >
                <label
                  htmlFor="role-doctor"
                  className={`flex items-center justify-center h-12 rounded-[5px] text-sm font-semibold cursor-pointer transition-all border border-secondary
                ${
                  role === 'doctor'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-auth-bg text-auth-radio-inactive'
                }`}
                >
                  <RadioGroupItem id="role-doctor" value="doctor" className="sr-only" />
                  Doctor
                </label>

                <label
                  htmlFor="role-patient"
                  className={`flex items-center justify-center h-12 rounded-[5px] text-sm font-semibold cursor-pointer transition-all border border-secondary
                ${
                  role === 'patient'
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-auth-bg text-auth-radio-inactive'
                }`}
                >
                  <RadioGroupItem id="role-patient" value="patient" className="sr-only" />
                  Patient
                </label>
              </RadioGroup>
            )}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-4 border-0 p-0 m-0">
          <div className="flex flex-col gap-1">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              variant="borderless"
              isError={!!errors.email}
              {...register('email')}
            />
            {errors.email && <span className="text-xs text-[#FF5263]">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <InputPassword
              id="password"
              placeholder="••••••••••••"
              variant="borderless"
              isError={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <span className="text-xs text-[#FF5263]">{errors.password.message}</span>
            )}
          </div>
        </fieldset>

        {authError && (
          <Notice
            variant="error"
            className="rounded-[5px]"
            icon={<AlertTriangle className="h-5 w-5 text-[#FF5263]" />}
            onClose={clearError}
          >
            {authError}
          </Notice>
        )}

        <Button
          type="submit"
          isLoading={isSubmitting}
          className="h-12 bg-[#796EFF] hover:bg-[#6D63E5] text-white w-full rounded-[5px] font-semibold"
        >
          Login
        </Button>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <Checkbox id="rememberMe" {...register('rememberMe')} />
            <span className="text-sm text-gray-600">Remember Me</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-sm text-[#796EFF] font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </>
  );
}
