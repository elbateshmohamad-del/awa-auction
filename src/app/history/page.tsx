import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
    title: 'Our History',
    description: 'The AWA story. From a small Yokohama office to a global motorcycle auction platform.',
};

const milestones = [
    { year: '2015', title: 'Founded in Yokohama', desc: 'AWA started as a small export business with a vision to connect global buyers with Japanese motorcycles.' },
    { year: '2017', title: 'First Online Auction', desc: 'Launched our first digital auction platform, enabling international buyers to bid remotely.' },
    { year: '2019', title: '1,000 Bikes Sold', desc: 'Reached our first major milestone, proving the demand for transparent, inspected bike auctions.' },
    { year: '2021', title: 'Real-Time Bidding', desc: 'Introduced live bidding technology for instant price updates and better buyer experience.' },
    { year: '2023', title: 'Global Expansion', desc: 'Expanded shipping network to 50+ countries across 4 continents.' },
    { year: '2025', title: '10,000 Bikes Sold', desc: 'Celebrated our biggest milestone yet, cementing our position as a trusted global platform.' },
];

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Our History</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        From a small Yokohama office to a global marketplace.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                        {milestones.map((item, i) => (
                            <div key={i} className="relative flex items-start mb-12 last:mb-0">
                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#0F4C81] rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                                    <span className="text-[#0F4C81] font-black text-2xl">{item.year}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">What's Next?</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        We're constantly innovating. Expect new features, more destinations, and an even better buying experience.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
