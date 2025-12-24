import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
    title: 'Supported Countries',
    description: 'AWA ships motorcycles to 50+ countries worldwide. Check if your country is supported.',
};

const regions = [
    {
        name: 'Asia & Oceania',
        countries: [
            { name: 'Thailand', flag: '🇹🇭', popular: true },
            { name: 'Vietnam', flag: '🇻🇳', popular: true },
            { name: 'Philippines', flag: '🇵🇭', popular: true },
            { name: 'Indonesia', flag: '🇮🇩', popular: false },
            { name: 'Malaysia', flag: '🇲🇾', popular: false },
            { name: 'Australia', flag: '🇦🇺', popular: true },
            { name: 'New Zealand', flag: '🇳🇿', popular: false },
            { name: 'Singapore', flag: '🇸🇬', popular: false },
            { name: 'Taiwan', flag: '🇹🇼', popular: false },
            { name: 'South Korea', flag: '🇰🇷', popular: false },
        ]
    },
    {
        name: 'Europe',
        countries: [
            { name: 'United Kingdom', flag: '🇬🇧', popular: true },
            { name: 'Germany', flag: '🇩🇪', popular: true },
            { name: 'France', flag: '🇫🇷', popular: false },
            { name: 'Italy', flag: '🇮🇹', popular: false },
            { name: 'Netherlands', flag: '🇳🇱', popular: false },
            { name: 'Spain', flag: '🇪🇸', popular: false },
            { name: 'Poland', flag: '🇵🇱', popular: false },
            { name: 'Belgium', flag: '🇧🇪', popular: false },
            { name: 'Sweden', flag: '🇸🇪', popular: false },
            { name: 'Switzerland', flag: '🇨🇭', popular: false },
        ]
    },
    {
        name: 'Americas',
        countries: [
            { name: 'United States', flag: '🇺🇸', popular: true },
            { name: 'Canada', flag: '🇨🇦', popular: true },
            { name: 'Mexico', flag: '🇲🇽', popular: false },
            { name: 'Brazil', flag: '🇧🇷', popular: false },
            { name: 'Chile', flag: '🇨🇱', popular: false },
            { name: 'Argentina', flag: '🇦🇷', popular: false },
        ]
    },
    {
        name: 'Middle East & Africa',
        countries: [
            { name: 'UAE', flag: '🇦🇪', popular: true },
            { name: 'Saudi Arabia', flag: '🇸🇦', popular: false },
            { name: 'Kenya', flag: '🇰🇪', popular: false },
            { name: 'South Africa', flag: '🇿🇦', popular: false },
            { name: 'Nigeria', flag: '🇳🇬', popular: false },
        ]
    },
];

export default function CountriesPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">We Ship Worldwide</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        AWA delivers to 50+ countries across Asia, Europe, the Americas, and beyond.
                    </p>
                </div>
            </section>

            {/* Countries */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {regions.map((region, i) => (
                        <div key={i} className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-[#0F4C81] rounded-full"></span>
                                {region.name}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {region.countries.map((country, j) => (
                                    <div
                                        key={j}
                                        className={`p-4 rounded-xl border text-center ${country.popular
                                                ? 'border-[#0F4C81] bg-blue-50'
                                                : 'border-gray-200 bg-white'
                                            }`}
                                    >
                                        <div className="text-3xl mb-2">{country.flag}</div>
                                        <p className="font-medium text-gray-900 text-sm">{country.name}</p>
                                        {country.popular && (
                                            <span className="text-[10px] text-blue-600 font-bold uppercase">Popular</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Not Listed */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Country?</h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        We may still be able to ship to you. Contact us with your location for a custom quote.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
