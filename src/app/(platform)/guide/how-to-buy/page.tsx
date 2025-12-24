import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Buying Guide | Guide',
    description: 'Complete guide to buying motorcycles on AWA Auction. From registration to delivery.',
};

export default function HowToBuyGuidePage() {
    const steps = [
        {
            step: 1,
            title: 'Create Your Account',
            description: 'Sign up with your email and create a password. This takes just a minute.',
            details: ['Verify your email address', 'Set up two-factor authentication (recommended)']
        },
        {
            step: 2,
            title: 'Complete KYC Verification',
            description: 'Submit identity documents to unlock bidding capabilities.',
            details: ['Upload valid government ID', 'Provide proof of address', 'Approval within 24-48 hours']
        },
        {
            step: 3,
            title: 'Browse & Research',
            description: 'Explore our catalog of inspected motorcycles.',
            details: ['Use filters to narrow down options', 'Review inspection reports carefully', 'Add favorites to your watchlist']
        },
        {
            step: 4,
            title: 'Place Your Bids',
            description: 'Participate in live auctions or set proxy bids.',
            details: ['Set a budget and stick to it', 'Factor in shipping costs and fees', 'Use proxy bids for convenience']
        },
        {
            step: 5,
            title: 'Win & Pay',
            description: 'If you win, complete payment within 3 business days.',
            details: ['Receive payment instructions via email', 'Pay via bank transfer or credit card', 'Buyer\'s premium (5%) added to final price']
        },
        {
            step: 6,
            title: 'Export Processing',
            description: 'We handle all Japanese export paperwork.',
            details: ['Vehicle deregistration', 'Export certificate issuance', 'Customs documentation']
        },
        {
            step: 7,
            title: 'Shipping',
            description: 'Your motorcycle is loaded into a container and shipped.',
            details: ['Container shared or exclusive options', 'Full tracking provided', 'Marine insurance included']
        },
        {
            step: 8,
            title: 'Receive Your Motorcycle',
            description: 'Clear customs in your country and take delivery.',
            details: ['We can recommend customs brokers', 'You handle import duties/taxes', 'Enjoy your new ride!']
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <nav className="mb-8 text-sm">
                        <Link href="/guide" className="text-[#0F4C81] hover:underline">← Back to Guides</Link>
                    </nav>

                    <h1 className="text-4xl font-black text-gray-900 mb-4">Buying Guide</h1>
                    <p className="text-xl text-gray-500 mb-12">Your complete roadmap from registration to riding.</p>

                    <div className="space-y-8">
                        {steps.map((item) => (
                            <div key={item.step} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {item.step}
                                    </div>
                                    {item.step < steps.length && (
                                        <div className="w-0.5 bg-gray-200 flex-1 mt-2"></div>
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-3">{item.description}</p>
                                    <ul className="space-y-1">
                                        {item.details.map((d, i) => (
                                            <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                                <span className="text-green-500">✓</span> {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex gap-4">
                        <Link href="/register">
                            <Button variant="primary" size="lg">Get Started</Button>
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
