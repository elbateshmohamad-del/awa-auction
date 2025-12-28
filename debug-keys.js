const fs = require('fs');
try {
    const ja = JSON.parse(fs.readFileSync('messages/ja.json', 'utf8'));
    console.log('Top level keys count:', Object.keys(ja).length);
    console.log('Is contact_redesign present as top-level?', !!ja.contact_redesign);
    if (ja.contact_redesign) {
        console.log('contact_redesign keys:', Object.keys(ja.contact_redesign));
    } else {
        console.log('Checking deeper nesting...');
        // Check if it's nested in languageSwitcher or security_center by accident
        if (ja.languageSwitcher && ja.languageSwitcher.contact_redesign) console.log('Found inside languageSwitcher');
        if (ja.security_center && ja.security_center.contact_redesign) console.log('Found inside security_center');
    }
} catch (e) {
    console.error('JSON Parse Error:', e.message);
}
