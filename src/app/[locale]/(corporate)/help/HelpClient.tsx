"use client";

import { useState, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function HelpClient() {
    const t = useTranslations();
    const [searchQuery, setSearchQuery] = useState('');

    // 検索可能なすべてのヘルプ記事
    const allArticles = useMemo(() => [
        { title: t('help.gettingStarted'), keywords: ['始め方', 'getting started', 'スタート', '初心者', '登録'], href: '/help/getting-started' },
        { title: t('help.howToBid'), keywords: ['入札', '方法', 'bid', 'オークション', 'auction'], href: '/help/how-to-bid' },
        { title: t('auctions.filters.title'), keywords: ['フィルター', 'オークション', '種類', 'タイプ', 'filter'], href: '/help/auction-types' },
        { title: t('bike.inspectionReport'), keywords: ['検査', 'レポート', 'inspection', '車両', 'バイク'], href: '/help/inspection-reports' },
        { title: t('help.shippingGuide'), keywords: ['配送', 'ガイド', 'shipping', '輸送', '発送'], href: '/help/shipping-guide' },
        { title: t('dashboard.tracking.title'), keywords: ['追跡', 'トラッキング', 'tracking', '配送状況'], href: '/dashboard/tracking' },
        { title: t('checkout.shipping'), keywords: ['配達', '時間', 'delivery', '到着', '日数'], href: '/help/delivery-times' },
        { title: t('checkout.paymentMethod'), keywords: ['支払い', '決済', 'payment', 'クレジット', '銀行振込'], href: '/help/payment-methods' },
        { title: t('footer.legal.termsOfService'), keywords: ['利用規約', '規約', 'terms', 'service', '返金'], href: '/legal/refunds' },
        { title: t('admin.settings'), keywords: ['設定', 'settings', 'アカウント', 'プロフィール'], href: '/dashboard/settings' },
        { title: t('kyc.title'), keywords: ['本人確認', 'KYC', '認証', 'verification', '身分証明'], href: '/help/verification' },
        { title: t('services.support.title'), keywords: ['セキュリティ', 'security', '安全', 'サポート'], href: '/help/security' },
        { title: t('help.faq'), keywords: ['よくある質問', 'FAQ', 'Q&A', '質問'], href: '/help/faq' },
        { title: t('help.videoGuides'), keywords: ['動画', 'ビデオ', 'video', 'ガイド', 'チュートリアル'], href: '/help/video-guides' },
    ], [t]);

    // 検索結果をフィルタリング
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const query = searchQuery.toLowerCase();
        return allArticles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
    }, [searchQuery, allArticles]);

    const helpCategories = [
        {
            icon: '🛒',
            titleKey: 'help.howToBid',
            descriptionKey: 'guide.howToBid.description',
            links: [
                { labelKey: 'help.howToBid', href: '/help/how-to-bid' },
                { labelKey: 'auctions.filters.title', href: '/help/auction-types' },
                { labelKey: 'bike.inspectionReport', href: '/help/inspection-reports' },
            ],
        },
        {
            icon: '🚢',
            titleKey: 'services.shipping.title',
            descriptionKey: 'services.shipping.description',
            links: [
                { labelKey: 'help.shippingGuide', href: '/help/shipping-guide' },
                { labelKey: 'dashboard.tracking.title', href: '/dashboard/tracking' },
                { labelKey: 'checkout.shipping', href: '/help/delivery-times' },
            ],
        },
        {
            icon: '💳',
            titleKey: 'checkout.paymentMethod',
            descriptionKey: 'services.finance.description',
            links: [
                { labelKey: 'checkout.paymentMethod', href: '/help/payment-methods' },
                { labelKey: 'footer.legal.termsOfService', href: '/legal/refunds' },
            ],
        },
        {
            icon: '👤',
            titleKey: 'dashboard.profile',
            descriptionKey: 'kyc.personal.description',
            links: [
                { labelKey: 'admin.settings', href: '/dashboard/settings' },
                { labelKey: 'kyc.title', href: '/help/verification' },
                { labelKey: 'services.support.title', href: '/help/security' },
            ],
        },
    ];

    const popularArticles = [
        { titleKey: 'help.howToBid', href: '/help/how-to-bid' },
        { titleKey: 'checkout.paymentMethod', href: '/help/payment-methods' },
        { titleKey: 'help.shippingGuide', href: '/help/shipping-guide' },
        { titleKey: 'bike.inspectionReport', href: '/help/inspection-reports' },
        { titleKey: 'footer.legal.termsOfService', href: '/legal/refunds' },
    ];

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6 text-[#1D1D1F]">{t('help.title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B] mb-12">
                        {t('contact.subtitle')}
                    </p>
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('common.search') + '...'}
                            className="w-full px-8 py-5 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg border border-[#D2D2D7] bg-white"
                        />
                        {/* 検索結果ドロップダウン */}
                        {searchQuery.trim() && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#D2D2D7] overflow-hidden z-50">
                                {searchResults.length > 0 ? (
                                    <ul className="max-h-80 overflow-y-auto">
                                        {searchResults.map((result) => (
                                            <li key={result.href}>
                                                <Link
                                                    href={result.href}
                                                    className="block px-6 py-4 hover:bg-[#F5F5F7] transition-colors border-b border-[#E5E5E5] last:border-b-0"
                                                >
                                                    <span className="text-[#1D1D1F] font-medium">{result.title}</span>
                                                    <span className="text-[#007AFF] ml-2">→</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="px-6 py-8 text-center text-[#86868B]">
                                        「{searchQuery}」に該当する記事が見つかりませんでした
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {helpCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white border border-[#D2D2D7] rounded-3xl p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                                <div className="text-6xl mb-6">{cat.icon}</div>
                                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-3">{t(cat.titleKey)}</h2>
                                <p className="text-[#86868B] text-lg mb-6">{t(cat.descriptionKey)}</p>
                                <ul className="space-y-3">
                                    {cat.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-[#007AFF] hover:underline text-lg font-medium">
                                                {t(link.labelKey)} →
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Articles Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-[#1D1D1F] mb-12 text-center">{t('help.faq')}</h2>
                    <div className="space-y-4">
                        {popularArticles.map((article) => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="block bg-white p-6 rounded-2xl border border-[#D2D2D7] hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <span className="text-[#1D1D1F] font-bold text-xl">{t(article.titleKey)}</span>
                                <span className="text-[#007AFF] ml-3 text-xl">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#007AFF] to-[#0056b3]">
                <div className="text-center max-w-[800px] px-6">
                    <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-6">{t('help.contact')}</h2>
                    <p className="text-[20px] md:text-[24px] text-blue-100 mb-12">
                        {t('services.support.description')}
                    </p>
                    <Link href="/contact">
                        <button className="bg-white hover:bg-gray-100 text-[#007AFF] font-bold px-12 py-5 rounded-full text-xl transition-all hover:scale-105 shadow-xl">
                            {t('footer.support.contactUs')}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
