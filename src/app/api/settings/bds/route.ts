import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const SETTING_KEY = 'bds';

export async function GET() {
    try {
        const setting = await prisma.systemSetting.findUnique({
            where: { key: SETTING_KEY }
        });

        if (setting) {
            const settings = JSON.parse(setting.value);
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
        const body = await request.json();

        // Get existing to handle password retention
        const existing = await prisma.systemSetting.findUnique({
            where: { key: SETTING_KEY }
        });

        let existingSettings: Record<string, string> = {};
        if (existing) {
            existingSettings = JSON.parse(existing.value);
        }

        const settings = {
            username: body.username || '',
            password: body.keepPassword ? existingSettings.password : (body.password || ''),
        };

        await prisma.systemSetting.upsert({
            where: { key: SETTING_KEY },
            update: { value: JSON.stringify(settings) },
            create: {
                key: SETTING_KEY,
                value: JSON.stringify(settings),
                description: 'BDS Scraper Credentials'
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save BDS settings:', error);
        return NextResponse.json({ error: `Failed to save settings: ${error}` }, { status: 500 });
    }
}
