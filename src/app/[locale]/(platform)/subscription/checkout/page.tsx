"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';

type PlanKey = 'free' | 'starter' | 'bronze' | 'silver' | 'gold' | 'platinum';

const planPricing: Record<string, { price: number; discount: string }> = {
    free: { price: 0, discount: "0%" },
    starter: { price: 9, discount: "5%" },
    bronze: { price: 19, discount: "8%" },
    silver: { price: 39, discount: "12%" },
    gold: { price: 99, discount: "20%" },
    platinum: { price: 499, discount: "30%" },
};

export default function SubscriptionCheckoutPage() {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const planId = (searchParams.get('plan') || 'silver') as PlanKey;
    const plan = planPricing[planId] || planPricing.silver;
    const planName = t(`subscription.${planId}.name`);

    const [confirmed, setConfirmed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (confirmed) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4">
                <div className="container mx-auto max-w-lg">
                    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                        <div className="text-6xl mb-4">📧</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('checkout.success.title')}</h1>
                        <p className="text-gray-600 mb-6">
                            {t('checkout.success.message')} <strong>${plan.price}</strong>
                        </p>
                        <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('checkout.bankName')}</span>
                                    <span className="font-bold">MUFG Bank</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('checkout.accountNumber')}</span>
                                    <span className="font-bold">1234567</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('checkout.accountName')}</span>
                                    <span className="font-bold">AWA Holdings Co., Ltd.</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/dashboard">
                            <Button variant="primary" className="w-full bg-[#0F4C81]">
                                {t('dashboard.title')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8">
                    <Link href="/subscription" className="text-[#0F4C81] hover:underline">
                        ← {t('common.back')}
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Order Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('checkout.summary')}</h2>

                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">{t('subscription.title')}</span>
                                    <span className="font-bold text-gray-900">{planName}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">{t('subscription.monthly')}</span>
                                    <span className="text-gray-900">{t('subscription.monthly')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t('subscription.shippingDiscount')}</span>
                                    <span className="text-green-600 font-bold">{plan.discount}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">{t('checkout.total')}</span>
                                <div className="text-right">
                                    <span className="text-3xl font-black text-[#0F4C81]">${plan.price}</span>
                                    <span className="text-gray-500">/{t('subscription.monthly').toLowerCase()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('checkout.paymentMethod')}</h1>
                            <p className="text-gray-500 mb-6">{t('checkout.bankTransferDescription')}</p>

                            <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4">{t('checkout.bankDetails')}</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-500">{t('checkout.bankName')}</span>
                                        <span className="font-bold text-gray-900">MUFG Bank (三菱UFJ銀行)</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-500">{t('checkout.branch')}</span>
                                        <span className="font-bold text-gray-900">Yokohama Branch (横浜支店)</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-500">{t('checkout.accountType')}</span>
                                        <span className="font-bold text-gray-900">{t('checkout.ordinary')}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-500">{t('checkout.accountNumber')}</span>
                                        <span className="font-bold text-gray-900">1234567</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-500">{t('checkout.accountName')}</span>
                                        <span className="font-bold text-gray-900">AWA Holdings Co., Ltd.</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-500">SWIFT Code</span>
                                        <span className="font-bold text-gray-900">BOTKJPJT</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">💡</span>
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            {t('checkout.transferTip')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <label className="flex items-start gap-3 cursor-pointer mb-6">
                                    <input
                                        type="checkbox"
                                        checked={confirmed}
                                        onChange={(e) => setConfirmed(e.target.checked)}
                                        className="mt-1 w-5 h-5 rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-600">
                                        {t('checkout.confirmCheckbox')}
                                    </span>
                                </label>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className={`w-full py-3 ${confirmed ? 'bg-[#0F4C81] hover:bg-[#0d3d66]' : 'bg-gray-300 cursor-not-allowed'} text-white`}
                                    disabled={!confirmed}
                                >
                                    {t('checkout.placeOrder')}
                                </Button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    {t('checkout.termsNotice')}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
