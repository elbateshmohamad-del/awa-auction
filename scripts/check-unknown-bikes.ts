
import { prisma } from '../src/lib/prisma';
import { detectMaker } from '../src/lib/maker-detection';

async function main() {
    console.log('--- Analyzing Unknown Bikes ---');

    const unknowns = await prisma.bike.findMany({
        where: {
            OR: [
                { maker: 'Unknown' },
                { maker: '' },
                { maker: null }
            ]
        },
        select: { id: true, name: true, maker: true }
    });

    console.log(`Found ${unknowns.length} bikes with Unknown maker.`);

    // Group by name pattern to identify common missing rules
    const counts: Record<string, number> = {};
    unknowns.forEach(b => {
        const name = b.name || 'Empty Name';
        // Simple aggregation
        counts[name] = (counts[name] || 0) + 1;
    });

    // Show top unknown names
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log('Top Unknown Bike Names:');
    sorted.slice(0, 10).forEach(([name, count]) => {
        console.log(`- ${name}: ${count} bikes`);
    });

    // Test detection with current rules (maybe rules were updated but bikes weren't re-saved)
    console.log('\n--- Re-checking with Current Rules ---');
    for (const [name] of sorted.slice(0, 5)) {
        const res = await detectMaker(name);
        console.log(`"${name}" => Detected now: ${res.maker} (${res.confidence})`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
