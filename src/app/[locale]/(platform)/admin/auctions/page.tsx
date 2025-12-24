"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

// Mock Data
const liveAuctions = [
    { id: 101, bike: '2022 Kawasaki Ninja ZX-10R', bidder: 'User8821', price: 1850000, bids: 18, time: '02h 15m', status: 'Live' },
    { id: 102, bike: '2019 Yamaha YZF-R1M', bidder: 'Agencia_Moto', price: 2100000, bids: 24, time: '05h 30m', status: 'Live' },
    { id: 105, bike: '2021 Ducati Panigale V4S', bidder: 'SpeedShop_JP', price: 3200000, bids: 5, time: '1d 12h', status: 'Live' },
];

const upcomingAuctions = [
    { id: 201, bike: '2023 Honda CBR600RR', startTime: 'Tomorrow, 10:00 AM', startPrice: 1200000 },
    { id: 202, bike: '2018 Suzuki Hayabusa', startTime: 'Dec 12, 10:00 AM', startPrice: 1500000 },
];

const endedAuctions = [
    { id: 99, bike: '2015 Harley-Davidson Sportster', winner: 'User5512', finalPrice: 980000, ended: '1 hour ago' },
    { id: 98, bike: '2020 BMW S1000RR', winner: 'MotoExport_TH', finalPrice: 2400000, ended: '3 hours ago' },
];

export default function AdminAuctionsPage() {
    const t = useTranslations('admin.auctionsPage');
    const tCommon = useTranslations('admin.common');
    const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'ended'>('live');

    const getTabLabel = (tab: string) => {
        switch (tab) {
            case 'live': return t('tabs.live');
            case 'upcoming': return t('tabs.upcoming');
            case 'ended': return t('tabs.ended');
            default: return tab;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold animate-pulse">
                        ● {t('systemLive')}
                    </span>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4">
                <Card className="bg-blue-600 text-white border-none">
                    <CardContent className="p-4">
                        <p className="text-xs opacity-80 font-bold uppercase text-white">{t('stats.activeAuctions')}</p>
                        <p className="text-3xl font-black text-white">{liveAuctions.length}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-xs text-gray-500 font-bold uppercase">{t('stats.todaysVolume')}</p>
                        <p className="text-3xl font-black text-gray-900">¥7.1M</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-xs text-gray-500 font-bold uppercase">{t('stats.totalBids24h')}</p>
                        <p className="text-3xl font-black text-gray-900">142</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-xs text-gray-500 font-bold uppercase">{t('stats.completionRate')}</p>
                        <p className="text-3xl font-black text-gray-900">94%</p>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {['live', 'upcoming', 'ended'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors
                 ${activeTab === tab
                                    ? 'border-[#0F4C81] text-[#0F4C81]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {getTabLabel(tab)}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {activeTab === 'live' && (
                    <div className="grid grid-cols-1 gap-4">
                        {liveAuctions.map((auction) => (
                            <Card key={auction.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-0 flex flex-col md:flex-row">
                                    {/* Image / Info */}
                                    <div className="p-6 flex-1 flex gap-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl">🏍️</div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-mono text-gray-500">#{auction.id}</span>
                                                <h3 className="font-bold text-gray-900">{auction.bike}</h3>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="text-gray-600">{t('live.topBidder')}: <span className="font-bold text-[#0F4C81]">{auction.bidder}</span></span>
                                                <span className="text-gray-400">|</span>
                                                <span className="text-gray-600">{auction.bids} {t('live.bids')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status / Price */}
                                    <div className="p-6 bg-gray-50 md:w-64 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-gray-500 font-bold uppercase">{t('live.currentPrice')}</span>
                                            <span className="text-xs font-bold text-red-600 animate-pulse">{auction.time} {t('live.left')}</span>
                                        </div>
                                        <p className="text-2xl font-black text-[#0F4C81] mb-3">¥{auction.price.toLocaleString()}</p>

                                        <div className="flex gap-2">
                                            <Button size="sm" variant="secondary" className="flex-1">{t('live.pause')}</Button>
                                            <Button size="sm" variant="danger" className="flex-1">{t('live.endNow')}</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === 'upcoming' && (
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('table.lot')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('table.bike')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('table.startTime')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('table.startPrice')}</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('table.action')}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {upcomingAuctions.map((auction) => (
                                    <tr key={auction.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auction.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{auction.bike}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auction.startTime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">¥{auction.startPrice.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Button size="sm" variant="ghost">{tCommon('edit')}</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'ended' && (
                    <div className="text-center py-12 text-gray-500">
                        {t('ended.noHistory')}
                    </div>
                )}
            </div>
        </div>
    );
}
