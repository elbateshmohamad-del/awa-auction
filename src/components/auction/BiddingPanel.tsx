"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { useTranslations } from 'next-intl';

interface BiddingPanelProps {
    currentPrice: number;
    minIncrement: number;
    endsIn: string;
    onBid: (amount: number) => void;
    bidCount: number;
    isWinning?: boolean;
    currencySymbol?: string;
    exchangeRate?: number;
    currencyCode?: string;
    isFirstBid?: boolean;
    isEnded?: boolean;
}

// Invoice settings types
type CurrencyKey = 'USD' | 'EUR' | 'GBP' | 'JPY';
type PricingData = Record<string, number>;

interface InvoiceSettings {
    usdPricing?: PricingData;
    eurPricing?: PricingData;
    gbpPricing?: PricingData;
    costs?: Record<string, { jpyCost: number; defaultBilling: Record<string, number> }>;
}

export function BiddingPanel({
    currentPrice,
    minIncrement,
    endsIn,
    onBid,
    bidCount,
    isWinning,
    currencySymbol = '¥',
    exchangeRate = 1,
    currencyCode = 'JPY',
    isFirstBid = false,
    isEnded = false
}: BiddingPanelProps) {
    const t = useTranslations('bidding');

    // Initialize bid amount to next valid bid when currentPrice changes
    const nextMinBid = currentPrice + minIncrement;
    const [bidAmount, setBidAmount] = useState<number>(nextMinBid);

    // Invoice settings state
    const [invoiceSettings, setInvoiceSettings] = useState<InvoiceSettings | null>(null);

    // Fetch invoice settings
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/settings/invoice');
                if (res.ok) {
                    const data = await res.json();
                    if (data.settings) {
                        setInvoiceSettings(data.settings);
                    }
                }
            } catch (e) {
                console.error('Failed to fetch invoice settings:', e);
            }
        };
        fetchSettings();
    }, []);

    // Get fee for current currency from invoice settings
    const getFeeForCurrency = (feeKey: string): number => {
        if (!invoiceSettings) return 0;

        // For non-JPY currencies, get from pricing
        if (currencyCode === 'USD' && invoiceSettings.usdPricing) {
            return invoiceSettings.usdPricing[feeKey] || 0;
        }
        if (currencyCode === 'EUR' && invoiceSettings.eurPricing) {
            return invoiceSettings.eurPricing[feeKey] || 0;
        }
        if (currencyCode === 'GBP' && invoiceSettings.gbpPricing) {
            return invoiceSettings.gbpPricing[feeKey] || 0;
        }

        // For JPY, use defaultBilling from costs
        if (currencyCode === 'JPY' && invoiceSettings.costs) {
            const costItem = invoiceSettings.costs[feeKey];
            return costItem?.defaultBilling?.JPY || costItem?.jpyCost || 0;
        }

        return 0;
    };

    // Calculate estimated fees
    const getEstimatedShipping = (): number => {
        // Sum of shipping-related fees: oceanFreight, inlandTransport, vanning, etc.
        const oceanFreight = getFeeForCurrency('oceanFreight');
        const inlandTransport = getFeeForCurrency('inlandTransport');
        const vanning = getFeeForCurrency('vanning');
        const exportCustoms = getFeeForCurrency('exportCustoms');
        const documentation = getFeeForCurrency('documentation');

        // If we have pricing data, sum the relevant fees
        if (oceanFreight > 0 || inlandTransport > 0) {
            return oceanFreight + inlandTransport + vanning + exportCustoms + documentation;
        }

        // Fallback to default estimate (in display currency)
        return currencyCode === 'JPY' ? 120000 : Math.ceil(120000 / exchangeRate);
    };

    const getAwaCommission = (): number => {
        const commission = getFeeForCurrency('awaCommission');
        if (commission > 0) return commission;

        // Fallback defaults per currency
        if (currencyCode === 'USD') return 500;
        if (currencyCode === 'EUR') return 480;
        if (currencyCode === 'GBP') return 420;
        return 50000; // JPY
    };

    // Reset local bid input state when currentPrice updates from server/socket
    useEffect(() => {
        setBidAmount(currentPrice + minIncrement);
    }, [currentPrice, minIncrement]);

    // Helper to convert JPY to selected currency
    const toDisplayCurrency = (jpyAmount: number) => {
        if (currencyCode === 'JPY') return jpyAmount;
        return Math.ceil(jpyAmount / exchangeRate);
    };

    // Build confirmation message
    const buildConfirmMessage = (displayAmount: number, jpyAmount: number) => {
        const amountStr = `${currencySymbol}${displayAmount.toLocaleString()}`;
        const jpyStr = `¥${jpyAmount.toLocaleString()}`;

        if (isFirstBid) {
            return t('confirmFirstBid', {
                currency: `${currencySymbol} ${currencyCode}`,
                amount: amountStr,
                jpyAmount: jpyStr
            });
        }

        return t('confirmBid', { amount: amountStr, jpyAmount: jpyStr });
    };

    const handleBid = () => {
        if (isEnded) return; // Prevent bidding if ended

        if (bidAmount < nextMinBid) {
            const minStr = `${currencySymbol}${toDisplayCurrency(nextMinBid).toLocaleString()}`;
            alert(t('bidTooLow', { min: minStr }));
            return;
        }

        const displayAmount = toDisplayCurrency(bidAmount);
        const confirmed = window.confirm(buildConfirmMessage(displayAmount, bidAmount));
        if (confirmed) {
            onBid(bidAmount);
        }
    };

    // Display current price in selected currency
    const displayCurrentPrice = toDisplayCurrency(currentPrice);
    const displayNextMinBid = toDisplayCurrency(nextMinBid);
    const displayBidAmount = toDisplayCurrency(bidAmount);

    // Get dynamic fees
    const estimatedShipping = getEstimatedShipping();
    const awaCommission = getAwaCommission();
    const estimatedTotal = displayCurrentPrice + estimatedShipping + awaCommission;

    return (
        <Card className={`border shadow-sm transition-all duration-300 ${isWinning ? 'border-green-400 bg-green-50/30' : 'border-gray-200'}`}>
            <CardContent className="p-6">

                {/* Status Indicator */}
                {isEnded && (
                    <div className="mb-4 bg-gray-600 text-white px-3 py-2 rounded-md font-bold text-center">
                        ⚠️ {t('auctionEnded')}
                    </div>
                )}
                {!isEnded && isWinning && (
                    <div className="mb-4 bg-green-100 text-green-800 px-3 py-2 rounded-md font-bold text-center animate-in slide-in-from-top-2">
                        {t('youAreWinning')}
                    </div>
                )}
                {!isEnded && !isWinning && bidCount > 0 && (
                    <div className="mb-4 bg-gray-100 text-gray-600 px-3 py-2 rounded-md font-bold text-center">
                        {t('currentBids', { count: bidCount })}
                    </div>
                )}

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">{t('currentPrice')}</p>
                        <p key={currentPrice} className="text-4xl font-black text-[#0F4C81] animate-in fade-in zoom-in-95 duration-300">
                            {currencySymbol}{displayCurrentPrice.toLocaleString()}
                        </p>
                        {currencyCode !== 'JPY' && (
                            <p className="text-xs text-gray-400">≈ ¥{currentPrice.toLocaleString()}</p>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500 font-medium">{t('bidCount')}</p>
                        <p className="text-xl font-bold text-gray-900">{bidCount}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className={`px-4 py-3 rounded-lg flex items-center justify-center font-bold whitespace-nowrap ${isEnded ? 'bg-gray-200 text-gray-500' : 'bg-red-50 text-red-700'}`}>
                        ⏱ {t('timeRemaining')}: {isEnded ? t('ended') : endsIn}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            {t('enterBidAmount')}
                            <span className="text-xs font-normal text-gray-500 ml-2">({t('minimum')}: {currencySymbol}{displayNextMinBid.toLocaleString()})</span>
                        </label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">{currencySymbol}</span>
                                <Input
                                    type="number"
                                    value={displayBidAmount}
                                    onChange={(e) => {
                                        const displayValue = Number(e.target.value);
                                        // Convert back to JPY for internal storage
                                        const jpyValue = currencyCode === 'JPY' ? displayValue : Math.floor(displayValue * exchangeRate);
                                        setBidAmount(jpyValue);
                                    }}
                                    className="pl-8 text-lg font-bold"
                                    disabled={isEnded}
                                />
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className={`flex-1 shadow-lg shadow-blue-500/30 font-bold ${isEnded ? 'opacity-50 cursor-not-allowed bg-gray-400 shadow-none' : ''}`}
                                onClick={handleBid}
                                disabled={isEnded}
                            >
                                {isEnded ? t('ended') : t('bidNow')}
                            </Button>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-2">{t('quickBid')}</p>
                        <div className="grid grid-cols-3 gap-2">
                            {[10000, 20000, 50000].map((inc) => {
                                const jpyAmount = currentPrice + inc;
                                const displayAmount = toDisplayCurrency(jpyAmount);
                                const incDisplay = toDisplayCurrency(inc);
                                return (
                                    <button
                                        key={inc}
                                        onClick={() => {
                                            if (window.confirm(buildConfirmMessage(displayAmount, jpyAmount))) {
                                                onBid(jpyAmount);
                                            }
                                        }}
                                        className="py-2 px-1 text-xs font-bold text-[#0F4C81] bg-blue-50 hover:bg-[#0F4C81] hover:text-white rounded transition-colors"
                                        disabled={isEnded}
                                    >
                                        +{currencySymbol}{incDisplay.toLocaleString()}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                        <div className="flex justify-between">
                            <span>{t('estimatedShipping')}:</span>
                            <span className="font-bold text-gray-900">{currencySymbol}{estimatedShipping.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t('auctionFee')}:</span>
                            <span className="font-bold text-gray-900">{currencySymbol}{awaCommission.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-dashed">
                            <span className="font-bold">{t('estimatedTotal')}:</span>
                            <span className="font-bold text-lg text-gray-900">{currencySymbol}{estimatedTotal.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

