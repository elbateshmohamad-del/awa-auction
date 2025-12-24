import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Export Guide | Guide',
    description: 'Understanding Japanese motorcycle export procedures. Deregistration, documents, and customs.',
};

export default function ExportGuidePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <nav className="mb-8 text-sm">
                        <Link href="/guide" className="text-[#0F4C81] hover:underline">← Back to Guides</Link>
                    </nav>

                    <h1 className="text-4xl font-black text-gray-900 mb-4">Export Guide</h1>
                    <p className="text-xl text-gray-500 mb-12">Understanding Japanese motorcycle export procedures.</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Process Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Japan has strict regulations for vehicle exports. AWA handles all domestic paperwork, ensuring a smooth process for international buyers.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Deregistration</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Before export, all vehicles must be deregistered from Japan's vehicle registry (運輸局). This officially removes the vehicle from Japanese roads.
                            </p>
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <p className="text-yellow-800">
                                    ⚠️ This process is mandatory and takes 3-5 business days.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Export Certificate</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Japan Customs issues an Export Certificate (輸出抹消仮登録証明書) confirming the vehicle is cleared for export. This document is essential for import registration in your country.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Customs Clearance</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We prepare all necessary customs documentation:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Commercial Invoice</li>
                                <li>Packing List</li>
                                <li>Bill of Lading (B/L)</li>
                                <li>Certificate of Origin (if required)</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Shipping</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Motorcycles are carefully prepared, drained of fluids, and secured in shipping containers. We offer:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Shared Container</h4>
                                    <p className="text-sm text-gray-600">Cost-effective option, multiple bikes share space.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Exclusive Container</h4>
                                    <p className="text-sm text-gray-600">Faster and more secure for high-value vehicles.</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Responsibilities</h2>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <p className="text-blue-800 mb-4">
                                    <strong>Import Side:</strong> You are responsible for customs clearance in your country.
                                </p>
                                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                                    <li>Import duties and taxes</li>
                                    <li>Compliance testing (if applicable)</li>
                                    <li>Local registration</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <Link href="/countries">
                            <Button variant="primary" size="lg">View Supported Countries</Button>
                        </Link>
                        <Link href="/guide">
                            <Button variant="ghost" size="lg">More Guides</Button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
