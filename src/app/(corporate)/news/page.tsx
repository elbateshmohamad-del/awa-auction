import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'News & Updates',
    description: 'Latest news, updates, and announcements from AWA Auction.',
};

const newsItems = [
    {
        date: 'December 5, 2025',
        category: 'Announcement',
        title: 'AWA Platform Now Supports 50+ Countries',
        excerpt: 'We\'re excited to announce expanded shipping coverage to new destinations in South America and Africa.',
        featured: true,
    },
    {
        date: 'November 28, 2025',
        category: 'Feature Update',
        title: 'Real-Time Bidding Engine 2.0 Released',
        excerpt: 'Our new bidding system offers faster updates, improved reliability, and a smoother user experience.',
        featured: false,
    },
    {
        date: 'November 15, 2025',
        category: 'Partnership',
        title: 'Strategic Partnership with Leading Inspection Center',
        excerpt: 'We\'ve partnered with Japan\'s top motorcycle inspection facility to enhance our quality assurance.',
        featured: false,
    },
    {
        date: 'October 30, 2025',
        category: 'Event',
        title: 'AWA at Tokyo Motorcycle Show 2025',
        excerpt: 'Visit our booth at the Tokyo Motorcycle Show. Meet the team and learn about our services.',
        featured: false,
    },
    {
        date: 'October 10, 2025',
        category: 'Milestone',
        title: '10,000 Motorcycles Sold!',
        excerpt: 'We\'ve reached a major milestone. Thank you to all our buyers and partners worldwide.',
        featured: false,
    },
];

export default function NewsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">News & Updates</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Stay up to date with the latest from AWA.
                    </p>
                </div>
            </section>

            {/* News List */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="space-y-8">
                        {newsItems.map((item, i) => (
                            <article
                                key={i}
                                className={`border-b border-gray-100 pb-8 ${item.featured ? 'bg-blue-50 -mx-6 px-6 py-6 rounded-xl border-none' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${item.category === 'Announcement' ? 'text-blue-600' :
                                        item.category === 'Feature Update' ? 'text-green-600' :
                                            item.category === 'Partnership' ? 'text-purple-600' :
                                                item.category === 'Event' ? 'text-orange-600' : 'text-gray-600'
                                        }`}>
                                        {item.category}
                                    </span>
                                    <span className="text-gray-400 text-sm">{item.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600">{item.excerpt}</p>
                                <Link href="#" className="text-blue-600 font-bold text-sm mt-3 inline-block hover:underline">
                                    Read More →
                                </Link>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="ghost" size="lg">Load More Articles</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gray-900 rounded-3xl mx-4 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>Subscribe to Our Newsletter</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Get auction alerts, new arrivals, and exclusive offers delivered to your inbox.
                    </p>
                    <div className="flex max-w-md mx-auto gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

