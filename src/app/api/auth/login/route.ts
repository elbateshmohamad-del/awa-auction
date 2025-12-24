
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { setAuthCookie } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find user by email or memberId
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email },
                    { memberId: email } // Reuse 'email' input var as 'identifier'
                ]
            }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Compare password with bcrypt hash
        const isValidPassword = await bcrypt.compare(password, user.passwordHash);
        if (!isValidPassword) {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Set signed JWT cookie
        await setAuthCookie({
            userId: user.id,
            role: user.role,
            email: user.email
        });

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                memberType: user.memberType,
                phoneNumber: user.phoneNumber,
                address: user.address,
                corporateName: user.corporateName,
                corporateRegNum: user.corporateRegNum,
                representative: user.representative,
                preferredCurrency: user.preferredCurrency,
                permissions: user.permissions ? JSON.parse(user.permissions) : [],
                memberId: user.memberId
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
