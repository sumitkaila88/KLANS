import { mysqlTable, char, varchar, text, boolean, date, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  user_id: char('user_id', 36).primaryKey(),
  full_name: varchar('full_name', 120).notNull(),
  phone: varchar('phone', 20).notNull(),
  email: varchar('email', 150),
  avatar_url: text('avatar_url'),
  gender: varchar('gender', 20),
  dob: date('dob'),
  bio: text('bio'),
  last_login_at: timestamp('last_login_at'),
  is_active: boolean('is_active').default(true),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});
