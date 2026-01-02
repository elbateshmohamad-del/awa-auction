
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Clearing Arabic translations from cache...');
    try {
        const { count } = await prisma.translation.deleteMany({
            where: {
                targetLang: 'ar',
            },
        });
        console.log(`Deleted ${count} Arabic translation entries.`);
    } catch (error) {
        console.error('Error clearing cache:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
