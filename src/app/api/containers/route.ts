import { NextResponse } from 'next/server';
import { getAllContainers, createContainer, Container } from '@/lib/container-database';

export async function GET() {
    try {
        const containers = getAllContainers();
        return NextResponse.json(containers);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch containers' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.destination || !body.type) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newContainer = {
            id: body.id || `CONT-${Math.floor(Math.random() * 10000)}`,
            name: body.name,
            type: body.type,
            status: body.status || 'open',
            destination: body.destination,
            capacity: body.capacity || 400,
            filled: body.filled || 0,
            etd: body.etd || 'TBD',
            eta: body.eta || 'TBD',
            price: body.price || '0',
            features: body.features || []
        };

        const created = createContainer(newContainer);
        return NextResponse.json(created, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create container' }, { status: 500 });
    }
}
