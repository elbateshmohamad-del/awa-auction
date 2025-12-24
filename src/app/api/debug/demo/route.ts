
import { NextResponse } from 'next/server';
import { generateMockBikes } from '@/lib/bds-scraper';
import { addBike } from '@/lib/bike-database';

export async function GET(request: Request) {
    try {
        const mockBikes = generateMockBikes(1);
        const demoBike = mockBikes[0];

        // Ensure it has a recognizable name
        demoBike.name = "DEMO: Inspection Images " + demoBike.name;

        await addBike(demoBike as any);

        // Construct redirect URL
        // Assuming default locale 'en'
        const url = new URL(request.url);
        const baseUrl = `${url.protocol}//${url.host}`;
        return NextResponse.redirect(`${baseUrl}/en/admin/bikes/${demoBike.id}`);

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: String(error)
        }, { status: 500 });
    }
}
