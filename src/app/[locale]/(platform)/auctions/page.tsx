"use client";

import { useState, useEffect, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { BikeCard } from '@/components/catalog/BikeCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';
import { MemberExclusive } from '@/components/auth/MemberExclusive';
import { CurrencyCode, fetchExchangeRate, applyMargin, getCurrencySymbol } from '@/lib/currency';

// Bike interface matching the database schema
interface Bike {
    id: string;
    bdsId: string;
    name: string;
    maker: string;
    region: string;
    mileage: string;
    startPrice: number;
    awaGrade: 'S' | 'A' | 'B' | 'C' | 'D';
    firstRegistration: string;
    images: string[];
    status: string;
    importedAt?: string;
    displacement?: string;
    color?: string;
    bidCount?: number;
    currentPrice?: number;
    inspection?: string;
    engineGrade?: number;
    frameGrade?: number;
    exteriorGrade?: number;
    overallGrade?: number;
}

// Helper to get current auction status and target date (JST)
function getAuctionStatus(): { status: 'LIVE' | 'WAITING', targetDate: Date } {
    const now = new Date();
    const jstOffset = 9 * 60; // JST is UTC+9
    const nowUTC = now.getTime() + now.getTimezoneOffset() * 60000;
    const nowJST = new Date(nowUTC + jstOffset * 60000);
    const day = nowJST.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const hour = nowJST.getHours();

    // Live Window: Thursday (4) 00:00 to Tuesday (2) 12:00
    // Waiting Window: Tuesday 12:00 to Thursday 00:00

    let isLive = false;
    let targetDate = new Date(nowJST);

    if (day === 4 || day === 5 || day === 6 || day === 0 || day === 1) {
        isLive = true;
    } else if (day === 2) {
        isLive = hour < 12;
    } else {
        // Wednesday (3)
        isLive = false;
    }

    if (isLive) {
        // Target is NEXT Tuesday 12:00
        // Calculate days to add to reach Tuesday (2)
        // If today is Tue (2) (before 12), diff is 0.
        // If today is Thu (4), diff is 5 (4->5->6->0->1->2).
        const daysUntilTuesday = (2 - day + 7) % 7;
        targetDate.setDate(nowJST.getDate() + daysUntilTuesday);
        targetDate.setHours(12, 0, 0, 0);
    } else {
        // WAITING. Target is NEXT Thursday 00:00
        // If today is Tue (2) (after 12), diff is 2 (2->3->4).
        // If today is Wed (3), diff is 1.
        const daysUntilThursday = (4 - day + 7) % 7;
        targetDate.setDate(nowJST.getDate() + daysUntilThursday);
        targetDate.setHours(0, 0, 0, 0);
        // If calculation lands on today but we are past start (impossible for Thu 00:00 unless exact match),
        // adjust. But here logically we only enter this branch if NOT live.
        // If it's Tue after 12, target is Thu.
    }

    return { status: isLive ? 'LIVE' : 'WAITING', targetDate };
}

// Calculate time diff from now to target
function getTimeRemaining(targetDate: Date): { days: number; hours: number; minutes: number; seconds: number } {
    const now = new Date();
    const jstOffset = 9 * 60;
    const nowUTC = now.getTime() + now.getTimezoneOffset() * 60000;
    const nowJST = new Date(nowUTC + jstOffset * 60000);

    const diff = targetDate.getTime() - nowJST.getTime();
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Transform database bike to BikeCard props
function transformBikeForCard(bike: Bike, countdown: { days: number; hours: number; minutes: number }, auctionTargetDate: Date, isLive: boolean) {
    // Extract year from firstRegistration (e.g., "R2" -> 2020, "R7" -> 2025)
    let year: number | undefined;
    if (bike.firstRegistration) {
        const match = bike.firstRegistration.match(/R\s*(\d+)/);
        if (match) {
            const reiwaYear = parseInt(match[1]);
            year = 2018 + reiwaYear; // Reiwa 1 = 2019
        } else {
            // Try 4 digits
            const match4 = bike.firstRegistration.match(/(\d{4})/);
            if (match4) {
                year = parseInt(match4[1]);
            }
        }
    }

    // Clean up the name (remove extra spaces)
    const cleanName = bike.name.replace(/\s+/g, ' ').trim();

    // Format remaining time
    let endsIn = '';
    if (isLive) {
        endsIn = countdown.days > 0
            ? `${countdown.days}d ${countdown.hours}h`
            : `${countdown.hours}h ${countdown.minutes}m`;
    } else {
        endsIn = 'ENDED'; // Or "Next Auction Starts Soon" if we want to show that
    }

    return {
        id: bike.id,
        name: cleanName || bike.maker,
        year,
        price: bike.startPrice,
        grade: bike.awaGrade,
        image: bike.images?.[0] || '/placeholder.jpg',
        mileage: bike.mileage || '0 km',
        location: bike.region || 'Japan',
        endsIn,
        bids: bike.bidCount || 0,
        auctionEndDate: auctionTargetDate.toISOString(), // Use the target date for consistency
        displacement: bike.displacement || 'Unknown',
        color: bike.color || '-'
    };
}

// Generate dynamic upcoming auctions
const getUpcomingAuctions = () => {
    const auctions = [];
    const now = new Date();
    // Start from last Tuesday or next Tuesday depending on logic, simplifying to just next 3 occurrences of Tuesday
    const currentDay = now.getDay(); // 0-6
    const daysUntilTue = (2 - currentDay + 7) % 7;

    // 1st Auction (This week or next)
    const date1 = new Date(now);
    date1.setDate(now.getDate() + daysUntilTue);

    // If today is Tuesday, check if it's "live" window (usually yes)
    // For simplicity, let's just generate the next few Tuesdays
    for (let i = 0; i < 3; i++) {
        const d = new Date(date1);
        d.setDate(date1.getDate() + (i * 7));

        const isLive = i === 0 && getAuctionStatus().status === 'LIVE'; // Rough approximation

        auctions.push({
            date: d.toISOString().split('T')[0],
            day: 'Tue',
            status: isLive ? 'live' : 'upcoming',
            bikes: isLive ? 156 : 0 // Mock count for live
        });
    }
    return auctions;
};

const upcomingAuctions = getUpcomingAuctions();

type SortType = 'all' | 'ending' | 'new' | 'popular' | 'price_asc' | 'price_desc';

export default function AuctionsPage() {
    const t = useTranslations();
    const { isAuthenticated, isLoading: isAuthLoading, user } = useAuth();
    const [sortBy, setSortBy] = useState<SortType>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [bikes, setBikes] = useState<Bike[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [auctionStatus, setAuctionStatus] = useState<'LIVE' | 'WAITING'>('LIVE');
    const [targetDate, setTargetDate] = useState<Date>(new Date());


    // Currency Handling
    const selectedCurrency: CurrencyCode = (user?.preferredCurrency as CurrencyCode) || 'USD';
    const [exchangeRate, setExchangeRate] = useState(1);

    useEffect(() => {
        async function updateExchangeRate() {
            const rate = await fetchExchangeRate(selectedCurrency);
            // Apply 2% margin if not JPY
            const rateWithMargin = selectedCurrency === 'JPY' ? 1 : applyMargin(rate);
            setExchangeRate(rateWithMargin);
        }
        updateExchangeRate();
    }, [selectedCurrency]);

    // Filter State
    const [filters, setFilters] = useState({
        makers: [] as string[],
        grades: [] as string[],
        regions: [] as string[],
        colors: [] as string[],
        minPrice: '',
        maxPrice: '',
        minYear: '',
        maxYear: '',
        maxMileage: '',
        displacement: [] as string[],
        inspection: false,
        minScore: {
            overall: '',
            engine: '',
            frame: '',
            exterior: ''
        }
    });

    // Reset pagination when filters change
    const handleFilterChange = (newFilters: typeof filters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    // Fetch bikes from API
    useEffect(() => {
        async function fetchBikes() {
            try {
                const response = await fetch('/api/bikes');
                const data = await response.json();
                if (data.success) {
                    // Safe price parsing helper
                    const parsePrice = (val: any): number => {
                        if (typeof val === 'number') return val;
                        if (!val) return 0;
                        // Remove commas, currency symbols, and whitespace
                        const str = String(val).replace(/[^0-9.-]/g, '');
                        const num = Number(str);
                        return isNaN(num) ? 0 : num;
                    };

                    // Filter out bikes with invalid data and merge with localStorage auction state
                    const validBikes = data.data.filter((bike: Bike) =>
                        bike.status === 'active'
                    ).map((bike: Bike) => {
                        const startPrice = parsePrice(bike.startPrice);
                        let bidCount = bike.bidCount || 0;
                        let currentPrice = bike.currentPrice || startPrice;

                        // Merge client-side simulation state if available
                        if (typeof window !== 'undefined') {
                            const key = `auction_state_${bike.id}`;
                            const stored = localStorage.getItem(key);
                            if (stored) {
                                try {
                                    const parsed = JSON.parse(stored);
                                    if (parsed.bids && Array.isArray(parsed.bids)) {
                                        bidCount = Math.max(bidCount, parsed.bids.length);
                                    }
                                    if (parsed.currentPrice && typeof parsed.currentPrice === 'number') {
                                        currentPrice = Math.max(currentPrice, parsed.currentPrice);
                                    }
                                } catch (e) {
                                    // Ignore parse errors
                                }
                            }
                        }

                        return {
                            ...bike,
                            startPrice,
                            bidCount,
                            currentPrice
                        };
                    });
                    setBikes(validBikes);
                }
            } catch (error) {
                // console.error('Failed to fetch bikes:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchBikes();
    }, []);

    useEffect(() => {
        // Initial calculation
        const { status, targetDate: nextTarget } = getAuctionStatus();
        setAuctionStatus(status);
        setTargetDate(nextTarget);
        setCountdown(getTimeRemaining(nextTarget));

        // Update every second
        const interval = setInterval(() => {
            const { status, targetDate: currentTarget } = getAuctionStatus();
            setAuctionStatus(status);
            setTargetDate(currentTarget);
            setCountdown(getTimeRemaining(currentTarget));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const tabs: { key: SortType; label: string; icon: string }[] = [
        { key: 'all', label: t('auctions.filters.title'), icon: '🏍️' },
        { key: 'ending', label: t('auctions.sort.endingSoon'), icon: '⏰' },
        { key: 'new', label: t('auctions.sort.newlyListed'), icon: '🆕' },
        { key: 'popular', label: t('auctions.sort.mostBids'), icon: '🔥' },
    ];

    // Format countdown
    const formatTime = (n: number) => n.toString().padStart(2, '0');

    // Pagination & Filtering Logic
    const ITEMS_PER_PAGE = 30;

    // 1. Filter bikes
    const filteredBikes = bikes.filter(bike => {
        // Search Query
        const matchesSearch = searchQuery === '' ||
            bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bike.maker.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesSearch) return false;

        // Maker Filter
        if (filters.makers.length > 0 && !filters.makers.includes(bike.maker)) {
            return false;
        }

        // Region Filter
        if (filters.regions.length > 0 && !filters.regions.includes(bike.region)) {
            return false;
        }

        // Color Filter (Approximate string matching if needed, but exact for now)
        if (filters.colors.length > 0 && bike.color && !filters.colors.includes(bike.color)) {
            return false;
        }

        // Grade Filter
        if (filters.grades.length > 0 && !filters.grades.includes(bike.awaGrade)) {
            return false;
        }

        // Inspection Filter
        if (filters.inspection && (!bike.inspection || bike.inspection.length === 0)) {
            return false;
        }

        // Price Filter
        const price = bike.currentPrice || bike.startPrice;
        if (filters.minPrice) {
            const minPriceJPY = Number(filters.minPrice) * exchangeRate;
            if (price < minPriceJPY) return false;
        }
        if (filters.maxPrice) {
            const maxPriceJPY = Number(filters.maxPrice) * exchangeRate;
            if (price > maxPriceJPY) return false;
        }

        // Year Filter
        // Parse year from firstRegistration
        let year = 0;
        if (bike.firstRegistration) {
            const match = bike.firstRegistration.match(/R\s*(\d+)/);
            if (match) year = 2018 + parseInt(match[1]);
            else {
                const match4 = bike.firstRegistration.match(/(\d{4})/);
                if (match4) year = parseInt(match4[1]);
            }
        }
        if (filters.minYear && year < Number(filters.minYear)) return false;
        if (filters.maxYear && year > Number(filters.maxYear)) return false;

        // Mileage Filter
        let mileage = 0;
        if (bike.mileage) {
            mileage = parseInt(bike.mileage.replace(/[^0-9]/g, '')) || 0;
        }
        if (filters.maxMileage && mileage > Number(filters.maxMileage)) return false;

        // Displacement Filter
        if (filters.displacement.length > 0) {
            let userDisp = 0;
            if (bike.displacement) {
                userDisp = parseInt(bike.displacement.replace(/[^0-9]/g, '')) || 0;
            }
            const inRange = filters.displacement.some(range => {
                if (range === '50cc') return userDisp <= 50;
                if (range === '125cc') return userDisp > 50 && userDisp <= 125;
                if (range === '250cc') return userDisp > 125 && userDisp <= 250;
                if (range === '400cc') return userDisp > 250 && userDisp <= 400;
                if (range === 'over400cc') return userDisp > 400;
                return false;
            });
            if (!inRange) return false;
        }

        // Detailed Scores Filter
        if (filters.minScore.engine && (bike.engineGrade || 0) < Number(filters.minScore.engine)) return false;
        if (filters.minScore.frame && (bike.frameGrade || 0) < Number(filters.minScore.frame)) return false;
        if (filters.minScore.exterior && (bike.exteriorGrade || 0) < Number(filters.minScore.exterior)) return false;
        if (filters.minScore.overall && (bike.overallGrade || 0) < Number(filters.minScore.overall)) return false;

        return true;
    });

    // 2. Sort Bikes
    const sortedBikes = [...filteredBikes].sort((a, b) => {
        const priceA = a.currentPrice || a.startPrice; // Use calculated current price
        const priceB = b.currentPrice || b.startPrice;
        const bidsA = a.bidCount || 0;
        const bidsB = b.bidCount || 0;

        switch (sortBy) {
            case 'ending':
                return (a.importedAt || '').localeCompare(b.importedAt || '');
            case 'new':
                return (b.importedAt || '').localeCompare(a.importedAt || '');
            case 'popular':
                return bidsB - bidsA; // Descending
            case 'price_asc':
                return priceA - priceB;
            case 'price_desc':
                return priceB - priceA;
            default:
                return 0; // Insertion order (all)
        }
    });

    // 3. Calculate Counts based on search results (but before other filters to show available options)
    const bikesForCounts = bikes.filter(bike =>
        searchQuery === '' ||
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.maker.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const counts = {
        makers: bikesForCounts.reduce((acc, bike) => {
            acc[bike.maker] = (acc[bike.maker] || 0) + 1;
            return acc;
        }, {} as Record<string, number>),
        grades: bikesForCounts.reduce((acc, bike) => {
            acc[bike.awaGrade] = (acc[bike.awaGrade] || 0) + 1;
            return acc;
        }, {} as Record<string, number>),
        regions: bikesForCounts.reduce((acc, bike) => {
            if (bike.region) acc[bike.region] = (acc[bike.region] || 0) + 1;
            return acc;
        }, {} as Record<string, number>),
        colors: bikesForCounts.reduce((acc, bike) => {
            if (bike.color) acc[bike.color] = (acc[bike.color] || 0) + 1;
            return acc;
        }, {} as Record<string, number>),
    };

    const totalItems = sortedBikes.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedBikes = sortedBikes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (isAuthLoading) {
        return <div className="min-h-screen bg-gray-50 pt-20 flex justify-center items-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero with Auction Info */}
            <section className="bg-[#0F4C81] text-white pt-24 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-[-20deg] translate-x-1/4"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                {auctionStatus === 'LIVE' ? (
                                    <Badge className="bg-green-500 text-white animate-pulse">{t('auctions.liveNow')}</Badge>
                                ) : (
                                    <Badge className="bg-orange-500 text-white">{t('auctions.calculating') || 'Waiting for Results'}</Badge>
                                )}
                                <span className="text-blue-200 text-sm">{t('auctions.subtitle')}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff' }}>
                                {t('auctions.title')}
                                {/* Version Marker for Debugging */}
                                <span className="hidden">v2</span>
                            </h1>
                            <p className="text-xl max-w-xl" style={{ color: '#bfdbfe' }}>
                                {t('auctions.subtitle')}
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 min-w-[280px]">
                            <div className="text-sm text-blue-200 mb-2">
                                {auctionStatus === 'LIVE' ? t('auctions.timeRemaining') : 'Next Auction Starts In'}
                            </div>
                            <div className="flex items-center gap-2 text-2xl font-black" style={{ color: '#ffffff' }}>
                                <div className="text-center">
                                    <div className="text-3xl">{countdown.days}</div>
                                    <div className="text-xs text-blue-200">{t('auctions.days')}</div>
                                </div>
                                <span>:</span>
                                <div className="text-center">
                                    <div className="text-3xl">{formatTime(countdown.hours)}</div>
                                    <div className="text-xs text-blue-200">{t('auctions.hours')}</div>
                                </div>
                                <span>:</span>
                                <div className="text-center">
                                    <div className="text-3xl">{formatTime(countdown.minutes)}</div>
                                    <div className="text-xs text-blue-200">{t('auctions.minutes')}</div>
                                </div>
                                <span>:</span>
                                <div className="text-center">
                                    <div className="text-3xl">{formatTime(countdown.seconds)}</div>
                                    <div className="text-xs text-blue-200">{t('auctions.seconds')}</div>
                                </div>
                            </div>
                            <div className="text-sm text-blue-200 mt-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                {bikes.length} {t('common.auctions').toLowerCase()}
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
                                {auction.status === 'live' && ` • ${t('auctions.liveNow')}`}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {!isAuthenticated ? (
                <MemberExclusive />
            ) : (
                <>
                    {/* Search Bar */}
                    <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-40">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="flex-1 w-full">
                                    <Input
                                        type="text"
                                        placeholder={t('common.search') + '...'}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex gap-2 w-full md:w-auto">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setSortBy(tab.key)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${sortBy === tab.key
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
                            <FilterSidebar
                                counts={counts}
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                currencySymbol={getCurrencySymbol(selectedCurrency)}
                            />

                            {/* Filtered & Paginated Content */}
                            {/* Bike Grid */}
                            <div className="flex-1">
                                {/* Toolbar */}
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <p className="text-gray-600 font-medium mb-4 sm:mb-0">
                                        <span className="font-bold text-gray-900">{totalItems}</span> {t('catalog.bikesAvailable')}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-500">{t('auctions.sort.title')}:</span>
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value as SortType)}
                                                className="text-sm border-none font-bold text-gray-900 focus:ring-0 cursor-pointer bg-transparent"
                                            >
                                                <option value="ending">{t('auctions.sort.endingSoon')}</option>
                                                <option value="price_asc">{t('auctions.sort.priceLowHigh')}</option>
                                                <option value="price_desc">{t('auctions.sort.priceHighLow')}</option>
                                                <option value="new">{t('auctions.sort.newlyListed')}</option>
                                                <option value="popular">{t('auctions.sort.mostBids')}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Bike Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {loading ? (
                                        // Loading skeleton
                                        Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                                                <div className="aspect-[4/3] bg-gray-200" />
                                                <div className="p-4 space-y-3">
                                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                                    <div className="h-6 bg-gray-200 rounded w-1/3 mt-4" />
                                                </div>
                                            </div>
                                        ))
                                    ) : totalItems === 0 ? (
                                        <div className="col-span-full text-center py-12 text-gray-500">
                                            {t('common.noResults')}
                                        </div>
                                    ) : (
                                        paginatedBikes.map((bike) => (
                                            <BikeCard
                                                key={bike.id}
                                                {...transformBikeForCard(bike, countdown, targetDate, auctionStatus === 'LIVE')}
                                                price={bike.currentPrice || bike.startPrice} // Display Current Price
                                                isCurrentPrice={Boolean(bike.bidCount && bike.bidCount > 0)}
                                                currency={selectedCurrency}
                                                exchangeRate={exchangeRate}
                                            />
                                        ))
                                    )}
                                </div>

                                {/* Pagination */}
                                {totalItems > 0 && (
                                    <div className="mt-12 flex justify-center gap-2 flex-wrap">
                                        <Button
                                            variant="secondary"
                                            disabled={currentPage === 1}
                                            onClick={() => {
                                                setCurrentPage(prev => Math.max(1, prev - 1));
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            {t('common.previous')}
                                        </Button>

                                        {/* Page Numbers */}
                                        {Array.from({ length: totalPages }).map((_, i) => {
                                            const pageNum = i + 1;
                                            // Show first, last, current, and surrounding pages
                                            if (
                                                pageNum === 1 ||
                                                pageNum === totalPages ||
                                                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                                            ) {
                                                return (
                                                    <Button
                                                        key={pageNum}
                                                        variant={currentPage === pageNum ? "primary" : "secondary"}
                                                        className={`w-10 h-10 p-0 ${currentPage === pageNum ? 'bg-[#0F4C81]' : ''}`}
                                                        onClick={() => {
                                                            setCurrentPage(pageNum);
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }}
                                                    >
                                                        {pageNum}
                                                    </Button>
                                                );
                                            } else if (
                                                pageNum === currentPage - 2 ||
                                                pageNum === currentPage + 2
                                            ) {
                                                return <span key={pageNum} className="flex items-center px-2 text-gray-400">...</span>;
                                            }
                                            return null;
                                        })}

                                        <Button
                                            variant="secondary"
                                            disabled={currentPage === totalPages}
                                            onClick={() => {
                                                setCurrentPage(prev => Math.min(totalPages, prev + 1));
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            {t('common.next')}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </>
            )}

        </div>
    );
}

