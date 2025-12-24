
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthFromCookie } from '@/lib/auth';

// POST: Create a new order
export async function POST(request: Request) {
    try {
        const auth = await getAuthFromCookie();
        if (!auth) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { bikeId, paymentMethod } = body;

        if (!bikeId) {
            return NextResponse.json({ error: 'Bike ID is required' }, { status: 400 });
        }

        // Fetch bike details for price
        const bike = await prisma.bike.findUnique({
            where: { id: bikeId }
        });

        if (!bike) {
            return NextResponse.json({ error: 'Bike not found' }, { status: 404 });
        }

        // Calculate total (price + fee + shipping - simplified logic)
        // In real app, reuse logic from invoice-generator or shared lib
        const price = bike.startPrice; // Use startPrice or currentPrice if auction
        const fee = Math.floor(price * 0.05);
        const shipping = 120000; // Fixed estimate for now
        const total = price + fee + shipping;

        // Create Order
        const order = await prisma.order.create({
            data: {
                userId: auth.userId,
                bikeId: bike.id,
                totalAmount: total,
                currency: 'JPY',
                paymentMethod: paymentMethod || 'BANK',
                status: 'PENDING_PAYMENT'
            },
            include: {
                bike: {
                    select: { name: true }
                }
            }
        });

        // Update Bike status
        await prisma.bike.update({
            where: { id: bikeId },
            data: { status: 'sold' }
        });

        return NextResponse.json({
            success: true,
            order: {
                id: order.id,
                amount: order.totalAmount,
                currency: order.currency,
                bikeName: order.bike.name
            }
        });

    } catch (error: any) {
        console.error('Order creation failed:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// GET: List user orders
export async function GET(request: Request) {
    try {
        const auth = await getAuthFromCookie();
        if (!auth) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const orders = await prisma.order.findMany({
            where: { userId: auth.userId },
            include: {
                bike: {
                    select: {
                        name: true,
                        images: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        // Parse bike images if needed
        const formattedOrders = orders.map(o => ({
            ...o,
            bike: {
                ...o.bike,
                imageUrl: o.bike.images ? JSON.parse(o.bike.images)[0] : null
            }
        }));

        return NextResponse.json({ success: true, orders: formattedOrders });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
