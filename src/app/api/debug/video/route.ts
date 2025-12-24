import { NextRequest, NextResponse } from 'next/server';
import {
    getSettings,
    loginToBDS,
    fetchBikeListPage,
    requestBDS,
    extractVideoUrls,
    BDS_BASE_URL
} from '@/lib/bds-scraper';

export async function GET(request: NextRequest) {
    try {
        const settings = getSettings();
        if (!settings) {
            return NextResponse.json({ error: 'Settings not found' }, { status: 500 });
        }

        // Login
        const sessionCookie = await loginToBDS(settings);
        if (!sessionCookie) {
            return NextResponse.json({ error: 'Login failed' }, { status: 500 });
        }

        // Fetch List
        const bikeList = await fetchBikeListPage(settings, sessionCookie);
        if (bikeList.length === 0) {
            return NextResponse.json({ error: 'No bikes found' }, { status: 404 });
        }

        // Find target bike (0002 or first one)
        const targetBike = bikeList.find(b => b.id.includes('0002')) || bikeList[0];

        // Fetch Detail
        const detailUrl = targetBike.detailUrl.startsWith('http')
            ? targetBike.detailUrl
            : `${BDS_BASE_URL}${targetBike.detailUrl}`;

        const response = await requestBDS(detailUrl, {
            headers: { 'Cookie': sessionCookie }
        });
        const html = await response.text();

        // Extract 
        const consoleLog: string[] = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
            consoleLog.push(args.map(a => String(a)).join(' '));
            originalConsoleLog(...args);
        };

        const importedVideos = extractVideoUrls(html);

        console.log = originalConsoleLog; // Restore

        // HTML snippet for debugging (look for video tags)
        // Extract 500 chars around "video" or "mp4" or "engine"
        const keywords = ['video', 'mp4', 'エンジン音', 'src=', 'data-src='];
        const snippets: string[] = [];

        keywords.forEach(kw => {
            let index = html.indexOf(kw);
            while (index !== -1) {
                const start = Math.max(0, index - 200);
                const end = Math.min(html.length, index + 300);
                snippets.push(`--- Keyword: ${kw} ---\n` + html.substring(start, end));
                index = html.indexOf(kw, index + 1);
                if (snippets.length > 20) break; // limit
            }
        });

        return NextResponse.json({
            bikeId: targetBike.id,
            bikeName: targetBike.name,
            videoUrls: importedVideos,
            extractionLogs: consoleLog,
            htmlSnippets: snippets,
            // Full HTML is too big usually, but maybe useful if snippets fail
            // fullHtmlLength: html.length 
        });

    } catch (error) {
        return NextResponse.json({
            error: 'Debug failed',
            details: String(error)
        }, { status: 500 });
    }
}
