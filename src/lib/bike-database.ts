
/**
 * Bike Database Library (Prisma Version)
 * Handles storage and retrieval of bikes using SQLite/PostgreSQL
 */

import { prisma } from '@/lib/prisma';
import type { Bike } from '@prisma/client';

export type { Bike };

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

export async function getAllBikes() {
    const bikes = await prisma.bike.findMany({
        where: { status: 'active' },
        orderBy: { importedAt: 'desc' }
    });
    return bikes.map(parseBike);
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
