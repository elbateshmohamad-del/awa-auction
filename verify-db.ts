import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "file:./dev.db"
        }
    }
});

async function main() {
    try {
        console.log("Connecting to database...");
        // Attempt to count users or submissions
        const count = await prisma.snsSubmission.count();
        console.log(`Connection successful. SnsSubmission count: ${count}`);
    } catch (e) {
        console.error("Error connecting to database:", e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
