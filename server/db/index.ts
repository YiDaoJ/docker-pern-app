import { Pool } from 'pg';

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432'),
// });

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  database: 'perntodo',
  password: 'mysecretpassword',
  port: 5432,
});

export default pool;
