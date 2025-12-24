"use client";

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function HelpPage() {
    const t = useTranslations();

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
        <div>
            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#ffffff' }}>{t('help.title')}</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#bfdbfe' }}>
                        {t('contact.subtitle')}
                    </p>
                    <div className="max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder={t('common.search') + '...'}
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
                        {helpCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{cat.icon}</div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{t(cat.titleKey)}</h2>
                                <p className="text-gray-500 text-sm mb-4">{t(cat.descriptionKey)}</p>
                                <ul className="space-y-2">
                                    {cat.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-blue-600 hover:underline text-sm">
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

            {/* Popular Articles */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('help.faq')}</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {popularArticles.map((article) => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="block bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <span className="text-gray-900 font-medium">{t(article.titleKey)}</span>
                                <span className="text-gray-400 ml-2">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>{t('help.contact')}</h2>
                    <p className="mb-8 max-w-xl mx-auto" style={{ color: '#bfdbfe' }}>
                        {t('services.support.description')}
                    </p>
                    <Link href="/contact">
                        <button className="bg-white hover:bg-gray-100 text-[#0F4C81] font-bold px-8 py-3 rounded-full transition-colors">
                            {t('footer.support.contactUs')}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
