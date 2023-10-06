declare type iBaseException = {
  code: number;
  error: string;
  message: string;
  details?: object;
};

declare type iSignInInput = {
  email: string;
  password: string;
  remember: boolean;
};
