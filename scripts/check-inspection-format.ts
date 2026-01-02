import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const bike = await prisma.bike.findFirst({
        where: { inspectionDetails: { not: null } },
        select: { id: true, inspectionDetails: true }
    });

    if (bike) {
        console.log(`Bike ID: ${bike.id}`);
        console.log('\nInspection Details:');
        const details = bike.inspectionDetails as any;
        for (const [category, items] of Object.entries(details)) {
            console.log(`\n=== ${category} ===`);
            for (const [key, value] of Object.entries(items as any)) {
                console.log(`  Key: "${key}" → Value: "${value}"`);
                // Check if key has circled or regular numbers
                const hasCircledNum = /[①②③④⑤⑥⑦⑧⑨⑩]/.test(key);
                const hasRegularNum = /^[0-9]/.test(key);
                console.log(`    Circled: ${hasCircledNum}, Regular: ${hasRegularNum}`);
            }
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
