
import { NextRequest, NextResponse } from 'next/server';
import { extractVideoUrls, getSettings, loginToBDS, requestBDS, BDS_BASE_URL } from '@/lib/bds-scraper';

export async function GET(request: NextRequest) {
    const holdno = request.nextUrl.searchParams.get('holdno') || '0002'; // Default to our target
    const url = `https://bdsc.jupiter.ac/jb/s_detail.jsp?holdno=${holdno}`;

    try {
        console.log(`[Debug] Checking video for holdno: ${holdno}`);

        // 1. Get Settings
        const settings = getSettings();
        if (!settings) {
            return NextResponse.json({ error: "No BDS settings found" }, { status: 500 });
        }

        // 2. Login
        console.log('[Debug] Logging in...');
        const cookie = await loginToBDS(settings);
        if (!cookie) {
            return NextResponse.json({ error: "Login failed" }, { status: 500 });
        }

        // 3. Fetch Page
        console.log(`[Debug] Fetching page: ${url}`);
        const response = await requestBDS(url, {
            headers: {
                'Cookie': cookie,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const html = await response.text();
        console.log(`[Debug] HTML length: ${html.length}`);

        // 4. Extract
        console.log('[Debug] Extracting videos...');
        const videoUrls = extractVideoUrls(html);

        return NextResponse.json({
            success: true,
            holdno,
            url,
            foundVideos: videoUrls,
            htmlSnippet: html.substring(0, 1000),
            videoDebugLogs: "Check server console for [VideoDebug] logs if enabled"
        });

    } catch (error: any) {
        console.error('[Debug] Error:', error);
        return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
    }
}
