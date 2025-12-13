import { NextRequest, NextResponse } from 'next/server';
import { deleteUser, getUserById, updateUser } from '@/db/queries/users';

type Params = {
    id: string;
};
  
//Get User
export async function GET(
    _req: NextRequest,
    context: { params: Params }
) {
    try {
    const { id } = await context.params;

    const user = await getUserById(id);

    if (!user) {
        return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        user,
    });
    } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
        { success: false, error: 'Failed to fetch user' },
        { status: 500 }
    );
    }
}

//Edit user by ID

export async function PUT(
    req: NextRequest,
    context: { params: Promise<Params> }
) {
    try {
      const { id } = await context.params;
      const data = await req.json();
  
      const existingUser = await getUserById(id);
      if (!existingUser) {
        return NextResponse.json(
          { success: false, error: 'User not found' },
          { status: 404 }
        );
      }
  
      await updateUser(id, data);
  
      return NextResponse.json({
        success: true,
        user_id: id,
      });
    } catch (error) {
      console.error('Update user error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to update user' },
        { status: 500 }
      );
    }
}

// delete user by ID

export async function DELETE(
    _req: NextRequest,
    context: { params: Promise<Params> }
  ) {
    try {
      const { id } = await context.params;
  
      const existingUser = await getUserById(id);
      if (!existingUser) {
        return NextResponse.json(
          { success: false, error: 'User not found' },
          { status: 404 }
        );
      }
  
      await deleteUser(id);
  
      return NextResponse.json({
        success: true,
        deleted_user_id: id,
      });
    } catch (error) {
      console.error('Delete user error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete user' },
        { status: 500 }
      );
    }
  }

