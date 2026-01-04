"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

interface BiddingSheetProps {
    isOpen: boolean;
    onClose: () => void;
    currentPrice: number;
    minIncrement: number;
    endsIn: string;
    onBid: (amount: number) => void;
    currencySymbol: string;
    exchangeRate: number;
    currencyCode: string;
    isEnded: boolean;
}

export function BiddingSheet({
    isOpen,
    onClose,
    currentPrice,
    minIncrement,
    endsIn,
    onBid,
    currencySymbol,
    exchangeRate,
    currencyCode,
    isEnded
}: BiddingSheetProps) {
    const t = useTranslations('bidding');
    // Initialize with next minimum bid
    const nextMinBid = currentPrice + minIncrement;

    // Helper to convert JPY to selected currency
    const toDisplay = (jpy: number) => {
        if (currencyCode === 'JPY') return jpy;
        return Math.ceil(jpy / exchangeRate);
    };

    const displayCurrentPrice = toDisplay(currentPrice);
    const displayNextMinBid = toDisplay(nextMinBid);

    const [bidInput, setBidInput] = useState<string>('');
    const [view, setView] = useState<'input' | 'confirm'>('input');
    const [inputError, setInputError] = useState<string | null>(null);

    // Reset input when sheet opens
    useEffect(() => {
        if (isOpen) {
            setBidInput(displayNextMinBid.toString());
            setView('input');
            setInputError(null);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen, nextMinBid, exchangeRate, currencyCode]); // re-calc default if price changes

    const handleKeyPad = (key: string) => {
        if (key === 'C') {
            setBidInput('');
            return;
        }
        if (key === 'BS') {
            setBidInput(prev => prev.slice(0, -1));
            return;
        }

        // Prevent leading zeros
        if (bidInput === '' && key === '0') return;

        // Max length check
        if (bidInput.length >= 10) return;

        setBidInput(prev => prev + key);
    };

    // Helper to convert input (Display Currency) -> JPY
    const toJpy = (displayVal: number) => {
        if (currencyCode === 'JPY') return displayVal;
        return Math.floor(displayVal * exchangeRate);
    };

    const handleReview = () => {
        if (!bidInput) return;

        const numericInput = parseInt(bidInput, 10);
        const bidInJpy = toJpy(numericInput);

        if (bidInJpy < nextMinBid) {
            setInputError(`${t('minimum')} ${currencySymbol}${displayNextMinBid.toLocaleString()}`);
            return;
        }

        setInputError(null);
        setView('confirm');
    };

    const handleConfirmBid = () => {
        if (!bidInput) return;
        const numericInput = parseInt(bidInput, 10);
        const bidInJpy = toJpy(numericInput);

        onBid(bidInJpy);
        onClose();
    };

    if (!isOpen) return null;

    const displayInput = bidInput ? parseInt(bidInput, 10).toLocaleString() : '';

    // Fee Calculations for Confirmation
    const currentInputVal = parseInt(bidInput || '0', 10);
    const estimatedShipping = currencyCode === 'JPY' ? 120000 : Math.ceil(120000 / exchangeRate); // Basic fallback
    const awaCommission = currencyCode === 'JPY' ? 50000 : Math.ceil(50000 / exchangeRate); // Basic fallback
    const estimatedTotal = currentInputVal + estimatedShipping + awaCommission;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Sheet */}
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl flex flex-col animate-in slide-in-from-bottom duration-300 pb-[env(safe-area-inset-bottom)] max-h-[90vh]">
                {/* Handle */}
                <div className="flex justify-center pt-3 pb-2" onClick={onClose}>
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 flex-1 overflow-auto">
                    {/* Header Info */}
                    <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
                        <div>
                            <p className="text-xs text-gray-500 font-bold mb-1">{t('currentPrice')}</p>
                            <p className="text-2xl font-black text-[#0F4C81]">
                                {currencySymbol}{displayCurrentPrice.toLocaleString()}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 font-bold mb-1">{t('timeRemaining')}</p>
                            <p className="text-sm font-bold bg-gray-100 px-2 py-1 rounded text-gray-700">
                                {isEnded ? t('ended') : endsIn}
                            </p>
                        </div>
                    </div>

                    {view === 'input' ? (
                        <>
                            {/* Input Display Area */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-center border-2 border-blue-50 transition-colors focus-within:border-blue-500 focus-within:bg-white shadow-inner">
                                <p className="text-xs text-gray-400 mb-1">{t('enterBidAmount')}</p>
                                <div className="text-4xl font-black text-gray-900 min-h-[3rem] tracking-tight">
                                    {currencySymbol}{displayInput || <span className="text-gray-300">0</span>}
                                </div>
                                {inputError ? (
                                    <p className="text-red-500 text-xs font-bold mt-2 animate-bounce">{inputError}</p>
                                ) : (
                                    <p className="text-xs text-gray-400 mt-2">
                                        {t('minimum')}: {currencySymbol}{displayNextMinBid.toLocaleString()}
                                    </p>
                                )}
                            </div>

                            {/* Numeric Keypad */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => handleKeyPad(num.toString())}
                                        className="h-14 rounded-lg bg-white border border-gray-200 shadow-sm text-2xl font-bold text-gray-700 active:bg-gray-100 active:scale-95 transition-all touch-manipulation"
                                    >
                                        {num}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleKeyPad('C')}
                                    className="h-14 rounded-lg bg-red-50 border border-red-100 text-red-600 font-bold active:bg-red-100 active:scale-95 transition-all"
                                >
                                    C
                                </button>
                                <button
                                    onClick={() => handleKeyPad('0')}
                                    className="h-14 rounded-lg bg-white border border-gray-200 shadow-sm text-2xl font-bold text-gray-700 active:bg-gray-100 active:scale-95 transition-all"
                                >
                                    0
                                </button>
                                <button
                                    onClick={() => handleKeyPad('BS')}
                                    className="h-14 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 font-bold active:bg-gray-100 active:scale-95 transition-all flex items-center justify-center"
                                >
                                    ⌫
                                </button>
                            </div>

                            {/* Review Button */}
                            <Button
                                onClick={handleReview}
                                disabled={isEnded || !bidInput || parseInt(bidInput) <= 0}
                                className="w-full h-14 text-lg font-bold shadow-xl shadow-blue-500/20"
                                size="lg"
                            >
                                {t('next')}
                            </Button>
                        </>
                    ) : (
                        <div className="animate-in slide-in-from-right duration-300">
                            <div className="bg-gray-50 p-6 rounded-2xl mb-6 space-y-4">
                                <h3 className="text-center font-bold text-gray-900 border-b border-gray-200 pb-2">{t('confirmBidTitle')}</h3>

                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">{t('bidAmount')}</span>
                                    <span className="font-bold text-gray-900 text-lg">{currencySymbol}{currentInputVal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">{t('estimatedShipping')}</span>
                                    <span className="font-medium text-gray-700">{currencySymbol}{estimatedShipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">{t('auctionFee')}</span>
                                    <span className="font-medium text-gray-700">{currencySymbol}{awaCommission.toLocaleString()}</span>
                                </div>

                                <div className="border-t border-dashed border-gray-300 pt-3 flex justify-between items-center">
                                    <span className="font-bold text-gray-900">{t('estimatedTotal')}</span>
                                    <span className="font-black text-xl text-[#0F4C81]">{currencySymbol}{estimatedTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl mb-6">
                                <p className="text-xs text-blue-800 leading-relaxed">
                                    {t('bidDisclaimer')}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    onClick={() => setView('input')}
                                    variant="outline"
                                    className="flex-1 h-14 font-bold border-gray-300"
                                    size="lg"
                                >
                                    {t('back')}
                                </Button>
                                <Button
                                    onClick={handleConfirmBid}
                                    className="flex-[2] h-14 font-bold text-lg shadow-xl shadow-blue-500/20"
                                    size="lg"
                                >
                                    {t('confirm')}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
