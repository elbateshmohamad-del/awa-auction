
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthFromCookie } from '@/lib/auth';

export async function GET(request: Request) {
    try {
        const auth = await getAuthFromCookie();
        if (!auth) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch orders within last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const orders = await prisma.order.findMany({
            where: {
                userId: auth.userId,
                createdAt: {
                    gte: thirtyDaysAgo
                }
                // Optionally filter by status if needed, e.g., 'PAID' or 'COMPLETED'
                // For now, assuming any order implies "won" or "purchased" context enough for campaign
            },
            include: {
                bike: {
                    select: {
                        id: true,
                        name: true,
                        images: true,
                        currentPrice: true, // or startPrice/soldPrice
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        const formattedBikes = orders.map(order => {
            const images = order.bike.images ? JSON.parse(order.bike.images) : [];
            return {
                id: order.bike.id,
                name: order.bike.name,
                bid: `Purchased: ${new Date(order.createdAt).toLocaleDateString()}`, // Display date or price
                img: images[0] || '', // First image as thumbnail
                orderId: order.id
            };
        });

        return NextResponse.json({ success: true, bikes: formattedBikes });

    } catch (error: any) {
        console.error('Failed to fetch user bikes:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
