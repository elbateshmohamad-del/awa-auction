import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || '(not set)',
        TYPE_URL: typeof process.env.NEXTAUTH_URL,
        GOOGLE_ID_SET: !!process.env.GOOGLE_CLIENT_ID,
        GOOGLE_ID_PREFIX: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID.substring(0, 10) + '...' : 'N/A',
        GOOGLE_SECRET_SET: !!process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_SECRET_SET: !!process.env.NEXTAUTH_SECRET,
        NODE_ENV: process.env.NODE_ENV,
        VERCEL_URL: process.env.VERCEL_URL || '(not set)',
    });
}
