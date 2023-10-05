import { Router } from 'express';
import { generalController } from 'modules';

export const routes = Router();

routes.get('/', generalController.home);
routes.all('*', generalController.all);
