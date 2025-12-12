import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT ? parseInt(DB_PORT) : 3306,
});

export const db = drizzle(pool);
