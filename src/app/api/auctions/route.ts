import { NextResponse } from 'next/server';

const auctions = [
    { id: 101, bikeId: 1, currentPrice: 1850000, bids: 18, endsAt: '2025-12-31T12:00:00Z', status: 'live' },
    { id: 102, bikeId: 2, currentPrice: 2100000, bids: 24, endsAt: '2025-12-31T15:30:00Z', status: 'live' },
    { id: 201, bikeId: 5, startPrice: 1200000, bids: 0, startsAt: '2026-01-01T10:00:00Z', status: 'upcoming' },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let filteredAuctions = auctions;
    if (status) {
        filteredAuctions = auctions.filter(a => a.status === status);
    }

    return NextResponse.json({
        success: true,
        data: filteredAuctions.map(a => ({
            ...a,
            timeLeft: calculateTimeLeft(a.endsAt)
        }))
    });
}

function calculateTimeLeft(endDate?: string) {
    if (!endDate) return 'TBA';
    // Mock calculation
    return '2h 15m'; // Static for mock
}
