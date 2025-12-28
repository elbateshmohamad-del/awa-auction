
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        console.log("DB-CHECK: Attempting to connect...");

        // 1. Check environment variable
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            return NextResponse.json({
                status: 'ERROR',
                message: 'DATABASE_URL environment variable is missing'
            }, { status: 500 });
        }

        // 2. Test actual query
        const userCount = await prisma.user.count();

        return NextResponse.json({
            status: 'OK',
            message: 'Database connected successfully',
            userCount,
            envVarConfigured: 'Yes (Hidden)'
        });
    } catch (error: any) {
        console.error("DB-CHECK: Failed", error);
        return NextResponse.json({
            status: 'ERROR',
            message: 'Database connection failed',
            details: error.message,
            code: error.code,
            envVar: process.env.DATABASE_URL ? 'Set' : 'Missing'
        }, { status: 500 });
    }
}
