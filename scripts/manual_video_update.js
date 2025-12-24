
const fs = require('fs');
const path = require('path');

const BIKES_FILE = path.join(__dirname, '../data/bikes.json');

function updateVideos() {
    console.log('Reading bikes.json...');
    const data = JSON.parse(fs.readFileSync(BIKES_FILE, 'utf-8'));

    let updatedCount = 0;

    data.bikes.forEach(bike => {
        // Only update if we have images to derive the path from
        if (bike.images && bike.images.length > 0) {
            const firstImage = bike.images[0];
            // Format: .../disp/bds/20251217/image_.../000220251217_r.jpg
            // We want: .../disp/bds/20251217/movie_engine/000220251217_r.mp4

            // Regex to capture the base path up to the date and the file prefix
            // .../disp/bds/(\d+)/...

            const match = firstImage.match(/(.*\/disp\/bds\/\d+\/)(?:image_[^/]+\/)((\d+)_r\.jpg)/);
            // match[1] = https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/
            // match[2] = 000220251217_r.jpg (full filename)
            // match[3] = 000220251217 (prefix before _r.jpg)

            // Actually, simpler:
            // Replace "image_cube_high" (or whatever) with "movie_engine"
            // Replace ".jpg" with ".mp4"
            // Ensure filename ends with _r or _l

            // Let's look at the example:
            // Img: .../image_cube_high/000220251217_r.jpg
            // Vid: .../movie_engine/000220251217_r.mp4

            if (firstImage.includes('_r.jpg')) {
                const basePath = firstImage.substring(0, firstImage.lastIndexOf('/'));
                const parentPath = basePath.substring(0, basePath.lastIndexOf('/')); // up to 20251217

                // Construct video URL base
                const videoBase = parentPath + '/movie_engine';

                // Get filename base
                const filename = firstImage.substring(firstImage.lastIndexOf('/') + 1);
                const fileBase = filename.replace('_r.jpg', ''); // 000220251217

                const vidR = `${videoBase}/${fileBase}_r.mp4`;
                const vidL = `${videoBase}/${fileBase}_l.mp4`;

                // Update
                bike.videoUrls = [vidR, vidL];
                updatedCount++;
                console.log(`Updated bike ${bike.bdsId}:`, bike.videoUrls);
            }
        }
    });

    if (updatedCount > 0) {
        fs.writeFileSync(BIKES_FILE, JSON.stringify(data, null, 2));
        console.log(`Saved ${updatedCount} bikes updated.`);
    } else {
        console.log('No bikes updated.');
    }
}

updateVideos();
