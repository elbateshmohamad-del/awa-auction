"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { BikeCard } from '@/components/catalog/BikeCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

// Mock Data
const bikes = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: ['Ninja ZX-10R', 'YZF-R1M', 'CBR600RR', 'GSX-R750', 'Panigale V4', 'S1000RR'][i % 6],
    year: 2020 + (i % 4),
    price: 1200000 + (i * 50000),
    grade: (['S', 'A', 'B', 'A', 'S', 'B'] as const)[i % 6],
    image: '/placeholder.jpg',
    mileage: `${(i + 1) * 1200} km`,
    location: ['Yokohama', 'Kobe', 'Tokyo', 'Osaka'][i % 4],
    endsIn: `${Math.floor(Math.random() * 8) + 1}h ${Math.floor(Math.random() * 59)}m`,
    bids: 5 + i * 2,
}));

// Upcoming auction dates
const upcomingAuctions = [
    { date: '2024-12-10', day: 'Tue', status: 'live', bikes: 156 },
    { date: '2024-12-17', day: 'Tue', status: 'upcoming', bikes: 0 },
    { date: '2024-12-24', day: 'Tue', status: 'upcoming', bikes: 0 },
];

type TabType = 'all' | 'ending' | 'new' | 'popular';

// Calculate time until next Tuesday 12:00 JST
function getTimeUntilAuctionClose(): { days: number; hours: number; minutes: number; seconds: number } {
    const now = new Date();
    const jstOffset = 9 * 60; // JST is UTC+9
    const nowUTC = now.getTime() + now.getTimezoneOffset() * 60000;
    const nowJST = new Date(nowUTC + jstOffset * 60000);

    // Find next Tuesday 12:00 JST
    const nextTuesday = new Date(nowJST);
    const currentDay = nowJST.getDay();
    const daysUntilTuesday = (2 - currentDay + 7) % 7 || 7; // Tuesday is day 2
    nextTuesday.setDate(nowJST.getDate() + daysUntilTuesday);
    nextTuesday.setHours(12, 0, 0, 0);

    // If it's Tuesday and before 12:00, use today
    if (currentDay === 2 && nowJST.getHours() < 12) {
        nextTuesday.setDate(nowJST.getDate());
    }

    const diff = nextTuesday.getTime() - nowJST.getTime();
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

export default function AuctionsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Initial calculation
        setCountdown(getTimeUntilAuctionClose());

        // Update every second
        const interval = setInterval(() => {
            setCountdown(getTimeUntilAuctionClose());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const tabs: { key: TabType; label: string; icon: string }[] = [
        { key: 'all', label: 'All Bikes', icon: '🏍️' },
        { key: 'ending', label: 'Ending Soon', icon: '⏰' },
        { key: 'new', label: 'New Arrivals', icon: '🆕' },
        { key: 'popular', label: 'Most Bids', icon: '🔥' },
    ];

    // Format countdown
    const formatTime = (n: number) => n.toString().padStart(2, '0');
    const countdownDisplay = `${countdown.days}日 ${formatTime(countdown.hours)}:${formatTime(countdown.minutes)}:${formatTime(countdown.seconds)}`;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero with Auction Info */}
            <section className="bg-[#0F4C81] text-white py-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-[-20deg] translate-x-1/4"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Badge className="bg-green-500 text-white animate-pulse">LIVE</Badge>
                                <span className="text-blue-200 text-sm">Weekly auctions every Tuesday</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff' }}>
                                Auction Catalog
                            </h1>
                            <p className="text-xl max-w-xl" style={{ color: '#bfdbfe' }}>
                                Browse, bid, and win quality Japanese motorcycles. All bikes inspected and graded.
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 min-w-[240px]">
                            <div className="text-sm text-blue-200 mb-2">Auction Closes In</div>
                            <div className="text-4xl font-black tracking-wider" style={{ color: '#ffffff' }}>
                                {countdownDisplay}
                            </div>
                            <div className="text-sm text-blue-200 mt-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                156 bikes available
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Auctions Mini Calendar */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {upcomingAuctions.map((auction) => (
                            <div
                                key={auction.date}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${auction.status === 'live'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white/10 text-blue-200'
                                    }`}
                            >
                                {auction.day} {auction.date.split('-')[2]}
                                {auction.status === 'live' && ' • LIVE'}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="bg-white border-b border-gray-200 py-4 sticky top-0 z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 w-full">
                            <Input
                                type="text"
                                placeholder="Search by make, model, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.key
                                        ? 'bg-[#0F4C81] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="mr-1">{tab.icon}</span>
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filter Sidebar */}
                    <FilterSidebar />

                    {/* Bike Grid */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-gray-600 font-medium mb-4 sm:mb-0">
                                Showing <span className="font-bold text-gray-900">156</span> results
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">Sort by:</span>
                                    <select className="text-sm border-none font-bold text-gray-900 focus:ring-0 cursor-pointer bg-transparent">
                                        <option>Ending Soon</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrival</option>
                                        <option>Most Bids</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Bike Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {bikes.map((bike) => (
                                <BikeCard key={bike.id} {...bike} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <Button variant="secondary" disabled>Previous</Button>
                            <Button variant="primary" className="w-10 h-10 p-0 bg-[#0F4C81]">1</Button>
                            <Button variant="secondary" className="w-10 h-10 p-0">2</Button>
                            <Button variant="secondary" className="w-10 h-10 p-0">3</Button>
                            <span className="flex items-center px-2 text-gray-400">...</span>
                            <Button variant="secondary" className="w-10 h-10 p-0">24</Button>
                            <Button variant="secondary">Next</Button>
                        </div>
                    </div>
                </div>
            </main>

            {/* How It Works - Quick Info */}
            <section className="bg-white border-t border-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl mb-2">🔍</div>
                            <div className="font-bold text-gray-900">Browse & Filter</div>
                            <div className="text-sm text-gray-500">Find your perfect bike</div>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">💰</div>
                            <div className="font-bold text-gray-900">Place Your Bid</div>
                            <div className="text-sm text-gray-500">Before Tuesday 12:00 JST</div>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">🏆</div>
                            <div className="font-bold text-gray-900">Win & Pay</div>
                            <div className="text-sm text-gray-500">Bank transfer only</div>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">🚢</div>
                            <div className="font-bold text-gray-900">We Ship</div>
                            <div className="text-sm text-gray-500">Worldwide delivery</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
