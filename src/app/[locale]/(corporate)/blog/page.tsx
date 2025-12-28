import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';
import { blogPosts } from '@/data/blogPosts';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'blog');
}


const categories = ['All', 'Guide', 'News', 'Market Report', 'Announcement', 'Tips'];

export default function BlogPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">AWA Blog</h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        News, guides, and insights about Japanese motorcycle auctions and international exports.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'All'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                <div className="bg-[#0F4C81] rounded-3xl p-8 md:p-12 mb-12 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-8xl">{blogPosts[0].image}</div>
                        <div>
                            <span className="inline-block bg-white text-[#0F4C81] text-xs font-bold px-3 py-1 rounded-full mb-4">
                                Featured
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>{blogPosts[0].title}</h2>
                            <p className="text-blue-50 mb-4">{blogPosts[0].excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-blue-200">
                                <span>{blogPosts[0].date}</span>
                                <span>•</span>
                                <span>{blogPosts[0].readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <article
                            key={post.slug}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="h-40 bg-gray-100 flex items-center justify-center text-6xl">
                                {post.image}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-400">{post.readTime}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">{post.date}</span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-500 text-sm font-medium hover:underline"
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Subscribe to Our Newsletter</h2>
                    <p className="text-gray-400 mb-6">Get the latest auction updates and market insights delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
            </div>
        </div>
    );
}
