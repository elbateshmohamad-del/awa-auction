import { translator } from '../src/lib/translator';
import * as fs from 'fs';
import * as path from 'path';

// Load .env manually for script
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}


async function main() {
    console.log('--- Hybrid Translation System Verification ---');

    // 1. Dictionary Test
    const input1 = "タンクに小傷があります。";
    console.log(`\n[Test 1] Dictionary Replacement`);
    console.log(`Input: "${input1}"`);
    console.log(`Expected (Approx): "Tank has small scratches."`);
    const result1 = await translator.translate(input1);
    console.log(`Result: "${result1}"`);

    // 2. Gemini Test
    const input2 = "全体的に非常に綺麗な状態です。";
    console.log(`\n[Test 2] Gemini Translation (Complex Sentence)`);
    console.log(`Input: "${input2}"`);
    const result2 = await translator.translate(input2);
    console.log(`Result: "${result2}"`);

    // 3. Cache Test
    // If Gemini worked, it tried to save.
    // If we run same input again...
    console.log(`\n[Test 3] Cache Hit Check (Re-running Test 2)`);
    const start = Date.now();
    const result3 = await translator.translate(input2);
    const duration = Date.now() - start;
    console.log(`Result: "${result3}"`);
    console.log(`Duration: ${duration}ms (Should be fast if cached, but currently client might be outdated)`);

    // 4. Arabic Test
    console.log(`\n[Test 4] Arabic Translation Check`);
    const result4 = await translator.translate(input2, 'ar');
    console.log(`Input: "${input2}"`);
    console.log(`Result (Arabic): "${result4}"`);


    // 5. Bike Name Test
    const inputBikeName = "ホンダ　ＣＢ４００ＳＦ　ＶＴＥＣ　Ｒｅｖｏ";
    console.log(`\n[Test 5] Bike Name Translation Check`);
    const result5 = await translator.translate(inputBikeName);
    console.log(`Input: "${inputBikeName}"`);
    console.log(`Result: "${result5}"`);


    // 6. Half-width Katakana Test
    const inputHalfWidth = "ﾄﾞｶﾃｨｽﾄﾘｰﾄﾌｧｲﾀｰV2";
    console.log(`\n[Test 6] Half-width Katakana Test`);
    const result6 = await translator.translate(inputHalfWidth, 'en');
    console.log(`Input: "${inputHalfWidth}"`);
    console.log(`Result: "${result6}"`);

    console.log('\n--- End Verification ---');
}



main().catch(e => {
    console.error('Verification Script Failed:', e);
});
