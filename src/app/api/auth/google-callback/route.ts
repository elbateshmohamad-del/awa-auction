import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { createToken } from '@/lib/auth';
import { authOptions } from '@/lib/auth-options';
import { SignJWT } from 'jose';

// Secret key for signing JWTs
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'awa-auction-dev-secret-key-change-in-production'
);

export async function GET(request: NextRequest) {
    console.log('[GoogleCallback] Starting callback processing');
    try {
        // Get NextAuth session
        const session = await getServerSession(authOptions);
        console.log('[GoogleCallback] Session retrieved:', JSON.stringify(session, null, 2));

        if (!session?.user?.email) {
            console.log('[GoogleCallback] No session or email found');
            // Return visible error for debugging
            return NextResponse.json({
                error: 'No session found',
                message: 'getServerSession returned null or no email',
                session: session,
                cookies: request.cookies.getAll()
            }, { status: 401 });
        }

        // Find user in database
        const user = await prisma.user.findUnique({
            where: { email: session.user.email }
        });
        console.log('[GoogleCallback] Database user lookup:', user ? `Found user ${user.id}` : 'User not found');

        if (!user) {
            console.log('[GoogleCallback] User not found in DB');
            return NextResponse.json({
                error: 'User not found in API',
                email: session.user.email
            }, { status: 404 });
        }

        // Create the same JWT token that email/password login creates
        const token = await new SignJWT({
            userId: user.id,
            role: user.role,
            email: user.email
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d')
            .sign(JWT_SECRET);

        // Create response with redirect to dashboard
        const response = NextResponse.redirect(new URL('/dashboard', request.url));

        // Set the auth_token cookie (same as email/password login)
        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });

        return response;
    } catch (error: any) {
        console.error('[GoogleCallback] Error:', error);
        return NextResponse.json({
            error: 'Callback Exception',
            message: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
