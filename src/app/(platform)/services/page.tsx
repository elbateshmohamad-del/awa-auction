import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
    title: 'Our Services',
    description: 'Explore AWA\'s comprehensive services: motorcycle auctions, professional inspections, and worldwide shipping.',
};

const services = [
    {
        icon: '🏍️',
        title: 'Live Auctions',
        description: 'Real-time bidding on thousands of Japanese motorcycles. From sportbikes to cruisers, find your perfect ride.',
        features: ['Real-time bidding', 'Live price updates', '24/7 availability', 'Mobile-friendly'],
        link: '/services/auction',
        color: 'blue',
    },
    {
        icon: '🔬',
        title: 'Professional Inspections',
        description: 'Our certified mechanics perform comprehensive 150-point inspections on every vehicle before listing.',
        features: ['Engine diagnostics', 'Frame inspection', 'Electrical check', 'Road test'],
        link: '/services/inspection',
        color: 'green',
    },
    {
        icon: '🚢',
        title: 'Global Shipping',
        description: 'Door-to-door delivery to 50+ countries. We handle everything from export documents to customs clearance.',
        features: ['Container shipping', 'Air freight options', 'Insurance included', 'Tracking system'],
        link: '/services/shipping',
        color: 'orange',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">What We Offer</p>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        End-to-end solutions for buying Japanese motorcycles. From discovery to delivery, we've got you covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 -mt-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className={`h-2 ${service.color === 'blue' ? 'bg-blue-500' : service.color === 'green' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                <CardContent className="p-8">
                                    <div className="text-5xl mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2 mb-8">
                                        {service.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="text-green-500">✓</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={service.link}>
                                        <Button variant="ghost" className="group-hover:text-[#0F4C81] font-bold">
                                            Learn More →
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-500">Four simple steps to your dream motorcycle.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Browse', desc: 'Explore our catalog of inspected motorcycles.' },
                            { step: '02', title: 'Bid', desc: 'Place your bid in real-time auctions.' },
                            { step: '03', title: 'Win', desc: 'Secure your purchase and complete payment.' },
                            { step: '04', title: 'Receive', desc: 'We ship directly to your door.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-[#0F4C81] text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Questions?</h2>
                    <p className="text-blue-200 mb-8">Our team is here to help you every step of the way.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="accent" size="lg">Contact Us</Button>
                        </Link>
                        <Link href="/faq">
                            <Button variant="secondary" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                View FAQ
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
