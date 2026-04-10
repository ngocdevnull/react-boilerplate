import { AuthLayout } from '@shared/layout/auth-layout';
import { SignUpForm } from './components/sign-up-form';
export const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};
