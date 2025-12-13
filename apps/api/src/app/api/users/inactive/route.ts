import { NextResponse } from 'next/server';
import { getInactiveUsers } from '@/db/queries/users';

export async function GET() {
  try {
    const users = await getInactiveUsers();

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error('Get inactive users error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inactive users' },
      { status: 500 }
    );
  }
}
