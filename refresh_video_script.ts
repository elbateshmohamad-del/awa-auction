
import * as fs from 'fs';
import * as path from 'path';
import { loginToBDS, requestBDS, extractVideoUrls, BDS_BASE_URL, SETTINGS_FILE, getSettings } from './src/lib/bds-scraper';

const BIKES_FILE = path.join(process.cwd(), 'data', 'bikes.json');

async function refreshVideos() {
    console.log('Starting video refresh...');

    // 1. Load bikes
    const data = JSON.parse(fs.readFileSync(BIKES_FILE, 'utf-8'));
    const bikes = data.bikes;

    // Target bike: 0002 (awa-1765798858924-rqrl82lhr) - The one user complained about
    const targetId = 'awa-1765798858924-rqrl82lhr';
    const bike = bikes.find((b: any) => b.id === targetId);

    if (!bike) {
        console.error('Target bike not found!');
        return;
    }

    console.log(`Found bike: ${bike.name} (BDS ID: ${bike.bdsId})`);

    // 2. Login
    console.log('Logging in to BDS...');
    const settings = getSettings();
    if (!settings) {
        console.error('Failed to load settings.');
        return;
    }
    const cookie = await loginToBDS(settings);
    if (!cookie) {
        console.error('Login failed.');
        return;
    }

    // 3. Construct URL
    // Try to guess URL. Usually s_detail.jsp?holdno=XXXX
    // We need to be careful about the holdno format.
    // If bdsId is "0002", usually holdno is "0002" or sometimes needs zero padding if not present.
    // Let's rely on bdsId.
    const detailUrl = `${BDS_BASE_URL}/jb/s_detail.jsp?holdno=${bike.bdsId}`;
    console.log(`Fetching URL: ${detailUrl}`);

    try {
        const { text } = await requestBDS(detailUrl, {
            headers: { 'Cookie': cookie }
        });
        const html = await text();

        // 4. Extract
        console.log('Extracting videos...');
        const videos = extractVideoUrls(html);
        console.log(`Found ${videos.length} videos:`, videos);

        // 5. Update
        if (videos.length > 0) {
            bike.videoUrls = videos;
            console.log('Updated bike video URLs.');

            // Save
            fs.writeFileSync(BIKES_FILE, JSON.stringify(data, null, 2));
            console.log('Saved bikes.json');
        } else {
            console.warn('No videos found! The regex might still be missing something or the page layout differs for this bike.');
            // Debug dump
            fs.writeFileSync('data/debug_0002.html', html);
            console.log('Dumped HTML to data/debug_0002.html');
        }

    } catch (e) {
        console.error('Error fetching/processing:', e);
    }
}

refreshVideos();
