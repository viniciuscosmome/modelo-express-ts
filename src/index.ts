import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import { PORT } from './globals/constants';
import { handleErrors } from './middlewares/handle.errors';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(handleErrors);

app.listen(PORT, () => {
  console.info(`Servidor ONN.`);
  console.info(`Porta: ${PORT}`);
});
