import { NextResponse } from 'next/server';

/**
 * Auth endpoint info
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Authentication API',
    endpoints: {
      'POST /api/auth/send-otp': 'Send OTP to phone or email',
      'POST /api/auth/verify-otp': 'Verify OTP and get tokens',
      'POST /api/auth/refresh': 'Refresh access token',
      'GET /api/auth/me': 'Get current authenticated user',
    },
  });
}
