/**
 * Bike Database Library (Prisma Version)
 * Handles storage and retrieval of bikes using SQLite/PostgreSQL
 */

import { prisma } from '@/lib/prisma';
import { PrismaClient, type Bike } from '@prisma/client';

export type { Bike };

export interface ImportLog {
    id: string;
    timestamp: string;
    bikesImported: number;
    errors: string[];
}

export interface BikeInspectionDetail {
    engine: Record<string, string>;
    frontSuspension: Record<string, string>;
    exterior: Record<string, string>;
    rearSuspension: Record<string, string>;
    electrical: Record<string, string>;
    frame: Record<string, string>;
}

export function convertGradeToAWA(overall: number | null): string {
    if (overall === null || overall === undefined) return 'D';
    if (overall >= 8) return 'S';
    if (overall >= 6) return 'A';
    if (overall >= 5) return 'B';
    if (overall >= 4) return 'C';
    return 'D';
}

// Helper to parse JSON fields
function parseBike(bike: any) {
    if (!bike) return null;
    return {
        ...bike,
        inspectionDetails: bike.inspectionDetails ? JSON.parse(bike.inspectionDetails) : {},
        images: bike.images ? JSON.parse(bike.images) : [],
        videoUrls: bike.videoUrls ? JSON.parse(bike.videoUrls) : [],
        remarks: bike.remarks ? JSON.parse(bike.remarks) : []
    };
}

export async function getAllBikes(options?: {
    status?: string | string[],
    page?: number,
    limit?: number
}) {
    const where: any = {};

    if (options?.status) {
        if (Array.isArray(options.status)) {
            where.status = { in: options.status };
        } else if (options.status !== 'all') {
            where.status = options.status;
        }
    } else {
        where.status = 'active'; // Default behavior
    }

    const page = options?.page || 1;
    const limit = options?.limit || 0; // 0 means no limit (all)

    const findOptions: any = {
        where,
        orderBy: { importedAt: 'desc' },
    };

    if (limit > 0) {
        findOptions.skip = (page - 1) * limit;
        findOptions.take = limit;
    }

    const [bikes, total] = await Promise.all([
        prisma.bike.findMany(findOptions),
        prisma.bike.count({ where })
    ]);

    return {
        bikes: bikes.map(parseBike),
        total
    };
}

export async function getBikeById(id: string) {
    const bike = await prisma.bike.findUnique({
        where: { id }
    });
    return parseBike(bike);
}

export async function getBikeByBdsId(bdsId: string) {
    const bike = await prisma.bike.findUnique({
        where: { bdsId }
    });
    return parseBike(bike);
}

export async function addBike(data: any) {
    // Stringify JSON fields before saving
    const bikeData = {
        ...data,
        inspectionDetails: JSON.stringify(data.inspectionDetails || {}),
        images: JSON.stringify(data.images || []),
        videoUrls: JSON.stringify(data.videoUrls || []),
        remarks: JSON.stringify(data.remarks || []),
        makerConfirmed: data.makerConfirmed || false,
        status: data.status || 'active'
    };

    const bike = await prisma.bike.create({
        data: bikeData
    });
    return parseBike(bike);
}

export async function updateBike(id: string, updates: any) {
    // Stringify if fields exist in updates
    const data: any = { ...updates };
    if (data.inspectionDetails) data.inspectionDetails = JSON.stringify(data.inspectionDetails);
    if (data.images) data.images = JSON.stringify(data.images);
    if (data.videoUrls) data.videoUrls = JSON.stringify(data.videoUrls);
    if (data.remarks) data.remarks = JSON.stringify(data.remarks);

    const bike = await prisma.bike.update({
        where: { id },
        data
    });
    return parseBike(bike);
}


export async function deleteBike(id: string) {
    await prisma.bike.delete({
        where: { id }
    });
    return true;
}

export async function addBikes(bikes: any[]) {
    // Process sequentially to check for duplicates safely
    // In a real high-throughput scenario, createMany would be better but we need JSON parsing logic
    const results = [];
    for (const bike of bikes) {
        try {
            // Check for potential collision
            const existing = await prisma.bike.findUnique({
                where: { bdsId: bike.bdsId }
            });

            if (existing) {
                // Check if it's the same bike (same name and auction date)
                // If so, update the existing record instead of archiving/creating new
                const isSameBike = existing.name === bike.name &&
                    (!bike.auctionDate || existing.auctionDate === bike.auctionDate);

                if (isSameBike) {
                    console.log(`Updating existing bike ${existing.bdsId} (ID: ${existing.id})`);
                    // Update existing record
                    results.push(await updateBike(existing.id, bike));
                    continue; // Skip the create step
                } else {
                    // Different bike reusing the same ID (e.g. next week's auction)
                    // Archive the old one
                    const newBdsId = `${existing.bdsId}_archived_${new Date().getTime()} `;
                    console.log(`Archiving old bike ${existing.bdsId} (ID: ${existing.id}) to ${newBdsId} `);

                    await prisma.bike.update({
                        where: { id: existing.id },
                        data: { bdsId: newBdsId, status: 'archived' }
                    });
                }
            }

            // Now safely add the new bike (if we didn't update above)
            results.push(await addBike(bike));
        } catch (e) {
            console.error(`Failed to add / update bike ${bike.bdsId}: `, e);
        }
    }
    return results;
}

// TODO: Create ImportLog model in schema.prisma for persistent logging
export async function addImportLog(log: any) {
    // Stringify errors if needed
    const logData = {
        timestamp: new Date().toISOString(),
        bikesImported: log.bikesImported || 0,
        errors: JSON.stringify(log.errors || [])
    };

    const result = await prisma.importLog.create({
        data: logData
    });

    return { ...log, id: result.id };
}

