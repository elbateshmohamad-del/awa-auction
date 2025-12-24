"use client";

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type PlanKey = 'free' | 'starter' | 'bronze' | 'silver' | 'gold' | 'platinum';

const plans: { key: PlanKey; price: number; discount: string; snsMultiplier: string; popular?: boolean }[] = [
    { key: 'free', price: 0, discount: "0%", snsMultiplier: "1.0x" },
    { key: 'starter', price: 9, discount: "5%", snsMultiplier: "1.0x" },
    { key: 'bronze', price: 19, discount: "8%", snsMultiplier: "1.0x" },
    { key: 'silver', price: 39, discount: "12%", snsMultiplier: "1.5x", popular: true },
    { key: 'gold', price: 99, discount: "20%", snsMultiplier: "2.0x" },
    { key: 'platinum', price: 499, discount: "30%", snsMultiplier: "3.0x" },
];

export default function SubscriptionPage() {
    const t = useTranslations();

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4">{t('subscription.title')}</Badge>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('subscription.subtitle')}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('about.vision.description')}
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => {
                        const features = t.raw(`subscription.${plan.key}.features`) as string[];
                        const planName = t(`subscription.${plan.key}.name`);

                        return (
                            <div
                                key={plan.key}
                                className={`bg-white rounded-2xl p-6 relative flex flex-col ${plan.popular
                                    ? 'border-2 border-[#0F4C81] shadow-xl'
                                    : 'border border-gray-200'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-[#0F4C81] text-white text-xs font-bold px-4 py-1 rounded-full">
                                            ⭐ {t('subscription.mostPopular')}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {planName}
                                    </h3>
                                    <div className="mt-2">
                                        <span className="text-4xl font-black text-[#0F4C81]">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-500">/{t('subscription.monthly').toLowerCase()}</span>
                                    </div>
                                </div>

                                <div className="mb-4 p-3 rounded-lg bg-blue-50">
                                    <div className="text-sm font-bold text-[#0F4C81]">
                                        {t('subscription.shippingDiscount')}: {plan.discount}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {t('subscription.snsMultiplier')}: {plan.snsMultiplier}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6 flex-grow">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-green-500">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {plan.price === 0 ? (
                                    <Button className="w-full" variant="secondary">
                                        {t('subscription.currentPlan')}
                                    </Button>
                                ) : (
                                    <Link href={`/subscription/checkout?plan=${plan.key}`}>
                                        <Button
                                            className={`w-full ${plan.popular ? 'bg-[#0F4C81] hover:bg-[#0d3d66] text-white' : ''}`}
                                            variant={plan.popular ? 'primary' : 'secondary'}
                                        >
                                            {t('subscription.selectPlan')}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Comparison Table */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('subscription.featureComparison')}</h2>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                                    <th className="text-center p-4 font-bold text-gray-900">{t('subscription.free.name')}</th>
                                    <th className="text-center p-4 font-bold text-gray-900">{t('subscription.starter.name')}</th>
                                    <th className="text-center p-4 font-bold text-gray-900">{t('subscription.bronze.name')}</th>
                                    <th className="text-center p-4 font-bold text-[#0F4C81] bg-blue-50">{t('subscription.silver.name')} ⭐</th>
                                    <th className="text-center p-4 font-bold text-gray-900">{t('subscription.gold.name')}</th>
                                    <th className="text-center p-4 font-bold text-gray-900">{t('subscription.platinum.name')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4 text-gray-800">{t('subscription.monthly')}</td>
                                    <td className="text-center p-4">$0</td>
                                    <td className="text-center p-4">$9</td>
                                    <td className="text-center p-4">$19</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">$39</td>
                                    <td className="text-center p-4">$99</td>
                                    <td className="text-center p-4">$499</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">{t('subscription.shippingDiscount')}</td>
                                    <td className="text-center p-4">0%</td>
                                    <td className="text-center p-4">5%</td>
                                    <td className="text-center p-4">8%</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">12%</td>
                                    <td className="text-center p-4">20%</td>
                                    <td className="text-center p-4">30%</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">{t('subscription.snsMultiplier')}</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">1.5x</td>
                                    <td className="text-center p-4">2.0x</td>
                                    <td className="text-center p-4">3.0x</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">{t('subscription.packaging')}</td>
                                    <td className="text-center p-4">—</td>
                                    <td className="text-center p-4">Shrink</td>
                                    <td className="text-center p-4">+Rust</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">+Parts</td>
                                    <td className="text-center p-4">Full</td>
                                    <td className="text-center p-4">Full+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
