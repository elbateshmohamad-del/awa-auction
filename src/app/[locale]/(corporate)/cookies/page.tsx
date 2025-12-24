import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'Cookie Policy | AWA Auction',
    description: 'AWA Auction Platform cookie policy - how we use cookies and similar technologies.',
};

export default function CookiesPage() {
    const t = useTranslations('cookies');

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h1>
                <p className="text-gray-500 mb-12">{t('lastUpdated')}</p>

                {/* What are Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('intro.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('intro.content')}
                    </p>
                </section>

                {/* Types of Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('types.title')}</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🔒</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('types.essential.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('types.essential.desc')}</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• {t('types.essential.items.session')}</li>
                                        <li>• {t('types.essential.items.security')}</li>
                                        <li>• {t('types.essential.items.login')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📊</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('types.analytics.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('types.analytics.desc')}</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• {t('types.analytics.items.views')}</li>
                                        <li>• {t('types.analytics.items.time')}</li>
                                        <li>• {t('types.analytics.items.error')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">⚙️</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('types.functional.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('types.functional.desc')}</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• {t('types.functional.items.language')}</li>
                                        <li>• {t('types.functional.items.currency')}</li>
                                        <li>• {t('types.functional.items.display')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📢</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('types.marketing.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('types.marketing.desc')}</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• {t('types.marketing.items.targeting')}</li>
                                        <li>• {t('types.marketing.items.remarketing')}</li>
                                        <li>• {t('types.marketing.items.social')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cookie List */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('list.title')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-3 font-bold text-gray-900">{t('list.headers.name')}</th>
                                    <th className="text-left p-3 font-bold text-gray-900">{t('list.headers.purpose')}</th>
                                    <th className="text-left p-3 font-bold text-gray-900">{t('list.headers.duration')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_session</td>
                                    <td className="p-3 text-gray-600">{t('list.items.session.desc')}</td>
                                    <td className="p-3 text-gray-600">{t('list.items.session.duration')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_auth</td>
                                    <td className="p-3 text-gray-600">{t('list.items.auth.desc')}</td>
                                    <td className="p-3 text-gray-600">{t('list.items.auth.duration')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_lang</td>
                                    <td className="p-3 text-gray-600">{t('list.items.lang.desc')}</td>
                                    <td className="p-3 text-gray-600">{t('list.items.lang.duration')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_currency</td>
                                    <td className="p-3 text-gray-600">{t('list.items.currency.desc')}</td>
                                    <td className="p-3 text-gray-600">{t('list.items.currency.duration')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">_ga</td>
                                    <td className="p-3 text-gray-600">{t('list.items.ga.desc')}</td>
                                    <td className="p-3 text-gray-600">{t('list.items.ga.duration')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Managing Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('managing.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('managing.content')}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>{t('managing.browser')}</strong>
                        </p>
                    </div>
                </section>

                {/* Third-Party Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('thirdParty.title')}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {t('thirdParty.content')}
                    </p>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>{t('thirdParty.items.ga')}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>{t('thirdParty.items.stripe')}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>{t('thirdParty.items.intercom')}</strong></span>
                        </li>
                    </ul>
                </section>

                {/* Contact */}
                <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">{t('contact.title')}</h2>
                    <p className="text-gray-400 mb-6">{t('contact.content')}</p>
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
