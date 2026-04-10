export type ForgotPasswordPayload = {
  email: string;
};

export type ForgotPasswordResponseDto = {
  message?: string;
  data?: {
    message?: string;
  };
};
