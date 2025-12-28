
const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
    const bikes = await prisma.bike.findMany({
        where: {
            status: { in: ['active', 'sold', 'archived'] }
        },
        select: {
            id: true,
            bdsId: true,
            auctionNumber: true,
            name: true,
            status: true,
            auctionDate: true
        }
    });

    console.log(`Total bikes: ${bikes.length}`);

    // Group by Auction Number
    const byAuctionNum = {};
    bikes.forEach(b => {
        const key = b.auctionNumber || 'MISSING';
        if (!byAuctionNum[key]) byAuctionNum[key] = [];
        byAuctionNum[key].push(b);
    });

    console.log('\n--- Duplicate Auction Numbers ---');
    Object.entries(byAuctionNum).forEach(([num, list]) => {
        if (list.length > 1 && num !== 'MISSING') {
            console.log(`Auction #${num}: ${list.length} bikes`);
            list.forEach(b => console.log(`  - [${b.status}] ${b.name} (${b.auctionDate}) (ID: ${b.id})`));
        }
    });

    // Group by BDS ID (should be unique but let's check archived suffixes)
    console.log('\n--- BDS ID Patterns ---');
    bikes.forEach(b => {
        if (b.bdsId.includes('_archived_')) {
            console.log(`[Archived] ${b.bdsId} - ${b.name}`);
        }
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
