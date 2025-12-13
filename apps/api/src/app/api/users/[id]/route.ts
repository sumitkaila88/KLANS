import { NextRequest, NextResponse } from 'next/server';
import { getUserById, hardDeleteUser, restoreUser, softDeleteUser, updateUser } from '@/db/queries/users';

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

// make use inatcive 

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
  ) {
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
  }



// restore user 

export async function PATCH(
    _req: Request,
    context: { params: Promise<{ id: string }> }
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
  }