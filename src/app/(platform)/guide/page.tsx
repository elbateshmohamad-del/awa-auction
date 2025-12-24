import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
    title: 'Buyer\'s Guide',
    description: 'Learn how to buy motorcycles through AWA Auction. Step-by-step guide for international buyers.',
};

const guides = [
    {
        icon: '📋',
        title: 'How to Bid',
        description: 'Master the art of bidding on Japanese motorcycles.',
        link: '/guide/how-to-bid',
    },
    {
        icon: '🛒',
        title: 'Buying Guide',
        description: 'From registration to receiving your motorcycle.',
        link: '/guide/how-to-buy',
    },
    {
        icon: '✈️',
        title: 'Export Process',
        description: 'Understanding Japanese export procedures.',
        link: '/guide/export',
    },
    {
        icon: '🔬',
        title: 'Inspection Standards',
        description: 'How we evaluate and grade motorcycles.',
        link: '/guide/inspection',
    },
];

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#0F4C81] to-[#0a355c] text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Buyer's Guide</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Everything you need to know about buying Japanese motorcycles through AWA.
                    </p>
                </div>
            </section>

            {/* Guide Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {guides.map((guide, i) => (
                            <Link key={i} href={guide.link}>
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                                    <CardContent className="p-8 flex gap-6">
                                        <div className="text-4xl flex-shrink-0">{guide.icon}</div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0F4C81] transition-colors">
                                                {guide.title}
                                            </h2>
                                            <p className="text-gray-500">{guide.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Start */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Quick Start</h2>
                    <div className="space-y-6">
                        {[
                            { step: 1, title: 'Create Account', desc: 'Sign up and complete KYC verification.' },
                            { step: 2, title: 'Browse Catalog', desc: 'Explore thousands of inspected motorcycles.' },
                            { step: 3, title: 'Place Bids', desc: 'Bid in real-time or set a maximum auto-bid.' },
                            { step: 4, title: 'Win & Pay', desc: 'Complete payment within 3 business days.' },
                            { step: 5, title: 'Track Shipment', desc: 'Monitor your motorcycle from Japan to your door.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Ready to Start?</h2>
                    <p className="text-blue-200 mb-8">Create your free account and start browsing today.</p>
                    <Link href="/register">
                        <Button variant="accent" size="lg">Create Account</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
