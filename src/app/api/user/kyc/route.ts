
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

import { getAuthFromCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        // Auth Check
        const session = await getAuthFromCookie();
        if (!session || !session.userId) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }
        const userId = session.userId; // Enforce session user ID

        const formData = await request.formData();
        // const userId = formData.get('userId') as string; // INSECURE: Ignore form data user ID
        const type = formData.get('type') as string;
        const file = formData.get('file') as File;

        if (!type || !file) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, error: 'Invalid file type. Only JPG, PNG, and PDF are allowed.' },
                { status: 400 }
            );
        }

        // Validate file size (10MB)
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { success: false, error: 'File size too large. Max 10MB.' },
                { status: 400 }
            );
        }

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'User not found' },
                { status: 404 }
            );
        }

        // Create upload directory if not exists
        const uploadDir = join(process.cwd(), 'public/uploads/kyc');
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (e) {
            // Ignore error if directory exists
        }

        // Generate unique filename
        const buffer = Buffer.from(await file.arrayBuffer());
        const timestamp = Date.now();
        const extension = file.name.split('.').pop();
        const filename = `${userId}-${type}-${timestamp}.${extension}`;
        const filePath = join(uploadDir, filename);

        // Save file
        await writeFile(filePath, buffer);

        // Save to database
        const document = await prisma.kycDocument.create({
            data: {
                userId,
                type,
                fileUrl: `/uploads/kyc/${filename}`,
                status: 'PENDING'
            }
        });

        // Update user KYC status to PENDING if it was NONE or REJECTED
        if (user.kycStatus === 'NONE' || user.kycStatus === 'REJECTED') {
            await prisma.user.update({
                where: { id: userId },
                data: { kycStatus: 'PENDING' }
            });
        }

        return NextResponse.json({ success: true, document });

    } catch (error) {
        console.error('KYC upload error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const targetUserId = searchParams.get('userId');

    // Auth Check
    const session = await getAuthFromCookie();
    if (!session || !session.userId) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    // RBAC: Allow if Admin/Staff OR requesting own data
    const isStaff = session.role === 'ADMIN' || session.role === 'STAFF';
    const isOwnData = session.userId === targetUserId;

    if (!targetUserId) {
        // If no user ID provided, return own data
        // ... Logic might need adjustment if original code always expected userId param
        // Original code returned error. Let's redirect to own data if missing? 
        // Or keep error. But better to allow get /api/user/kyc -> own kyc
    }

    // Determine effective user ID
    let finalUserId = targetUserId;
    if (!finalUserId) {
        finalUserId = session.userId;
    } else {
        // If requesting specific user, must be authorized
        if (!isStaff && !isOwnData) {
            return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
        }
    }

    // Use finalUserId for query... (requires reading further down to replace `userId`)
    // I will rewrite the query part in next chunk or include here.
    const userId = finalUserId; // Variable reuse implies I should overwrite original logic block completely.

    // ... continue to existing logic ... 
    // Wait, replacing logic block to 107.
    // I need to return userId or set it.
    // The original code uses `userId` variable later.


    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { kycDocuments: true }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            kycStatus: user.kycStatus,
            documents: user.kycDocuments
        });

    } catch (error) {
        console.error('KYC fetch error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
