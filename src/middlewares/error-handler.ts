import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export type ApplicationError = {
  name: string;
  message: string;
};

export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err.name === 'ConflictError') {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === 'notEnoughMoneyError') {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }
  /* eslint-disable-next-line no-console */
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
