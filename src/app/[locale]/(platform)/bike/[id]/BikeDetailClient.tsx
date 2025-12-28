"use client";

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from '@/i18n/navigation';
import { BiddingPanel } from '@/components/auction/BiddingPanel';
import { useAuction } from '@/hooks/useAuction';
import { useAuth } from '@/context/AuthContext';
import { useWatchlist } from '@/context/WatchlistContext';
import { fetchExchangeRate, applyMargin, CurrencyCode } from '@/lib/currency';

// Currency symbols map
const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    EGP: 'E£',
    JPY: '¥'
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
}

interface BikeDetailClientProps {
    bikeId: string;
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

export default function BikeDetailClient({ bikeId }: BikeDetailClientProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState<string[]>([]);
    const [bike, setBike] = useState<Bike | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [exchangeRate, setExchangeRate] = useState(150.00); // Default fallback

    // Get user's preferred currency from auth context
    const { user, registerBid } = useAuth();
    const selectedCurrency: CurrencyCode = (user?.preferredCurrency as CurrencyCode) || 'USD';

    // Fetch live exchange rate with safety margin when currency changes
    useEffect(() => {
        fetchExchangeRate(selectedCurrency).then(rate => {
            const rateWithMargin = applyMargin(rate); // Fixed 3 yen margin
            setExchangeRate(rateWithMargin);
        });
    }, [selectedCurrency]);

    // Fetch bike data
    useEffect(() => {
        async function fetchBike() {
            try {
                const response = await fetch(`/api/bikes/${bikeId}`);
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
    }, [bikeId]);

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

    // Calculate auction end time - Next Tuesday 12:00 JST
    const auctionEndTime = useMemo(() => {
        const now = new Date();
        const jstOffset = 9 * 60; // JST is UTC+9
        const nowUTC = now.getTime() + now.getTimezoneOffset() * 60000;
        const nowJST = new Date(nowUTC + jstOffset * 60000);

        // Find next Tuesday 12:00 JST
        const nextTuesday = new Date(nowJST);
        const currentDay = nowJST.getDay();
        const daysUntilTuesday = (2 - currentDay + 7) % 7 || 7; // Tuesday is day 2
        nextTuesday.setDate(nowJST.getDate() + daysUntilTuesday);
        nextTuesday.setHours(12, 0, 0, 0);

        // If it's Tuesday and before 12:00, use today
        if (currentDay === 2 && nowJST.getHours() < 12) {
            nextTuesday.setDate(nowJST.getDate());
        }

        // Convert back to local time for the Date object
        const nextTuesdayUTC = nextTuesday.getTime() - jstOffset * 60000;
        return new Date(nextTuesdayUTC - now.getTimezoneOffset() * 60000);
    }, []);

    // Use Real-time Auction Hook
    const { currentPrice, bids, timeLeft, placeBid } = useAuction(bikeId, bike?.startPrice || 0, auctionEndTime);
    const { isInWatchlist, toggleWatchlist } = useWatchlist();
    const router = useRouter();

    const [bidSuccess, setBidSuccess] = useState<{ amount: number } | null>(null);

    const handleBid = async (amount: number) => {
        if (!user) {
            router.push('/login');
            return;
        }

        const success = await placeBid(amount);
        if (success && registerBid) {
            registerBid(bikeId, auctionEndTime);

            // Show success feedback
            setBidSuccess({ amount });

            // Refresh the page to show latest data (server-side fetched)
            router.refresh();

            // Auto-hide after 5 seconds
            setTimeout(() => setBidSuccess(null), 5000);
        }
    };

    const isFavorite = isInWatchlist(bikeId);

    // Loading state
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto space-y-8 p-6 pt-24 pb-24">
                <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
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
            <div className="flex flex-col min-h-screen items-center justify-center pt-24">
                <div className="text-center">
                    <div className="text-6xl mb-4">🏍️</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Bike Not Found</h1>
                    <p className="text-gray-500 mb-4">{error || 'The bike you are looking for does not exist.'}</p>
                    <Link href="/auctions">
                        <Button>Browse Auctions</Button>
                    </Link>
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

    // Inspection categories (omitted for brevity, assume unchanged logic)
    const inspectionCategories = [
        { key: 'engine', title: 'E/G（エンジン）', icon: '⚙️', grade: bike.engineGrade, data: bike.inspectionDetails?.engine || {}, images: inspectionImages.engine },
        { key: 'frontSuspension', title: 'F足（フロント）', icon: '🔧', grade: bike.frontGrade, data: bike.inspectionDetails?.frontSuspension || {}, images: inspectionImages.frontSuspension },
        { key: 'exterior', title: '外装', icon: '✨', grade: bike.exteriorGrade, data: bike.inspectionDetails?.exterior || {}, images: inspectionImages.exterior },
        { key: 'rearSuspension', title: 'R足（リア）', icon: '⛓️', grade: bike.rearGrade, data: bike.inspectionDetails?.rearSuspension || {}, images: inspectionImages.rearSuspension },
        { key: 'electrical', title: '電/保', icon: '⚡', grade: bike.electricGrade, data: bike.inspectionDetails?.electrical || {}, images: inspectionImages.electrical },
        { key: 'frame', title: '車台', icon: '🏗️', grade: bike.frameGrade, data: bike.inspectionDetails?.frame || {}, images: inspectionImages.frame },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 p-6 pt-24 pb-24">
            {/* Bid Success Toast */}
            {bidSuccess && (
                <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-5 fade-in duration-300">
                    <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">✓</span>
                        </div>
                        <div>
                            <p className="font-bold">入札が完了しました！</p>
                            <p className="text-green-100 text-sm">
                                ¥{bidSuccess.amount.toLocaleString()} で入札しました
                            </p>
                        </div>
                        <button
                            onClick={() => setBidSuccess(null)}
                            className="ml-4 text-white/70 hover:text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
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
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                >
                                    &#8249;
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-110 transition-transform p-2"
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
                                    className={`h-16 w-16 object-cover cursor-pointer border-2 rounded-md ${i === currentImageIndex ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    onClick={() => setCurrentImageIndex(i)}
                                    alt={`Thumbnail ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Badge grade={bike.awaGrade} size="md" />
                        <span className={`text-xs font-bold px-2 py-1 rounded ${bike.inspectionStatus === '検査済' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {bike.inspectionStatus}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                            {bike.region}・{bike.listingType}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{cleanName}</h1>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 font-mono">
                        <span className="bg-gray-100 px-2 py-1 rounded">Lot: {bike.auctionNumber}</span>
                        <span>VIN: {bike.vin}</span>
                        <span>{bike.auctionDate}</span>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        onClick={() => toggleWatchlist(bikeId)}
                        className={`p-2 rounded-full border transition-all duration-300 active:scale-75 hover:scale-110 cursor-pointer ${isFavorite
                            ? 'bg-red-50 border-red-200 text-red-500 hover:bg-red-100'
                            : 'bg-white border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500'
                            }`}
                        title={isFavorite ? "Remove from Watchlist" : "Add to Watchlist"}
                    >
                        <span className="text-xl">{isFavorite ? '❤️' : '🤍'}</span>
                    </button>
                    <Link href="/auctions">
                        <Button variant="secondary">← Back to Auctions</Button>
                    </Link>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* LEFT COLUMN - Media (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Main Gallery */}
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <div
                            className="aspect-[4/3] bg-gray-100 relative group cursor-zoom-in"
                            onClick={() => openLightbox(mainGalleryImages, currentImageIndex)}
                        >
                            <img
                                src={`/api/proxy-image?url=${encodeURIComponent(mainGalleryImages[currentImageIndex] || '')}`}
                                alt="Main"
                                className="w-full h-full object-contain transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-opacity pointer-events-none">
                                    Click to Expand
                                </span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-wrap gap-3 bg-white">
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
                            <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    エンジン音動画
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
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
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
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

                    {/* Bidding Panel */}
                    <BiddingPanel
                        currentPrice={currentPrice}
                        minIncrement={10000}
                        endsIn={timeLeft}
                        onBid={handleBid}
                        bidCount={bids.length}
                        isWinning={bids.length > 0 && bids[0].isMine}
                        currencySymbol={CURRENCY_SYMBOLS[selectedCurrency]}
                        exchangeRate={exchangeRate}
                        currencyCode={selectedCurrency}
                        isFirstBid={!bids.some(b => b.isMine)}
                    />

                    {/* Price Card */}
                    <Card className="bg-gradient-to-br from-[#0F4C81] to-[#1e5c94] text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-blue-100 text-sm font-medium">スタート価格</p>
                                <div className="flex items-center gap-1">
                                    <span className="bg-white/20 text-white text-sm px-2 py-1 rounded">
                                        {selectedCurrency}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold tracking-tight font-mono text-white">
                                    {CURRENCY_SYMBOLS[selectedCurrency]}{Math.ceil(bike.startPrice / exchangeRate).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-xs text-blue-100 mt-2 opacity-90">
                                ≈ ¥{bike.startPrice.toLocaleString()} (at ¥{exchangeRate.toFixed(2)}/{CURRENCY_SYMBOLS[selectedCurrency]}1)
                            </p>
                        </CardContent>
                    </Card>

                    {/* AWA Grades */}
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle>AWA評価点 (1-10)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                                <span className="text-gray-900 font-bold">総合評価</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-gray-900">{bike.overallGrade}</span>
                                    <span className="text-sm text-gray-600 font-bold">/ 10</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 gap-x-2 text-sm">
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
                        <CardHeader>
                            <CardTitle>車両情報</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
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
            className={`w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden cursor-pointer transition-all relative flex-shrink-0 ${isSelected ? 'ring-2 ring-blue-600 ring-offset-2' : 'ring-1 ring-gray-200 hover:opacity-80'}`}
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
    const issueItems = Object.entries(data).filter(([k, v]) => v && v.trim() !== '');

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
                        {issueItems.map(([key, value]) => (
                            <li key={key} className="text-sm flex justify-between items-start border-b border-gray-100 pb-1 last:border-0 hover:bg-gray-50 p-1 rounded">
                                <span className="text-gray-700 font-semibold text-xs">{key}</span>
                                <span className="text-amber-600 font-bold text-right ml-4 text-xs">{value}</span>
                            </li>
                        ))}
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
