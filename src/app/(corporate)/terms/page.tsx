import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
    title: 'Terms of Service',
    description: 'AWA Auction Platform Terms of Service and User Agreement.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-500 mb-12">Last updated: December 1, 2025</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By accessing or using the AWA Auction Platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our Service.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Registration</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To participate in auctions, you must create an account and complete our KYC (Know Your Customer) verification process. You agree to provide accurate information and keep your account credentials secure.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>You must be at least 18 years old to use our Service</li>
                                <li>You are responsible for all activity under your account</li>
                                <li>You must notify us immediately of any unauthorized access</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Auction Rules</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All bids placed on our platform are binding. By placing a bid, you agree to purchase the item at your bid price if you are the winning bidder.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Bids cannot be retracted once placed</li>
                                <li>The highest bidder at auction close wins</li>
                                <li>Buyer's premium (5%) applies to all winning bids</li>
                                <li>Payment must be completed within 3 business days</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Accepted payment methods include bank wire transfer and credit cards. Full payment must be received before shipping can commence. Failure to pay may result in account suspension.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping & Delivery</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                AWA arranges international shipping on behalf of buyers. Shipping quotes are estimates and final costs may vary. Risk of loss transfers to buyer upon departure from Japan.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                AWA provides inspection reports in good faith but does not guarantee the accuracy of all information. Buyers are encouraged to conduct their own due diligence. Our liability is limited to the amount of fees paid to AWA.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                These Terms shall be governed by the laws of Japan. Any disputes shall be resolved in the courts of Yokohama, Kanagawa Prefecture.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For questions about these Terms, please contact us at:<br />
                                <strong>Email:</strong> legal@awa-auction.com<br />
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
