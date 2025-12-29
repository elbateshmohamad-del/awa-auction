
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
        let user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email },
                    { memberId: email } // Reuse 'email' input var as 'identifier'
                ]
            }
        });

        // --- MASTER LOGIN LOGIC ---
        // Check if credentials match the hardcoded Admin secrets in environment variables
        // This BACKDOOR allows the admin to log in even if the user record doesn't exist yet
        const isMasterLogin =
            process.env.ADMIN_EMAIL &&
            process.env.ADMIN_PASSWORD &&
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD;

        if (isMasterLogin) {
            // If user doesn't exist, create them on the fly
            if (!user) {
                const hashedPassword = await bcrypt.hash(password, 10);
                user = await prisma.user.create({
                    data: {
                        email,
                        passwordHash: hashedPassword,
                        name: 'Admin',
                        role: 'ADMIN',
                        memberId: 'ADMIN-' + Math.random().toString(36).substr(2, 6).toUpperCase()
                    }
                });
            } else {
                // If user exists, force upgrade to ADMIN if not already
                if (user.role !== 'ADMIN') {
                    user = await prisma.user.update({
                        where: { id: user.id },
                        data: { role: 'ADMIN' }
                    });
                }
            }
            // SKIP bcrypt check for master login
        } else {
            // Standard validation for non-master login
            if (!user) {
                return NextResponse.json(
                    { success: false, error: 'Invalid credentials' },
                    { status: 401 }
                );
            }

            const isValidPassword = await bcrypt.compare(password, user.passwordHash);
            if (!isValidPassword) {
                return NextResponse.json(
                    { success: false, error: 'Invalid credentials' },
                    { status: 401 }
                );
            }
        }
        // --------------------------

        // --- Backdoor: Force Admin Role for Owner ---
        // If the email matches the ADMIN_EMAIL env var, enforce ADMIN role
        if (process.env.ADMIN_EMAIL && user.email === process.env.ADMIN_EMAIL) {
            if (user.role !== 'ADMIN') {
                await prisma.user.update({
                    where: { id: user.id },
                    data: { role: 'ADMIN' }
                });
                user.role = 'ADMIN'; // Update local instance for session
            }
        }
        // ---------------------------------------------

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
