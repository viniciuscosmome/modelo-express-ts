import { NextFunction, Request, Response } from 'express';
import { IS_PRODUCTION_ENV } from 'globals/constants';
import { BaseException } from 'globals/exceptions';

export const handleErrors = (
  error: BaseException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof BaseException) {
    return res.status(error.code).json({
      code: error.code,
      error: error.error,
      message: error.message,
    });
  }

  if (!IS_PRODUCTION_ENV) {
    console.info('------------------------------------------');
    console.info('Erro não controlado\n');
    console.info(error);
    console.info('------------------------------------------');
  }

  return next(res.sendStatus(500));
};
