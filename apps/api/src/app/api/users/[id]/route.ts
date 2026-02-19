import { NextRequest, NextResponse } from 'next/server';
import { getUserById, hardDeleteUser, restoreUser, softDeleteUser, updateUser } from '@klans/db';
import { withAuth } from '@/middleware/auth';

type Params = {
    id: string;
};
  
//Get User
const getHandler = async (
    _req: NextRequest,
    context: { params: Promise<Params> }
) => {
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
};

export const GET = withAuth(getHandler);

//Edit user by ID

const putHandler = async (
    req: NextRequest,
    context: { params: Promise<Params> }
) => {
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
};

export const PUT = withAuth(putHandler);

// delete user by ID

// make use inactive 

const deleteHandler = async (
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
  ) => {
    try {
      const { id } = await context.params;
      const { searchParams } = new URL(req.url);
  
      const force = searchParams.get('force') === 'true';
  
      const user = await getUserById(id);
      if (!user) {
        return NextResponse.json(
          { success: false, error: 'User not found' },
          { status: 404 }
        );
      }
  
      if (force) {
        await hardDeleteUser(id);
        return NextResponse.json({
          success: true,
          message: 'User permanently deleted',
        });
      }
  
      await softDeleteUser(id);
      return NextResponse.json({
        success: true,
        message: 'User deactivated',
      });
    } catch (error) {
      console.error('Delete user error:', error);
      return NextResponse.json(
        { success: false, error: 'Delete failed' },
        { status: 500 }
      );
    }
  };

export const DELETE = withAuth(deleteHandler);

// restore user 

const patchHandler = async (
    _req: NextRequest,
    context: { params: Promise<{ id: string }> }
  ) => {
    try {
      const { id } = await context.params;
  
      const user = await getUserById(id);
      if (!user) {
        return NextResponse.json(
          { success: false, error: 'User not found' },
          { status: 404 }
        );
      }
  
      await restoreUser(id);
  
      return NextResponse.json({
        success: true,
        message: 'User restored successfully',
      });
    } catch (error) {
      console.error('Restore user error:', error);
      return NextResponse.json(
        { success: false, error: 'Restore failed' },
        { status: 500 }
      );
    }
  };

export const PATCH = withAuth(patchHandler);
