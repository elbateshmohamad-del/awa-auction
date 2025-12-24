import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'bds-settings.json');

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
            // Don't return password in plain text for security
            return NextResponse.json({
                settings: {
                    ...settings,
                    password: settings.password ? '••••••••' : ''
                }
            });
        }
        return NextResponse.json({ settings: null });
    } catch (error) {
        console.error('Failed to read BDS settings:', error);
        return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        ensureDataDir();
        const body = await request.json();

        // Load existing settings
        let existingSettings: Record<string, string> = {};
        if (fs.existsSync(SETTINGS_FILE)) {
            existingSettings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'));
        }

        // Build new settings
        console.log('Saving BDS settings...', { username: body.username, hasPassword: !!body.password, keepPassword: body.keepPassword });
        const settings = {
            username: body.username || '',
            password: body.keepPassword ? existingSettings.password : (body.password || ''),
        };
        console.log('Writing settings to file:', SETTINGS_FILE);
        fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
        console.log('Settings saved successfully');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save BDS settings (Detailed):', error);
        return NextResponse.json({ error: `Failed to save settings: ${error}` }, { status: 500 });
    }
}
