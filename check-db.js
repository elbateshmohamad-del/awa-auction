
const { PrismaClient } = require('./src/generated/client/client');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "file:./dev.db"
        }
    }
});

async function main() {
    try {
        console.log("Attempting to create submission...");
        const res = await prisma.snsSubmission.create({
            data: {
                userId: "TEST-USER",
                bikeId: "TEST-BIKE",
                platform: "TestPlatform",
                postUrl: "https://test.com",
                status: "Pending",
                initialViews: 0,
                initialLikes: 0
            }
        });
        console.log("Success:", res);
    } catch (e) {
        console.error("Error creating submission:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
