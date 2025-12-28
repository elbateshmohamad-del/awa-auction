
import { PrismaClient } from '../src/generated/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const DATA_DIR = path.join(process.cwd(), 'data');

async function main() {
    console.log('🚀 Starting Data Migration (Seed)...');

    // 1. Settings
    const invoiceFile = path.join(DATA_DIR, 'invoice-settings.json');
    if (fs.existsSync(invoiceFile)) {
        console.log('Migrating Invoice Settings...');
        const data = fs.readFileSync(invoiceFile, 'utf-8');
        await prisma.systemSetting.upsert({
            where: { key: 'invoice' },
            create: { key: 'invoice', value: data, description: 'Invoice configuration' },
            update: { value: data }
        });
    }

    const bdsFile = path.join(DATA_DIR, 'bds-settings.json');
    if (fs.existsSync(bdsFile)) {
        console.log('Migrating BDS Settings...');
        const data = fs.readFileSync(bdsFile, 'utf-8');
        await prisma.systemSetting.upsert({
            where: { key: 'bds' },
            create: { key: 'bds', value: data, description: 'BDS Scraper Credentials' },
            update: { value: data }
        });
    }

    // 2. Containers
    const containersFile = path.join(DATA_DIR, 'containers.json');
    if (fs.existsSync(containersFile)) {
        console.log('Migrating Containers...');
        const containers = JSON.parse(fs.readFileSync(containersFile, 'utf-8'));
        for (const c of containers) {
            await prisma.container.create({
                data: {
                    id: c.id,
                    name: c.name,
                    type: c.type,
                    status: c.status,
                    destination: c.destination,
                    capacity: c.capacity,
                    filled: c.filled,
                    etd: c.etd,
                    eta: c.eta,
                    price: c.price,
                    features: JSON.stringify(c.features || [])
                }
            }).catch(e => console.warn(`Skipping container ${c.id}: ${e.message}`));
        }
    }

    // 3. Reservations
    const reservationsFile = path.join(DATA_DIR, 'reservations.json');
    if (fs.existsSync(reservationsFile)) {
        console.log('Migrating Reservations...');
        const reservations = JSON.parse(fs.readFileSync(reservationsFile, 'utf-8'));
        for (const r of reservations) {
            await prisma.reservation.create({
                data: {
                    id: r.id,
                    userId: r.userId,
                    containerId: r.containerId,
                    bikeIds: JSON.stringify(r.bikeIds || []),
                    shippingAddress: JSON.stringify(r.shippingAddress || {}),
                    status: r.status,
                    createdAt: new Date(r.createdAt)
                }
            }).catch(e => console.warn(`Skipping reservation ${r.id}: ${e.message}`));
        }
    }

    // 4. Bikes (Optional - if bikes.json still has valuable data not in DB)
    // Assuming bike-database.ts was already using DB, but maybe file fallback existed?
    const bikesFile = path.join(DATA_DIR, 'bikes.json');
    if (fs.existsSync(bikesFile)) {
        console.log('Migrating Bikes (from bikes.json)...');
        try {
            const fileData = JSON.parse(fs.readFileSync(bikesFile, 'utf-8'));
            // bikes.json structure might be { bikes: [], importLogs: [] } or just []
            const bikes = Array.isArray(fileData) ? fileData : (fileData.bikes || []);

            for (const b of bikes) {
                // Ensure unique bdsId
                const existing = await prisma.bike.findUnique({ where: { bdsId: b.bdsId } });
                if (!existing) {
                    await prisma.bike.create({
                        data: {
                            id: b.id,
                            bdsId: b.bdsId,
                            name: b.name,
                            maker: b.maker,
                            makerConfirmed: b.makerConfirmed || false,
                            startPrice: b.startPrice || 0,
                            currentPrice: b.currentPrice || 0,
                            overallGrade: b.overallGrade,
                            status: b.status || 'active',
                            // JSON fields
                            images: JSON.stringify(b.images || []),
                            videoUrls: JSON.stringify(b.videoUrls || []),
                            inspectionDetails: JSON.stringify(b.inspectionDetails || {}),
                            remarks: JSON.stringify(b.remarks || []),
                            // All other fields
                            lane: b.lane,
                            auctionNumber: b.auctionNumber,
                            auctionDate: b.auctionDate,
                            region: b.region,
                            listingType: b.listingType,
                            vin: b.vin,
                            engineNumber: b.engineNumber,
                            mileage: b.mileage,
                            color: b.color,
                            displacement: b.displacement,
                            firstRegistration: b.firstRegistration,
                            inspection: b.inspection,
                            hasParts: b.hasParts,
                            registrationNumber: b.registrationNumber,
                            result: b.result,
                            engineGrade: b.engineGrade,
                            frontGrade: b.frontGrade,
                            exteriorGrade: b.exteriorGrade,
                            rearGrade: b.rearGrade,
                            electricGrade: b.electricGrade,
                            frameGrade: b.frameGrade,
                            awaGrade: b.awaGrade,
                            awaReport: b.awaReport,
                            sellerDeclaration: b.sellerDeclaration,
                            importedAt: new Date(b.importedAt || Date.now())
                        }
                    }).catch(e => console.warn(`Skipping bike ${b.id}: ${e.message}`));
                }
            }
        } catch (e) {
            console.error('Failed to parse bikes.json:', e);
        }
    }

    console.log('✅ Migration Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
