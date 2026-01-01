'use client';

import { useTranslations } from 'next-intl';

export default function TermsClient() {
    const t = useTranslations('terms');

    return (
        <div className="container mx-auto px-4 max-w-3xl py-20">
            <h1 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h1>
            <p className="text-gray-500 mb-12">{t('lastUpdated')}</p>

            <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.acceptance.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.acceptance.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.registration.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.registration.content')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.registration.rules.age')}</li>
                        <li>{t('sections.registration.rules.responsibility')}</li>
                        <li>{t('sections.registration.rules.security')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.auction.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.auction.content')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.auction.rules.retraction')}</li>
                        <li>{t('sections.auction.rules.winning')}</li>
                        <li>{t('sections.auction.rules.fees')}</li>
                        <li>{t('sections.auction.rules.payment')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.payment.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.payment.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.shipping.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.shipping.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.liability.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.liability.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.governing.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.governing.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.contact.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {t('sections.contact.content')}<br />
                        <strong>{t('sections.contact.emailLabel')}</strong> legal@awa-auction.com<br />
                        <strong>{t('sections.contact.addressLabel')}</strong> {t('sections.contact.address')}
                    </p>
                </section>
            </div>
        </div>
    );
}
