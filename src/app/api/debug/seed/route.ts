
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        // Create Admin User
        const adminEmail = 'admin@example.com';
        const adminExists = await prisma.user.findUnique({ where: { email: adminEmail } });
        if (!adminExists) {
            await prisma.user.create({
                data: {
                    email: adminEmail,
                    passwordHash: 'admin123',
                    name: 'Super Admin',
                    role: 'ADMIN',
                    memberType: 'CORPORATE'
                }
            });
        } else {
            // Force update role to ADMIN just in case it was USER
            await prisma.user.update({
                where: { email: adminEmail },
                data: { role: 'ADMIN' }
            });
        }

        // Create Staff User (Newcomer)
        const staffEmail = 'staff@example.com';
        const staffExists = await prisma.user.findUnique({ where: { email: staffEmail } });
        if (!staffExists) {
            await prisma.user.create({
                data: {
                    email: staffEmail,
                    passwordHash: 'staff123',
                    name: 'Junior Staff',
                    role: 'STAFF',
                    memberType: 'INDIVIDUAL'
                }
            });
        }

        return NextResponse.json({ success: true, message: 'Seeded Admin and Staff users' });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
