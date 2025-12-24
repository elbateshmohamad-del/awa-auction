const http = require('http');

// Config
const BASE_URL = 'http://localhost:3000';
const USER_ID = "TEST-AUTOMATION";
const TIMESTAMP = Date.now();
const TEST_POST_URL = `https://youtube.com/watch?v=TEST_${TIMESTAMP}`;
const TEST_BIKE_ID = `bike_${TIMESTAMP}`;

// Helpers
function request(path, method, body) {
    return new Promise((resolve, reject) => {
        const req = http.request(`${BASE_URL}${path}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} }));
        });
        req.on('error', reject);
        if (body) req.write(JSON.stringify(body));
        req.end();
    });
}

function logResult(id, description, passed, details = "") {
    console.log(`${passed ? '✅' : '❌'} [${id}] ${description}`);
    if (!passed && details) console.error(`   Details: ${details}`);
}

async function runTests() {
    console.log("🚀 Starting Automated API Tests...\n");
    let submissionId = null;

    // --- U-01: Validation ---
    try {
        const res = await request('/api/sns', 'POST', {});
        const passed = res.status === 400;
        logResult('U-01', 'Validation Error on Empty Body', passed, `Status: ${res.status}`);
    } catch (e) { logResult('U-01', 'Validation Error', false, e.message); }

    // --- U-05: Normal Submission ---
    try {
        const res = await request('/api/sns', 'POST', {
            platform: 'YouTube',
            postUrl: TEST_POST_URL,
            bikeId: TEST_BIKE_ID
        });
        if (res.status === 200 && res.body.id) {
            submissionId = res.body.id;
            logResult('U-05', 'Successful Submission', true);
        } else {
            logResult('U-05', 'Successful Submission', false, `Status: ${res.status}, Body: ${JSON.stringify(res.body)}`);
        }
    } catch (e) { logResult('U-05', 'Successful Submission', false, e.message); }

    // --- U-07: Duplicate URL ---
    try {
        const res = await request('/api/sns', 'POST', {
            platform: 'YouTube',
            postUrl: TEST_POST_URL, // Same URL
            bikeId: `bike_diff_${TIMESTAMP}`
        });
        logResult('U-07', 'Duplicate URL Check', res.status === 409, `Status: ${res.status}`);
    } catch (e) { logResult('U-07', 'Duplicate URL Check', false, e.message); }

    // --- S-01: Admin Verify (Update) ---
    if (submissionId) {
        try {
            const res = await request('/api/admin/sns/verify', 'POST', {
                id: submissionId,
                status: 'Approved',
                verifiedViews: 1000,
                rewardGranted: '¥10,000'
            });
            const passed = res.status === 200 && res.body.status === 'Approved';
            logResult('S-01', 'Admin Verify/Update API', passed, `Status: ${res.status}, Body: ${JSON.stringify(res.body)}`);
        } catch (e) { logResult('S-01', 'Admin Verify/Update API', false, e.message); }
    } else {
        logResult('S-01', 'Admin Verify/Update API', false, 'Skipped because U-05 failed');
    }

    console.log("\nTests Completed.");
}

runTests();
