'use client';

import { useTranslations } from 'next-intl';

export default function CookiesClient() {
    const t = useTranslations('cookiesPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[17px] text-[#86868B]">{t('lastUpdated')}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[800px]">

                    {/* Intro */}
                    <div className="mb-16">
                        <p className="text-[19px] text-[#1D1D1F] leading-relaxed">
                            {t('intro')}
                        </p>
                    </div>

                    {/* What Are Cookies */}
                    <div className="mb-16">
                        <h2 className="text-[32px] font-bold mb-6 text-[#1D1D1F]">{t('whatAreCookies.title')}</h2>
                        <p className="text-[#86868B] text-[17px] leading-relaxed">{t('whatAreCookies.desc')}</p>
                    </div>

                    {/* How We Use */}
                    <div className="mb-16">
                        <h2 className="text-[32px] font-bold mb-8 text-[#1D1D1F]">{t('howWeUse.title')}</h2>

                        <div className="space-y-8">
                            <div className="bg-[#F5F5F7] rounded-[20px] p-8">
                                <h3 className="text-[20px] font-bold mb-2 text-[#1D1D1F]">{t('howWeUse.essential.title')}</h3>
                                <p className="text-[#86868B]">{t('howWeUse.essential.desc')}</p>
                            </div>
                            <div className="bg-[#F5F5F7] rounded-[20px] p-8">
                                <h3 className="text-[20px] font-bold mb-2 text-[#1D1D1F]">{t('howWeUse.analytics.title')}</h3>
                                <p className="text-[#86868B]">{t('howWeUse.analytics.desc')}</p>
                            </div>
                            <div className="bg-[#F5F5F7] rounded-[20px] p-8">
                                <h3 className="text-[20px] font-bold mb-2 text-[#1D1D1F]">{t('howWeUse.marketing.title')}</h3>
                                <p className="text-[#86868B]">{t('howWeUse.marketing.desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Managing Cookies */}
                    <div className="mb-16">
                        <h2 className="text-[32px] font-bold mb-6 text-[#1D1D1F]">{t('manage.title')}</h2>
                        <p className="text-[#86868B] text-[17px] leading-relaxed">{t('manage.desc')}</p>
                    </div>

                </div>
            </section>
        </div>
    );
}
