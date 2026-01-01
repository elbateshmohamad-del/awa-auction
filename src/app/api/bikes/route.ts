import { NextResponse } from 'next/server';
import { getAllBikes, addBike, Bike } from '@/lib/bike-database';
import { detectMaker } from '@/lib/maker-detection';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const maker = searchParams.get('maker');
    const statusParam = searchParams.get('status');

    let bikes = await getAllBikes({
        status: statusParam ? statusParam.split(',').map(s => s.trim()) : undefined
    });

    // Filter by maker if provided
    if (maker) {
        bikes = bikes.filter(bike => bike.maker.toLowerCase() === maker.toLowerCase());
    }


    return NextResponse.json({
        success: true,
        count: bikes.length,
        data: bikes,
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simple validation
        if (!body.name || !body.startPrice) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const makerResult = await detectMaker(body.name);
        const allBikes = getAllBikes();

        const newBike: Bike = {
            id: `awa-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            bdsId: body.bdsId || '',
            lane: body.lane || '',
            auctionNumber: body.auctionNumber || '',
            auctionDate: body.auctionDate || '',
            name: body.name,
            maker: body.maker || makerResult.maker,
            makerConfirmed: body.maker ? true : makerResult.confidence === 'high',
            region: body.region || '',
            inspectionStatus: body.inspectionStatus || '',
            listingType: body.listingType || '',
            vin: body.vin || '',
            engineNumber: body.engineNumber || '',
            mileage: body.mileage || '',
            documentMileage: body.documentMileage || '',
            pastMileage: body.pastMileage || '',
            color: body.color || '',
            displacement: body.displacement || '',
            firstRegistration: body.firstRegistration || '',
            inspection: body.inspection || '',
            hasParts: body.hasParts || '',
            registrationNumber: body.registrationNumber || '',
            startPrice: body.startPrice,
            result: body.result || '',
            historicalRates: '{}', // Add missing field
            overallGrade: body.overallGrade || 5,
            engineGrade: body.engineGrade || 5,
            frontGrade: body.frontGrade || 5,
            exteriorGrade: body.exteriorGrade || 5,
            rearGrade: body.rearGrade || 5,
            electricGrade: body.electricGrade || 5,
            frameGrade: body.frameGrade || 5,
            awaGrade: body.awaGrade || 'B',
            // Fix: Stringify JSON fields to match Prisma schema
            inspectionDetails: JSON.stringify(body.inspectionDetails || { engine: {}, frontSuspension: {}, exterior: {}, rearSuspension: {}, electrical: {}, frame: {} }),
            awaReport: body.awaReport || '',
            sellerDeclaration: body.sellerDeclaration || '',
            images: JSON.stringify(body.images || []),
            importedAt: new Date(),
            status: 'draft',
            currentPrice: body.currentPrice || 0,
            videoUrls: JSON.stringify(body.videoUrls || []),
            remarks: JSON.stringify(body.remarks || []),
            updatedAt: new Date(),
        };

        addBike(newBike);

        return NextResponse.json({
            success: true,
            data: newBike,
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
    }
}

