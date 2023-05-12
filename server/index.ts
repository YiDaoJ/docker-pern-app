import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import pool from './db';

dotenv.config();
const port = process.env.API_PORT;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/api/msg', (req: Request, res: Response) => {
  res.send({ message: 'hallo' });
});

// GET ALL TODOS
app.get('/todos', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM todo');
    res.send(data.rows);
  } catch {
    res.status(500).send('Error Occurs');
  }
});

// CREATE A TODO
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/setup', async (req, res) => {
  try {
    await pool.query(
      'CREATE TABLE todo (todo_id SERIAL PRIMARY KEY, description VARCHAR(255));'
    );

    res.send('DB Created');
  } catch (error) {
    res.status(500).send(`Error occurs: ${error.message}`);
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript server!222');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Ref: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

// ROUTES

// GET ALL TODO
// app.get('/todos', async (req, res) => {
//   try {
//     const allTodos = await pool.query('SELECT * FROM todo');
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// UPDATE A TODO
