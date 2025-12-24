import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CorporateHomePage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 z-0"></div>
                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ color: '#ffffff' }}>
                        Global Trade,<br />Simplified.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10">
                        AWA connects the world to Japan's premium motorcycle market through technology, transparency, and trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/auction">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg">
                                Enter Auction Platform
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg">
                                About AWA Inc.
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* News Ticker */}
            <div className="bg-slate-100 py-4 border-b">
                <div className="container mx-auto px-4 flex items-center gap-4">
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-wider">Latest News</span>
                    <div className="text-slate-700 text-sm">
                        <span className="mr-8">2025.12.01 - Expansion into Southeast Asian market completed.</span>
                        <span className="mr-8">2025.11.15 - AWA reports record Q3 trading volume.</span>
                    </div>
                </div>
            </div>

            {/* Corporate Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Business</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We operate the world's leading digital marketplace for used Japanese motorcycles, facilitating seamless cross-border transactions for dealers and collectors.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Promoting the circular economy by extending the lifecycle of quality vehicles. We are committed to carbon-neutral logistics by 2030.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Careers</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Join our global team of innovators, engineers, and automotive experts. We are hiring for remote positions and at our Tokyo HQ.
                            </p>
                            <Link href="/careers" className="text-blue-600 font-bold mt-2 inline-block hover:underline">
                                View Open Positions →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
