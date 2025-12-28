"use client";

import { Badge } from "@/components/ui/Badge";
import { useTranslations } from 'next-intl';

export default function AuctionTypesPage() {
    const t = useTranslations('guide.howToBid.types');

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B]">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Live Auction Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <img src="/live-auction.png" alt="Live Auction" className="w-full rounded-2xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <Badge className="mb-6 text-lg px-5 py-2">{t('live.badge')}</Badge>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6">{t('live.title')}</h2>
                            <p className="text-[#86868B] text-xl leading-relaxed">
                                {t('live.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proxy Auction Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="md:w-1/2">
                            <img src="/proxy-auction.png" alt="Proxy Auction" className="w-full rounded-2xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <Badge variant="secondary" className="mb-6 text-lg px-5 py-2">{t('proxy.badge')}</Badge>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6">{t('proxy.title')}</h2>
                            <p className="text-[#86868B] text-xl leading-relaxed">
                                {t('proxy.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
