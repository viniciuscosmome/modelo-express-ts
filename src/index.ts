import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { PORT } from './globals/constants';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  return res.send({ message: 'express' });
});

app.listen(PORT, () => {
  console.info(`Servidor ONN.`);
  console.info(`Porta: ${PORT}`);
});
