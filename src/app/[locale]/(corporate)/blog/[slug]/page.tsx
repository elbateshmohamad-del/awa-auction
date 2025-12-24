import { blogPosts } from '@/data/blogPosts';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';

interface BlogPageProps {
    params: {
        slug: string;
        locale: string;
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <article className="container mx-auto px-4 max-w-3xl">
                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                        ← Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-blue-100 text-[#0F4C81] text-xs font-bold px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-4xl">{post.image}</div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">AWA Editorial Team</p>
                            <p className="text-xs text-gray-500">Auction Specialists</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div
                        className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-blue"
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />
                </div>

                {/* Footer / Share (Mock) */}
                <div className="mt-12 flex justify-between items-center border-t border-gray-200 pt-8">
                    <p className="text-gray-500 font-medium">Share this article:</p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
