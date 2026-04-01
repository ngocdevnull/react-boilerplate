import { AuthLayout } from '@shared/layout/auth-layout';

import { SignUpForm } from './components/sign-up-form';

export function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
