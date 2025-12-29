
import http from 'http';

const targetUrl = 'http://localhost:3000/api/proxy-video';
// Use a known existing BDS video URL (replace if needed, or fetch from DB)
// For test, we can use the one from previous test script if valid, or a dummy parameters to check response
const bdsVideoUrl = 'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20260107/movie_engine/001120260107_l.mp4';

const fullUrl = `${targetUrl}?url=${encodeURIComponent(bdsVideoUrl)}`;

console.log(`Testing Proxy Endpoint: ${fullUrl}`);

http.get(fullUrl, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log('Headers:', res.headers);

    if (res.statusCode === 200 || res.statusCode === 206) {
        console.log('Proxy seems working (Status OK)');
        // Consume a bit of data to verify stream
        res.on('data', (chunk) => {
            console.log(`Received chunk via proxy: ${chunk.length} bytes`);
            res.destroy(); // Stop
        });
    } else {
        console.error('Proxy failed with status:', res.statusCode);
        // data?
        res.on('data', d => console.log('Body:', d.toString()));
    }
}).on('error', (e) => {
    console.error('Request error:', e);
});
