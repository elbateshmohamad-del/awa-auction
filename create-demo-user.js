
const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function createDemoUser() {
    try {
        console.log('Creating demo user...');

        // Remove existing demo user if exists to reset
        try {
            await prisma.user.delete({ where: { email: 'demo@awa.com' } });
            console.log('Removed existing demo user.');
        } catch (e) {
            // Ignore if not found
        }

        const user = await prisma.user.create({
            data: {
                email: 'demo@awa.com',
                passwordHash: 'AwaUser2025!@#',
                name: 'Demo User',
                role: 'USER',
            },
        });

        console.log('Success: Demo user created.');
        console.log('Email:', user.email);
        console.log('Password: AwaUser2025!@#');

        // Create Admin User
        try {
            await prisma.user.delete({ where: { email: 'admin@awa.com' } });
        } catch (e) { }

        const admin = await prisma.user.create({
            data: {
                email: 'admin@awa.com',
                passwordHash: 'AwaAdmin2025!@#',
                name: 'Admin User',
                role: 'ADMIN',
            },
        });
        console.log('Success: Admin user created.');
        console.log('Email:', admin.email);
        console.log('Password: AwaAdmin2025!@#');

    } catch (e) {
        console.error('Error creating user:', e);
    } finally {
        await prisma.$disconnect();
    }
}

createDemoUser();
