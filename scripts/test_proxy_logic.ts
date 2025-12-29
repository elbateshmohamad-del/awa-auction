
import https from 'https';
import crypto from 'crypto';

const url = 'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20260107/movie_engine/001120260107_l.mp4';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT || 0x4 |
        crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
});

const headers: any = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://bdsc.jupiter.ac/jb/s_detail.jsp',
    'Accept': 'video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5',
    'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
};

console.log('Testing connection to:', url);

const req = https.request(url, {
    method: 'GET',
    headers: headers,
    agent: httpsAgent,
    rejectUnauthorized: false
}, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);

    if (res.statusCode === 200 || res.statusCode === 206) {
        console.log('Request successful!');
        // Read a bit of data
        res.on('data', (chunk) => {
            console.log('Received chunk of size:', chunk.length);
            res.destroy(); // Stop after one chunk
        });
    } else {
        console.error('Request failed.');
    }
});

req.on('error', (err) => {
    console.error('Request Error:', err);
});

req.end();
