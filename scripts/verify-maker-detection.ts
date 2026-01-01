
import { prisma } from '../src/lib/prisma';
import { detectMaker } from '../src/lib/maker-detection';

async function main() {
    console.log('--- Verifying Maker Rules from DB ---');

    // 1. Check DB Content
    const setting = await prisma.systemSetting.findUnique({
        where: { key: 'maker_rules' }
    });

    if (setting) {
        console.log('✅ Found maker_rules in SystemSetting table.');
        const rules = JSON.parse(setting.value);
        console.log(`Loaded ${Object.keys(rules).length} makers.`);
        console.log('Sample Rules (Honda):', rules['Honda'].slice(0, 5));
    } else {
        console.error('❌ maker_rules NOT found in DB.');
    }

    // 2. Test Detection Logic
    console.log('\n--- Testing detectMaker Logic ---');

    const samples = [
        'CBR250RR',       // Should match Honda
        'NinJa 400',      // Should match Kawasaki
        'YZF-R1',         // Should match Yamaha
        'Unknown Bike'    // Should be Unknown
    ];

    for (const name of samples) {
        const result = await detectMaker(name);
        console.log(`Input: "${name}" => Detected: ${result.maker} (Confidence: ${result.confidence})`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
