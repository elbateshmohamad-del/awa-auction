import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Pricing & Plans',
    description: 'Transparent pricing for AWA auction services. No hidden fees, competitive rates for buyers and sellers.',
};

const plans = [
    {
        name: 'Standard',
        price: 'Free',
        desc: 'Perfect for first-time buyers exploring our platform.',
        features: [
            'Browse full catalog',
            'Bid on auctions',
            'Basic support',
            'Standard shipping rates',
            'Email notifications',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Premium',
        price: '¥9,800',
        period: '/month',
        desc: 'For serious buyers who want priority access.',
        features: [
            'Everything in Standard',
            'Early auction access',
            'Priority bidding queue',
            'Discounted shipping (10% off)',
            'Dedicated account manager',
            'Phone support',
        ],
        cta: 'Upgrade Now',
        popular: true,
    },
    {
        name: 'Business',
        price: 'Custom',
        desc: 'For dealers and high-volume importers.',
        features: [
            'Everything in Premium',
            'Bulk purchase discounts',
            'API access',
            'Custom logistics solutions',
            'White-label options',
            'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        No hidden fees. No surprises. Choose the plan that fits your needs.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular
                                        ? 'border-[#0F4C81] shadow-xl relative'
                                        : 'border-gray-200'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0F4C81] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-black text-[#0F4C81]">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500">{plan.period}</span>}
                                </div>
                                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-green-500">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant={plan.popular ? 'primary' : 'secondary'}
                                    className="w-full font-bold"
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Breakdown */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Additional Fees</h2>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold text-gray-700">Fee Type</th>
                                        <th className="px-6 py-4 text-right font-bold text-gray-700">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-6 py-4 text-gray-600">Buyer's Premium</td>
                                        <td className="px-6 py-4 text-right font-mono text-gray-900">5% of final bid</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-600">Inspection Fee</td>
                                        <td className="px-6 py-4 text-right font-mono text-gray-900">¥15,000 / bike</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-600">Export Documentation</td>
                                        <td className="px-6 py-4 text-right font-mono text-gray-900">¥8,000 / shipment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-600">Shipping (Asia)</td>
                                        <td className="px-6 py-4 text-right font-mono text-gray-900">From ¥50,000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-600">Shipping (Europe/Americas)</td>
                                        <td className="px-6 py-4 text-right font-mono text-gray-900">From ¥120,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center text-gray-400 text-sm mt-4">
                            * Shipping costs vary by destination and container size. Contact us for a custom quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Need a Custom Quote?</h2>
                    <p className="text-blue-200 mb-8">For bulk orders or special requirements, talk to our sales team.</p>
                    <Link href="/contact">
                        <Button variant="accent" size="lg">Contact Sales</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
