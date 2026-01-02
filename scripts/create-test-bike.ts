
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const bdsId = `test-${Date.now()}`;
    console.log('Creating test bike with BDS ID:', bdsId);

    const bike = await prisma.bike.create({
        data: {
            bdsId: bdsId,
            name: "ホンダ　ＣＢ４００ＳＦ　ＶＴＥＣ　Ｒｅｖｏ", // Japanese
            nameEn: "Honda CB400SF VTEC Revo",             // English
            nameAr: "هوندا CB400SF VTEC ريفو",             // Arabic
            maker: "HONDA",
            region: "Tokyo",
            startPrice: 500000,
            status: "active",
            images: JSON.stringify(["https://placehold.co/600x400?text=Test+Bike"]),
            // Required fields
            // year removed
            color: "Red",
            mileage: "12,000 km",
            displacement: "400cc",
            firstRegistration: "R2", // 2020
            inspection: "R4/10",
        }
    });

    console.log('Created Bike:', bike.id);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
