"use client";

import { useTranslations } from 'next-intl';

export default function DeliveryTimesPage() {
    const t = useTranslations('guide.delivery');
    const regions = ['asia', 'oceania', 'na', 'europe', 'africa'] as const;

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B] mb-12">
                        {t('subtitle')}
                    </p>
                    <div className="bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl p-6 max-w-2xl mx-auto">
                        <p className="text-[#92400E] text-lg">
                            ⚠️ {t('note')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Delivery Regions Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('regionTitle')}</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {regions.map((region) => (
                            <div key={region} className="w-full md:w-[45%] lg:w-[30%] bg-[#F5F5F7] rounded-3xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">{t(`regions.${region}.name`)}</h3>
                                <div className="text-[#007AFF] font-bold text-3xl">
                                    {t(`regions.${region}.time`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
