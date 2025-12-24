
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'invoice-settings.json');

// Ensure data directory exists
function ensureDataDir() {
    const dataDir = path.dirname(SETTINGS_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
}

export async function GET() {
    try {
        ensureDataDir();
        if (fs.existsSync(SETTINGS_FILE)) {
            const data = fs.readFileSync(SETTINGS_FILE, 'utf-8');
            const settings = JSON.parse(data);
            return NextResponse.json({ settings });
        }
        return NextResponse.json({ settings: null });
    } catch (error) {
        console.error('Failed to read Invoice settings:', error);
        return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        ensureDataDir();
        const body = await request.json();

        console.log('Saving Invoice settings...');
        fs.writeFileSync(SETTINGS_FILE, JSON.stringify(body, null, 2));

        console.log('Invoice Settings saved successfully to:', SETTINGS_FILE);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save Invoice settings:', error);
        return NextResponse.json({ error: `Failed to save settings: ${error}` }, { status: 500 });
    }
}
