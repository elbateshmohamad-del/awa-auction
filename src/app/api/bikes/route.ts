import { NextResponse } from 'next/server';
import { getAllBikes, addBike, Bike } from '@/lib/bike-database';
import { detectMaker } from '@/lib/maker-detection';

import { translateBrandName, translateModelName, translateGeneral } from '@/lib/normalizer';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const maker = searchParams.get('maker');
    const statusParam = searchParams.get('status');
    const locale = searchParams.get('locale') as 'ja' | 'en' | 'ar' | null;

    const pageParam = searchParams.get('page');
    const limitParam = searchParams.get('limit');

    // Default to page 1, 30 items per page
    const page = pageParam ? parseInt(pageParam) : 1;
    const limit = limitParam ? parseInt(limitParam) : 30;

    const { bikes: rawBikes, total } = await getAllBikes({
        status: statusParam ? statusParam.split(',').map(s => s.trim()) : undefined,
        page,
        limit
    });

    let bikes = rawBikes;

    // Filter by maker if provided (Note: Ideally filter in DB, but legacy logic kept for now)
    // If maker filter exists, we might return fewer than limit. For strict pagination, add maker to getAllBikes options later.
    if (maker) {
        bikes = bikes.filter(bike => bike.maker.toLowerCase() === maker.toLowerCase());
    }

    // Apply translation based on locale
    // For 'ja' locale or no locale: minimal changes (brand/model to English)
    // For 'en'/'ar' locales: full translation
    if (locale) {
        bikes = await Promise.all(bikes.map(async (bike) => {
            const translated = { ...bike };

            // Brand names: Always English
            translated.maker = await translateBrandName(bike.maker);

            // Model names: Always English (or translate JP to EN)
            translated.name = await translateModelName(bike.name);

            // General fields: Translate to target locale
            translated.color = await translateGeneral(bike.color, locale);
            translated.region = await translateGeneral(bike.region, locale);
            translated.listingType = await translateGeneral(bike.listingType, locale);

            return translated;
        }));
    }

    return NextResponse.json({
        success: true,
        count: bikes.length,
        total, // Total items in DB (useful for frontend pagination)
        page,
        limit,
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

