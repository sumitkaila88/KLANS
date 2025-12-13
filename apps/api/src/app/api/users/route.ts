import { NextResponse } from 'next/server';
import { getAllUsers } from '@/db/queries/users';

export async function GET() {
  try {
    const users = await getAllUsers();

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
