"use client";

import { useTranslations } from 'next-intl';

export default function BlogClient() {
    const t = useTranslations('blog');
    const tCommon = useTranslations('common');

    // NOTE: Removed dummy blog posts as requested.
    // In future, this should fetch real blog posts from API or CMS.

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl">
                    <div className="text-6xl mb-6">📝</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{tCommon('comingSoon')}</h2>
                    <p className="text-gray-500 max-w-md text-center">
                        {t('description')}
                    </p>
                </div>

                {/* Newsletter */}
                <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>{t('newsletter.title')}</h2>
                    <p className="text-gray-400 mb-6">{t('newsletter.subtitle')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
            </div>
        </div>
    );
}
