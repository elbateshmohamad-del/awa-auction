"use client";
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useState, useEffect, useCallback } from 'react';
import { fetchExchangeRate, applyMargin, CurrencyCode } from '@/lib/currency';
import Link from 'next/link';

// Currency symbols map
const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    PHP: '₱',
    AED: 'Dh',
    JPY: '¥',
    EGP: 'E£',
    SAR: '﷼'
};

// Bike interface matching the database schema
interface Bike {
    id: string;
    bdsId: string;
    lane: string;
    auctionNumber: string;
    auctionDate: string;
    name: string;
    maker: string;
    makerConfirmed: boolean;
    region: string;
    inspectionStatus: string;
    listingType: string;
    vin: string;
    engineNumber: string;
    mileage: string;
    documentMileage: string;
    pastMileage: string;
    color: string;
    displacement: string;
    firstRegistration: string;
    inspection: string;
    hasParts: string;
    registrationNumber: string;
    startPrice: number;
    result: string;
    overallGrade: number;
    engineGrade: number;
    frontGrade: number;
    exteriorGrade: number;
    rearGrade: number;
    electricGrade: number;
    frameGrade: number;
    awaGrade: 'S' | 'A' | 'B' | 'C' | 'D';
    inspectionDetails: {
        engine: Record<string, string>;
        frontSuspension: Record<string, string>;
        exterior: Record<string, string>;
        rearSuspension: Record<string, string>;
        electrical: Record<string, string>;
        frame: Record<string, string>;
    };
    awaReport: string;
    sellerDeclaration: string;
    images: string[];
    videoUrls?: string[];
    importedAt: string;
    status: string;
    currentPrice?: number;
    historicalRates?: string;
}

interface MarketBikeDetailProps {
    bikeId: string;
    initialData?: Partial<Bike>;
    onClose?: () => void;
}

// Helper: Extract inspection images from all images array
function extractInspectionImages(images: string[]) {
    const inspectionImages: Record<string, string[]> = {
        engine: [],
        frontSuspension: [],
        exterior: [],
        rearSuspension: [],
        electrical: [],
        frame: []
    };

    images.forEach(img => {
        if (img.includes('_010_')) inspectionImages.engine.push(img);
        else if (img.includes('_020_')) inspectionImages.frontSuspension.push(img);
        else if (img.includes('_030_')) inspectionImages.exterior.push(img);
        else if (img.includes('_040_')) inspectionImages.rearSuspension.push(img);
        else if (img.includes('_050_')) inspectionImages.electrical.push(img);
        else if (img.includes('_060_')) inspectionImages.frame.push(img);
    });

    return inspectionImages;
}

// Helper: Get main gallery images (cube + parts images, not inspection)
function getMainGalleryImages(images: string[]) {
    return images.filter(img =>
        img.includes('image_cube') || img.includes('image_parts')
    );
}

import { useLocale } from 'next-intl';

// ... (imports remain)

export default function MarketBikeDetail({ bikeId, initialData }: MarketBikeDetailProps) {
    const locale = useLocale(); // Get current locale
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState<string[]>([]);
    const [bike, setBike] = useState<Bike | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currency, setCurrency] = useState<CurrencyCode>('JPY');
    const [exchangeRate, setExchangeRate] = useState(1);

    // Fetch bike data
    useEffect(() => {
        async function fetchBike() {
            setLoading(true); // Ensure loading state triggers on re-fetch
            try {
                // Pass locale to API to get translated values
                const response = await fetch(`/api/bikes/${bikeId}?locale=${locale}`);
                const data = await response.json();
                if (data.success) {
                    setBike(data.data);
                } else {
                    setError(data.error || 'Bike not found');
                }
            } catch (err) {
                setError('Failed to load bike data');
            } finally {
                setLoading(false);
            }
        }
        fetchBike();
    }, [bikeId, locale]); // Add locale to dependency array

    // Fetch exchange rate when currency changes (simplified for market view)
    useEffect(() => {
        if (currency === 'JPY') {
            setExchangeRate(1);
            return;
        }

        // Try to use historical rate if available
        if (bike?.historicalRates) {
            try {
                const rates = JSON.parse(bike.historicalRates);
                if (rates[currency]) {
                    setExchangeRate(rates[currency]);
                    return;
                }
            } catch (e) { }
        }

        // Fallback to current rate
        fetchExchangeRate(currency).then(rate => {
            const rateWithMargin = applyMargin(rate);
            setExchangeRate(rateWithMargin);
        });
    }, [currency, bike]);


    // Lightbox controls
    const openLightbox = useCallback((images: string[], startIndex: number = 0) => {
        setLightboxImages(images);
        setCurrentImageIndex(startIndex);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
    }, [lightboxImages.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    }, [lightboxImages.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox, nextImage, prevImage]);


    // Loading state
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto space-y-4 md:space-y-8 p-4 md:p-6">
                <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        <div className="aspect-[4/3] bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                    <div className="space-y-6">
                        <div className="h-32 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !bike) {
        return (
            <div className="flex flex-col items-center justify-center p-12">
                <div className="text-center">
                    <div className="text-4xl mb-4">🏍️</div>
                    <h1 className="text-xl font-bold text-gray-900 mb-2">Bike Data Unavailable</h1>
                    <p className="text-gray-500 mb-4">{error || 'Could not Retrieve bike details.'}</p>
                </div>
            </div>
        );
    }

    // Clean up the name
    const cleanName = bike.name ? bike.name.replace(/\s+/g, ' ').trim() : 'Unknown';

    // Extract images - defensivly
    const safeImages = Array.isArray(bike.images) ? bike.images : [];
    const mainGalleryImages = getMainGalleryImages(safeImages);
    const inspectionImages = extractInspectionImages(safeImages);
    const videoUrls = Array.isArray(bike.videoUrls) ? bike.videoUrls : [];

    // Inspection categories
    const inspectionCategories = [
        { key: 'engine', title: 'E/G（エンジン）', icon: '⚙️', grade: bike.engineGrade, data: bike.inspectionDetails?.engine || {}, images: inspectionImages.engine },
        { key: 'frontSuspension', title: 'F足（フロント）', icon: '🔧', grade: bike.frontGrade, data: bike.inspectionDetails?.frontSuspension || {}, images: inspectionImages.frontSuspension },
        { key: 'exterior', title: '外装', icon: '✨', grade: bike.exteriorGrade, data: bike.inspectionDetails?.exterior || {}, images: inspectionImages.exterior },
        { key: 'rearSuspension', title: 'R足（リア）', icon: '⛓️', grade: bike.rearGrade, data: bike.inspectionDetails?.rearSuspension || {}, images: inspectionImages.rearSuspension },
        { key: 'electrical', title: '電/保', icon: '⚡', grade: bike.electricGrade, data: bike.inspectionDetails?.electrical || {}, images: inspectionImages.electrical },
        { key: 'frame', title: '車台', icon: '🏗️', grade: bike.frameGrade, data: bike.inspectionDetails?.frame || {}, images: inspectionImages.frame },
    ];

    const displayPrice = bike.currentPrice || bike.startPrice;
    const finalPrice = Math.ceil(displayPrice / exchangeRate);

    return (
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                        onClick={closeLightbox}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`/api/proxy-image?url=${encodeURIComponent(lightboxImages[currentImageIndex])}`}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded"
                        />

                        {lightboxImages.length > 1 && (
                            <>
                                <button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2 bg-black/20 rounded-full"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                >
                                    &#8249;
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2 bg-black/20 rounded-full"
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                >
                                    &#8250;
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnails in Lightbox */}
                    {lightboxImages.length > 1 && (
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4" onClick={(e) => e.stopPropagation()}>
                            {lightboxImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={`/api/proxy-image?url=${encodeURIComponent(img)}`}
                                    className={`h-12 w-12 md:h-16 md:w-16 object-cover cursor-pointer border-2 rounded-md ${i === currentImageIndex ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    onClick={() => setCurrentImageIndex(i)}
                                    alt={`Thumbnail ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:gap-6 border-b border-gray-200 pb-4 md:pb-6">
                <Link
                    href="/market"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors w-fit"
                >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Market
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                            <Badge grade={bike.awaGrade} size="md" />
                            <span className={`text-xs font-bold px-2 py-1 rounded ${bike.status === 'sold' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {bike.status === 'sold' ? 'SOLD' : bike.status.toUpperCase()}
                            </span>
                            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                                {bike.region}・{bike.listingType}
                            </span>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">{cleanName}</h1>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-xs md:text-sm text-gray-600 font-mono">
                            <span className="bg-gray-100 px-2 py-1 rounded">Lot: {bike.auctionNumber}</span>
                            <span>VIN: {bike.vin}</span>
                            <span>{bike.auctionDate}</span>
                        </div>
                    </div>

                    {/* Currency Selector */}
                    <div className="w-full md:w-auto">
                        <select
                            className="h-10 w-full md:w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                        >
                            <option value="JPY">JPY (¥)</option>
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="AED">AED (Dh)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* LEFT COLUMN - Media (2/3 width) */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">

                    {/* Main Gallery */}
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <div
                            className="aspect-[4/3] bg-gray-100 relative group cursor-zoom-in"
                            onClick={() => openLightbox(mainGalleryImages, currentImageIndex)}
                        >
                            {mainGalleryImages.length > 0 ? (
                                <img
                                    src={`/api/proxy-image?url=${encodeURIComponent(mainGalleryImages[currentImageIndex] || '')}`}
                                    alt="Main"
                                    className="w-full h-full object-contain transition-opacity duration-300"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image Available
                                </div>
                            )}

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-opacity pointer-events-none text-sm md:text-base">
                                    Click to Expand
                                </span>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex flex-wrap gap-2 md:gap-3 bg-white">
                            {mainGalleryImages.map((src, i) => (
                                <SafeThumbnail
                                    key={i}
                                    src={`/api/proxy-image?url=${encodeURIComponent(src)}`}
                                    alt={`View ${i + 1}`}
                                    isSelected={currentImageIndex === i}
                                    onClick={() => setCurrentImageIndex(i)}
                                />
                            ))}
                        </div>
                    </Card>

                    {/* Dual Video Section */}
                    {videoUrls.length > 0 && (
                        <Card className="border-gray-200 shadow-sm">
                            <CardHeader className="border-b border-gray-100 bg-gray-50/50 p-4">
                                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    エンジン音動画
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    {videoUrls.slice(0, 2).map((url, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-md">
                                                <video
                                                    controls
                                                    className="w-full h-full"
                                                    preload="metadata"
                                                    crossOrigin="anonymous"
                                                >
                                                    <source src={url.startsWith('/') ? url : `/api/proxy-video?url=${encodeURIComponent(url)}`} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <p className="text-sm text-center font-medium text-gray-600">
                                                {idx === 0 ? '右側' : '左側'}エンジン音
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Inspection Details */}
                    <div className="space-y-4">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            検査情報
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {inspectionCategories.map((cat) => (
                                <InspectionBlock
                                    key={cat.key}
                                    title={`${cat.title} (${cat.grade}点)`}
                                    icon={cat.icon}
                                    grade={cat.grade}
                                    data={cat.data}
                                    images={cat.images}
                                    onImageClick={(images, index) => openLightbox(images, index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Specs & Grades (1/3 width) */}
                <div className="space-y-6">

                    {/* Sold Price Card */}
                    <Card className="bg-gradient-to-br from-[#0F4C81] to-[#1e5c94] text-white border-0 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                        </div>
                        <CardContent className="p-4 md:p-6 relative z-10">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-blue-100 text-xs md:text-sm font-medium uppercase tracking-wider">Sold Price</p>
                                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-bold">
                                    {currency}
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-4xl font-bold tracking-tight font-mono text-white">
                                    {CURRENCY_SYMBOLS[currency]}{finalPrice.toLocaleString()}
                                </span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/20 text-xs text-blue-100 flex flex-col gap-1">
                                <p>Original jPY: ¥{displayPrice.toLocaleString()}</p>
                                <p>Rate: 1 {currency} = {exchangeRate.toFixed(2)} JPY</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AWA Grades */}
                    <Card>
                        <CardHeader className="pb-3 p-4 md:p-6">
                            <CardTitle className="text-base md:text-lg">AWA評価点 (1-10)</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 md:p-6 pt-0">
                            <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                                <span className="text-gray-900 font-bold text-sm md:text-base">総合評価</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl font-black text-gray-900">{bike.overallGrade}</span>
                                    <span className="text-xs md:text-sm text-gray-600 font-bold">/ 10</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 gap-x-2 text-xs md:text-sm">
                                <GradeRow label="E/G" score={bike.engineGrade} />
                                <GradeRow label="F足" score={bike.frontGrade} />
                                <GradeRow label="外装" score={bike.exteriorGrade} />
                                <GradeRow label="R足" score={bike.rearGrade} />
                                <GradeRow label="電/保" score={bike.electricGrade} />
                                <GradeRow label="車台" score={bike.frameGrade} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Specifications */}
                    <Card>
                        <CardHeader className="p-4 md:p-6 pb-3">
                            <CardTitle className="text-base md:text-lg">車両情報</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100 text-sm">
                                <SpecRow label="メーカー" value={bike.maker || 'Unknown'} />
                                <SpecRow label="車台番号" value={bike.vin || '-'} />
                                <SpecRow label="エンジン型式" value={bike.engineNumber || '-'} />
                                <SpecRow label="排気量" value={bike.displacement || '-'} />
                                <SpecRow label="走行距離" value={bike.mileage || '-'} />
                                {bike.documentMileage && <SpecRow label="書類距離" value={bike.documentMileage} />}
                                <SpecRow label="色" value={bike.color || '-'} />
                                <SpecRow label="初年度" value={bike.firstRegistration || '-'} />
                                <SpecRow label="車検" value={bike.inspection || '-'} />
                                <SpecRow label="パーツ" value={bike.hasParts || '-'} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* AWA Report */}
                    {bike.awaReport && (
                        <Card className="bg-yellow-50/50 border-yellow-100">
                            <CardContent className="p-4">
                                <h3 className="text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">AWA報告</h3>
                                <p className="text-sm text-gray-900 leading-relaxed font-medium">
                                    {bike.awaReport}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Seller Declaration */}
                    {bike.sellerDeclaration && (
                        <Card className="bg-blue-50/50 border-blue-100">
                            <CardContent className="p-4">
                                <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">出品者申告</h3>
                                <p className="text-sm text-gray-900 leading-relaxed font-medium">
                                    {bike.sellerDeclaration}
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

// Helper component for hiding broken thumbnails
function SafeThumbnail({ src, alt, isSelected, onClick }: { src: string; alt: string; isSelected: boolean; onClick: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            onClick={onClick}
            className={`w-14 h-14 md:w-20 md:h-20 rounded-md overflow-hidden cursor-pointer transition-all relative flex-shrink-0 ${isSelected ? 'ring-2 ring-blue-600 ring-offset-2' : 'ring-1 ring-gray-200 hover:opacity-80'}`}
        >
            <img
                src={src}
                className="w-full h-full object-cover"
                alt={alt}
                onError={() => setIsVisible(false)}
            />
        </div>
    );
}

// Sub-components
function InspectionBlock({
    title,
    icon,
    grade,
    data,
    images,
    onImageClick,
}: {
    title: string;
    icon: string;
    grade: number;
    data: Record<string, string>;
    images: string[];
    onImageClick: (images: string[], index: number) => void;
}) {
    const hasIssues = Object.values(data).some(v => v && v.trim() !== '');
    const issueItems = Object.entries(data)
        .filter(([k, v]) => v && v.trim() !== '')
        .sort((a, b) => {
            // Extract number (keys are normalized by API to "N. Text", so \d+ works)
            const extractNum = (str: string) => {
                const match = str.match(/^\s*(\d+)/);
                if (!match) return 999;
                return parseInt(match[1], 10);
            };
            return extractNum(a[0]) - extractNum(b[0]);
        });

    // Get grade color
    let gradeColorClass = 'bg-gray-400';
    if (grade >= 7) gradeColorClass = 'bg-blue-500';
    else if (grade >= 5) gradeColorClass = 'bg-green-500';
    else if (grade >= 3) gradeColorClass = 'bg-amber-400';
    else gradeColorClass = 'bg-red-500';

    return (
        <Card className="overflow-hidden border-gray-200">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm font-bold text-gray-900">{title}</span>
                </div>
                <div className="flex items-center gap-2">
                    {images.length > 0 && (
                        <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
                            {images.length}枚
                        </span>
                    )}
                    <span className={`w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${gradeColorClass}`}>
                        {grade}
                    </span>
                </div>
            </div>
            <div className="p-4 space-y-3">
                {/* Images Row */}
                {images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all hover:opacity-80"
                                onClick={() => onImageClick(images, i)}
                            >
                                <img
                                    src={img ? `/api/proxy-image?url=${encodeURIComponent(img)}` : ''}
                                    className="w-full h-full object-cover"
                                    alt={`${title} ${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Issues or "All Good" */}
                {hasIssues ? (
                    <ul className="space-y-1">
                        {issueItems.map(([key, value]) => {
                            // Simplified Regex: Capture leading digits, then everything else
                            // Keys are normalized by API to "N. Text", so simple \d+ is sufficient
                            const match = key.match(/^\s*(\d+)(.*)$/);
                            let numberPart = '';
                            let textPart = key;

                            if (match) {
                                numberPart = match[1];
                                const rawText = match[2] || '';
                                // Clean separator from text (remove leading . - space)
                                textPart = rawText.replace(/^[.\-\)\s]+/, '');
                            }

                            const displayNumber = numberPart ? `${numberPart}.` : '';

                            return (
                                <li key={key} className="text-sm flex items-start border-b border-gray-100 pb-1 last:border-0 hover:bg-gray-50 p-1 rounded">
                                    {/* Number Column */}
                                    <span className="text-gray-400 font-mono w-8 flex-shrink-0 text-xs pt-0.5">
                                        {displayNumber}
                                    </span>

                                    {/* Item Name Column */}
                                    <span className="text-gray-700 font-semibold text-xs flex-grow pt-0.5 break-words">
                                        {textPart}
                                    </span>

                                    {/* Status Column */}
                                    <span className="text-amber-600 font-bold text-right text-xs ml-2 flex-shrink-0 pt-0.5 max-w-[45%]">
                                        {value}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-sm text-green-600 font-medium">問題なし ✓</p>
                )}
            </div>
        </Card>
    );
}

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between py-2 px-6 hover:bg-gray-50">
            <span className="text-gray-600 font-medium text-sm">{label}</span>
            <span className="font-bold text-gray-900 text-sm">{value}</span>
        </div>
    );
}

function GradeRow({ label, score, max = 10 }: { label: string; score: number; max?: number }) {
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
