import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const plans = [
    {
        name: "Free",
        price: 0,
        discount: "0%",
        features: [
            "Access to public auctions",
            "Standard transaction fees",
            "Email support",
            "Basic packaging",
        ],
        snsMultiplier: "1.0x",
    },
    {
        name: "Starter",
        price: 9,
        discount: "5%",
        features: [
            "All Free features",
            "5% shipping discount",
            "Shrink wrap packaging",
            "Priority email support",
        ],
        snsMultiplier: "1.0x",
    },
    {
        name: "Bronze",
        price: 19,
        discount: "8%",
        features: [
            "All Starter features",
            "8% shipping discount",
            "Rust protection",
            "Monthly market report",
        ],
        snsMultiplier: "1.0x",
    },
    {
        name: "Silver",
        price: 39,
        discount: "12%",
        features: [
            "All Bronze features",
            "12% shipping discount",
            "1.5x SNS rewards",
            "Parts protection",
            "Priority bidding",
        ],
        snsMultiplier: "1.5x",
        popular: true,
    },
    {
        name: "Gold",
        price: 99,
        discount: "20%",
        features: [
            "All Silver features",
            "20% shipping discount",
            "2.0x SNS rewards",
            "Full protection package",
            "Dedicated support line",
        ],
        snsMultiplier: "2.0x",
    },
    {
        name: "Platinum",
        price: 499,
        discount: "30%",
        features: [
            "All Gold features",
            "30% shipping discount",
            "3.0x SNS rewards",
            "Dedicated account manager",
            "VIP priority everything",
            "API access",
        ],
        snsMultiplier: "3.0x",
    },
];

export default function SubscriptionPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4">Membership Plans</Badge>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose the Plan That Fits Your Needs</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Unlock exclusive discounts, premium packaging, and SNS rewards with AWA membership.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-2xl p-6 relative flex flex-col ${plan.popular
                                ? 'border-2 border-[#0F4C81] shadow-xl'
                                : 'border border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#0F4C81] text-white text-xs font-bold px-4 py-1 rounded-full">
                                        Most Popular ⭐
                                    </span>
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {plan.name}
                                </h3>
                                <div className="mt-2">
                                    <span className="text-4xl font-black text-[#0F4C81]">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                            </div>

                            <div className="mb-4 p-3 rounded-lg bg-blue-50">
                                <div className="text-sm font-bold text-[#0F4C81]">
                                    Shipping Discount: {plan.discount}
                                </div>
                                <div className="text-xs text-gray-500">
                                    SNS Multiplier: {plan.snsMultiplier}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {plan.price === 0 ? (
                                <Button className="w-full" variant="secondary">
                                    Current Plan
                                </Button>
                            ) : (
                                <Link href={`/subscription/checkout?plan=${plan.name.toLowerCase()}`}>
                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-[#0F4C81] hover:bg-[#0d3d66] text-white' : ''}`}
                                        variant={plan.popular ? 'primary' : 'secondary'}
                                    >
                                        Select Plan
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h2>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                                    <th className="text-center p-4 font-bold text-gray-900">Free</th>
                                    <th className="text-center p-4 font-bold text-gray-900">Starter</th>
                                    <th className="text-center p-4 font-bold text-gray-900">Bronze</th>
                                    <th className="text-center p-4 font-bold text-[#0F4C81] bg-blue-50">Silver ⭐</th>
                                    <th className="text-center p-4 font-bold text-gray-900">Gold</th>
                                    <th className="text-center p-4 font-bold text-gray-900">Platinum</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4 text-gray-800">Monthly Price</td>
                                    <td className="text-center p-4">$0</td>
                                    <td className="text-center p-4">$9</td>
                                    <td className="text-center p-4">$19</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">$39</td>
                                    <td className="text-center p-4">$99</td>
                                    <td className="text-center p-4">$499</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">Shipping Discount</td>
                                    <td className="text-center p-4">0%</td>
                                    <td className="text-center p-4">5%</td>
                                    <td className="text-center p-4">8%</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">12%</td>
                                    <td className="text-center p-4">20%</td>
                                    <td className="text-center p-4">30%</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">SNS Reward Multiplier</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4">1.0x</td>
                                    <td className="text-center p-4 bg-blue-50 font-bold text-[#0F4C81]">1.5x</td>
                                    <td className="text-center p-4">2.0x</td>
                                    <td className="text-center p-4">3.0x</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-800">Packaging</td>
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
