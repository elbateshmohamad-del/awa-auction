import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Our Partners',
    description: 'AWA works with trusted partners worldwide to deliver exceptional service.',
};

const partners = [
    { name: 'Yokohama Inspection Center', category: 'Inspection', desc: 'Japan\'s leading motorcycle inspection facility.' },
    { name: 'Pacific Shipping Co.', category: 'Logistics', desc: 'Reliable container shipping to 50+ countries.' },
    { name: 'Global Customs Solutions', category: 'Customs', desc: 'Expert customs brokerage services worldwide.' },
    { name: 'SecurePay International', category: 'Payments', desc: 'Secure cross-border payment processing.' },
    { name: 'Honda Japan', category: 'OEM', desc: 'Official parts and documentation support.' },
    { name: 'Yamaha Motor', category: 'OEM', desc: 'Technical specifications and history verification.' },
];

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Our Partners</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We work with the best to deliver the best.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {partners.map((partner, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] mb-2 block">
                                    {partner.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                                <p className="text-gray-500 text-sm">{partner.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Become a Partner</h2>
                    <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                        Interested in partnering with AWA? Let's discuss how we can work together.
                    </p>
                    <Link href="/contact">
                        <Button variant="accent" size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
