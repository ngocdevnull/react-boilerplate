import { AuthLayout } from '@shared/layout/auth-layout';
import { SignInForm } from './components/sign-in-form';
export const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};
