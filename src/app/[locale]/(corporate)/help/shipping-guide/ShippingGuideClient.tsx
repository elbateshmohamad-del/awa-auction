"use client";

import { useTranslations } from 'next-intl';

export default function ShippingGuideClient() {
    const t = useTranslations('shipping');
    const tServices = useTranslations('services.shipping');
    const methods = ['roro', 'container', 'air'] as const;
    const regions = ['asia', 'oceania', 'na', 'europe', 'africa'] as const;

    const methodIcons: Record<string, string> = {
        'roro': '🚢',
        'container': '📦',
        'air': '✈️',
    };

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B]">
                        {tServices('description')}
                    </p>
                </div>
            </section>

            {/* Shipping Methods Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('methods.title')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {methods.map((method) => (
                            <div key={method} className="bg-[#F5F5F7] rounded-3xl p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                                <div className="text-6xl mb-6">{methodIcons[method]}</div>
                                <h3 className="text-2xl font-bold mb-4">{t(`methods.${method}.title`)}</h3>
                                <p className="text-[#86868B] text-lg mb-6">{t(`methods.${method}.desc`)}</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[#1D1D1F]">
                                        <span className="text-green-500">✓</span>
                                        {t(`methods.${method}.benefits.0`)}
                                    </li>
                                    <li className="flex items-center gap-3 text-[#1D1D1F]">
                                        <span className="text-green-500">✓</span>
                                        {t(`methods.${method}.benefits.1`)}
                                    </li>
                                    <li className="flex items-center gap-3 text-[#1D1D1F]">
                                        <span className="text-green-500">✓</span>
                                        {t(`methods.${method}.benefits.2`)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Rates Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('rates.title')}</h2>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <table className="w-full text-lg">
                            <thead>
                                <tr className="bg-[#007AFF] text-white">
                                    <th className="text-left p-6 font-bold">{t('rates.headers.region')}</th>
                                    <th className="text-left p-6 font-bold">{t('rates.headers.port')}</th>
                                    <th className="text-center p-6 font-bold">{t('rates.headers.time')}</th>
                                    <th className="text-center p-6 font-bold">{t('rates.headers.cost')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {regions.map((region, idx) => (
                                    <tr key={region} className={`border-b border-[#E5E5E5] ${idx % 2 === 1 ? 'bg-[#F9F9F9]' : ''}`}>
                                        <td className="p-6 font-bold text-[#1D1D1F]">{t(`rates.rows.${region}.region`)}</td>
                                        <td className="p-6 text-[#86868B]">{t(`rates.rows.${region}.port`)}</td>
                                        <td className="text-center p-6 text-[#1D1D1F]">{t(`rates.rows.${region}.time`)}</td>
                                        <td className="text-center p-6 font-bold text-[#007AFF]">{t(`rates.rows.${region}.cost`)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-[#86868B] mt-6 text-center">{t('rates.disclaimer')}</p>
                </div>
            </section>
        </div>
    );
}
