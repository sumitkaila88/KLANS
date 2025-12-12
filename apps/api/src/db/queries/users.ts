import crypto from 'crypto';
import { db } from '@/db/client';
import { users } from '@/db/schema/users';

export type CreateUserInput = {
  full_name: string;
  phone: string;
  email?: string;
  avatar_url?: string;
  gender?: string;
  dob?: string;
  bio?: string;
  is_active?: boolean;
};

export async function createUser(data: CreateUserInput) {
  const user_id = crypto.randomUUID(); // generate UUID per request

  await db.insert(users).values({
    user_id,
    full_name: data.full_name,
    phone: data.phone,
    email: data.email || '',
    avatar_url: data.avatar_url || '',
    gender: data.gender || '',
    dob: data.dob ? new Date(data.dob) : null,
    bio: data.bio || '',
    is_active: data.is_active ?? true,
  });

  return user_id; // << RETURN ONLY THE UUID
}
