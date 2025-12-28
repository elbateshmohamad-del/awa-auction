'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FinancingClient() {
    const t = useTranslations('financingPage');
    const [amount, setAmount] = useState(10000);
    const [duration, setDuration] = useState(12);
    const [rate, setRate] = useState(5);
    const [result, setResult] = useState<number | null>(null);

    const calculateLoan = () => {
        const r = rate / 100 / 12;
        const n = duration;
        const p = amount;
        const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setResult(monthly);
    };

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

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8 hover:shadow-lg transition-shadow">
                            <div className="text-[40px] mb-4">📅</div>
                            <h3 className="text-[22px] font-bold mb-3 text-[#1D1D1F]">{t('options.plan1.title')}</h3>
                            <p className="text-[#86868B] mb-4 min-h-[60px]">{t('options.plan1.desc')}</p>
                            <span className="inline-block bg-[#F5F5F7] text-[#1D1D1F] px-4 py-1 rounded-full text-sm font-medium">{t('options.plan1.duration')}</span>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8 hover:shadow-lg transition-shadow">
                            <div className="text-[40px] mb-4">🔄</div>
                            <h3 className="text-[22px] font-bold mb-3 text-[#1D1D1F]">{t('options.plan2.title')}</h3>
                            <p className="text-[#86868B] mb-4 min-h-[60px]">{t('options.plan2.desc')}</p>
                            <span className="inline-block bg-[#F5F5F7] text-[#1D1D1F] px-4 py-1 rounded-full text-sm font-medium">{t('options.plan2.limit')}</span>
                        </div>
                        <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8 hover:shadow-lg transition-shadow">
                            <div className="text-[40px] mb-4">🏦</div>
                            <h3 className="text-[22px] font-bold mb-3 text-[#1D1D1F]">{t('options.plan3.title')}</h3>
                            <p className="text-[#86868B] mb-4 min-h-[60px]">{t('options.plan3.desc')}</p>
                        </div>
                    </div>

                    {/* Calculator */}
                    <div className="bg-[#F5F5F7] rounded-[30px] p-10 mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-[32px] font-bold mb-2 text-[#1D1D1F]">{t('calculator.title')}</h2>
                            <p className="text-[#86868B]">{t('calculator.subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#86868B] mb-2">{t('calculator.amount')} ($)</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full p-4 rounded-xl border border-[#D2D2D7] text-[18px] focus:outline-none focus:border-[#007AFF]"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#86868B] mb-2">{t('calculator.duration')}</label>
                                        <input
                                            type="number"
                                            value={duration}
                                            onChange={(e) => setDuration(Number(e.target.value))}
                                            className="w-full p-4 rounded-xl border border-[#D2D2D7] text-[18px] focus:outline-none focus:border-[#007AFF]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#86868B] mb-2">{t('calculator.rate')}</label>
                                        <input
                                            type="number"
                                            value={rate}
                                            onChange={(e) => setRate(Number(e.target.value))}
                                            className="w-full p-4 rounded-xl border border-[#D2D2D7] text-[18px] focus:outline-none focus:border-[#007AFF]"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={calculateLoan}
                                    className="w-full bg-[#007AFF] text-white font-bold py-4 rounded-xl hover:bg-[#0071E3] transition-colors"
                                >
                                    {t('calculator.calculate')}
                                </button>
                            </div>

                            <div className="bg-white rounded-[20px] p-8 text-center h-full flex flex-col justify-center items-center">
                                <p className="text-[#86868B] mb-2">{t('calculator.result')}</p>
                                <div className="text-[48px] font-bold text-[#1D1D1F]">
                                    {result ? `$${result.toFixed(2)}` : '---'}
                                </div>
                                <p className="text-xs text-[#86868B] mt-4 max-w-[200px]">
                                    *Estimate only. Actual terms may vary based on credit approval.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Partners & CTA */}
                    <div className="text-center">
                        <h2 className="text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('partners.title')}</h2>
                        <p className="text-[#86868B] mb-12">{t('partners.desc')}</p>

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
