
const http = require('http');

const data = JSON.stringify({
    bikeId: "b1",
    platform: "yt",
    postUrl: "http://test.com"
});

const req = http.request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/sns',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}, res => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        console.log('Body:', body);
    });
});

req.on('error', error => {
    console.error(error);
});

req.write(data);
req.end();
