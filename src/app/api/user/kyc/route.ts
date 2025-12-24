
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;
        const type = formData.get('type') as string;
        const file = formData.get('file') as File;

        if (!userId || !type || !file) {
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
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json(
            { success: false, error: 'User ID is required' },
            { status: 400 }
        );
    }

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
