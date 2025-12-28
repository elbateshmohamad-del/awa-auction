'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ServicesClient() {
    const t = useTranslations('servicesPage');

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
                <div className="bkb-container">
                    <p className="text-[21px] text-[#86868B] text-center mb-16 max-w-[800px] mx-auto">
                        {t('intro')}
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">🔍</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('inspection.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('inspection.item1')}</li>
                                <li>{t('inspection.item2')}</li>
                                <li>{t('inspection.item3')}</li>
                                <li>{t('inspection.item4')}</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">💬</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('support.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('support.item1')}</li>
                                <li>{t('support.item2')}</li>
                                <li>{t('support.item3')}</li>
                                <li>{t('support.item4')}</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">📄</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('documentation.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('documentation.item1')}</li>
                                <li>{t('documentation.item2')}</li>
                                <li>{t('documentation.item3')}</li>
                                <li>{t('documentation.item4')}</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">🚢</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('shipping.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('shipping.item1')}</li>
                                <li>{t('shipping.item2')}</li>
                                <li>{t('shipping.item3')}</li>
                                <li>{t('shipping.item4')}</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">💳</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('payment.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('payment.item1')}</li>
                                <li>{t('payment.item2')}</li>
                                <li>{t('payment.item3')}</li>
                                <li>{t('payment.item4')}</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">🛡️</div>
                            <h3 className="text-[22px] font-bold mb-4 text-[#1D1D1F]">{t('protection.title')}</h3>
                            <ul className="space-y-2 text-[#86868B]">
                                <li>{t('protection.item1')}</li>
                                <li>{t('protection.item2')}</li>
                                <li>{t('protection.item3')}</li>
                                <li>{t('protection.item4')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* VIP Section */}
                    <div className="bg-gradient-to-br from-[#1D1D1F] to-[#333] text-white p-16 rounded-[30px] mb-16">
                        <h2 className="text-[32px] font-bold text-center mb-4">{t('vip.title')}</h2>
                        <p className="text-center text-[#aaa] mb-10">{t('vip.subtitle')}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 p-6 rounded-[15px]">
                                <h4 className="font-bold mb-2">{t('vip.priorityAccess.title')}</h4>
                                <p className="text-[#aaa]">{t('vip.priorityAccess.desc')}</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-[15px]">
                                <h4 className="font-bold mb-2">{t('vip.reducedFees.title')}</h4>
                                <p className="text-[#aaa]">{t('vip.reducedFees.desc')}</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-[15px]">
                                <h4 className="font-bold mb-2">{t('vip.dedicatedSupport.title')}</h4>
                                <p className="text-[#aaa]">{t('vip.dedicatedSupport.desc')}</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-[15px]">
                                <h4 className="font-bold mb-2">{t('vip.extendedPayment.title')}</h4>
                                <p className="text-[#aaa]">{t('vip.extendedPayment.desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-[#F5F5F7] p-16 rounded-[30px] text-center">
                        <h3 className="text-[32px] font-bold mb-4 text-[#1D1D1F]">{t('cta.title')}</h3>
                        <p className="text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                        <Link href="/register" className="bkb-btn-primary">{t('cta.button')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
