'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function AboutClient() {
    const t = useTranslations('aboutPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[21px] text-[#86868B]">{t('subtitle')}</p>
                </div>
            </section>

            {/* Page Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[900px]">
                    {/* Story Card */}
                    <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-10 mb-10">
                        <h2 className="text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('story.title')}</h2>
                        <p className="text-[19px] leading-[1.8] text-[#86868B] mb-6">
                            {t('story.text1')}
                        </p>
                        <p className="text-[19px] leading-[1.8] text-[#86868B]">
                            {t('story.text2')}
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-10 mb-10">
                        <h2 className="text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('mission.title')}</h2>
                        <p className="text-[19px] leading-[1.8] text-[#86868B]">
                            {t('mission.text')}
                        </p>
                    </div>

                    {/* Values Card */}
                    <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-10 mb-10">
                        <h2 className="text-[24px] font-bold mb-8 text-[#1D1D1F]">{t('values.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border-l-[3px] border-[#007AFF] pl-6">
                                <div className="text-[32px] mb-2">🔍</div>
                                <h3 className="text-[19px] font-bold mb-1 text-[#1D1D1F]">{t('values.transparency.title')}</h3>
                                <p className="text-[15px] text-[#86868B]">{t('values.transparency.desc')}</p>
                            </div>
                            <div className="border-l-[3px] border-[#007AFF] pl-6">
                                <div className="text-[32px] mb-2">⭐</div>
                                <h3 className="text-[19px] font-bold mb-1 text-[#1D1D1F]">{t('values.quality.title')}</h3>
                                <p className="text-[15px] text-[#86868B]">{t('values.quality.desc')}</p>
                            </div>
                            <div className="border-l-[3px] border-[#007AFF] pl-6">
                                <div className="text-[32px] mb-2">🤝</div>
                                <h3 className="text-[19px] font-bold mb-1 text-[#1D1D1F]">{t('values.trust.title')}</h3>
                                <p className="text-[15px] text-[#86868B]">{t('values.trust.desc')}</p>
                            </div>
                            <div className="border-l-[3px] border-[#007AFF] pl-6">
                                <div className="text-[32px] mb-2">🌍</div>
                                <h3 className="text-[19px] font-bold mb-1 text-[#1D1D1F]">{t('values.globalReach.title')}</h3>
                                <p className="text-[15px] text-[#86868B]">{t('values.globalReach.desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-10 mb-10">
                        <h2 className="text-[24px] font-bold mb-8 text-[#1D1D1F]">{t('stats.title')}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-[32px] font-bold text-[#007AFF] mb-1">5,000+</div>
                                <div className="text-[14px] text-[#86868B]">{t('stats.bikesDelivered')}</div>
                            </div>
                            <div>
                                <div className="text-[32px] font-bold text-[#007AFF] mb-1">120+</div>
                                <div className="text-[14px] text-[#86868B]">{t('stats.countriesServed')}</div>
                            </div>
                            <div>
                                <div className="text-[32px] font-bold text-[#007AFF] mb-1">98%</div>
                                <div className="text-[14px] text-[#86868B]">{t('stats.satisfactionRate')}</div>
                            </div>
                            <div>
                                <div className="text-[32px] font-bold text-[#007AFF] mb-1">24/7</div>
                                <div className="text-[14px] text-[#86868B]">{t('stats.supportAvailable')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose AWA Card */}
                    <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-10 mb-10">
                        <h2 className="text-[24px] font-bold mb-6 text-[#1D1D1F]">{t('whyChoose.title')}</h2>
                        <ul className="space-y-4 text-[17px] text-[#86868B] leading-[1.7]">
                            <li><strong className="text-[#1D1D1F]">{t('whyChoose.directAccess')}</strong> {t('whyChoose.directAccessDesc')}</li>
                            <li><strong className="text-[#1D1D1F]">{t('whyChoose.expertInspection')}</strong> {t('whyChoose.expertInspectionDesc')}</li>
                            <li><strong className="text-[#1D1D1F]">{t('whyChoose.endToEnd')}</strong> {t('whyChoose.endToEndDesc')}</li>
                            <li><strong className="text-[#1D1D1F]">{t('whyChoose.globalNetwork')}</strong> {t('whyChoose.globalNetworkDesc')}</li>
                            <li><strong className="text-[#1D1D1F]">{t('whyChoose.multilingualSupport')}</strong> {t('whyChoose.multilingualSupportDesc')}</li>
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-[#1D1D1F] text-white rounded-[20px] p-12 text-center">
                        <h3 className="text-[28px] font-bold mb-4">{t('cta.title')}</h3>
                        <p className="text-[19px] text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                        <Link href="/register" className="bkb-btn-primary">
                            {t('cta.button')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
