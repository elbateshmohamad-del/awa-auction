
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

const key = process.env.GEMINI_API_KEY;
console.error('Checking models for key:', key ? '***' + key.slice(-4) : 'MISSING');

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

fetch(url)
    .then(r => r.json())
    .then(d => console.log(JSON.stringify(d, null, 2)))
    .catch(e => console.error(e));
