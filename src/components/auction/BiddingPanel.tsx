"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

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
    isFirstBid = false
}: BiddingPanelProps) {
    // Initialize bid amount to next valid bid when currentPrice changes
    const nextMinBid = currentPrice + minIncrement;
    const [bidAmount, setBidAmount] = useState<number>(nextMinBid);

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
        let message = `${currencySymbol}${displayAmount.toLocaleString()} (¥${jpyAmount.toLocaleString()}) で入札しますか？`;

        if (isFirstBid) {
            message = `【重要】初回入札の確認\n\n` +
                `選択した通貨: ${currencySymbol} ${currencyCode}\n` +
                `入札後は通貨を変更できません。\n\n` +
                `${currencySymbol}${displayAmount.toLocaleString()} (¥${jpyAmount.toLocaleString()}) で入札しますか？`;
        }

        return message;
    };

    const handleBid = () => {
        if (bidAmount < nextMinBid) {
            alert(`入札金額が低すぎます。最低 ${currencySymbol}${toDisplayCurrency(nextMinBid).toLocaleString()} 必要です。`);
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

    return (
        <Card className={`border shadow-sm transition-all duration-300 ${isWinning ? 'border-green-400 bg-green-50/30' : 'border-gray-200'}`}>
            <CardContent className="p-6">

                {/* Status Indicator */}
                {isWinning && (
                    <div className="mb-4 bg-green-100 text-green-800 px-3 py-2 rounded-md font-bold text-center animate-in slide-in-from-top-2">
                        🎉 あなたが現在トップです
                    </div>
                )}
                {!isWinning && bidCount > 0 && (
                    <div className="mb-4 bg-gray-100 text-gray-600 px-3 py-2 rounded-md font-bold text-center">
                        現在 {bidCount} 件の入札
                    </div>
                )}

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">現在の価格</p>
                        <p key={currentPrice} className="text-4xl font-black text-[#0F4C81] animate-in fade-in zoom-in-95 duration-300">
                            {currencySymbol}{displayCurrentPrice.toLocaleString()}
                        </p>
                        {currencyCode !== 'JPY' && (
                            <p className="text-xs text-gray-400">≈ ¥{currentPrice.toLocaleString()}</p>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500 font-medium">入札件数</p>
                        <p className="text-xl font-bold text-gray-900">{bidCount}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg flex items-center justify-center font-bold">
                        ⏱ 残り時間: {endsIn}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            入札価格を入力
                            <span className="text-xs font-normal text-gray-500 ml-2">(最低: {currencySymbol}{displayNextMinBid.toLocaleString()})</span>
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
                                />
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="flex-1 shadow-lg shadow-blue-500/30 font-bold"
                                onClick={handleBid}
                            >
                                BID NOW
                            </Button>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-2">クイック入札</p>
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
                                    >
                                        +{currencySymbol}{incDisplay.toLocaleString()}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                        <div className="flex justify-between">
                            <span>予想送料:</span>
                            <span className="font-bold text-gray-900">{currencySymbol}{toDisplayCurrency(120000).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>オークション手数料 (5%):</span>
                            <span className="font-bold text-gray-900">{currencySymbol}{toDisplayCurrency(currentPrice * 0.05).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-dashed">
                            <span className="font-bold">総額目安:</span>
                            <span className="font-bold text-lg text-gray-900">{currencySymbol}{toDisplayCurrency(currentPrice * 1.05 + 120000).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

