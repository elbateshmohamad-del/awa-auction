import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
    title: 'Inspection Standards | Guide',
    description: 'How AWA inspects and grades motorcycles. Understand our 150-point inspection process.',
};

export default function InspectionGuidePage() {
    const gradeDescriptions = [
        { grade: 'S', label: 'Excellent', desc: 'Like new. Minimal signs of use. No defects.' },
        { grade: 'A', label: 'Good', desc: 'Very good condition. Minor cosmetic wear only.' },
        { grade: 'B', label: 'Average', desc: 'Normal wear for age/mileage. Some visible marks.' },
        { grade: 'C', label: 'Fair', desc: 'Noticeable wear or minor mechanical issues.' },
        { grade: 'D', label: 'Project', desc: 'Significant issues. Best for experienced buyers.' },
    ];

    const inspectionPoints = [
        { category: 'Engine', items: ['Startup behavior', 'Idle stability', 'Oil condition', 'Compression', 'Exhaust smoke'] },
        { category: 'Transmission', items: ['Gear shifting', 'Clutch operation', 'Chain/belt condition'] },
        { category: 'Frame & Body', items: ['Frame integrity', 'Fork condition', 'Swingarm', 'Bodywork damage'] },
        { category: 'Electrical', items: ['Lights', 'Gauges', 'Battery', 'Wiring condition'] },
        { category: 'Brakes', items: ['Pad condition', 'Disc wear', 'Fluid condition', 'ABS function'] },
        { category: 'Suspension', items: ['Fork seal leaks', 'Shock absorbers', 'Linkage'] },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <nav className="mb-8 text-sm">
                        <Link href="/guide" className="text-[#0F4C81] hover:underline">← Back to Guides</Link>
                    </nav>

                    <h1 className="text-4xl font-black text-gray-900 mb-4">Inspection Standards</h1>
                    <p className="text-xl text-gray-500 mb-12">How we evaluate and grade every motorcycle.</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">150-Point Inspection</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Every motorcycle listed on AWA undergoes a comprehensive 150-point inspection by certified mechanics. We examine everything from engine internals to cosmetic condition.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Grading System</h2>
                            <div className="space-y-4">
                                {gradeDescriptions.map((g) => (
                                    <div key={g.grade} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                        <Badge grade={g.grade as any} size="lg" />
                                        <div>
                                            <span className="font-bold text-gray-900">{g.label}</span>
                                            <p className="text-sm text-gray-500">{g.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Check</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {inspectionPoints.map((cat) => (
                                    <div key={cat.category} className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">{cat.category}</h3>
                                        <ul className="space-y-1">
                                            {cat.items.map((item, i) => (
                                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                    <span className="text-green-500 text-xs">●</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency Guarantee</h2>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <p className="text-green-800">
                                    ✓ All known defects are documented and disclosed in the listing.<br />
                                    ✓ High-resolution photos of any damage are provided.<br />
                                    ✓ Inspection reports are available in English and Japanese.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <Link href="/catalog">
                            <Button variant="primary" size="lg">View Inspected Bikes</Button>
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
