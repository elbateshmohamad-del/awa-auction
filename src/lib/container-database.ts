/**
 * Container Database Library (Prisma Version)
 * Handles storage and retrieval of shipping containers using PostgreSQL
 */

import { prisma } from '@/lib/prisma';
import { PrismaClient, type Container } from '@prisma/client';

export type { Container };

// Helper to parse JSON fields
function parseContainer(container: any) {
    if (!container) return null;
    return {
        ...container,
        features: container.features ? JSON.parse(container.features) : []
    };
}

export async function getAllContainers() {
    const containers = await prisma.container.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return containers.map(parseContainer);
}

export async function getContainerById(id: string) {
    const container = await prisma.container.findUnique({
        where: { id }
    });
    return parseContainer(container);
}

export async function createContainer(data: any) {
    const container = await prisma.container.create({
        data: {
            ...data,
            features: JSON.stringify(data.features || [])
        }
    });
    return parseContainer(container);
}

export async function updateContainer(id: string, updates: any) {
    const data: any = { ...updates };
    if (data.features) data.features = JSON.stringify(data.features);

    const container = await prisma.container.update({
        where: { id },
        data
    });
    return parseContainer(container);
}

export async function deleteContainer(id: string) {
    try {
        await prisma.container.delete({
            where: { id }
        });
        return true;
    } catch (error) {
        return false;
    }
}
