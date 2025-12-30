import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { createToken } from '@/lib/auth';
import { SignJWT } from 'jose';

// Secret key for signing JWTs
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'awa-auction-dev-secret-key-change-in-production'
);

export async function GET(request: NextRequest) {
    try {
        // Get NextAuth session
        const session = await getServerSession();

        if (!session?.user?.email) {
            // No NextAuth session, redirect to login
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // Find user in database
        const user = await prisma.user.findUnique({
            where: { email: session.user.email }
        });

        if (!user) {
            // User not found, redirect to login
            return NextResponse.redirect(new URL('/login', request.url));
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
    } catch (error) {
        console.error('Google callback error:', error);
        return NextResponse.redirect(new URL('/login?error=callback', request.url));
    }
}
