export const metadata = {
    title: 'Export Regulations | AWA Auction',
    description: 'Japanese motorcycle export regulations, customs requirements, and import guidelines for international buyers.',
};

export default function ExportPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-black text-gray-900 mb-4">Export Regulations</h1>
                <p className="text-gray-500 mb-12">輸出規制に関する情報 / International Export Guidelines</p>

                {/* Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Exporting motorcycles from Japan is subject to various regulations and requirements.
                        AWA handles all export documentation on behalf of buyers, ensuring compliance with
                        both Japanese export laws and destination country import regulations.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>Note:</strong> Import duties and taxes are the responsibility of the buyer
                            and vary by destination country.
                        </p>
                    </div>
                </section>

                {/* Japanese Export Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Japanese Export Requirements</h2>
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                        <div className="flex gap-4">
                            <span className="text-2xl">📋</span>
                            <div>
                                <h3 className="font-bold text-gray-900">Export Certificate</h3>
                                <p className="text-gray-600 text-sm">Required for all vehicles exported from Japan. AWA obtains this on your behalf.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🔧</span>
                            <div>
                                <h3 className="font-bold text-gray-900">Deregistration</h3>
                                <p className="text-gray-600 text-sm">Vehicle must be deregistered from Japanese roads before export.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">📦</span>
                            <div>
                                <h3 className="font-bold text-gray-900">Customs Declaration</h3>
                                <p className="text-gray-600 text-sm">Full documentation of vehicle specifications and value for customs clearance.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🛢️</span>
                            <div>
                                <h3 className="font-bold text-gray-900">Fuel & Battery</h3>
                                <p className="text-gray-600 text-sm">Fuel tank must be drained and battery disconnected for maritime shipping.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documents Provided */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents Provided by AWA</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Export Certificate (輸出抹消)',
                            'Bill of Lading (B/L)',
                            'Commercial Invoice',
                            'Packing List',
                            'Inspection Report',
                            'Original Keys & Documents',
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                <span className="text-green-500 text-xl">✓</span>
                                <span className="text-gray-800">{doc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Country-Specific Requirements */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Country-Specific Import Requirements</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇦🇪 United Arab Emirates</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Vehicles under 5 years old preferred</li>
                                <li>• GCC compliance certificate may be required</li>
                                <li>• Import duty: 5%</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇬🇧 United Kingdom</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• DVLA registration required after import</li>
                                <li>• MOT test within 14 days of registration</li>
                                <li>• Import duty: 6% + 20% VAT</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇺🇸 United States</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Must be 25+ years old OR EPA/DOT compliant</li>
                                <li>• CBP Form 7501 required</li>
                                <li>• Import duty: 2.4%</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-bold text-gray-900 mb-2">🇦🇺 Australia</h3>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• SEVS or RAWS approval required for newer models</li>
                                <li>• Quarantine inspection mandatory</li>
                                <li>• Import duty: 5% + 10% GST</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Prohibited Items */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited & Restricted Items</h2>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <p className="text-red-800 text-sm leading-relaxed">
                            The following items cannot be included in shipments:
                        </p>
                        <ul className="text-red-700 text-sm mt-3 space-y-1">
                            <li>• Fuel or flammable liquids</li>
                            <li>• Aftermarket exhaust systems (some countries)</li>
                            <li>• Performance ECU modifications (some countries)</li>
                            <li>• Weapons or sharp objects stored in vehicle</li>
                        </ul>
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Need Help with Export?</h2>
                    <p className="text-gray-400 mb-6">Our export specialists are here to assist you.</p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
                    >
                        Contact Support
                    </a>
                </section>
            </div>
        </div>
    );
}
