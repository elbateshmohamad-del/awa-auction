'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ShippingClient() {
    const t = useTranslations('shippingPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[21px] text-[#86868B]">{t('subtitle')}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[1000px]">

                    {/* Intro */}
                    <div className="text-center mb-16">
                        <p className="text-[21px] text-[#86868B] max-w-[800px] mx-auto mb-10">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">🚪</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('features.feature1.title')}</h3>
                            <p className="text-[#86868B]">{t('features.feature1.desc')}</p>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">📦</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('features.feature2.title')}</h3>
                            <p className="text-[#86868B]">{t('features.feature2.desc')}</p>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">📄</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('features.feature3.title')}</h3>
                            <p className="text-[#86868B]">{t('features.feature3.desc')}</p>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                            <div className="text-[40px] mb-4">🛡️</div>
                            <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('features.feature4.title')}</h3>
                            <p className="text-[#86868B]">{t('features.feature4.desc')}</p>
                        </div>
                    </div>

                    {/* Rates Table */}
                    <div className="bg-[#F5F5F7] rounded-[30px] p-10 mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-[32px] font-bold mb-2 text-[#1D1D1F]">{t('rates.title')}</h2>
                            <p className="text-[#86868B]">{t('rates.subtitle')}</p>
                        </div>

                        <div className="bg-white rounded-[20px] overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-[#1D1D1F] text-white">
                                    <tr>
                                        <th className="p-4 font-medium">{t('rates.region')}</th>
                                        <th className="p-4 font-medium">{t('rates.time')}</th>
                                        <th className="p-4 font-medium">{t('rates.cost')}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#1D1D1F]">
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold">{t('rates.asia')}</td>
                                        <td className="p-4 text-[#86868B]">{t('rates.asiaTime')}</td>
                                        <td className="p-4">$1,200 - $1,500</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold">{t('rates.middleEast')}</td>
                                        <td className="p-4 text-[#86868B]">{t('rates.middleEastTime')}</td>
                                        <td className="p-4">$1,800 - $2,200</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold">{t('rates.europe')}</td>
                                        <td className="p-4 text-[#86868B]">{t('rates.europeTime')}</td>
                                        <td className="p-4">$2,500 - $3,000</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold">{t('rates.africa')}</td>
                                        <td className="p-4 text-[#86868B]">{t('rates.africaTime')}</td>
                                        <td className="p-4">$2,800 - $3,500</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold">{t('rates.oceania')}</td>
                                        <td className="p-4 text-[#86868B]">{t('rates.oceaniaTime')}</td>
                                        <td className="p-4">$1,500 - $1,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-[#86868B] mt-4 text-center">{t('rates.disclaimer')}</p>
                    </div>

                    {/* Partners & CTA */}
                    <div className="text-center">
                        <h2 className="text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('partners.title')}</h2>
                        <p className="text-[#86868B] mb-12">{t('partners.desc')}</p>

                        <div className="flex justify-center gap-8 mb-16 opacity-50 grayscale">
                            <div className="text-[24px] font-bold">MAERSK</div>
                            <div className="text-[24px] font-bold">MSC</div>
                            <div className="text-[24px] font-bold">ONE</div>
                            <div className="text-[24px] font-bold">HAPAG-LLOYD</div>
                        </div>

                        <div className="bg-[#1D1D1F] text-white rounded-[20px] p-12">
                            <h3 className="text-[28px] font-bold mb-4">{t('cta.title')}</h3>
                            <p className="text-[19px] text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                            <Link href="/contact" className="bkb-btn-primary">
                                {t('cta.button')}
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
