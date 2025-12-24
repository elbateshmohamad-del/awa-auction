export const metadata = {
    title: 'Cookie Policy | AWA Auction',
    description: 'AWA Auction Platform cookie policy - how we use cookies and similar technologies.',
};

export default function CookiesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-black text-gray-900 mb-4">Cookie Policy</h1>
                <p className="text-gray-500 mb-12">クッキーポリシー / Last updated: December 2024</p>

                {/* What are Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Cookies?</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Cookies are small text files that are stored on your device when you visit our website.
                        They help us provide you with a better experience by remembering your preferences
                        and understanding how you use our platform.
                    </p>
                </section>

                {/* Types of Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🔒</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Essential Cookies</h3>
                                    <p className="text-gray-600 text-sm">Required for the website to function properly. These cannot be disabled.</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• Session management</li>
                                        <li>• Security tokens</li>
                                        <li>• Login status</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📊</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Analytics Cookies</h3>
                                    <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website.</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• Page views and navigation</li>
                                        <li>• Time spent on pages</li>
                                        <li>• Error tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">⚙️</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Functional Cookies</h3>
                                    <p className="text-gray-600 text-sm">Remember your preferences and settings.</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• Language preference</li>
                                        <li>• Currency settings</li>
                                        <li>• Display preferences</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📢</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Marketing Cookies</h3>
                                    <p className="text-gray-600 text-sm">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                                        <li>• Ad targeting</li>
                                        <li>• Remarketing</li>
                                        <li>• Social media integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cookie List */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies We Use</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-3 font-bold text-gray-900">Cookie Name</th>
                                    <th className="text-left p-3 font-bold text-gray-900">Purpose</th>
                                    <th className="text-left p-3 font-bold text-gray-900">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_session</td>
                                    <td className="p-3 text-gray-600">Session management</td>
                                    <td className="p-3 text-gray-600">Session</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_auth</td>
                                    <td className="p-3 text-gray-600">Authentication token</td>
                                    <td className="p-3 text-gray-600">7 days</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_lang</td>
                                    <td className="p-3 text-gray-600">Language preference</td>
                                    <td className="p-3 text-gray-600">1 year</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">awa_currency</td>
                                    <td className="p-3 text-gray-600">Currency preference</td>
                                    <td className="p-3 text-gray-600">1 year</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-gray-800 font-mono">_ga</td>
                                    <td className="p-3 text-gray-600">Google Analytics</td>
                                    <td className="p-3 text-gray-600">2 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Managing Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        You can control and manage cookies in various ways. Please note that removing or
                        blocking cookies may impact your user experience and some functionality may no
                        longer be available.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>Browser Settings:</strong> Most browsers allow you to refuse or accept
                            cookies and to delete existing cookies. Check your browser&apos;s help section for
                            instructions.
                        </p>
                    </div>
                </section>

                {/* Third-Party Cookies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We may use third-party services that also place cookies on your device:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>Google Analytics</strong> - Website analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>Stripe</strong> - Payment processing</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-400">•</span>
                            <span><strong>Intercom</strong> - Customer support chat</span>
                        </li>
                    </ul>
                </section>

                {/* Contact */}
                <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Questions about Cookies?</h2>
                    <p className="text-gray-400 mb-6">Contact our privacy team for more information.</p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
                    >
                        Contact Us
                    </a>
                </section>
            </div>
        </div>
    );
}
