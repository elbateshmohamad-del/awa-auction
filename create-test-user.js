
const { PrismaClient } = require('./src/generated/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const password = "password123";
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await prisma.user.upsert({
        where: { email: 'test@awa.com' },
        update: {
            passwordHash: hashedPassword,
            role: 'USER',
            name: 'Test User'
        },
        create: {
            email: 'test@awa.com',
            passwordHash: hashedPassword,
            name: 'Test User',
            role: 'USER',
            memberType: 'INDIVIDUAL'
        },
    });
    console.log('Created/Updated User:', user.email);

    // Create Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@awa.com' },
        update: {
            passwordHash: hashedPassword,
            role: 'ADMIN',
            name: 'Admin User',
            permissions: JSON.stringify(['all']) // Assuming permissions field is used
        },
        create: {
            email: 'admin@awa.com',
            passwordHash: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN',
            permissions: JSON.stringify(['all']),
            memberType: 'CORPORATE'
        },
    });
    console.log('Created/Updated Admin:', admin.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
