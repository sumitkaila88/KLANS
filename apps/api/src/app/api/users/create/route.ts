import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@klans/db';
import { withAuth } from '@/middleware/auth';

const handler = async (req: NextRequest) => {
  try {
    const data = await req.json();

    if (!data.full_name || !data.phone) {
      return NextResponse.json(
        { success: false, error: 'full_name and phone are required' },
        { status: 400 }
      );
    }

    const user_id = await createUser(data); // now receives clean UUID

    return NextResponse.json({
      success: true,
      user_id,  // clean string UUID 👍
    });
  } catch (error) {
    console.error('User create error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );
  }
};

export const POST = withAuth(handler);
