import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // Prevent static caching

export async function GET(request: Request) {
    // 1. Security Check (CRON_SECRET)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // 2. Get Current Date in JST
        // We want to archive auctions from "yesterday" or earlier.
        // If today is Thursday, Wednesday auctions should be archived.
        const now = new Date();
        const jstOffset = 9 * 60; // JST is UTC+9
        const nowUTC = now.getTime() + (now.getTimezoneOffset() * 60000);
        const nowJST = new Date(nowUTC + (jstOffset * 60000));

        // Normalize today to start of day for comparison
        nowJST.setHours(0, 0, 0, 0);

        // 3. Fetch all ACTIVE bikes
        const activeBikes = await prisma.bike.findMany({
            where: { status: 'active' },
            select: { id: true, bdsId: true, name: true, auctionDate: true }
        });

        const archivedIds: string[] = [];

        for (const bike of activeBikes) {
            if (!bike.auctionDate) continue;

            // 4. Parse Auction Date (Format: "YYYY年MM月DD日")
            // Example: "2025年12月17日"
            const match = bike.auctionDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
            if (match) {
                const year = parseInt(match[1], 10);
                const month = parseInt(match[2], 10) - 1; // JS months are 0-indexed
                const day = parseInt(match[3], 10);

                const auctionDateObj = new Date(year, month, day);

                // 5. Compare
                // If auctionDate < today (JST), it's in the past.
                // Example: Auction 12/17. Today 12/18. 12/17 < 12/18 => True => Archive.
                if (auctionDateObj < nowJST) {
                    archivedIds.push(bike.id);
                }
            }
        }

        // 6. Bulk Update
        if (archivedIds.length > 0) {
            await prisma.bike.updateMany({
                where: {
                    id: { in: archivedIds }
                },
                data: {
                    status: 'archived'
                }
            });
        }

        return NextResponse.json({
            success: true,
            archivedCount: archivedIds.length,
            archivedIds,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Archive Job Failed:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
