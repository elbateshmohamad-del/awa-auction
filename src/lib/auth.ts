/**
 * JWT Authentication Library
 * Provides secure token signing and verification using jose
 */

import { SignJWT, jwtVerify, JWTPayload } from 'jose';
import { cookies } from 'next/headers';

// Secret key for signing JWTs - MUST be set in environment variables
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'awa-auction-dev-secret-key-change-in-production'
);

const COOKIE_NAME = 'auth_token';
const TOKEN_EXPIRY = '7d'; // 7 days

export interface AuthPayload extends JWTPayload {
    userId: string;
    role: string;
    email: string;
}

/**
 * Create a signed JWT token
 */
export async function createToken(payload: Omit<AuthPayload, 'iat' | 'exp'>): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(TOKEN_EXPIRY)
        .sign(JWT_SECRET);
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string): Promise<AuthPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as AuthPayload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}

/**
 * Set authentication cookie with JWT
 */
export async function setAuthCookie(payload: Omit<AuthPayload, 'iat' | 'exp'>): Promise<void> {
    const token = await createToken(payload);
    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    });
}

/**
 * Get authenticated user from cookie
 */
export async function getAuthFromCookie(): Promise<AuthPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
        return null;
    }

    return verifyToken(token);
}

/**
 * Clear authentication cookie
 */
export async function clearAuthCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

/**
 * Verify if user has required role
 */
export async function requireRole(requiredRoles: string[]): Promise<AuthPayload | null> {
    const auth = await getAuthFromCookie();

    if (!auth) {
        return null;
    }

    if (!requiredRoles.includes(auth.role)) {
        return null;
    }

    return auth;
}
