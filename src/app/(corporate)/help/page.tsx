import Link from 'next/link';

export const metadata = {
    title: 'Help Center | AWA Auction',
    description: 'Get help with bidding, shipping, payments, and more. Find answers to common questions.',
};

const helpCategories = [
    {
        icon: '🛒',
        title: 'Bidding & Buying',
        description: 'Learn how to bid, win auctions, and complete purchases.',
        links: [
            { label: 'How to Bid', href: '/help/how-to-bid' },
            { label: 'Auction Types', href: '/help/auction-types' },
            { label: 'Inspection Reports', href: '/help/inspection-reports' },
        ],
    },
    {
        icon: '🚢',
        title: 'Shipping & Delivery',
        description: 'Shipping options, tracking, and delivery information.',
        links: [
            { label: 'Shipping Guide', href: '/help/shipping-guide' },
            { label: 'Track Shipment', href: '/dashboard/tracking' },
            { label: 'Delivery Times', href: '/help/delivery-times' },
        ],
    },
    {
        icon: '💳',
        title: 'Payments & Billing',
        description: 'Payment methods, invoices, and billing questions.',
        links: [
            { label: 'Payment Methods', href: '/help/payment-methods' },
            { label: 'Currency & Fees', href: '/fees' },
            { label: 'Refund Policy', href: '/legal/refunds' },
        ],
    },
    {
        icon: '👤',
        title: 'Account & Security',
        description: 'Manage your account, password, and security settings.',
        links: [
            { label: 'Account Settings', href: '/dashboard/settings' },
            { label: 'Verification', href: '/help/verification' },
            { label: 'Security Tips', href: '/help/security' },
        ],
    },
];

const popularArticles = [
    { title: 'How do I place a bid?', href: '/help/how-to-bid' },
    { title: 'What payment methods are accepted?', href: '/help/payment-methods' },
    { title: 'How long does shipping take?', href: '/help/shipping-guide' },
    { title: 'How do I read an inspection report?', href: '/help/inspection-reports' },
    { title: 'Can I cancel my order?', href: '/legal/refunds' },
];

export default function HelpPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#ffffff' }}>Help Center</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#bfdbfe' }}>
                        How can we help you today?
                    </p>
                    <div className="max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search for help..."
                            className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 border-2 border-gray-200"
                            style={{ backgroundColor: '#ffffff' }}
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {helpCategories.map((cat) => (
                            <div key={cat.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{cat.icon}</div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                                <p className="text-gray-500 text-sm mb-4">{cat.description}</p>
                                <ul className="space-y-2">
                                    {cat.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-blue-600 hover:underline text-sm">
                                                {link.label} →
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {popularArticles.map((article) => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="block bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <span className="text-gray-900 font-medium">{article.title}</span>
                                <span className="text-gray-400 ml-2">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>Still Need Help?</h2>
                    <p className="mb-8 max-w-xl mx-auto" style={{ color: '#bfdbfe' }}>
                        Our support team is available to assist you.
                    </p>
                    <Link href="/contact">
                        <button className="bg-white hover:bg-gray-100 text-[#0F4C81] font-bold px-8 py-3 rounded-full transition-colors">
                            Contact Support
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
