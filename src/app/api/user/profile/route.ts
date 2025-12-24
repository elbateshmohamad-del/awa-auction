
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthFromCookie } from '@/lib/auth';

export async function PUT(request: Request) {
    try {
        // Get authenticated user from verified JWT session
        const auth = await getAuthFromCookie();

        if (!auth) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const {
            phoneNumber,
            address,
            memberType,
            corporateName,
            corporateRegNum,
            representative,
            preferredCurrency
        } = body;

        // Use the verified userId from JWT, NOT from client request
        const updatedUser = await prisma.user.update({
            where: { id: auth.userId },
            data: {
                phoneNumber,
                address,
                memberType,
                corporateName,
                corporateRegNum,
                representative,
                preferredCurrency
            }
        });

        // Return sanitized user data (exclude sensitive fields like passwordHash)
        return NextResponse.json({
            success: true,
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                name: updatedUser.name,
                role: updatedUser.role,
                memberType: updatedUser.memberType,
                phoneNumber: updatedUser.phoneNumber,
                address: updatedUser.address,
                corporateName: updatedUser.corporateName,
                corporateRegNum: updatedUser.corporateRegNum,
                representative: updatedUser.representative,
                preferredCurrency: updatedUser.preferredCurrency
            }
        });

    } catch (error) {
        console.error('Profile update error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        // Get authenticated user from verified JWT session
        const auth = await getAuthFromCookie();

        if (!auth) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Fetch user profile using verified userId
        const user = await prisma.user.findUnique({
            where: { id: auth.userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                memberType: true,
                phoneNumber: true,
                address: true,
                corporateName: true,
                corporateRegNum: true,
                representative: true,
                preferredCurrency: true,
                kycStatus: true,
                memberId: true
            }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, user });

    } catch (error) {
        console.error('Profile fetch error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
