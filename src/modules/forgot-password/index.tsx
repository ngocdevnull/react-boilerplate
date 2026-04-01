import { AuthLayout } from '@shared/layout/auth-layout';

import { ForgotPasswordForm } from './components/forgot-password-form';

export function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
