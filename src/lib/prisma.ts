import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

console.log("DEBUG: Initializing src/lib/prisma.ts");
process.env.DATABASE_URL = process.env.DATABASE_URL || "file:./dev.db";

let prisma: PrismaClient;
try {
    prisma = globalForPrisma.prisma || new PrismaClient();
    console.log("DEBUG: PrismaClient initialized successfully");
} catch (e) {
    console.error("DEBUG: PrismaClient Init Failed:", e);
    // Fallback stub to prevent module crash
    prisma = {} as any;
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export { prisma };
