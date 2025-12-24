import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function KYCSelectionPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Simple Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black text-[#0F4C81]">AWA AUCTION</Link>
                    <div className="text-sm font-medium text-gray-500">Secure Identity Verification</div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-12 md:py-20 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Account Type</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        To comply with international regulations, we need to verify your identity.
                        Please select the type of account you wish to verify.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Individual Card */}
                    <Link href="/kyc/individual" className="group">
                        <div className="relative h-full bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#3B82F6] transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                            <div className="p-8 text-center h-full flex flex-col">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3B82F6] transition-colors">
                                    <span className="text-4xl group-hover:grayscale grayscale-0 transition-all">👤</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual</h3>
                                <p className="text-gray-600 mb-8 flex-1">
                                    For personal use. Buy motorcycles for yourself or your collection.
                                    Requires government-issued ID and proof of address.
                                </p>

                                <div className="flex flex-col gap-2 text-sm text-gray-500 mb-8 text-left bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Personal bidding limits
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Standard shipping options
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Credit card or bank transfer
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <span className="inline-block w-full py-3 px-6 bg-gray-100 text-gray-900 font-bold rounded-lg group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                                        Select Individual
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Corporate Card */}
                    <Link href="/kyc/corporate" className="group">
                        <div className="relative h-full bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#0F4C81] transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                            {/* Badge for Corporate */}
                            <div className="absolute top-0 right-0 bg-[#0F4C81] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                BUSINESS
                            </div>

                            <div className="p-8 text-center h-full flex flex-col">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0F4C81] transition-colors">
                                    <span className="text-4xl">🏢</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate</h3>
                                <p className="text-gray-600 mb-8 flex-1">
                                    For dealerships and businesses. High-volume bidding and resale capabilities.
                                    Requires company registration documents.
                                </p>

                                <div className="flex flex-col gap-2 text-sm text-gray-500 mb-8 text-left bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#0F4C81] font-bold">✓</span> Higher bidding limits
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#0F4C81] font-bold">✓</span> Container consolidation
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#0F4C81] font-bold">✓</span> Net 30 payment terms (subject to approval)
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <span className="inline-block w-full py-3 px-6 bg-gray-100 text-gray-900 font-bold rounded-lg group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">
                                        Select Corporate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
