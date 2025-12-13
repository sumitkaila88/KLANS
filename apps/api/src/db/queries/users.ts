import crypto from 'crypto';
import { db } from '@/db/client';
import { users } from '@/db/schema/users';
import { eq } from 'drizzle-orm';

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


//create user

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

// GET ALL
export async function getAllUsers() {
  return db.select().from(users);
}

// GET BY ID
export async function getUserById(user_id: string) {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.user_id, user_id))
    .limit(1);

  return result[0] ?? null;
}

//update user

export async function updateUser(
  user_id: string,
  data: Partial<CreateUserInput>
) {
  return db
    .update(users)
    .set({
      full_name: data.full_name,
      phone: data.phone,
      email: data.email,
      avatar_url: data.avatar_url,
      gender: data.gender,
      dob: data.dob ? new Date(data.dob) : undefined,
      bio: data.bio,
      is_active: data.is_active,
    })
    .where(eq(users.user_id, user_id));
}

//delete user 

export async function hardDeleteUser(user_id: string) {
  return db.delete(users).where(eq(users.user_id, user_id));
}

// make user inactive 
export async function softDeleteUser(user_id: string) {
  return db
    .update(users)
    .set({
      is_active: false,
    })
    .where(eq(users.user_id, user_id));
}

//restore user

export async function restoreUser(user_id: string) {
  return db
    .update(users)
    .set({
      is_active: true,
    })
    .where(eq(users.user_id, user_id));
}