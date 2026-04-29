export type HttpErrorData = {
  message?: Maybe<unknown>;
};

export type HttpError = {
  status?: Maybe<number>;
  message: string;
  data?: Maybe<unknown>;
};
