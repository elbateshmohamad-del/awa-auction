import { NextResponse } from 'next/server';
import { createReservation, Reservation } from '@/lib/reservation-database';
import { getContainerById, updateContainer } from '@/lib/container-database';
import { updateBike } from '@/lib/bike-database';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.containerId || !body.bikeIds || !body.shippingAddress) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newReservation: Reservation = {
            id: `RES-${Math.floor(Math.random() * 100000)}`,
            userId: 'user-123', // Mock User ID
            containerId: body.containerId,
            bikeIds: body.bikeIds,
            shippingAddress: body.shippingAddress,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        // Update Container Capacity
        const container = getContainerById(body.containerId);
        if (container) {
            updateContainer(container.id, { filled: container.filled + body.bikeIds.length });
        }

        // Update Bike Status
        if (Array.isArray(body.bikeIds)) {
            for (const bikeId of body.bikeIds) {
                updateBike(bikeId, { status: 'sold' });
            }
        }

        const created = createReservation(newReservation);
        return NextResponse.json(created, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}
