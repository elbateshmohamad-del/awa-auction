
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting dictionary seed...');

    const dictPath = path.join(process.cwd(), 'src/lib/translation-dictionary.json');
    const dictContent = fs.readFileSync(dictPath, 'utf-8');
    const dictionary = JSON.parse(dictContent) as Record<string, { en: string; ar: string }>;

    let count = 0;
    const entries = Object.entries(dictionary);
    const total = entries.length;

    console.log(`Found ${total} entries to process.`);

    for (const [key, translations] of entries) {
        // Upsert to ensure idempotency (update if exists, create if not)
        await prisma.dictionary.upsert({
            where: { key: key },
            update: {
                en: translations.en,
                ar: translations.ar,
            },
            create: {
                key: key,
                en: translations.en,
                ar: translations.ar,
            },
        });
        count++;
        if (count % 50 === 0) {
            console.log(`Processed ${count}/${total} entries...`);
        }
    }

    console.log(`Seeding completed. Processed ${count} entries.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
