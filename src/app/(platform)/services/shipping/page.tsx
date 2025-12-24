import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Shipping Services',
    description: 'AWA\'s global motorcycle shipping. From Japan to your doorstep.',
};

export default function ShippingServicePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <p className="text-orange-200 font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Global Shipping</h1>
                        <p className="text-xl text-orange-100 leading-relaxed">
                            From Yokohama to your doorstep. We handle all export documentation, customs clearance, and logistics.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">How Shipping Works</h2>
                    <div className="max-w-3xl mx-auto">
                        {[
                            { step: 1, title: 'Win Auction & Pay', desc: 'Complete payment within 3 business days.' },
                            { step: 2, title: 'Export Processing', desc: 'We handle all Japanese export paperwork.' },
                            { step: 3, title: 'Container Loading', desc: 'Your bike is carefully secured in a container.' },
                            { step: 4, title: 'Ocean Transit', desc: 'Track your shipment across the Pacific.' },
                            { step: 5, title: 'Customs & Delivery', desc: 'Clear customs and receive your motorcycle.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Options */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Shipping Options</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Shared Container</h3>
                            <p className="text-gray-500 mb-4">Cost-effective option for single bikes. Share container space with other buyers.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Lower cost</li>
                                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Regular departure schedule</li>
                                <li className="flex items-center gap-2"><span className="text-yellow-500">⏱</span> 4-8 weeks transit</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-orange-500">
                            <div className="text-4xl mb-4">🚢</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Container</h3>
                            <p className="text-gray-500 mb-4">Dedicated container for high-value or multiple bikes. Faster and more secure.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Faster departure</li>
                                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Maximum security</li>
                                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 2-6 weeks transit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">50+ Countries</h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        We ship to Asia, Europe, the Americas, and beyond. Check if your country is supported.
                    </p>
                    <Link href="/countries">
                        <Button variant="secondary" size="lg">View Supported Countries</Button>
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-orange-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Get a Shipping Quote</h2>
                    <p className="text-orange-100 mb-8">Contact us for a custom quote to your destination.</p>
                    <Link href="/contact">
                        <Button variant="accent" size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
