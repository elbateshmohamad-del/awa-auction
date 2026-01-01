'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function AboutClient() {
    const t = useTranslations('aboutPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* 1. Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center px-4 relative overflow-hidden">
                <div className="bkb-container relative z-10">
                    <h1 className="text-[56px] md:text-[72px] font-bold tracking-[-2px] mb-6 text-[#1D1D1F]">
                        {t('title')}
                    </h1>
                    <p className="text-[21px] md:text-[28px] text-[#86868B] max-w-[800px] mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            </section>

            {/* 2. Story & Mission Section */}
            <section className="min-h-screen flex items-center bg-white px-4">
                <div className="bkb-container w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Story */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-[32px] md:text-[48px] font-bold mb-8 text-[#1D1D1F] border-l-4 border-[#007AFF] pl-6">
                                {t('story.title')}
                            </h2>
                            <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#86868B] mb-6">
                                {t('story.text1')}
                            </p>
                            <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#86868B]">
                                {t('story.text2')}
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#F5F5F7] p-10 md:p-16 rounded-[40px]">
                            <h2 className="text-[32px] font-bold mb-6 text-[#1D1D1F]">
                                {t('mission.title')}
                            </h2>
                            <p className="text-[19px] leading-[1.8] text-[#86868B]">
                                {t('mission.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Values Section */}
            <section className="min-h-screen flex items-center bg-[#F5F5F7] px-4">
                <div className="bkb-container w-full">
                    <h2 className="text-[40px] md:text-[56px] font-bold mb-12 text-center text-[#1D1D1F]">
                        {t('values.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-[48px] mb-4">🔍</div>
                            <h3 className="text-[24px] font-bold mb-2 text-[#1D1D1F]">{t('values.transparency.title')}</h3>
                            <p className="text-[17px] text-[#86868B] leading-relaxed">{t('values.transparency.desc')}</p>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-[48px] mb-4">⭐</div>
                            <h3 className="text-[24px] font-bold mb-2 text-[#1D1D1F]">{t('values.quality.title')}</h3>
                            <p className="text-[17px] text-[#86868B] leading-relaxed">{t('values.quality.desc')}</p>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-[48px] mb-4">🤝</div>
                            <h3 className="text-[24px] font-bold mb-2 text-[#1D1D1F]">{t('values.trust.title')}</h3>
                            <p className="text-[17px] text-[#86868B] leading-relaxed">{t('values.trust.desc')}</p>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-[48px] mb-4">🌍</div>
                            <h3 className="text-[24px] font-bold mb-2 text-[#1D1D1F]">{t('values.globalReach.title')}</h3>
                            <p className="text-[17px] text-[#86868B] leading-relaxed">{t('values.globalReach.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Stats Section */}
            <section className="min-h-screen flex items-center bg-white text-[#1D1D1F] px-4">
                <div className="bkb-container w-full">
                    <h2 className="text-[40px] md:text-[56px] font-bold mb-16 text-center">
                        {t('stats.title')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-[48px] md:text-[64px] font-bold text-[#007AFF] mb-2 leading-none">5k+</div>
                            <div className="text-[16px] text-[#86868B] font-medium tracking-wide uppercase">{t('stats.bikesDelivered')}</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[48px] md:text-[64px] font-bold text-[#007AFF] mb-2 leading-none">120+</div>
                            <div className="text-[16px] text-[#86868B] font-medium tracking-wide uppercase">{t('stats.countriesServed')}</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[48px] md:text-[64px] font-bold text-[#007AFF] mb-2 leading-none">98%</div>
                            <div className="text-[16px] text-[#86868B] font-medium tracking-wide uppercase">{t('stats.satisfactionRate')}</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[48px] md:text-[64px] font-bold text-[#007AFF] mb-2 leading-none">24/7</div>
                            <div className="text-[16px] text-[#86868B] font-medium tracking-wide uppercase">{t('stats.supportAvailable')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Why Choose & CTA */}
            <section className="min-h-screen flex items-center bg-[#F5F5F7] px-4">
                <div className="bkb-container w-full max-w-[1000px]">
                    <div className="text-center mb-16">
                        <h2 className="text-[40px] font-bold mb-8 text-[#1D1D1F]">{t('whyChoose.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-[800px] mx-auto mb-16">
                            <div className="flex items-start">
                                <span className="text-[#007AFF] mr-3">✓</span>
                                <span className="text-[17px] text-[#86868B]"><strong className="text-[#1D1D1F] block mb-1">{t('whyChoose.directAccess')}</strong> {t('whyChoose.directAccessDesc')}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#007AFF] mr-3">✓</span>
                                <span className="text-[17px] text-[#86868B]"><strong className="text-[#1D1D1F] block mb-1">{t('whyChoose.expertInspection')}</strong> {t('whyChoose.expertInspectionDesc')}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#007AFF] mr-3">✓</span>
                                <span className="text-[17px] text-[#86868B]"><strong className="text-[#1D1D1F] block mb-1">{t('whyChoose.endToEnd')}</strong> {t('whyChoose.endToEndDesc')}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#007AFF] mr-3">✓</span>
                                <span className="text-[17px] text-[#86868B]"><strong className="text-[#1D1D1F] block mb-1">{t('whyChoose.globalNetwork')}</strong> {t('whyChoose.globalNetworkDesc')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-[#1D1D1F] border border-[#D2D2D7] rounded-[40px] p-16 text-center shadow-lg">
                        <h3 className="text-[32px] md:text-[40px] font-bold mb-6">{t('cta.title')}</h3>
                        <p className="text-[20px] text-[#86868B] mb-10 max-w-[600px] mx-auto">{t('cta.subtitle')}</p>
                        <Link href="/register" className="inline-flex items-center justify-center bg-[#007AFF] text-white px-10 py-5 rounded-full text-[19px] font-medium hover:bg-[#0062cc] transition-colors">
                            {t('cta.button')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
