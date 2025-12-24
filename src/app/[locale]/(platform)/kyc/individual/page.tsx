import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function IndividualKYCPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black text-[#0F4C81]">AWA AUCTION</Link>
                    <div className="text-sm font-medium text-gray-500">
                        <Link href="/kyc" className="hover:text-[#0F4C81]">← Back to Type Selection</Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-3xl">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-[#0F4C81] text-xs font-bold px-2 py-1 rounded-md">INDIVIDUAL</span>
                        <span className="text-gray-400 text-sm">Step 1 of 2</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Identity Verification</h1>
                    <p className="text-gray-600 mt-2">
                        Please provide your personal information exactly as it appears on your government-issued ID.
                    </p>
                </div>

                <Card className="border-t-4 border-t-[#0F4C81]">
                    <CardContent className="pt-8">
                        <form className="space-y-8">
                            {/* Personal Information Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">1. Personal Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="First Name" placeholder="Ex: John" required />
                                    <Input label="Middle Name (Optional)" placeholder="Ex: Quincy" />
                                    <Input label="Last Name" placeholder="Ex: Doe" required />
                                    <Input label="Date of Birth" type="date" required />
                                </div>
                                <Input label="Nationality" placeholder="Select your nationality" required />
                            </section>

                            {/* Address Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">2. Residential Address</h3>
                                <Input label="Street Address" placeholder="1234 Main St" required />
                                <Input label="Apartment / Suite / Unit" placeholder="Apt 101" />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="City" placeholder="New York" required />
                                    <Input label="State / Province / Region" placeholder="NY" required />
                                    <Input label="Postal / Zip Code" placeholder="10001" required />
                                    <Input label="Country" placeholder="United States" required />
                                </div>
                            </section>

                            {/* Document Upload Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">3. Document Upload</h3>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-blue-800">
                                        <strong>Accepted Documents:</strong> Passport, Driver&apos;s License, National ID Card. <br />
                                        Document must be valid and clearly visible.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Front Side Upload */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0F4C81] hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400 group-hover:bg-blue-100 group-hover:text-[#0F4C81]">
                                            📷
                                        </div>
                                        <p className="font-medium text-gray-900">Front Side</p>
                                        <p className="text-xs text-gray-500 mt-1">Click to upload or drag & drop</p>
                                    </div>

                                    {/* Back Side Upload */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0F4C81] hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400 group-hover:bg-blue-100 group-hover:text-[#0F4C81]">
                                            🔄
                                        </div>
                                        <p className="font-medium text-gray-900">Back Side (Optional)</p>
                                        <p className="text-xs text-gray-500 mt-1">Click to upload or drag & drop</p>
                                    </div>
                                </div>
                            </section>

                            <div className="pt-4 border-t">
                                <button type="submit" className="w-full awa-button-primary">
                                    <span>Submit for Verification</span>
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By submitting, you consent to the processing of your personal data for identity verification purposes.
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
