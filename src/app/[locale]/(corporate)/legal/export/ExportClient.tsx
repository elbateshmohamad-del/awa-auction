'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ExportClient() {
    const t = useTranslations('exportRegulations');

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h1>
                <p className="text-gray-500 mb-12">{t('subtitle')}</p>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('overview.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('overview.content')}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>{t('overview.note')}</strong>
                        </p>
                    </div>
                </section>

                {/* Japanese Export Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('japan.title')}</h2>
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                        <div className="flex gap-4">
                            <span className="text-2xl">📋</span>
                            <div>
                                <h3 className="font-bold text-gray-900">{t('japan.items.certificate.title')}</h3>
                                <p className="text-gray-600 text-sm">{t('japan.items.certificate.desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🔧</span>
                            <div>
                                <h3 className="font-bold text-gray-900">{t('japan.items.deregistration.title')}</h3>
                                <p className="text-gray-600 text-sm">{t('japan.items.deregistration.desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">📦</span>
                            <div>
                                <h3 className="font-bold text-gray-900">{t('japan.items.customs.title')}</h3>
                                <p className="text-gray-600 text-sm">{t('japan.items.customs.desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🛢️</span>
                            <div>
                                <h3 className="font-bold text-gray-900">{t('japan.items.preparation.title')}</h3>
                                <p className="text-gray-600 text-sm">{t('japan.items.preparation.desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documents Provided */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('documents.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <span className="text-green-500 text-xl">✓</span>
                                <span className="text-gray-800">{t(`documents.items.${i}`)}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Country-Specific Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('countries.title')}</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇦🇪 {t('countries.uae.title')}</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• {t('countries.uae.items.0')}</li>
                                <li>• {t('countries.uae.items.1')}</li>
                                <li>• {t('countries.uae.items.2')}</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇬🇧 {t('countries.uk.title')}</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• {t('countries.uk.items.0')}</li>
                                <li>• {t('countries.uk.items.1')}</li>
                                <li>• {t('countries.uk.items.2')}</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇺🇸 {t('countries.usa.title')}</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• {t('countries.usa.items.0')}</li>
                                <li>• {t('countries.usa.items.1')}</li>
                                <li>• {t('countries.usa.items.2')}</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇦🇺 {t('countries.australia.title')}</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• {t('countries.australia.items.0')}</li>
                                <li>• {t('countries.australia.items.1')}</li>
                                <li>• {t('countries.australia.items.2')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Prohibited Items */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('prohibited.title')}</h2>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <p className="text-red-800 text-sm leading-relaxed">
                            {t('prohibited.desc')}
                        </p>
                        <ul className="text-red-700 text-sm mt-3 space-y-1">
                            <li>• {t('prohibited.items.0')}</li>
                            <li>• {t('prohibited.items.1')}</li>
                            <li>• {t('prohibited.items.2')}</li>
                            <li>• {t('prohibited.items.3')}</li>
                        </ul>
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">{t('contact.title')}</h2>
                    <p className="text-gray-400 mb-6">{t('contact.desc')}</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
                    >
                        {t('contact.button')}
                    </Link>
                </section>
            </div>
        </div>
    );
}
