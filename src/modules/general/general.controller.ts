import { Request, Response } from 'express';
import { InternalServerErrorException } from 'globals/exceptions';

export const generalController = {
  async home(req: Request, res: Response) {
    return res.send({ message: 'HOME' });
  },
  async all() {
    throw new InternalServerErrorException(
      'O caminho informado não pode ser encontrado.',
    );
  },
};
