
import { prisma } from '@/lib/prisma';

// Excluded characters: I, 1, L, O, 0
const ALLOWED_CHARS = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

/**
 * Generates a random 6-character alphanumeric string 
 * excluding confusing characters.
 */
function generateRandomCode(length: number = 6): string {
    let result = '';
    const charsLength = ALLOWED_CHARS.length;
    for (let i = 0; i < length; i++) {
        result += ALLOWED_CHARS.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
}

/**
 * Infers ISO 2-letter country code from address string.
 * This is a heuristic/simplified approach.
 * Returns 'JP' as default if not found or if address suggests Japan.
 */
export function getCountryCodeFromAddress(address?: string | null): string {
    if (!address) return 'JP';

    const upperAddr = address.toUpperCase();

    // Simple keyword matching for demo/MVP
    if (upperAddr.includes('USA') || upperAddr.includes('UNITED STATES')) return 'US';
    if (upperAddr.includes('UK') || upperAddr.includes('UNITED KINGDOM')) return 'GB';
    if (upperAddr.includes('AUSTRALIA')) return 'AU';
    if (upperAddr.includes('CANADA')) return 'CA';
    if (upperAddr.includes('CHINA')) return 'CN';
    if (upperAddr.includes('FRANCE')) return 'FR';
    if (upperAddr.includes('GERMANY')) return 'DE';
    if (upperAddr.includes('ITALY')) return 'IT';
    if (upperAddr.includes('KOREA')) return 'KR';
    if (upperAddr.includes('TAIWAN')) return 'TW';
    if (upperAddr.includes('THAILAND')) return 'TH';
    if (upperAddr.includes('VIETNAM')) return 'VN';

    // Check for Japan explicitly or default
    if (upperAddr.includes('JAPAN') || upperAddr.includes('TOKYO') || upperAddr.includes('OSAKA')) return 'JP';

    // Default
    return 'JP';
}

/**
 * Assigns a unique Member ID to a user.
 * Format: [CC]-[XXXXXX]
 * Retries up to 3 times in case of collision.
 */
export async function assignMemberId(userId: string, address?: string | null): Promise<string | null> {
    const countryCode = getCountryCodeFromAddress(address);
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
        attempts++;
        const suffix = generateRandomCode(6);
        const candidateId = `${countryCode}-${suffix}`;

        try {
            // Check uniqueness (prisma will throw if unique constraint violated on update)
            // But checking first saves an error log usually.
            const existing = await prisma.user.findUnique({
                where: { memberId: candidateId }
            });

            if (existing) continue;

            // Attempt update
            await prisma.user.update({
                where: { id: userId },
                data: { memberId: candidateId }
            });

            return candidateId;
        } catch (error) {
            // If constraint failed (race condition), retry.
            // If other error, throw.
            console.warn(`Attempt ${attempts} to assign memberId failed for user ${userId}`);
            if (attempts === maxAttempts) throw error;
        }
    }
    return null;
}
