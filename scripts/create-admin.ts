
import { PrismaClient } from '../src/generated/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@example.com';
    const password = 'admin'; // Default password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(`Creating admin user: ${email}`);

    try {
        const user = await prisma.user.upsert({
            where: { email },
            update: {
                passwordHash: hashedPassword,
                role: 'ADMIN'
            },
            create: {
                email,
                passwordHash: hashedPassword,
                role: 'ADMIN',
                name: 'System Admin',
                preferredCurrency: 'JPY',
                memberType: 'CORPORATE'
            }
        });

        console.log(`Admin user created/updated successfully.`);
        console.log(`Email: ${user.email}`);
        console.log(`Password: ${password}`);
    } catch (e) {
        console.error('Error creating admin user:', e);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
