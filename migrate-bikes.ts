
import { PrismaClient } from './src/generated/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const DATA_DIR = path.join(process.cwd(), 'data');
const BIKES_FILE = path.join(DATA_DIR, 'bikes.json');

async function importBikes() {
    console.log('Starting bike migration from JSON to SQLite...');

    if (!fs.existsSync(BIKES_FILE)) {
        console.log('No bikes.json found, skipping.');
        return;
    }

    try {
        const data = fs.readFileSync(BIKES_FILE, 'utf-8');
        const parsed = JSON.parse(data);
        const bikes = parsed.bikes || [];

        console.log(`Found ${bikes.length} bikes to import.`);

        for (const bike of bikes) {
            // Check if bike exists
            const existing = await prisma.bike.findUnique({
                where: { bdsId: bike.bdsId }
            });

            if (existing) {
                console.log(`Skipping existing bike: ${bike.name}`);
                continue;
            }

            // Create bike
            await prisma.bike.create({
                data: {
                    bdsId: bike.bdsId,
                    name: bike.name,
                    maker: bike.maker,
                    makerConfirmed: bike.makerConfirmed || false,
                    startPrice: bike.startPrice || 0,
                    overallGrade: bike.overallGrade,

                    // Simple fields
                    lane: bike.lane,
                    auctionNumber: bike.auctionNumber,
                    auctionDate: bike.auctionDate,
                    region: bike.region,
                    inspectionStatus: bike.inspectionStatus,
                    listingType: bike.listingType,
                    vin: bike.vin,
                    engineNumber: bike.engineNumber,
                    mileage: bike.mileage,
                    documentMileage: bike.documentMileage,
                    pastMileage: bike.pastMileage,
                    color: bike.color,
                    displacement: bike.displacement,
                    firstRegistration: bike.firstRegistration,
                    inspection: bike.inspection,
                    hasParts: bike.hasParts,
                    registrationNumber: bike.registrationNumber,
                    result: bike.result,

                    // Grades
                    engineGrade: bike.engineGrade,
                    frontGrade: bike.frontGrade,
                    exteriorGrade: bike.exteriorGrade,
                    rearGrade: bike.rearGrade,
                    electricGrade: bike.electricGrade,
                    frameGrade: bike.frameGrade,
                    awaGrade: bike.awaGrade,

                    // JSON fields
                    inspectionDetails: JSON.stringify(bike.inspectionDetails || {}),
                    images: JSON.stringify(bike.images || []),
                    videoUrls: JSON.stringify(bike.videoUrls || []),
                    remarks: JSON.stringify(bike.remarks || []),

                    awaReport: bike.awaReport,
                    sellerDeclaration: bike.sellerDeclaration,

                    status: bike.status || 'active',
                    importedAt: bike.importedAt ? new Date(bike.importedAt) : new Date(),
                } as any
            });
            console.log(`Imported: ${bike.name}`);
        }

        console.log('Migration complete!');
    } catch (e) {
        console.error('Migration failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

importBikes();
