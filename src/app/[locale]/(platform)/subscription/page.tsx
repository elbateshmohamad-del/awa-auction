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
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[1200px] px-6">
                    <Badge className="mb-6">{t('subscription.title')}</Badge>
                    <h1 className="text-[32px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6 whitespace-pre-line">{t('subscription.subtitle')}</h1>
                    <p className="text-[18px] md:text-[22px] text-[#86868B]">
                        {t('about.vision.description')}
                    </p>
                </div>
            </section>

            {/* Plans Section */}
            <section className="min-h-screen flex items-center bg-[#FFFFFF] py-8">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {plans.map((plan) => {
                            const features = t.raw(`subscription.${plan.key}.features`) as string[];
                            const planName = t(`subscription.${plan.key}.name`);

                            return (
                                <div
                                    key={plan.key}
                                    className={`bg-white rounded-2xl p-6 relative flex flex-col transition-all hover:-translate-y-2 hover:shadow-2xl ${plan.popular
                                        ? 'border-2 border-[#007AFF] shadow-xl'
                                        : 'border border-[#D2D2D7] shadow-lg'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-[#007AFF] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                                                ⭐ {t('subscription.mostPopular')}
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-4 pt-1">
                                        <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">
                                            {planName}
                                        </h3>
                                        <div>
                                            <span className="text-4xl font-black text-[#007AFF]">
                                                ${plan.price}
                                            </span>
                                            <span className="text-[#86868B] text-base">/{t('subscription.monthly').toLowerCase()}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 mb-4">
                                        <div className="flex-1 p-3 rounded-xl bg-[#F5F5F7] text-center">
                                            <div className="text-xs text-[#86868B] mb-0.5">{t('subscription.shippingDiscount')}</div>
                                            <div className="text-lg font-bold text-[#007AFF]">{plan.discount}</div>
                                        </div>
                                        <div className="flex-1 p-3 rounded-xl bg-[#F5F5F7] text-center">
                                            <div className="text-xs text-[#86868B] mb-0.5">SNS倍率</div>
                                            <div className="text-lg font-bold text-[#007AFF]">{plan.snsMultiplier}</div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-[#1D1D1F]">
                                                <span className="text-green-500">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.price === 0 ? (
                                        <Button className="w-full py-3" variant="secondary">
                                            {t('subscription.currentPlan')}
                                        </Button>
                                    ) : (
                                        <Link href={`/subscription/checkout?plan=${plan.key}`}>
                                            <Button
                                                className={`w-full py-3 ${plan.popular ? 'bg-[#007AFF] hover:bg-[#0056b3] text-white' : ''}`}
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
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-[36px] md:text-[56px] font-bold text-[#1D1D1F] text-center mb-12">{t('subscription.featureComparison')}</h2>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-x-auto">
                        <table className="w-full text-lg">
                            <thead>
                                <tr className="bg-[#007AFF] text-white">
                                    <th className="text-left p-6 font-bold text-lg">機能</th>
                                    <th className="text-center p-6 font-bold text-lg">{t('subscription.free.name')}</th>
                                    <th className="text-center p-6 font-bold text-lg">{t('subscription.starter.name')}</th>
                                    <th className="text-center p-6 font-bold text-lg">{t('subscription.bronze.name')}</th>
                                    <th className="text-center p-6 font-bold text-lg bg-[#0056b3]">{t('subscription.silver.name')} ⭐</th>
                                    <th className="text-center p-6 font-bold text-lg">{t('subscription.gold.name')}</th>
                                    <th className="text-center p-6 font-bold text-lg">{t('subscription.platinum.name')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[#E5E5E5]">
                                    <td className="p-6 text-[#1D1D1F] font-bold bg-[#F9F9F9]">{t('subscription.monthly')}</td>
                                    <td className="text-center p-6 text-2xl font-bold">$0</td>
                                    <td className="text-center p-6 text-2xl font-bold">$9</td>
                                    <td className="text-center p-6 text-2xl font-bold">$19</td>
                                    <td className="text-center p-6 text-2xl font-bold text-[#007AFF] bg-blue-50">$39</td>
                                    <td className="text-center p-6 text-2xl font-bold">$99</td>
                                    <td className="text-center p-6 text-2xl font-bold">$499</td>
                                </tr>
                                <tr className="border-b border-[#E5E5E5]">
                                    <td className="p-6 text-[#1D1D1F] font-bold bg-[#F9F9F9]">{t('subscription.shippingDiscount')}</td>
                                    <td className="text-center p-6 text-xl">—</td>
                                    <td className="text-center p-6 text-xl text-green-600 font-bold">5%</td>
                                    <td className="text-center p-6 text-xl text-green-600 font-bold">8%</td>
                                    <td className="text-center p-6 text-xl text-[#007AFF] font-bold bg-blue-50">12%</td>
                                    <td className="text-center p-6 text-xl text-green-600 font-bold">20%</td>
                                    <td className="text-center p-6 text-xl text-green-600 font-bold">30%</td>
                                </tr>
                                <tr className="border-b border-[#E5E5E5]">
                                    <td className="p-6 text-[#1D1D1F] font-bold bg-[#F9F9F9]">SNS報酬倍率</td>
                                    <td className="text-center p-6 text-xl">1.0x</td>
                                    <td className="text-center p-6 text-xl">1.0x</td>
                                    <td className="text-center p-6 text-xl">1.0x</td>
                                    <td className="text-center p-6 text-xl text-[#007AFF] font-bold bg-blue-50">1.5x</td>
                                    <td className="text-center p-6 text-xl">2.0x</td>
                                    <td className="text-center p-6 text-xl">3.0x</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-[#1D1D1F] font-bold bg-[#F9F9F9]">{t('subscription.packaging')}</td>
                                    <td className="text-center p-6 text-lg">—</td>
                                    <td className="text-center p-6 text-lg">シュリンク</td>
                                    <td className="text-center p-6 text-lg">+防錆</td>
                                    <td className="text-center p-6 text-lg text-[#007AFF] font-bold bg-blue-50">+パーツ</td>
                                    <td className="text-center p-6 text-lg">フル梱包</td>
                                    <td className="text-center p-6 text-lg">フル梱包+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
