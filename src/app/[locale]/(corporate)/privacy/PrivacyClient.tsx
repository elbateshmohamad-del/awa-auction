'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyClient() {
    const t = useTranslations('privacy');

    return (
        <div className="container mx-auto px-4 max-w-3xl py-20">
            <h1 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h1>
            <p className="text-gray-500 mb-12">{t('lastUpdated')}</p>

            <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.collection.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.collection.content')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.collection.items.personal')}</li>
                        <li>{t('sections.collection.items.contact')}</li>
                        <li>{t('sections.collection.items.payment')}</li>
                        <li>{t('sections.collection.items.activity')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.usage.title')}</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.usage.items.process')}</li>
                        <li>{t('sections.usage.items.verify')}</li>
                        <li>{t('sections.usage.items.communicate')}</li>
                        <li>{t('sections.usage.items.promotional')}</li>
                        <li>{t('sections.usage.items.improve')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.sharing.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.sharing.content')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.sharing.items.logistics')}</li>
                        <li>{t('sections.sharing.items.payment')}</li>
                        <li>{t('sections.sharing.items.legal')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.security.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.security.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.cookies.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.cookies.content')}
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.rights.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('sections.rights.content')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>{t('sections.rights.items.access')}</li>
                        <li>{t('sections.rights.items.correction')}</li>
                        <li>{t('sections.rights.items.deletion')}</li>
                        <li>{t('sections.rights.items.optout')}</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.contact.title')}</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {t('sections.contact.content')}<br />
                        <strong>{t('sections.contact.emailLabel')}</strong> privacy@awa-auction.com<br />
                        <strong>{t('sections.contact.addressLabel')}</strong> {t('sections.contact.address')}
                    </p>
                </section>
            </div>
        </div>
    );
}
