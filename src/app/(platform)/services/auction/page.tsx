import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Auction Services',
    description: 'AWA\'s real-time auction platform. Bid on thousands of Japanese motorcycles.',
};

export default function AuctionServicePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#0F4C81] to-[#0a355c] text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Live Auction Platform</h1>
                        <p className="text-xl text-blue-200 leading-relaxed">
                            Bid in real-time on thousands of inspected Japanese motorcycles. Our platform is designed for speed, transparency, and trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-6xl">
                            🏍️
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Real-Time Bidding</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-gray-900">Instant Updates</p>
                                        <p className="text-gray-500 text-sm">See price changes as they happen, no refresh needed.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-gray-900">Proxy Bidding</p>
                                        <p className="text-gray-500 text-sm">Set your max and let us bid for you automatically.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-gray-900">Mobile Friendly</p>
                                        <p className="text-gray-500 text-sm">Bid from anywhere on any device.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-gray-900">Outbid Alerts</p>
                                        <p className="text-gray-500 text-sm">Instant notifications when someone outbids you.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-black text-[#0F4C81]">1000+</p>
                            <p className="text-gray-500">Active Listings</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-[#0F4C81]">24/7</p>
                            <p className="text-gray-500">Platform Availability</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-[#0F4C81]">99.9%</p>
                            <p className="text-gray-500">Uptime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Ready to Bid?</h2>
                    <p className="text-blue-200 mb-8">Create your free account and start exploring our catalog.</p>
                    <Link href="/register">
                        <Button variant="accent" size="lg">Get Started Free</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
