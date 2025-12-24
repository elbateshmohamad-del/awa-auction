"use client";

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BiddingPanel } from '@/components/auction/BiddingPanel';
import { RealtimeBidBoard } from '@/components/auction/RealtimeBidBoard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useAuction } from '@/hooks/useAuction';

export default function BikeDetailClient() {
    // Mock Base Data (Static)
    const bike = {
        id: 1,
        name: "2022 Kawasaki Ninja ZX-10R KRT Edition",
        basePrice: 1850000,
        grade: "S" as const,
        images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
        specs: {
            mileage: "8,500 km",
            engine: "998cc Inline-4",
            vin: "ZXT02L-012345",
            color: "Lime Green / Ebony",
            year: 2022
        },
        location: "Yokohama Warehouse",
        seller: "AWA Official"
    };

    // Use Real-time Auction Hook
    const dummyDate = new Date();
    dummyDate.setDate(dummyDate.getDate() + 2);
    const { currentPrice, bids, timeLeft, placeBid } = useAuction(String(bike.id), bike.basePrice, dummyDate);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
                    <Link href="/catalog" className="hover:text-[#0F4C81]">Catalog</Link>
                    <span className="mx-2">/</span>
                    <Link href="/catalog?maker=Kawasaki" className="hover:text-[#0F4C81]">Kawasaki</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{bike.name}</span>
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content (Left) */}
                    <div className="flex-1 space-y-8">
                        {/* Header Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Badge grade={bike.grade} size="md" />
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Lot #82910
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{bike.name}</h1>
                            <div className="flex items-center gap-4 text-gray-500">
                                <span className="flex items-center gap-1">📍 {bike.location}</span>
                                <span className="flex items-center gap-1">👤 {bike.seller}</span>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative group cursor-zoom-in">
                                <div className="absolute inset-0 flex items-center justify-center text-8xl text-gray-400">
                                    🏍️
                                </div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4 text-white font-medium">Click to expand view</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {bike.images.map((_, i) => (
                                    <div key={i} className="aspect-[4/3] bg-gray-100 rounded-lg cursor-pointer hover:ring-2 ring-[#0F4C81] transition-all flex items-center justify-center text-2xl">
                                        🏍️
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#0F4C81] rounded-full"></span>
                                Vehicle Specifications
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Make / Model</p>
                                    <p className="font-bold text-gray-900">Kawasaki Ninja ZX-10R</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Year</p>
                                    <p className="font-bold text-gray-900">{bike.specs.year}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mileage</p>
                                    <p className="font-bold text-gray-900">{bike.specs.mileage}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Engine Size</p>
                                    <p className="font-bold text-gray-900">{bike.specs.engine}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">VIN / Frame No.</p>
                                    <p className="font-mono text-gray-900 bg-gray-50 px-2 py-1 rounded inline-block">{bike.specs.vin}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Color</p>
                                    <p className="font-bold text-gray-900">{bike.specs.color}</p>
                                </div>
                            </div>
                        </section>

                        {/* Inspection Report */}
                        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#0F4C81] rounded-full"></span>
                                Inspection Report
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-dashed">
                                        <span className="text-gray-600">Engine</span>
                                        <Badge variant="success">Excellent</Badge>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-dashed">
                                        <span className="text-gray-600">Frame</span>
                                        <Badge variant="success">Good</Badge>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-dashed">
                                        <span className="text-gray-600">Electrical</span>
                                        <Badge variant="success">Good</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-900 mb-3">Mechanic Notes</h3>
                                    <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg text-sm leading-relaxed border border-yellow-100">
                                        Engine starts immediately. Idle is stable. Small scratch on right cowl mostly invisible. Tires have 80% tread remaining. Ready to ride condition.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar (Right) - Bidding Panel */}
                    <div className="w-full lg:w-[400px] flex-shrink-0 space-y-6">
                        {/* Bidding Panel (Connected to Real-time Hook) */}
                        <BiddingPanel
                            currentPrice={currentPrice}
                            minIncrement={10000}
                            endsIn={timeLeft}
                            onBid={placeBid}
                            bidCount={bids.length}
                        />

                        {/* Real-time Bid Board */}
                        <RealtimeBidBoard bids={bids} />

                        {/* Buyer Protection */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-xl">🛡️</span> AWA Protection
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <span className="text-green-500">✓</span> Verified Inspection Report
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500">✓</span> Secure Payment Handling
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500">✓</span> Guaranteed Export Documents
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <Button variant="ghost" className="text-gray-500 hover:text-red-500">
                                <span className="mr-2">🚩</span> Report this listing
                            </Button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
