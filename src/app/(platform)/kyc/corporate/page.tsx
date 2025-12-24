import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function CorporateKYCPage() {
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
                        <span className="bg-[#0F4C81] text-white text-xs font-bold px-2 py-1 rounded-md">CORPORATE</span>
                        <span className="text-gray-400 text-sm">Step 1 of 2</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Business Verification</h1>
                    <p className="text-gray-600 mt-2">
                        Verify your business to access higher bidding limits and dealer features.
                    </p>
                </div>

                <Card className="border-t-4 border-t-[#0F4C81]">
                    <CardContent className="pt-8">
                        <form className="space-y-8">
                            {/* Company Information Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">1. Company Information</h3>
                                <Input label="Registered Company Name" placeholder="Ex: AWA Motors Ltd." required />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="Registration Number / Tax ID" placeholder="Ex: 12345678" required />
                                    <Input label="Date of Incorporation" type="date" required />
                                </div>
                                <Input label="Company Website (Optional)" placeholder="https://..." />
                            </section>

                            {/* Representative Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">2. Authorized Representative</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="First Name" placeholder="Ex: Jane" required />
                                    <Input label="Last Name" placeholder="Ex: Smith" required />
                                    <Input label="Position / Title" placeholder="Ex: Director" required />
                                    <Input label="Email Address" type="email" required />
                                </div>
                            </section>

                            {/* Business Address Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">3. Registered Business Address</h3>
                                <Input label="Street Address" placeholder="1234 Business Park" required />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input label="City" placeholder="Tokyo" required />
                                    <Input label="State / Province" placeholder="Tokyo" required />
                                    <Input label="Postal Code" placeholder="100-0001" required />
                                    <Input label="Country" placeholder="Japan" required />
                                </div>
                            </section>

                            {/* Document Upload Section */}
                            <section className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">4. Business Documents</h3>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-blue-800">
                                        <strong>Required:</strong> Certificate of Incorporation / Business Registration. <br />
                                        <strong>Optional:</strong> VAT Certificate, Import License.
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    {/* Registration Document Upload */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#0F4C81] hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:bg-blue-100 group-hover:text-[#0F4C81]">
                                            📄
                                        </div>
                                        <p className="font-bold text-gray-900 text-lg">Business Registration</p>
                                        <p className="text-sm text-gray-500 mt-2">Upload PDF, JPG or PNG (Max 10MB)</p>
                                        <div className="mt-4">
                                            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">Select File</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="pt-4 border-t">
                                <button type="submit" className="w-full awa-button-primary">
                                    <span>Submit Application</span>
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    Business verification typically takes 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
