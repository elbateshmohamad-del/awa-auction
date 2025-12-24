import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'How to Bid | Guide',
    description: 'Complete guide to bidding on AWA Auction. Learn bidding strategies, proxy bids, and winning tips.',
};

export default function HowToBidGuidePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <nav className="mb-8 text-sm">
                        <Link href="/guide" className="text-[#0F4C81] hover:underline">← Back to Guides</Link>
                    </nav>

                    <h1 className="text-4xl font-black text-gray-900 mb-4">How to Bid</h1>
                    <p className="text-xl text-gray-500 mb-12">Master the art of bidding on AWA Auction.</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Auctions</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                AWA runs real-time online auctions. When an auction is live, the price updates in real-time as buyers place bids. The highest bidder when the timer reaches zero wins the motorcycle.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <p className="text-blue-800 font-medium">
                                    💡 <strong>Tip:</strong> All bids are binding. Only bid what you're willing to pay.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Bids</h2>

                            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Manual Bid</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Click "Place Bid" and enter your amount. You must be actively watching the auction to bid manually.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Proxy Bid (Auto-Bid)</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Set a maximum amount and our system will automatically bid on your behalf, using only the minimum increment needed to stay in the lead. You won't pay your maximum unless someone outbids you to that point.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <p className="text-green-800">
                                    <strong>Example:</strong> You set a max of ¥2,000,000. Current price is ¥1,500,000. Our system bids ¥1,510,000 (minimum increment). If someone bids ¥1,600,000, we bid ¥1,610,000 on your behalf, and so on.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bidding Increments</h2>
                            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Current Price</th>
                                        <th className="px-4 py-3 text-left">Minimum Increment</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr><td className="px-4 py-3">Under ¥500,000</td><td className="px-4 py-3">¥5,000</td></tr>
                                    <tr><td className="px-4 py-3">¥500,000 - ¥1,000,000</td><td className="px-4 py-3">¥10,000</td></tr>
                                    <tr><td className="px-4 py-3">¥1,000,000 - ¥5,000,000</td><td className="px-4 py-3">¥20,000</td></tr>
                                    <tr><td className="px-4 py-3">Over ¥5,000,000</td><td className="px-4 py-3">¥50,000</td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Winning Tips</h2>
                            <ul className="list-disc pl-6 text-gray-600 space-y-3">
                                <li>Set a budget before bidding and stick to it</li>
                                <li>Use proxy bids if you can't watch the auction live</li>
                                <li>Research the motorcycle's market value beforehand</li>
                                <li>Don't forget to factor in shipping and fees</li>
                                <li>Watch a few auctions before participating to understand the flow</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <Link href="/catalog">
                            <Button variant="primary" size="lg">Start Bidding</Button>
                        </Link>
                        <Link href="/guide">
                            <Button variant="ghost" size="lg">More Guides</Button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
