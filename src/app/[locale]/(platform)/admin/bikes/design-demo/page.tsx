"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// --- MOCK DATA BASED ON HTML & SPEC ---
const DEMO_BIKE = {
    id: 'demo-123',
    name: 'NINJA400 (Design Demo)',
    maker: 'Kawasaki',
    vin: 'EX400G-A12345',
    region: 'Kanto',
    auctionNumber: '1234',
    startPrice: 450000,
    overallGrade: 5,
    engineGrade: 5,
    frontGrade: 4,
    exteriorGrade: 5,
    rearGrade: 4,
    electricGrade: 5,
    frameGrade: 5,

    engineNumber: 'EX400GE-12345',
    mileage: '12,345 km',
    color: 'Green/Black',
    displacement: '400cc',
    firstRegistration: '2019',
    inspection: '2025/12',
    documentMileage: '',

    // Inspection Details (Text)
    inspectionDetails: {
        engine: {
            '①Engine': 'Oil Leak (Small)',
            '②Cover': 'Scratches',
            '③Radiator': 'Fin bent'
        },
        frontSuspension: {
            '①Fork': 'Rust (Inner)',
            '②Stem': 'OK',
            '③Wheel': 'Scratches'
        },
        exterior: {
            '①Tank': 'Dent (Small)',
            '②Cowl': 'Cracked (Right)',
            '③Seat': 'Torn'
        },
        rearSuspension: {
            '①Swingarm': 'Scratches',
            '②Shock': 'Rust',
            '③Chain': 'Rust'
        },
        electrical: {
            '①Battery': 'Weak',
            '②Lights': 'OK',
        },
        frame: {
            '①Main': 'OK',
            '②DownTube': 'Scratches'
        }
    },

    // Media
    images: [
        'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_cube_high/000220251217_r.jpg',
        'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_cube_high/000220251217_l.jpg',
        'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_cube_high/000220251217_f.jpg',
        'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_cube_high/000220251217_a.jpg',
        'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_cube_high/000220251217_b.jpg',
    ],
    // Updated: Distinct Right/Left videos with working mock URLs
    videos: {
        right: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4',
        left: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    },

    // Updated: Inspection Images per category
    inspectionImages: {
        engine: [
            'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_item_high/000220251217_010_01.jpg',
            'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_item_high/000220251217_010_02.jpg'
        ],
        frontSuspension: [
            'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_item_high/000220251217_020_01.jpg'
        ],
        exterior: [
            'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_item_high/000220251217_030_01.jpg',
            'https://bdsc.jupiter.ac/auctiondata/bds/disp/bds/20251217/image_item_high/000220251217_030_02.jpg'
        ],
        rearSuspension: [],
        electrical: [],
        frame: []
    },

    // Other
    awaReport: '純正OPスライダー、ETC2.0付き。機関良好。',
    sellerDeclaration: 'ワンオーナー車。実走行。',
    notes: '小傷ありますが全体的に綺麗です。',
};

export default function DesignDemoPage() {
    const [selectedImage, setSelectedImage] = useState(DEMO_BIKE.images[0]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    // Helper for inspection images handling - maps src to index in main array if exists, or just opens as single viewer if not (simplified for demo)
    // For this demo, let's treat inspection images as separate for lightbox or just allow viewing them singly. 
    // To keep it simple and consistent with BikeDetailClient, we'll focus the "Next/Prev" mainly on the main gallery.
    // However, if the user clicks an inspection image, we can just show that one image in lightbox mode without nav, or add it to a temp list.
    // Let's implement full nav for the main gallery.
    const openMainGalleryLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 p-6 pb-24">
            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={DEMO_BIKE.images[currentImageIndex]}
                            alt="Full Screen View"
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                        />

                        {/* Prev Button */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => (prev === 0 ? DEMO_BIKE.images.length - 1 : prev - 1));
                            }}
                        >
                            &#8249;
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => (prev === DEMO_BIKE.images.length - 1 ? 0 : prev + 1));
                            }}
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Thumbnails in Lightbox */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4" onClick={(e) => e.stopPropagation()}>
                        {DEMO_BIKE.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className={`h-16 w-16 object-cover cursor-pointer border-2 rounded-md ${i === currentImageIndex ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                onClick={() => setCurrentImageIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-blue-600 hover:bg-blue-700">Design Demo v2</Badge>
                        <span className="text-gray-500 text-sm">Updated with Videos & Inspection Images</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{DEMO_BIKE.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 font-mono">
                        <span className="bg-gray-100 px-2 py-1 rounded">Lot: {DEMO_BIKE.auctionNumber}</span>
                        <span>VIN: {DEMO_BIKE.vin}</span>
                        <span>Region: {DEMO_BIKE.region}</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 transition-colors shadow-blue-200">
                        Edit Listing
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* LEFT COLUMN - Media (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Gallery (Simulated Lightbox Trigger) */}
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <div
                            className="aspect-[4/3] bg-gray-50 relative group cursor-zoom-in"
                            onClick={() => openMainGalleryLightbox(currentImageIndex)}
                        >
                            <img
                                src={DEMO_BIKE.images[currentImageIndex]} // Sync with lightbox index
                                alt="Main"
                                className="w-full h-full object-contain transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-opacity pointer-events-none">
                                    Click to Expand (Lightbox)
                                </span>
                            </div>
                        </div>
                        <div className="p-4 grid grid-cols-6 gap-3 bg-white">
                            {DEMO_BIKE.images.map((src, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`aspect-square rounded-md overflow-hidden cursor-pointer transition-all relative group ${currentImageIndex === i ? 'ring-2 ring-blue-600 ring-offset-2' : 'ring-1 ring-gray-200 text-opacity-90 hover:opacity-100'}`}
                                >
                                    <img src={src} className="w-full h-full object-cover" />
                                    <div className={`absolute inset-0 ${currentImageIndex === i ? 'bg-black/0' : 'bg-black/0 group-hover:bg-black/10'}`} />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Dual Video Section */}
                    <Card className="border-gray-200 shadow-sm">
                        <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Engine Sounds (Right & Left) - External Source
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-md">
                                        <video
                                            controls
                                            className="w-full h-full"
                                            preload="metadata"
                                        >
                                            <source src={DEMO_BIKE.videos.right} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <p className="text-sm text-center font-medium text-gray-600">Right Side Video</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-md">
                                        <video
                                            controls
                                            className="w-full h-full"
                                            preload="metadata"
                                        >
                                            <source src={DEMO_BIKE.videos.left} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <p className="text-sm text-center font-medium text-gray-600">Left Side Video</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Inspector Report (Grid Layout) */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Inspection Details
                        </h2>

                        <div className="flex flex-col gap-6">
                            <InspectionBlock
                                title="Engine & Mechanical"
                                icon="⚙️"
                                data={DEMO_BIKE.inspectionDetails.engine}
                                images={DEMO_BIKE.inspectionImages.engine}
                            />
                            <InspectionBlock
                                title="Front Suspension & Steering"
                                icon="🔧"
                                data={DEMO_BIKE.inspectionDetails.frontSuspension}
                                images={DEMO_BIKE.inspectionImages.frontSuspension}
                            />
                            <InspectionBlock
                                title="Exterior & Body"
                                icon="✨"
                                data={DEMO_BIKE.inspectionDetails.exterior}
                                images={DEMO_BIKE.inspectionImages.exterior}
                            />
                            <InspectionBlock
                                title="Rear Suspension"
                                icon="⛓️"
                                data={DEMO_BIKE.inspectionDetails.rearSuspension}
                                images={DEMO_BIKE.inspectionImages.rearSuspension}
                            />
                            <InspectionBlock
                                title="Electrical & Security"
                                icon="⚡"
                                data={DEMO_BIKE.inspectionDetails.electrical}
                                images={DEMO_BIKE.inspectionImages.electrical}
                            />
                            <InspectionBlock
                                title="Frame & Chassis"
                                icon="🏗️"
                                data={DEMO_BIKE.inspectionDetails.frame}
                                images={DEMO_BIKE.inspectionImages.frame}
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Specs & Grades (1/3 width) */}
                <div className="space-y-6">
                    {/* Price Card - UNCHANGED */}
                    <Card className="bg-gradient-to-br from-[#0F4C81] to-[#1e5c94] text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <p className="text-blue-100 text-sm font-medium mb-1">Start Price (USD)</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold tracking-tight font-mono text-white">
                                    ${Math.floor(DEMO_BIKE.startPrice / 150).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-xs text-blue-100 mt-2 opacity-90">
                                *Calculated at ¥150/$1
                            </p>
                        </CardContent>
                    </Card>

                    {/* AWA Grades Radar/Grid - UNCHANGED */}
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle>AWA Grades (1-10)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                                <span className="text-gray-900 font-bold">Overall Rating</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-gray-900">{DEMO_BIKE.overallGrade}</span>
                                    <span className="text-sm text-gray-600 font-bold">/ 10</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 gap-x-2 text-sm">
                                <GradeRow label="Engine" score={DEMO_BIKE.engineGrade} />
                                <GradeRow label="Front Suspension" score={DEMO_BIKE.frontGrade} />
                                <GradeRow label="Exterior" score={DEMO_BIKE.exteriorGrade} />
                                <GradeRow label="Rear Suspension" score={DEMO_BIKE.rearGrade} />
                                <GradeRow label="Electrical" score={DEMO_BIKE.electricGrade} />
                                <GradeRow label="Frame" score={DEMO_BIKE.frameGrade} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Basic Specs - UNCHANGED */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Specifications</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                                <SpecRow label="Maker" value={DEMO_BIKE.maker} />
                                <SpecRow label="Engine No" value={DEMO_BIKE.engineNumber} />
                                <SpecRow label="Displacement" value={DEMO_BIKE.displacement} />
                                <SpecRow label="Mileage" value={DEMO_BIKE.mileage} />
                                <SpecRow label="Doc Mileage" value={DEMO_BIKE.documentMileage || '-'} />
                                <SpecRow label="Color" value={DEMO_BIKE.color} />
                                <SpecRow label="Registered" value={DEMO_BIKE.firstRegistration} />
                                <SpecRow label="Inspection" value={DEMO_BIKE.inspection} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notes - UNCHANGED */}
                    <Card className="bg-yellow-50/50 border-yellow-100">
                        <CardContent className="p-4">
                            <h3 className="text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">AWA Report</h3>
                            <p className="text-sm text-gray-900 leading-relaxed font-medium">
                                {DEMO_BIKE.awaReport}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Sub-components for cleaner code
function InspectionBlock({
    title,
    icon,
    data,
    images,
}: {
    title: string,
    icon: string,
    data: Record<string, string>,
    images?: string[],
}) {
    // Simplified inspection block - removed callback for now or can verify standard image behavior
    if ((!data || Object.keys(data).length === 0) && (!images || images.length === 0)) return null;
    return (
        <Card className="overflow-hidden border-gray-200">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm font-bold text-gray-900">{title}</span>
                </div>
                {images && images.length > 0 && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">{images.length} images</span>
                )}
            </div>
            <div className="p-4 space-y-4">
                {/* Images Row */}
                {images && images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all hover:opacity-80"
                                onClick={() => window.open(img, '_blank')} // Simple view for inspection images for now
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`${title} ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Text Data */}
                <ul className="space-y-2">
                    {Object.entries(data).map(([key, value]) => (
                        <li key={key} className="text-sm flex justify-between items-start border-b border-gray-100 pb-1 last:border-0 hover:bg-gray-50 p-1 rounded">
                            <span className="text-gray-700 font-semibold text-xs mt-0.5">{key}</span>
                            <span className="text-gray-900 font-bold text-right ml-4">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between py-2 px-6 hover:bg-gray-50">
            <span className="text-gray-600 font-medium text-sm">{label}</span>
            <span className="font-bold text-gray-900 text-sm">{value}</span>
        </div>
    );
}

function GradeRow({ label, score, max = 10 }: { label: string, score: number, max?: number }) {
    const percentage = Math.min(100, Math.max(0, (score / max) * 100));

    // Dynamic color logic based on score (out of 10)
    let colorClass = 'bg-gray-400';
    if (score >= 7) colorClass = 'bg-blue-500';      // Excellent (7-10)
    else if (score >= 5) colorClass = 'bg-green-500'; // Good (5-6)
    else if (score >= 3) colorClass = 'bg-amber-400'; // Average/Fair (3-4)
    else colorClass = 'bg-red-500';                   // Poor (0-2)

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
                <span>{label}</span>
                <span>{score}/{max}</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
