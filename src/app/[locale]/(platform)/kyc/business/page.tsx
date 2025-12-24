import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function BusinessKYCPage() {
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
                        <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md">BUSINESS</span>
                        <span className="text-gray-400 text-sm">Step 1 of 2</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Business Verification</h1>
                    <p className="text-gray-600 mt-2">
                        For sole proprietors and small businesses. Access professional auctions.
                    </p>
                </div>

                <Card className="border-t-4 border-t-purple-600">
                    <CardContent className="pt-8">
                        <form className="space-y-8">
                            {/* Business Information */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">1. Business Details</h3>
                                <Input label="Business Name" placeholder="Ex: Tanaka Trading" required />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="Registration Number (Optional)" placeholder="Ex: 12345678" />
                                    <Input label="Date Established" type="date" required />
                                </div>
                                <Input label="Industry" placeholder="Ex: Auto Sales, Import/Export" required />
                            </section>

                            {/* Owner Info */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">2. Owner Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="First Name" required />
                                    <Input label="Last Name" required />
                                    <Input label="Date of Birth" type="date" required />
                                    <Input label="Phone Number" required />
                                </div>
                            </section>

                            {/* Address */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">3. Business Address</h3>
                                <Input label="Street Address" required />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="City" required />
                                    <Input label="State/Province" required />
                                    <Input label="Postal Code" required />
                                    <Input label="Country" required />
                                </div>
                            </section>

                            {/* Docs */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">4. Document Upload</h3>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-purple-800">
                                        Please upload a <strong>Business License</strong> or equivalent document.
                                    </p>
                                </div>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-600 hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <div className="text-4xl mb-2 text-gray-300 group-hover:text-purple-600">📂</div>
                                    <p className="font-bold text-gray-900">Upload Business License</p>
                                    <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG (Max 5MB)</p>
                                </div>
                            </section>

                            <div className="pt-4 border-t">
                                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
