import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers } from '@klans/db';
import { withAuth } from '@/middleware/auth';

async function handler(_req: NextRequest) {
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

export const GET = withAuth(handler);
