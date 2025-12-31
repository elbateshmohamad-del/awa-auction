import { NextResponse } from 'next/server';
import { getAuthFromCookie } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const payload = await getAuthFromCookie();

        if (!payload) {
            return NextResponse.json({ authenticated: false }, { status: 401 });
        }

        // Fetch full user profile from DB to ensure data freshness
        const user = await prisma.user.findUnique({
            where: { id: payload.userId }
        });

        if (!user) {
            return NextResponse.json({ authenticated: false }, { status: 401 });
        }

        return NextResponse.json({
            authenticated: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                image: user.image, // Ensure image is included if available in schema
                // Add other necessary fields
                memberType: user.memberType,
                phoneNumber: user.phoneNumber,
                address: user.address,
                corporateName: user.corporateName,
                corporateRegNum: user.corporateRegNum,
                representative: user.representative,
                preferredCurrency: user.preferredCurrency,
                permissions: [] // Add permissions logic if needed
            }
        });
    } catch (error) {
        console.error('[Auth/Me] Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
