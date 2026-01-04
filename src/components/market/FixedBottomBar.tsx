"use client";

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

interface FixedBottomBarProps {
    currentPrice: number;
    currencySymbol: string;
    onOpenBidding: () => void;
    isEnded: boolean;
}

export function FixedBottomBar({
    currentPrice,
    currencySymbol,
    onOpenBidding,
    isEnded
}: FixedBottomBarProps) {
    const t = useTranslations('bidding');

    if (isEnded) return null;

    // Use safe bottom padding for iPhone home bar area
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 pb-[env(safe-area-inset-bottom)]">
            <div className="flex items-center justify-between px-4 py-3 gap-4">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-bold">{t('currentPrice')}</span>
                    <span className="text-xl font-black text-[#0F4C81] leading-tight">
                        {currencySymbol}{currentPrice.toLocaleString()}
                    </span>
                </div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={onOpenBidding}
                    className="flex-1 font-bold text-lg shadow-lg shadow-blue-500/30 py-6"
                >
                    {t('bidNow')}
                </Button>
            </div>
        </div>
    );
}
