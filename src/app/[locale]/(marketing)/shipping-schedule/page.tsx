"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Data Types
type Container = {
    id: string;
    destination: string;
    // flag removed as it was unused in render
    name: string;
    status: string;
    capacity: number;
    filled: number;
    etd: string;
    price: string;
    features: string[];
};

export default function ShippingSchedulePage() {
    const t = useTranslations('shippingSchedule');
    const [schedules, setSchedules] = useState<Container[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const res = await fetch('/api/containers');
                if (res.ok) {
                    const data = await res.json();
                    setSchedules(data);
                }
            } catch (error) {
                console.error('Failed to fetch schedules', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {schedules.map((item) => {
                        const city = item.destination.split(',')[0].trim();
                        const country = item.destination.split(',')[1].trim();
                        const fillPercent = Math.round((item.filled / item.capacity) * 100);

                        return (
                            <Card key={item.id} className="hover:shadow-xl transition-shadow border-t-4 border-t-blue-600 flex flex-col h-full">
                                <CardContent className="p-8 space-y-8 flex flex-col flex-1">
                                    {/* Destination Header */}
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                                {city}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <span className="font-medium">{country}</span>
                                                <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-400 font-mono">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </div>
                                        <Badge variant={fillPercent > 80 ? 'red' : 'green'} className="shrink-0 ml-4">
                                            {t(`status.${item.status}`)}
                                        </Badge>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-gray-600">{t('capacityUsed')}</span>
                                            <span className={fillPercent > 80 ? 'text-red-600' : 'text-green-600'}>
                                                {fillPercent}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${fillPercent > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                                                style={{ width: `${fillPercent}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-400 text-right">
                                            {fillPercent > 90 ? t('almostFull') : t('spaceAvailable')}
                                        </p>
                                    </div>

                                    {/* Spacer to push bottom content down */}
                                    <div className="flex-1" />

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">{t('departure')}</p>
                                            <p className="font-bold text-gray-900">{item.etd}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">{t('estPrice')}</p>
                                            <p className="font-bold text-[#0F4C81] text-lg">{t('from')} ${item.price}</p>
                                        </div>
                                    </div>

                                    {/* Features & Action */}
                                    <div className="space-y-4">
                                        <Link href={`/reservations/create?containerId=${item.id}`} className="w-full">
                                            <Button className="w-full font-bold" size="lg">
                                                {t('bookSpace')}
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
