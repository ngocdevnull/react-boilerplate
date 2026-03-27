import type { SignUpPayload } from '@core/types/auth/sign-up.type';

import type { SignUpFormValues } from '../types/sign-up-form.type';

export function toSignUpPayload(values: SignUpFormValues): SignUpPayload {
  return {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    address: values.address,
    password: values.password,
    agreeTerms: values.agreeTerms,
  };
}
