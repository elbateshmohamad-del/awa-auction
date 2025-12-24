
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

// GET: List all users
export async function GET() {
    try {
        // Simple auth check 
        const cookieStore = await cookies();
        const authToken = cookieStore.get('auth_token')?.value;

        if (!authToken) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const payload = JSON.parse(authToken);
        if (payload.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const users = await prisma.user.findMany({
            where: { role: 'USER' }, // Only show regular users
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                memberType: true,
                createdAt: true, // Use createdAt as 'registered'
                // Add validation/status fields if they exist in schema, otherwise mock or omit
            },
            orderBy: { createdAt: 'desc' }
        });

        // Map to frontend expected format if needed, but we should align frontend to backend.
        // Frontend expects: id, name, email, type, status, country, registered
        // We will return what we have and adjust frontend.

        return NextResponse.json({ users });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT: Update user role
export async function PUT(request: Request) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('auth_token')?.value;

        if (!authToken) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const payload = JSON.parse(authToken);
        if (payload.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const body = await request.json();
        const { userId, role } = body;

        if (!['ADMIN', 'STAFF', 'USER'].includes(role)) {
            return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { role }
        });

        return NextResponse.json({ success: true, user: updatedUser });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// POST: Create new user
export async function POST(request: Request) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('auth_token')?.value;

        if (!authToken) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const payload = JSON.parse(authToken);
        if (payload.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const body = await request.json();
        const { email, password, name, role } = body;

        // Basic validation
        if (!email || !password || !name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        // Create user
        // NOTE: Password should be hashed in production using bcrypt
        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash: password, // Storing plaintext for prototype
                name,
                role: role || 'USER',
                memberType: 'INDIVIDUAL', // Default
            }
        });

        return NextResponse.json({ success: true, user: newUser });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
