
import { prisma } from '../src/lib/prisma';
import { detectMaker, MakerDetectionResult } from '../src/lib/maker-detection';

async function main() {
    console.log('--- Fixing Maker Rules & Updating Unknowns ---');

    // 1. Load Current Rules
    const setting = await prisma.systemSetting.findUnique({
        where: { key: 'maker_rules' }
    });

    if (!setting) {
        console.error('❌ maker_rules not found.');
        return;
    }

    const rules = JSON.parse(setting.value);
    let updated = false;

    // Helper to add keywords
    const add = (maker: string, keywords: string[]) => {
        if (!rules[maker]) rules[maker] = [];
        keywords.forEach(k => {
            if (!rules[maker].some((ex: string) => ex.toUpperCase() === k.toUpperCase())) {
                rules[maker].push(k.toUpperCase());
                updated = true;
                console.log(`+ Added [${maker}]: ${k}`);
            }
        });
    };

    // 2. Add Missing Keywords
    add('Honda', ['ﾎｰｸ', 'HAWK', 'ﾀｸﾄ', 'TACT', 'NS-1', 'NS1', 'NSR', 'CBX', 'DREAM', 'ﾄﾞﾘｰﾑ', 'ｼﾞｬｽﾞ', 'JAZZ', 'C50', 'BENLY', 'ﾍﾞﾝﾘｨ']);
    add('Kawasaki', ['W1', 'Z750', 'Z1000', 'Z1', 'KZ', 'KH', 'MACH', 'ﾏｯﾊ', 'GPZ', 'Z250FT']);
    add('Ducati', ['ﾄﾞｶﾃｨ', 'DUCATI', 'PANIGALE']); // 'ﾄﾞｶﾃｨ' (Docati) vs 'ﾄﾞｩｶﾃｨ' (Ducati)
    add('Yamaha', ['XJ', 'RZ', 'DT', 'TZR', 'VIRAGO', 'ﾋﾞﾗｰｺﾞ', 'SRX', 'TZM']);
    add('Suzuki', ['RG', 'ｶﾞﾝﾏ', 'GAMMA', 'GT', 'GS', 'GOOSE', 'ｸﾞｰｽ', 'WOLF', 'ｳﾙﾌ']);
    add('Moto Guzzi', ['MOTO GUZZI', 'ﾓﾄｸﾞｯﾁ', 'MOTO', 'GUZZI']);

    // 3. Save to DB
    if (updated) {
        await prisma.systemSetting.update({
            where: { key: 'maker_rules' },
            data: { value: JSON.stringify(rules) }
        });
        console.log('✅ Updated DB rules.');
    } else {
        console.log('No new rules to add.');
    }

    // 4. Update Unknown Bikes
    console.log('\n--- Re-evaluating Unknown Bikes ---');
    const unknowns = await prisma.bike.findMany({
        where: {
            OR: [
                { maker: 'Unknown' },
                { maker: '' },
                { maker: null }
            ]
        }
    });

    console.log(`Processing ${unknowns.length} unknown bikes...`);
    let fixedCount = 0;

    for (const bike of unknowns) {
        // Run detection (will fetch FRESH rules from DB inside detectMaker logic? 
        // No, detectMaker fetches from DB. Since we just updated DB, it should get new rules.)
        // However, detectMaker might need a moment or we might need to ensure consistency.
        // Let's just call it.
        const res: MakerDetectionResult = await detectMaker(bike.name || '');

        if (res.maker !== 'Unknown') {
            await prisma.bike.update({
                where: { id: bike.id },
                data: {
                    maker: res.maker,
                    makerConfirmed: res.confidence === 'high'
                }
            });
            console.log(`✅ Fixed "${bike.name}" -> ${res.maker}`);
            fixedCount++;
        } else {
            console.log(`⚠️ Still Unknown: "${bike.name}"`);
        }
    }

    console.log(`\nSummary: Fixed ${fixedCount} / ${unknowns.length} bikes.`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
