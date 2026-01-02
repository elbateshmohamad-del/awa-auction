import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Delete all cached translations to force re-translation with updated dictionary
    const result = await prisma.$executeRaw`DELETE FROM "Translation"`;
    console.log(`Deleted ${result} translations from cache.`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
