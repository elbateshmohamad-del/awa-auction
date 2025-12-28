"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { getCurrentExchangeRates } from '@/lib/currency';
import BikeSearchFilters from '@/components/admin/BikeSearchFilters';

interface AdminPricesClientProps {
    initialBikes: any[];
    locale: string;
}

export default function AdminPricesClient({ initialBikes, locale }: AdminPricesClientProps) {
    const t = useTranslations();
    const [bikes, setBikes] = useState(initialBikes);
    const [currency, setCurrency] = useState('JPY');
    const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
    const [selectedBike, setSelectedBike] = useState<any | null>(null);

    // Fetch rates on mount
    useEffect(() => {
        getCurrentExchangeRates().then(setExchangeRates);
    }, []);

    // Helper for calculation
    const getRateInfo = (bike: any) => {
        let rate = exchangeRates[currency];
        let isHistorical = false;

        if (currency === 'JPY') return { rate: 1, isHistorical: false, finalPrice: bike.currentPrice || bike.startPrice };

        if (bike.historicalRates) {
            try {
                const hist = JSON.parse(bike.historicalRates);
                if (hist[currency]) {
                    rate = hist[currency];
                    isHistorical = true;
                }
            } catch (e) { }
        }

        if (!rate) rate = 1;

        const finalPrice = (bike.currentPrice || bike.startPrice) / rate;
        return { rate, isHistorical, finalPrice };
    };

    const getDisplayPrice = (bike: any) => {
        const { finalPrice } = getRateInfo(bike);
        if (currency === 'JPY') return `¥${finalPrice.toLocaleString()}`;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0
        }).format(finalPrice);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Market Prices (相場情報)</h1>
                    <p className="text-sm text-gray-500">View historical auction results and archived data.</p>
                </div>

                {/* Currency Selector */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Display Currency:</span>
                    <select
                        className="h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="JPY">JPY (¥)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="AED">AED (Dh)</option>
                    </select>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                        <BikeSearchFilters />
                        <div className="mt-2 text-xs text-blue-600">
                            * Default view shows Archived and Sold items. Use filter to narrow down.
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Auction Date</th>
                                    <th className="px-6 py-3">Bike Info</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Start Price</th>
                                    <th className="px-6 py-3">Result / Sold Price</th>
                                    <th className="px-6 py-3">AWA Grade</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {bikes.map((bike) => (
                                    <tr key={bike.id} className="hover:bg-blue-50/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                            {bike.auctionDate || '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900">{bike.name}</span>
                                                <span className="text-xs text-gray-500">{bike.vin}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit
                                                ${bike.status === 'sold' ? 'bg-green-100 text-green-800' :
                                                    bike.status === 'archived' ? 'bg-gray-100 text-gray-600' :
                                                        'bg-blue-100 text-blue-800'}`}>
                                                {t(`admin.common.statusBadge.${bike.status}`)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">¥{bike.startPrice?.toLocaleString()}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">
                                            {getDisplayPrice(bike)}
                                        </td>
                                        <td className="px-6 py-4 text-center">{bike.awaGrade}</td>
                                        <td className="px-6 py-4 text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-[#0F4C81]"
                                                onClick={() => setSelectedBike(bike)}
                                            >
                                                View Estimate
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                {bikes.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            No historical data found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Detail Modal */}
            <Modal isOpen={!!selectedBike} onClose={() => setSelectedBike(null)} title={selectedBike?.name}>
                {selectedBike && (
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            {selectedBike.images?.[0] ? (
                                <img src={selectedBike.images[0]} alt={selectedBike.name} className="w-full h-full object-contain bg-black" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                            )}
                        </div>

                        {/* Basic Specs */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="block text-xs text-gray-500">AWA Grade</span>
                                <span className="font-bold text-lg">{selectedBike.awaGrade}</span>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="block text-xs text-gray-500">Mileage</span>
                                <span className="font-bold text-lg">{selectedBike.mileage}</span>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="block text-xs text-gray-500">Status</span>
                                <Badge className={`mt-1 ${selectedBike.status === 'sold' ? 'bg-green-600' : 'bg-gray-500'}`}>
                                    {t(`admin.common.statusBadge.${selectedBike.status}`)}
                                </Badge>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="block text-xs text-gray-500">Original Sold Price (JPY)</span>
                                <span className="font-mono text-lg">¥{(selectedBike.currentPrice || selectedBike.startPrice).toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Price Calculation Breakdown */}
                        <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-5">
                            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                💰 Currency Simulation
                            </h3>

                            <div className="space-y-3 text-sm">
                                {currency !== 'JPY' && (() => {
                                    const { rate, isHistorical, finalPrice } = getRateInfo(selectedBike);
                                    return (
                                        <>
                                            <div className="flex justify-between items-center py-2 border-b border-blue-100">
                                                <span className="text-gray-600">Effective Rate ({currency})</span>
                                                <div className="text-right">
                                                    <span className="font-mono font-medium block">
                                                        1 {currency} = {rate.toFixed(2)} JPY
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {isHistorical
                                                            ? `Historical Rate (${selectedBike.auctionDate})`
                                                            : 'Current Market Rate'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center pt-2">
                                                <span className="font-bold text-blue-900">Converted Price</span>
                                                <span className="text-2xl font-black text-blue-900">
                                                    {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: currency,
                                                        maximumFractionDigits: 0
                                                    }).format(finalPrice)}
                                                </span>
                                            </div>

                                            {!isHistorical && (
                                                <p className="text-xs text-orange-600 mt-2">
                                                    * No historical rate found. Using current market rate.
                                                </p>
                                            )}
                                        </>
                                    );
                                })()}

                                {currency === 'JPY' && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        Select a foreign currency to see price estimation based on exchange rates.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
