
async function debugCall() {
    try {
        console.log('Sending POST to http://localhost:3000/api/bikes/import...');
        const res = await fetch('http://localhost:3000/api/bikes/import', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ maxBikes: 1 })
        });

        console.log(`Status: ${res.status} ${res.statusText}`);
        const text = await res.text();
        console.log('--- RESPONSE BODY START ---');
        console.log(text);
        console.log('--- RESPONSE BODY END ---');
    } catch (e) {
        console.error('Connection failed:', e);
    }
}

debugCall();
