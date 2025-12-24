import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, status, verifiedViews, verifiedLikes, verifiedShares, rewardGranted } = body;

        const updated = await prisma.snsSubmission.update({
            where: { id: Number(id) },
            data: {
                status,
                verifiedViews: verifiedViews !== undefined ? Number(verifiedViews) : undefined,
                verifiedLikes: verifiedLikes !== undefined ? Number(verifiedLikes) : undefined,
                verifiedShares: verifiedShares !== undefined ? Number(verifiedShares) : undefined,
                rewardGranted,
            },
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error('Failed to update SNS submission:', error);
        return NextResponse.json({ error: 'Failed to update submission' }, { status: 500 });
    }
}
