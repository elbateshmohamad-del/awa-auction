import { NextResponse } from 'next/server';
import { getBikeById, updateBike, deleteBike, Bike } from '@/lib/bike-database';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const bike = getBikeById(resolvedParams.id);

    if (!bike) {
        return NextResponse.json(
            { success: false, error: 'Bike not found' },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        data: bike,
    });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    try {
        const body = await request.json();
        // Remove id and bdsId from body to prevent changing them if passed
        const { id, bdsId, ...updates } = body;

        const updatedBike = updateBike(resolvedParams.id, updates as Partial<Bike>);

        if (!updatedBike) {
            return NextResponse.json(
                { success: false, error: 'Bike not found or update failed' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: updatedBike,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Invalid request body' },
            { status: 400 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const success = deleteBike(resolvedParams.id);

    if (!success) {
        return NextResponse.json(
            { success: false, error: 'Bike not found or delete failed' },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        message: 'Bike deleted successfully',
    });
}

