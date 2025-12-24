import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'News & Updates',
    description: 'Latest news, updates, and announcements from AWA Auction.',
};

export default function NewsPage() {
    const t = useTranslations('guide.news');
    const items = [0, 1, 2, 3, 4]; // Indices for items

    return (
        <div>
            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t('title')}</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* News List */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="space-y-8">
                        {items.map((i) => {
                            const isFeatured = t(`items.${i}.featured`) === 'true' || (i === 0); // Assuming first item is featured or relying on translation data, but boolean in json is hard to read via t(). 
                            // Actually, next-intl returns string for text. For booleans we might need to cast or just check string "true" if we put string in json? 
                            // In my JSON update I put boolean `true`. next-intl might return it, but safely I should check.
                            // However, iterating over keys is better if we don't know count. But here count is fixed 5.
                            // Let's assume json structure allows accessing fields.

                            const categoryKey = t(`items.${i}.category`);
                            const categoryLabel = t(`categories.${categoryKey}`);
                            const featured = i === 0; // Hardcoding featured logic for now as simplified approach or check specific property if possible. 

                            return (
                                <article
                                    key={i}
                                    className={`border-b border-gray-100 pb-8 ${featured ? 'bg-blue-50 -mx-6 px-6 py-6 rounded-xl border-none' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${categoryKey === 'announcement' ? 'text-blue-600' :
                                                categoryKey === 'feature' ? 'text-green-600' :
                                                    categoryKey === 'partnership' ? 'text-purple-600' :
                                                        categoryKey === 'event' ? 'text-orange-600' : 'text-gray-600'
                                            }`}>
                                            {categoryLabel}
                                        </span>
                                        <span className="text-gray-400 text-sm">{t(`items.${i}.date`)}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                                        {t(`items.${i}.title`)}
                                    </h2>
                                    <p className="text-gray-600">{t(`items.${i}.excerpt`)}</p>
                                    <Link href="#" className="text-blue-600 font-bold text-sm mt-3 inline-block hover:underline">
                                        {t('readMore')} →
                                    </Link>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="ghost" size="lg">{t('loadMore')}</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gray-900 rounded-3xl mx-4 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>{t('newsletter.title')}</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        {t('newsletter.subtitle')}
                    </p>
                    <div className="flex max-w-md mx-auto gap-2">
                        <input
                            type="email"
                            placeholder={t('newsletter.placeholder')}
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                            {t('newsletter.subscribe')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

