import express from 'express';
import { routes } from './routes';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');

  next();
});

app.use(express.json());
app.use(routes);

export { app };
