
import { prisma } from '../src/lib/prisma';

async function verify() {
    console.log("🚀 Starting DB Verification...");

    try {
        // 1. Verify Connection & SystemSetting
        console.log("1. Testing SystemSetting...");
        const testSetting = await prisma.systemSetting.upsert({
            where: { key: 'verify-test' },
            create: { key: 'verify-test', value: '{"ok":true}', description: 'Verification Test' },
            update: { value: '{"ok":true, "updated":true}' }
        });
        console.log("✅ SystemSetting: OK", testSetting);

        // 2. Verify Container
        console.log("2. Testing Container...");
        const container = await prisma.container.create({
            data: {
                name: 'TEST-CONT-001',
                type: '20ft',
                status: 'open',
                destination: 'Test City',
                capacity: 40,
                filled: 0
            }
        });
        console.log("✅ Container Created:", container.id);

        // Clean up container
        await prisma.container.delete({ where: { id: container.id } });
        console.log("✅ Container Deleted");

        // 3. Verify ImportLog
        console.log("3. Testing ImportLog...");
        const log = await prisma.importLog.create({
            data: {
                bikesImported: 1,
                errors: JSON.stringify([])
            }
        });
        console.log("✅ ImportLog Created:", log.id);

        console.log("\n🎉 ALL CHECKS PASSED!");
    } catch (e) {
        console.error("\n❌ VERIFICATION FAILED:", e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

verify();
