"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import { useAuction } from '@/hooks/useAuction';
import { useWatchlist } from '@/context/WatchlistContext';

// Helper for currency symbols
const getCurrencySymbol = (code: string) => {
    switch (code) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'GBP': return '£';
        case 'EGP': return 'E£';
        case 'JPY': return '¥';
        default: return code;
    }
};

interface BikeCardProps {
    id: string | number;
    name: string;
    year: number;
    price: number;
    grade: 'S' | 'A' | 'B' | 'C' | 'D';
    image: string;
    mileage: string;
    location: string;
    endsIn: string;
    bids: number;
    currency?: string;
    exchangeRate?: number;
    auctionEndDate?: string;
    displacement?: string;
    color?: string;
    isCurrentPrice?: boolean;
}

// Helper to parse duration like "2d 15h 30m"
const parseDuration = (str: string) => {
    const now = new Date();
    // Default to 24h if invalid
    let durationMs = 24 * 60 * 60 * 1000;

    try {
        if (str.includes('d') || str.includes('h') || str.includes('m')) {
            const parts = str.split(' ');
            let ms = 0;
            parts.forEach(p => {
                const val = parseInt(p);
                if (isNaN(val)) return;
                if (p.includes('d')) ms += val * 24 * 60 * 60 * 1000;
                else if (p.includes('h')) ms += val * 60 * 60 * 1000;
                else if (p.includes('m')) ms += val * 60 * 1000;
            });
            if (ms > 0) durationMs = ms;
        }
    } catch (e) {
        // Fallback
    }
    return new Date(now.getTime() + durationMs);
};

export function BikeCard({
    id,
    name,
    year,
    price,
    grade,
    image,
    mileage,
    location,
    endsIn,
    bids,
    currency = 'JPY',
    exchangeRate = 1,
    auctionEndDate: auctionEndDateProp,
    displacement,
    color,
    isCurrentPrice = false
}: BikeCardProps) {
    const t = useTranslations();
    const router = useRouter(); // Use router for navigation
    const { isInWatchlist, toggleWatchlist } = useWatchlist();
    const [imageError, setImageError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const isFavorite = isInWatchlist(String(id));

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Calculate generic end time based on string duration to satisfy hook
    // Memoize to prevent infinite loop (new Date() created every render -> hook effect -> re-render)
    // Calculate specific end time based on prop or string duration
    const auctionEndTime = useMemo(() => {
        if (auctionEndDateProp) return new Date(auctionEndDateProp);
        return isMounted ? parseDuration(endsIn) : new Date(0);
    }, [isMounted, endsIn, auctionEndDateProp]);

    // Use auction hook to get live/persisted price
    // Pass undefined bikeId initially to prevent hook logic causing mismatch
    const { currentPrice, timeLeft, bids: liveBids } = useAuction(isMounted ? String(id) : undefined, price, auctionEndTime);

    const effectivePrice = currentPrice > price ? currentPrice : price;
    const effectiveBids = liveBids.length > 0 ? liveBids.length : bids;

    // Calculate display price
    const displayPrice = currency === 'JPY'
        ? effectivePrice
        : Math.ceil(effectivePrice / (exchangeRate || 1));

    const currencySymbol = getCurrencySymbol(currency);

    // Determine timer color
    const getTimerColor = () => {
        const now = new Date();
        const diff = auctionEndTime.getTime() - now.getTime();
        const hoursLeft = diff / (1000 * 60 * 60);

        if (hoursLeft > 24) return 'bg-green-600';
        if (hoursLeft > 1) return 'bg-orange-500';
        return 'bg-red-600';
    };

    const timerColor = getTimerColor();

    const handleCardClick = () => {
        router.push(`/bike/${id}`);
    };

    return (
        <div
            onClick={() => router.push(`/bike/${id}`)}
            className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer relative"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* Bike Image */}
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-6xl group-hover:scale-105 transition-transform duration-500">
                        🏍️
                    </div>
                )}

                {/* Overlays */}
                <div className="absolute top-6 right-3 flex flex-col gap-2 items-end">
                    <Badge grade={grade} className="shadow-sm" />
                    {/* Watch Button */}
                    <button
                        className={`p-1.5 rounded-full shadow-sm transition-all duration-300 active:scale-75 hover:scale-110 z-10 cursor-pointer ${isFavorite
                            ? 'bg-red-50 text-red-500 hover:bg-red-100'
                            : 'bg-white/90 text-gray-400 hover:text-red-500'
                            }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWatchlist(String(id));
                        }}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>

            <CardContent className="p-4">
                <h3 className="font-bold text-lg leading-tight mb-2 truncate group-hover:text-[#0F4C81] transition-colors">{year} {name}</h3>

                {/* Specs Row */}
                <div className="text-xs text-gray-500 mb-3 flex flex-wrap gap-x-2">
                    <span>{displacement}</span>
                    <span className="text-gray-300">|</span>
                    <span>{mileage}</span>
                    <span className="text-gray-300">|</span>
                    <span>{color}</span>
                    <span className="text-gray-300">|</span>
                    <span>{location}</span>
                </div>

                {/* Status Row: Timer & Bids */}
                <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded text-white flex items-center gap-1 ${timerColor}`}>
                        ⏱ {timeLeft || endsIn}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        📢 {effectiveBids} {t('auctions.bids')}
                    </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">
                            {isCurrentPrice ? t('auctions.currentPrice') : t('auctions.startPrice')}
                        </p>
                        <p className="text-xl font-bold text-[#0F4C81]">
                            {currencySymbol}{displayPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="hover:bg-[#0F4C81] hover:text-white transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(); // Or specific bid logic
                        }}
                    >
                        {t('auctions.placeBid')}
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
