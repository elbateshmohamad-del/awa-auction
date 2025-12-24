import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'kyc_data.json');

// Helper to read DB
function readDb() {
    if (!fs.existsSync(DB_PATH)) {
        return [];
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Helper to write DB
function writeDb(data: any) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
    const data = readDb();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const body = await request.json();
    const db = readDb();

    // Handle "Action" (Approve/Reject)
    if (body.action && body.id) {
        const index = db.findIndex((item: any) => item.id === body.id);
        if (index === -1) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        if (body.action === 'approve') {
            db[index].status = 'Verified';
        } else if (body.action === 'reject') {
            db[index].status = 'Rejected';
            // Simulate sending email (This would be Resend/SendGrid in production)
            console.log(`---------------------------------------------------`);
            console.log(`[EMAIL SENT] To: ${db[index].email}`);
            console.log(`[EMAIL SENT] Subject: Identify Verification Failed`);
            console.log(`[EMAIL SENT] Body: ${body.notes || 'Please contact support.'}`);
            console.log(`---------------------------------------------------`);
        }

        writeDb(db);
        return NextResponse.json({ success: true, data: db[index] });
    }

    // Handle "Submit" (New Application)
    // For now, we assume body contains the processed file names and user info
    const newItem = {
        id: Date.now().toString(),
        user: body.firstName + ' ' + body.lastName,
        type: body.type || 'Individual', // Individual or Corporate
        subDate: new Date().toISOString().split('T')[0],
        email: body.email,
        status: 'Pending',
        docs: body.docs || [] // Array of filenames
    };

    db.unshift(newItem); // Add to top
    writeDb(db);

    return NextResponse.json({ success: true, data: newItem });
}
