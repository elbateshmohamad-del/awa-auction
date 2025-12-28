import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthFromCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { platform, postUrl, bikeId } = body;

        // Auth Check
        const session = await getAuthFromCookie();
        if (!session || !session.userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const userId = session.userId;

        // Basic Validation
        if (!platform || !postUrl || !bikeId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Duplicate Check
        const existing = await prisma.snsSubmission.findFirst({
            where: {
                OR: [
                    { postUrl },
                    { bikeId } // Prevent submitting same bike twice
                ]
            }
        });

        if (existing) {
            return NextResponse.json({ error: 'This URL or Bike has already been submitted.' }, { status: 409 });
        }

        const submission = await prisma.snsSubmission.create({
            data: {
                userId,
                bikeId,
                platform,
                postUrl,
                status: 'Pending',
                initialViews: 0,
                initialLikes: 0,
            },
        });

        return NextResponse.json(submission);
    } catch (error) {
        console.error('SERVER ERROR in /api/sns:', error);
        return NextResponse.json({ error: 'Failed to submit', details: String(error) }, { status: 500 });
    }
}
