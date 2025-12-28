import { NextResponse } from 'next/server';
import { createReservation, Reservation } from '@/lib/reservation-database';
import { getContainerById, updateContainer } from '@/lib/container-database';
import { updateBike } from '@/lib/bike-database';
import { getAuthFromCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Auth Check
        const session = await getAuthFromCookie();
        if (!session || !session.userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Basic validation
        if (!body.containerId || !body.bikeIds || !body.shippingAddress) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newReservation: Reservation = {
            id: `RES-${Math.floor(Math.random() * 100000)}`,
            userId: session.userId,
            containerId: body.containerId,
            bikeIds: body.bikeIds,
            shippingAddress: body.shippingAddress,
            status: 'pending',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // Update Container Capacity
        const container = await getContainerById(body.containerId); // Fix: await
        if (container) {
            await updateContainer(container.id, { filled: container.filled + body.bikeIds.length }); // Fix: await
        }

        // Update Bike Status
        if (Array.isArray(body.bikeIds)) {
            for (const bikeId of body.bikeIds) {
                await updateBike(bikeId, { status: 'sold' }); // Fix: await
            }
        }

        const created = await createReservation(newReservation); // Fix: await
        return NextResponse.json(created, { status: 201 });
    } catch (error) {
        console.error('Reservation creation failed:', error);
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}
