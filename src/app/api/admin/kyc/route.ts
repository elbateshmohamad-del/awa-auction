
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        // Fetch all users with PENDING kycStatus
        const users = await prisma.user.findMany({
            where: {
                kycStatus: 'PENDING'
            },
            include: {
                kycDocuments: true
            }
        });

        return NextResponse.json({ success: true, users });

    } catch (error) {
        console.error('Admin KYC list error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { documentId, status, rejectionReason, adminId } = body;

        if (!documentId || !status || !['APPROVED', 'REJECTED'].includes(status)) {
            return NextResponse.json(
                { success: false, error: 'Invalid parameters' },
                { status: 400 }
            );
        }

        // Update document status
        const document = await prisma.kycDocument.update({
            where: { id: documentId },
            data: {
                status,
                rejectionReason: status === 'REJECTED' ? rejectionReason : null,
                reviewedBy: adminId || 'admin', // Placeholder if no admin session
                reviewedAt: new Date()
            },
            include: { user: { include: { kycDocuments: true } } }
        });

        // Determine User Status
        const userDocuments = document.user.kycDocuments;

        let newUserStatus = 'PENDING';
        const allApproved = userDocuments.every(doc => doc.status === 'APPROVED');
        const anyRejected = userDocuments.some(doc => doc.status === 'REJECTED');

        if (anyRejected) {
            newUserStatus = 'REJECTED';
        } else if (allApproved) {
            newUserStatus = 'VERIFIED';
        }

        // Update User Status if changed
        if (newUserStatus !== document.user.kycStatus) {
            const updateData: any = { kycStatus: newUserStatus };

            // Assign Member ID if becoming VERIFIED and doesn't have one
            if (newUserStatus === 'VERIFIED' && !document.user.memberId) {
                // Import dynamically to avoid circular deps if any (though lib is safe)
                const { assignMemberId } = await import('@/lib/member-id');
                const memberId = await assignMemberId(document.user.id, document.user.address);
                if (memberId) {
                    console.log(`Assigned Member ID ${memberId} to user ${document.user.id}`);
                }
                // assignMemberId updates DB directly, so we don't need to add it to updateData
                // unless we want to do it transactionally. 
                // assignMemberId implementation does update.
                // But wait, assignMemberId does `prisma.user.update`. 
                // Here we are also doing `prisma.user.update` below. 
                // We should probably rely on assignMemberId OR do it here.
                // Given logic in assignMemberId handles retry/collision, better to let it run.
                // But we need to ensure we don't overwrite or conflict.
                // Current flow:
                // 1. Check status change.
                // 2. If verified, call assignMemberId (updates DB).
                // 3. Update status (updates DB).
                // This is 2 updates. A bit inefficient but safe.
            }

            await prisma.user.update({
                where: { id: document.user.id },
                data: updateData
            });
        }

        return NextResponse.json({ success: true, documentStatus: status, userStatus: newUserStatus });

    } catch (error) {
        console.error('Admin KYC update error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
