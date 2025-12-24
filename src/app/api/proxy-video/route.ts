
import { NextRequest, NextResponse } from 'next/server';
import https from 'https';
import { cookies } from 'next/headers';

// HTTPS Agent for legacy SSL support (same as proxy-image)
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    secureOptions: require('constants').SSL_OP_LEGACY_SERVER_CONNECT |
        require('constants').SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
});

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    // Must be a BDS URL
    if (!url.includes('bdsc.jupiter.ac')) {
        return new NextResponse('Invalid URL domain', { status: 403 });
    }

    const cookieStore = cookies();
    // In a real scenario, we might want to get the session from the scraping logic/storage.
    // For now, if the user browser has cookies, we forward them?
    // Actually, the server-side scraper maintains the session. The user's browser (client) doesn't have BDS cookies.
    // We need to use the SAME session/method as the proxy-image or scraper.
    // Since we don't store the scraper session globally available here easily without DB,
    // we might need to rely on the fact that we might NOT need auth for the video file itself IF we have the right headers?
    // User mentioned: "It might be that playing requires auth/cookies".
    // Let's try to fetch WITHOUT specific auth first, but matching User-Agent. 
    // If it fails (403), we really need to share the session cookie from the scraper login.

    // HOWEVER, `proxy-image` uses `fetch` (or `https.request`).
    // Does `proxy-image` inject cookies? Let's check `proxy-image` implementation.
    // ... Checked `proxy-image` implementation before: it didn't seem to inject logged-in cookies explicitly unless `requestBDS` was used or headers were passed.
    // Wait, `proxy-image` just does `https.get(url, { agent, headers: { Referer, User-Agent } })`.
    // It does NOT inject a dynamic session cookie. It relies on the image being accessible with just Referer or potentially a static cookie if hardcoded.
    // IF images work, then videos likely work the same way (just Referer check).

    // So we will implement basic proxy with Referer.

    const headers: any = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://bdsc.jupiter.ac/jb/s_detail.jsp',
        'Accept': 'video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5',
        'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
    };

    // Forward Range header if present
    const range = req.headers.get('range');
    if (range) {
        headers['Range'] = range;
    }

    return new Promise((resolve) => {
        const proxyReq = https.request(url, {
            method: 'GET',
            headers: headers,
            agent: httpsAgent,
            rejectUnauthorized: false
        }, (res) => {
            // Forward status and headers
            const responseHeaders = new Headers();

            // Forward content-type, length, range support
            if (res.headers['content-type']) responseHeaders.set('Content-Type', res.headers['content-type']);
            if (res.headers['content-length']) responseHeaders.set('Content-Length', res.headers['content-length']);
            if (res.headers['content-range']) responseHeaders.set('Content-Range', res.headers['content-range']);
            if (res.headers['accept-ranges']) responseHeaders.set('Accept-Ranges', res.headers['accept-ranges']);

            // Create a ReadableStream from the node response stream
            const iterator = res[Symbol.asyncIterator]();
            const stream = new ReadableStream({
                async pull(controller) {
                    const { value, done } = await iterator.next();
                    if (done) controller.close();
                    else controller.enqueue(value);
                }
            });

            resolve(new NextResponse(stream, {
                status: res.statusCode || 200,
                headers: responseHeaders
            }));
        });

        proxyReq.on('error', (err) => {
            console.error('Proxy video error:', err);
            resolve(new NextResponse('Proxy Error', { status: 500 }));
        });

        proxyReq.end();
    });
}
