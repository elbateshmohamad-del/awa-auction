
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const bikes = await prisma.bike.findMany({
    take: 5,
    orderBy: {
      importedAt: 'desc',
    },
    select: {
      id: true,
      name: true,
      videoUrls: true,
      importedAt: true
    }
  });

  console.log('Last 5 Bikes:', JSON.stringify(bikes, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
