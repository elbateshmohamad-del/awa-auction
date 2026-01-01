'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ServicesClient() {
    const t = useTranslations('servicesPage');

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
                    <p className="text-[17px] md:text-[19px] text-[#86868B] mt-8 max-w-[700px] mx-auto opacity-80">
                        {t('intro')}
                    </p>
                </div>
            </section>

            {/* 2. Services Grid Section */}
            <section className="min-h-screen flex items-center bg-white px-4 py-16">
                <div className="bkb-container w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">
                        {/* Service Item 1: Inspection */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">🔍</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('inspection.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('inspection.item1')}</li>
                                <li>{t('inspection.item2')}</li>
                                <li>{t('inspection.item3')}</li>
                                <li>{t('inspection.item4')}</li>
                            </ul>
                        </div>
                        {/* Service Item 2: Support */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">💬</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('support.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('support.item1')}</li>
                                <li>{t('support.item2')}</li>
                                <li>{t('support.item3')}</li>
                                <li>{t('support.item4')}</li>
                            </ul>
                        </div>
                        {/* Service Item 3: Documentation */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">📄</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('documentation.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('documentation.item1')}</li>
                                <li>{t('documentation.item2')}</li>
                                <li>{t('documentation.item3')}</li>
                                <li>{t('documentation.item4')}</li>
                            </ul>
                        </div>
                        {/* Service Item 4: Shipping */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">🚢</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('shipping.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('shipping.item1')}</li>
                                <li>{t('shipping.item2')}</li>
                                <li>{t('shipping.item3')}</li>
                                <li>{t('shipping.item4')}</li>
                            </ul>
                        </div>
                        {/* Service Item 5: Payment */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">💳</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('payment.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('payment.item1')}</li>
                                <li>{t('payment.item2')}</li>
                                <li>{t('payment.item3')}</li>
                                <li>{t('payment.item4')}</li>
                            </ul>
                        </div>
                        {/* Service Item 6: Protection */}
                        <div className="bg-[#F5F5F7] p-8 rounded-[24px] hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
                            <div className="text-[40px] mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('protection.title')}</h3>
                            <ul className="space-y-1.5 text-[#86868B] text-[15px]">
                                <li>{t('protection.item1')}</li>
                                <li>{t('protection.item2')}</li>
                                <li>{t('protection.item3')}</li>
                                <li>{t('protection.item4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VIP Section */}
            <section className="min-h-screen flex items-center bg-[#F5F5F7] text-[#1D1D1F] px-4">
                <div className="bkb-container w-full max-w-[1100px]">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-[48px] font-bold mb-6 text-[#1D1D1F]">
                                {t('vip.title')}
                            </h2>
                            <p className="text-[21px] text-[#86868B] mb-8 leading-relaxed">
                                {t('vip.subtitle')}
                            </p>
                            <div className="w-16 h-1 bg-[#007AFF] rounded-full"></div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('vip.priorityAccess.title')}</h4>
                                <p className="text-[#86868B] leading-relaxed">{t('vip.priorityAccess.desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('vip.reducedFees.title')}</h4>
                                <p className="text-[#86868B] leading-relaxed">{t('vip.reducedFees.desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('vip.dedicatedSupport.title')}</h4>
                                <p className="text-[#86868B] leading-relaxed">{t('vip.dedicatedSupport.desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('vip.extendedPayment.title')}</h4>
                                <p className="text-[#86868B] leading-relaxed">{t('vip.extendedPayment.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA Section */}
            <section className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="bkb-container text-center max-w-[800px]">
                    <h3 className="text-[48px] md:text-[64px] font-bold mb-6 text-[#1D1D1F]">
                        {t('cta.title')}
                    </h3>
                    <p className="text-[24px] text-[#86868B] mb-12">
                        {t('cta.subtitle')}
                    </p>
                    <Link href="/register" className="inline-flex items-center justify-center bg-[#007AFF] text-white px-12 py-6 rounded-full text-[22px] font-medium hover:bg-[#0062cc] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
