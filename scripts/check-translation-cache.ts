import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Check how many translations are cached
    const count = await prisma.translation.count();
    console.log(`Total cached translations: ${count}`);

    // Show some samples
    const samples = await prisma.translation.findMany({
        take: 20,
        orderBy: { createdAt: 'desc' }
    });

    console.log('\n=== Recent translations ===');
    for (const t of samples) {
        console.log(`[${t.targetLang}] "${t.originalText}" → "${t.translatedText}" (method: ${t.method})`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
