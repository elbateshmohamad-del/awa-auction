
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const SETTING_KEY = 'invoice';

export async function GET() {
    try {
        const setting = await prisma.systemSetting.findUnique({
            where: { key: SETTING_KEY }
        });

        if (setting) {
            return NextResponse.json({ settings: JSON.parse(setting.value) });
        }
        return NextResponse.json({ settings: null });
    } catch (error) {
        console.error('Failed to read Invoice settings:', error);
        return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        await prisma.systemSetting.upsert({
            where: { key: SETTING_KEY },
            update: { value: JSON.stringify(body) },
            create: {
                key: SETTING_KEY,
                value: JSON.stringify(body),
                description: 'Invoice configuration'
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save Invoice settings:', error);
        return NextResponse.json({ error: `Failed to save settings: ${error}` }, { status: 500 });
    }
}
