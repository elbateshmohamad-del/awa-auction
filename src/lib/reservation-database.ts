/**
 * Reservation Database Library (Prisma Version)
 * Handles storage and retrieval of reservations using PostgreSQL
 */

import { prisma } from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';

export type { Reservation };

// Helper to parse JSON fields
function parseReservation(res: any) {
    if (!res) return null;
    return {
        ...res,
        bikeIds: res.bikeIds ? JSON.parse(res.bikeIds) : [],
        shippingAddress: res.shippingAddress ? JSON.parse(res.shippingAddress) : { type: 'unknown', details: '' }
    };
}

export async function getAllReservations() {
    const reservations = await prisma.reservation.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return reservations.map(parseReservation);
}

export async function createReservation(data: any) {
    const reservation = await prisma.reservation.create({
        data: {
            ...data,
            bikeIds: JSON.stringify(data.bikeIds || []),
            shippingAddress: JSON.stringify(data.shippingAddress || {})
        }
    });
    return parseReservation(reservation);
}
