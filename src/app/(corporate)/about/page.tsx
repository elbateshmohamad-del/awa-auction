import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'About Us',
    description: 'Learn about AWA - Japan\'s trusted motorcycle auction platform connecting buyers worldwide with premium Japanese motorcycles.',
};

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-[#0F4C81] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: '#93c5fd' }}>About AWA</p>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ color: '#ffffff' }}>
                        Connecting the World<br />to Japanese Motorcycles
                    </h1>
                    <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#bfdbfe' }}>
                        Since our founding, we've been dedicated to making premium Japanese motorcycles accessible to buyers around the globe through transparent auctions and reliable logistics.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="w-12 h-1 bg-[#0F4C81] mb-6"></div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To bridge the gap between Japan's exceptional motorcycle market and enthusiasts worldwide. We believe every rider deserves access to quality vehicles, transparent pricing, and hassle-free international delivery.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-1 bg-[#3B82F6] mb-6"></div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To become the world's most trusted platform for cross-border motorcycle trade, setting the standard for quality assurance, customer service, and ethical business practices in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">10K+</p>
                            <p className="text-gray-500 font-medium mt-2">Bikes Sold</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">50+</p>
                            <p className="text-gray-500 font-medium mt-2">Countries Served</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">98%</p>
                            <p className="text-gray-500 font-medium mt-2">Customer Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">2015</p>
                            <p className="text-gray-500 font-medium mt-2">Year Founded</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Why Choose AWA?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            We've built our reputation on trust, transparency, and exceptional service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🔍
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Rigorous Inspection</h3>
                            <p className="text-gray-600">
                                Every motorcycle undergoes a 150-point inspection by certified mechanics before listing. What you see is what you get.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🌍
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Delivery</h3>
                            <p className="text-gray-600">
                                From Yokohama to your doorstep. We handle all export documentation, customs clearance, and shipping logistics.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🛡️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Buyer Protection</h3>
                            <p className="text-gray-600">
                                Secure payments, verified sellers, and comprehensive insurance options. Your investment is protected.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>Ready to Find Your Next Ride?</h2>
                    <p className="mb-8 max-w-xl mx-auto" style={{ color: '#bfdbfe' }}>
                        Browse thousands of inspected motorcycles from Japan's top auction houses.
                    </p>
                    <Link href="/catalog">
                        <button className="bg-white hover:bg-gray-100 text-[#0F4C81] font-bold px-8 py-3 rounded-full transition-colors">
                            Browse Catalog
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


