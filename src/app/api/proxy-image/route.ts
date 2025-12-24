import { NextRequest, NextResponse } from 'next/server';
import https from 'https';
import crypto from 'crypto';
import { IncomingMessage } from 'http';

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    // Determine legacy SSL options
    // SSL_OP_LEGACY_SERVER_CONNECT is usually 0x4. 
    // We can also use 'crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT' if available in the runtime.
    // To be safe and explicit with Node.js versions:
    const secureOptions = crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT || 0x4;

    const agent = new https.Agent({
        secureOptions: secureOptions | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
        // Sometimes ciphers need adjustment too, but start with this.
    });

    return new Promise<NextResponse>((resolve) => {
        const req = https.get(url, {
            agent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://bdsc.jupiter.ac/',
            }
        }, (res: IncomingMessage) => {
            // Buffer the response for simplicity in Next.js App Router context
            // (Streaming is possible but passing Node stream to NextResponse can be tricky depending on version)
            const chunks: any[] = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                const buffer = Buffer.concat(chunks);
                const responseHeaders = new Headers();
                const contentType = res.headers['content-type'];
                if (contentType) responseHeaders.set('Content-Type', contentType);
                responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');

                resolve(new NextResponse(buffer, {
                    headers: responseHeaders,
                    status: res.statusCode || 200
                }));
            });
            res.on('error', (err) => {
                console.error('Response stream error:', err);
                resolve(new NextResponse('Internal Server Error', { status: 500 }));
            });
        });

        req.on('error', (error) => {
            console.error('Proxy request error:', error);
            resolve(new NextResponse(`Proxy Error: ${error.message}`, { status: 500 }));
        });
    });
}
