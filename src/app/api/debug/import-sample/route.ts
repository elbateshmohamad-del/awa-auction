
import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { parseBikeDetailPage } from '@/lib/bds-scraper';
import { addBike, getAllBikes } from '@/lib/bike-database';

export async function GET(request: Request) {
    try {
        const samplePath = path.join(process.cwd(), 'data', 'sample_bike_detail.html');
        if (!fs.existsSync(samplePath)) {
            return NextResponse.json({ error: 'Sample file not found' }, { status: 404 });
        }

        const html = fs.readFileSync(samplePath, 'utf-8');
        // Use a fixed ID so the user can bookmark/refresh this verification page
        const bdsId = 'sample-verification-01';
        const auctionDate = '2025-12-17'; // From the sample HTML content

        const scrapedData = parseBikeDetailPage(html, bdsId, auctionDate);

        if (!scrapedData) {
            return NextResponse.json({ error: 'Failed to parse sample HTML' }, { status: 500 });
        }

        const fixedId = 'sample-verification-fixed-id';

        const makerInfo = (await import('@/lib/maker-detection')).detectMaker(scrapedData.name);

        const newBike = {
            id: fixedId,
            bdsId: bdsId,
            name: scrapedData.name,
            maker: makerInfo.maker || 'Unknown',
            images: scrapedData.images,
            inspectionImages: scrapedData.inspectionImages,
            videoUrls: scrapedData.videoUrls,
            year: scrapedData.firstRegistration ? parseInt(scrapedData.firstRegistration) : 2020,
            color: scrapedData.color,
            displacement: parseInt(scrapedData.displacement) || 250,
            mileage: typeof scrapedData.mileage === 'string' ? scrapedData.mileage : '0', // Keep as string for display if expected
            documentMileage: scrapedData.documentMileage,
            pastMileage: scrapedData.pastMileage,
            inspectionStatus: scrapedData.inspectionStatus || 'Inspect',
            listingType: scrapedData.listingType,
            vin: scrapedData.vin,
            engineNumber: scrapedData.engineNumber,
            model: scrapedData.name,
            overallGrade: scrapedData.overallGrade,
            startPrice: scrapedData.startPrice,
            result: scrapedData.result,
            bdsReport: scrapedData.bdsReport,
            sellerDeclaration: scrapedData.sellerDeclaration,
            remarks: scrapedData.remarks,
            engineGrade: scrapedData.engineGrade,
            frontGrade: scrapedData.frontGrade,
            exteriorGrade: scrapedData.exteriorGrade,
            rearGrade: scrapedData.rearGrade,
            electricGrade: scrapedData.electricGrade,
            frameGrade: scrapedData.frameGrade,
            awaGrade: 'S', // Default for sample
            inspectionDetails: scrapedData.inspectionDetails,
            notes: 'Imported from sample HTML',
            importedAt: new Date().toISOString(),
            status: 'active',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // Check if bike exists and update, otherwise add
        const allBikes = getAllBikes();
        const existingIndex = allBikes.findIndex(b => b.id === fixedId);

        // We can't easily update via addBike, so we might need to overwrite in the file.
        // Or simply remove it first.
        // Since we don't have updateBike that takes full object easily exposed or maybe we do.
        // Let's manually manipulate the file to be safe and simple here.

        let updatedBikes = allBikes;
        if (existingIndex >= 0) {
            updatedBikes[existingIndex] = { ...updatedBikes[existingIndex], ...newBike } as any;
        } else {
            updatedBikes.push(newBike as any);
        }

        // Write back directly via private helper logic duplicated or we should export writeBikesFile?
        // Actually, let's just use deleteBike then addBike.
        // Importing deleteBike... but I need to import it properly.
        // Let's use the exported functions.

        // Dynamic import to avoid circular dep issues? No, standard import.
        // But first let's just persist.
        // Simplest: read file, modify, write file.

        const DATA_DIR = path.join(process.cwd(), 'data');
        const BIKES_FILE = path.join(DATA_DIR, 'bikes.json');

        // Load existing
        let data: { bikes: any[]; importLogs: any[] } = { bikes: [], importLogs: [] };
        if (fs.existsSync(BIKES_FILE)) {
            data = JSON.parse(fs.readFileSync(BIKES_FILE, 'utf-8'));
        }

        const idx = data.bikes.findIndex((b: any) => b.id === fixedId);
        if (idx >= 0) {
            data.bikes[idx] = newBike as any;
        } else {
            // @ts-ignore
            data.bikes.push(newBike);
        }

        fs.writeFileSync(BIKES_FILE, JSON.stringify(data, null, 2));

        // Redirect safely using request origin
        const origin = new URL(request.url).origin;
        return NextResponse.redirect(`${origin}/ja/admin/bikes/${fixedId}`);

    } catch (error) {
        console.error('Error importing sample:', error);
        return NextResponse.json({ error: 'Internal Server Error', details: String(error) }, { status: 500 });
    }
}
