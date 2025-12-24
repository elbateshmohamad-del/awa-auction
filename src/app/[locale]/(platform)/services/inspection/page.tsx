import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Inspection Services',
    description: 'AWA\'s 150-point motorcycle inspection by certified mechanics.',
};

export default function InspectionServicePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <p className="text-green-200 font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Professional Inspections</h1>
                        <p className="text-xl text-green-100 leading-relaxed">
                            Every motorcycle goes through our rigorous 150-point inspection by certified mechanics before listing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Our Inspection Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: '📋', title: 'Document Review', desc: 'Verify ownership, registration, and history.' },
                            { icon: '🔧', title: 'Mechanical Check', desc: 'Engine, transmission, brakes, and more.' },
                            { icon: '⚡', title: 'Electrical Test', desc: 'All systems, lights, and electronics.' },
                            { icon: '📸', title: 'Photo Documentation', desc: 'High-res photos of every angle and defect.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Check */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">150+ Points Checked</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { category: 'Engine', items: ['Start-up', 'Idle', 'Oil', 'Compression', 'Exhaust'] },
                            { category: 'Chassis', items: ['Frame', 'Forks', 'Swingarm', 'Bearings', 'Alignment'] },
                            { category: 'Electrical', items: ['Battery', 'Lights', 'Gauges', 'Starter', 'Charging'] },
                            { category: 'Brakes', items: ['Pads', 'Discs', 'Fluid', 'Lines', 'ABS'] },
                            { category: 'Suspension', items: ['Forks', 'Shock', 'Linkage', 'Seals', 'Damping'] },
                            { category: 'Cosmetics', items: ['Paint', 'Plastics', 'Chrome', 'Seat', 'Mirrors'] },
                        ].map((cat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3">{cat.category}</h3>
                                <ul className="space-y-1">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="text-green-500">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">See Inspected Bikes</h2>
                    <p className="text-green-100 mb-8">Browse our catalog of verified motorcycles.</p>
                    <Link href="/catalog">
                        <Button variant="accent" size="lg">View Catalog</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
