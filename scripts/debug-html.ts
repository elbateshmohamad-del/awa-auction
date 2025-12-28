
import * as fs from 'fs';
import * as path from 'path';

// Debug: show the raw content around movie_engine
const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    const html = fs.readFileSync(debugFile, 'utf-8');

    // Find movie_engine occurrences
    const movieIdx1 = html.indexOf('movie_engine');
    const movieIdx2 = html.indexOf('movie_engine', movieIdx1 + 1);

    console.log('=== Content around first movie_engine ===');
    console.log(html.substring(movieIdx1 - 50, movieIdx1 + 100));

    console.log('\n=== Content around second movie_engine ===');
    console.log(html.substring(movieIdx2 - 50, movieIdx2 + 100));

    // Test specific regex on this content
    console.log('\n=== Testing regex patterns ===');

    // Get the script content
    const scriptStart = html.indexOf("var node = \"");
    const scriptEnd = html.indexOf('";', scriptStart + 12);
    const nodeContent = html.substring(scriptStart, scriptEnd + 2);
    console.log('Node var content length:', nodeContent.length);

    // Try to extract mp4 paths
    const mp4Regex = /movie_engine\/[^'"\s\\]+\.mp4/g;
    const matches = nodeContent.match(mp4Regex);
    console.log('MP4 matches:', matches);
} else {
    console.error('Debug file not found');
}
