import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();
const port = process.env.API_PORT;

const app: Express = express();

app.use(cors());
app.use(express.json());

// DELETE A TODO

app.get('/api/msg', (req: Request, res: Response) => {
  res.send({ message: 'hallo' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript server!222');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Ref: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
