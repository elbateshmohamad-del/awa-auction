
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole, getAuthFromCookie } from '@/lib/auth';
import bcrypt from 'bcryptjs';

const BCRYPT_ROUNDS = 10;

// GET: List all ADMIN and STAFF
export async function GET() {
    const auth = await requireRole(['ADMIN']);
    if (!auth) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const staff = await prisma.user.findMany({
            where: {
                role: { in: ['ADMIN', 'STAFF'] }
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                permissions: true,
                createdAt: true,
            },
            orderBy: { role: 'asc' }
        });

        const formattedStaff = staff.map(s => ({
            ...s,
            permissions: s.permissions ? JSON.parse(s.permissions) : []
        }));

        return NextResponse.json({ staff: formattedStaff });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Create new Staff/Admin
export async function POST(request: Request) {
    const auth = await requireRole(['ADMIN']);
    if (!auth) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { email, password, name, role, permissions } = body;

        if (!email || !password || !name || !role) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate password strength
        if (password.length < 8) {
            return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        // Hash password with bcrypt
        const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash,
                name,
                role,
                permissions: JSON.stringify(permissions || []),
                memberType: 'INDIVIDUAL'
            }
        });

        // Don't return passwordHash
        return NextResponse.json({
            success: true,
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
                permissions: permissions || []
            }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT: Update Staff/Admin permissions or role
export async function PUT(request: Request) {
    const auth = await requireRole(['ADMIN']);
    if (!auth) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { userId, role, permissions } = body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                role,
                permissions: permissions ? JSON.stringify(permissions) : undefined
            }
        });

        return NextResponse.json({ success: true, user: updatedUser });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE: Remove Staff/Admin
export async function DELETE(request: Request) {
    const auth = await requireRole(['ADMIN']);
    if (!auth) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('id');

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        // Prevent self-deletion using verified session
        if (auth.userId === userId) {
            return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 });
        }

        await prisma.user.delete({ where: { id: userId } });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
