import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
    title: 'Privacy Policy',
    description: 'AWA Auction Platform Privacy Policy - How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 mb-12">Last updated: December 1, 2025</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect information you provide directly to us, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Personal identification (name, address, ID documents for KYC)</li>
                                <li>Contact information (email, phone number)</li>
                                <li>Payment information (billing address, transaction history)</li>
                                <li>Account activity (bids, purchases, watchlist)</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Process your bids and transactions</li>
                                <li>Verify your identity (KYC compliance)</li>
                                <li>Communicate about your orders and account</li>
                                <li>Send promotional materials (with your consent)</li>
                                <li>Improve our services and prevent fraud</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do not sell your personal information. We may share data with:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Shipping and logistics partners (to deliver your purchases)</li>
                                <li>Payment processors (to complete transactions)</li>
                                <li>Legal authorities (when required by law)</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Depending on your location, you may have the right to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt out of marketing communications</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For privacy-related inquiries, please contact:<br />
                                <strong>Email:</strong> privacy@awa-auction.com<br />
                                <strong>Address:</strong> 1-2-3 Minato Mirai, Nishi-ku, Yokohama 220-0012, Japan
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
