import { NextResponse } from 'next/server';
import { db } from '@/db/client';

export async function GET() {
  try {
    const [rows] = await db.execute('SELECT NOW() AS now');
    return NextResponse.json({ success: true, data: rows });
  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message });
  }
}
