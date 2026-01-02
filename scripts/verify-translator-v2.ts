
import { translator } from '../src/lib/translator';
import { prisma } from '../src/lib/prisma';

async function main() {
    console.log('--- Starting Verification ---');

    // 1. Test Dictionary Loading (and Sync)
    console.log('\n[Test 1] Dictionary Translation (DB Source)');
    // "1エンジン" should be in DB from seed
    const t1 = await translator.translate('1エンジン', 'en');
    console.log(`Input: "1エンジン" -> Output: "${t1}"`);
    if (t1.includes('Engine')) console.log('✅ Passed');
    else console.error('❌ Failed');

    // 2. Test Era Conversion
    console.log('\n[Test 2] Era Conversion');
    const t2 = await translator.translate('令和5年', 'en');
    console.log(`Input: "令和5年" -> Output: "${t2}"`);
    if (t2.includes('2023')) console.log('✅ Passed');
    else console.error('❌ Failed');

    const t3 = await translator.translate('令和元年', 'en');
    console.log(`Input: "令和元年" -> Output: "${t3}"`);
    if (t3.includes('2019')) console.log('✅ Passed');
    else console.error('❌ Failed');

    // 3. Test Unknown Term (API Fallback)
    // using a random string to force API or at least bypass dictionary
    const randomTerm = '未知の超高性能バイク' + Math.random().toString(36).substring(7);
    console.log(`\n[Test 3] API Fallback for: "${randomTerm}"`);
    // Note: This might fail if API key is invalid, but we want to see the behavior
    const t4 = await translator.translate(randomTerm, 'en');
    console.log(`Output: "${t4}"`);

    // Check if it was saved to DB
    const saved = await prisma.translation.findFirst({
        where: { originalText: { contains: randomTerm } },
        orderBy: { createdAt: 'desc' }
    });

    if (saved) {
        console.log(`✅ Saved to DB: ID=${saved.id}, Model=${saved.model}, Method=${saved.method}`);
    } else {
        console.warn('⚠️ Not saved to DB (might be API failure or mock mode)');
    }

    console.log('\n--- Verification Complete ---');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
