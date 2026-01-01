
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';
import { MemberExclusive } from '@/components/auth/MemberExclusive';
import { getCurrentExchangeRates } from '@/lib/currency';
import Link from 'next/link';

interface MarketBike {
    id: string;
    name: string;
    bdsId: string;
    auctionDate?: string;
    startPrice: number;
    currentPrice?: number; // Sold price estimate
    status: string;
    images: string[];
    awaGrade: string;
    mileage: string;
    year: number;
    historicalRates?: string;
}

export default function MarketClientPage() {
    const t = useTranslations();
    const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
    const [bikes, setBikes] = useState<MarketBike[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currency, setCurrency] = useState('JPY');
    const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch rates
                const rates = await getCurrentExchangeRates();
                setExchangeRates(rates);

                // Fetch bikes
                const response = await fetch('/api/bikes?status=sold,archived');
                const data = await response.json();

                if (data.success && Array.isArray(data.data)) {
                    const validBikes = data.data.map((bike: any) => ({
                        id: bike.id,
                        name: bike.name,
                        bdsId: bike.bdsId,
                        auctionDate: bike.auctionDate,
                        startPrice: bike.startPrice,
                        currentPrice: bike.currentPrice || bike.startPrice,
                        status: bike.status,
                        images: bike.images || [],
                        awaGrade: bike.awaGrade || 'D',
                        mileage: bike.mileage || '-',
                        year: 2020, // Mock or parse
                        historicalRates: bike.historicalRates
                    }));
                    setBikes(validBikes);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        }

        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    const filteredBikes = bikes.filter(bike =>
        searchQuery === '' ||
        bike.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getRateInfo = (bike: MarketBike) => {
        let rate = exchangeRates[currency];
        const isHistorical = false; // Simplified for list view

        if (currency === 'JPY') return { rate: 1, isHistorical: false, finalPrice: bike.currentPrice || bike.startPrice };

        if (!rate) rate = 1;

        const finalPrice = (bike.currentPrice || bike.startPrice) / rate;
        return { rate, isHistorical, finalPrice };
    };

    const getDisplayPrice = (bike: MarketBike) => {
        const { finalPrice } = getRateInfo(bike);
        if (currency === 'JPY') {
            return `¥${finalPrice.toLocaleString()}`;
        }
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0
        }).format(finalPrice);
    };

    if (isAuthLoading) return <div className="min-h-screen pt-24 pb-12 flex justify-center">{t('common.loading')}</div>;

    if (!isAuthenticated) {
        return <MemberExclusive />;
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('admin.marketPage.title')}</h1>
                        <p className="text-gray-600">{t('admin.marketPage.subtitle')}</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <select
                            className="h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="JPY">JPY (¥)</option>
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="AED">AED (Dh)</option>
                        </select>
                        <Input
                            className="w-full md:w-64"
                            placeholder={t('admin.marketPage.searchPlaceholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-12">{t('common.loading')}</div>
                ) : filteredBikes.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center text-gray-500 shadow-sm border border-gray-100">
                        <p className="text-lg">{t('admin.marketPage.noDataTitle')}</p>
                        <p className="text-sm mt-2">{t('admin.marketPage.noDataDesc')}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBikes.map(bike => (
                            <Link
                                href={`/market/${bike.id}`}
                                key={bike.id}
                                className="block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="aspect-video bg-gray-200 relative">
                                    {bike.images[0] && (
                                        <img src={bike.images[0]} alt={bike.name} className="w-full h-full object-cover" />
                                    )}
                                    <div className="absolute top-2 right-2">
                                        <Badge className={bike.status === 'sold' ? 'bg-green-600 text-white' : 'bg-gray-500 text-white'}>
                                            {t(`admin.common.statusBadge.${bike.status}`)}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{bike.name}</h3>
                                        <span className="font-mono text-sm text-gray-500">{bike.auctionDate || 'N/A'}</span>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <div className="flex justify-between">
                                            <span>{t('admin.marketPage.mileage')}:</span>
                                            <span className="font-medium">{bike.mileage}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{t('admin.marketPage.grade')}:</span>
                                            <span className="font-bold text-[#0F4C81]">{bike.awaGrade}</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">{t('admin.marketPage.soldPrice')}</span>
                                        <span className="text-xl font-bold text-gray-900">
                                            {getDisplayPrice(bike)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
