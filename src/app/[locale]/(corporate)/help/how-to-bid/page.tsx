"use client";

import { Badge } from "@/components/ui/Badge";
import { useTranslations } from 'next-intl';

export default function HowToBidPage() {
    const t = useTranslations('guide.howToBid');

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

            {/* Bid Types Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('types.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white border border-[#D2D2D7] rounded-3xl p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                            <Badge className="mb-4 text-lg px-4 py-2">{t('types.live.badge')}</Badge>
                            <h3 className="text-2xl font-bold mb-4">{t('types.live.title')}</h3>
                            <p className="text-[#86868B] text-lg leading-relaxed">{t('types.live.description')}</p>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-3xl p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">{t('types.proxy.badge')}</Badge>
                            <h3 className="text-2xl font-bold mb-4">{t('types.proxy.title')}</h3>
                            <p className="text-[#86868B] text-lg leading-relaxed">{t('types.proxy.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('rules.title')}</h2>
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{t('rules.increments.label')}</h3>
                            <p className="text-[#86868B] text-lg">{t('rules.increments.text')}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{t('rules.sniper.label')}</h3>
                            <p className="text-[#86868B] text-lg">{t('rules.sniper.text')}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{t('rules.binding.label')}</h3>
                            <p className="text-[#86868B] text-lg">{t('rules.binding.text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('tips.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-4">🔍</div>
                            <p className="text-[#1D1D1F] text-lg font-medium">{t('tips.items.research')}</p>
                        </div>
                        <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-4">💰</div>
                            <p className="text-[#1D1D1F] text-lg font-medium">{t('tips.items.budget')}</p>
                        </div>
                        <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-4">⭐</div>
                            <p className="text-[#1D1D1F] text-lg font-medium">{t('tips.items.watchlist')}</p>
                        </div>
                        <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-4">📋</div>
                            <p className="text-[#1D1D1F] text-lg font-medium">{t('tips.items.inspection')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
