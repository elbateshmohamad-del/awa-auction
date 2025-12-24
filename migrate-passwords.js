/**
 * Password Migration Script
 * 
 * This script migrates existing plaintext passwords to bcrypt hashes.
 * Run with: node --env-file=.env migrate-passwords.js
 * 
 * IMPORTANT: Run this once after deploying the security update.
 * Backup your database before running.
 */

const { PrismaClient } = require('./src/generated/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();
const BCRYPT_ROUNDS = 10;

async function migratePasswords() {
    console.log('Starting password migration...');

    try {
        // Fetch all users
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                passwordHash: true
            }
        });

        console.log(`Found ${users.length} users to check`);

        let migratedCount = 0;
        let skippedCount = 0;

        for (const user of users) {
            // Check if password is already a bcrypt hash (starts with $2a$ or $2b$)
            const isBcryptHash = user.passwordHash.startsWith('$2a$') ||
                user.passwordHash.startsWith('$2b$');

            if (isBcryptHash) {
                console.log(`✓ ${user.email}: Already hashed (skipped)`);
                skippedCount++;
                continue;
            }

            // Hash the plaintext password
            const hashedPassword = await bcrypt.hash(user.passwordHash, BCRYPT_ROUNDS);

            // Update the user record
            await prisma.user.update({
                where: { id: user.id },
                data: { passwordHash: hashedPassword }
            });

            console.log(`✓ ${user.email}: Password migrated successfully`);
            migratedCount++;
        }

        console.log('\n=== Migration Complete ===');
        console.log(`Migrated: ${migratedCount}`);
        console.log(`Skipped (already hashed): ${skippedCount}`);
        console.log(`Total: ${users.length}`);

    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

migratePasswords();
