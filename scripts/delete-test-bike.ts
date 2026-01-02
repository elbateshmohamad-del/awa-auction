
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const deleted = await prisma.bike.deleteMany({
        where: {
            // My test bike had a distinct bdsId starting with 'test-'
            bdsId: {
                startsWith: 'test-'
            }
        }
    });
    console.log(`Deleted ${deleted.count} test bikes.`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
