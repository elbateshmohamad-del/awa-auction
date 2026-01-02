import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const bikes = await prisma.bike.findMany({
        select: { inspectionDetails: true }
    });

    // Collect all unique keys and values from inspectionDetails
    const allKeys = new Set<string>();
    const allValues = new Set<string>();

    for (const bike of bikes) {
        const details = bike.inspectionDetails as any;
        if (!details) continue;

        for (const category of Object.keys(details)) {
            const items = details[category];
            if (!items) continue;

            for (const [key, value] of Object.entries(items)) {
                if (key) allKeys.add(key);
                if (value && typeof value === 'string' && value.trim()) {
                    allValues.add(value);
                }
            }
        }
    }

    console.log('=== ALL UNIQUE INSPECTION KEYS ===');
    const sortedKeys = Array.from(allKeys).sort();
    sortedKeys.forEach(k => console.log(k));

    console.log('\n=== ALL UNIQUE INSPECTION VALUES ===');
    const sortedValues = Array.from(allValues).sort();
    sortedValues.forEach(v => console.log(v));

    console.log(`\nTotal unique keys: ${allKeys.size}`);
    console.log(`Total unique values: ${allValues.size}`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
