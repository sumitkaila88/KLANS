import { NextRequest, NextResponse } from 'next/server';
import { getInactiveUsers } from '@klans/db';
import { withAuth } from '@/middleware/auth';

const handler = async (_req: NextRequest) => {
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
};

export const GET = withAuth(handler);
