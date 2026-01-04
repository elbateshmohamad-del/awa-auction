"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FilterState } from './FilterSidebar';

interface MobileFilterSheetProps {
    isOpen: boolean;
    onClose: () => void;
    counts: {
        makers: Record<string, number>;
        grades: Record<string, number>;
        regions: Record<string, number>;
        colors: Record<string, number>;
    };
    filters: FilterState;
    onApply: (newFilters: FilterState) => void;
    currencySymbol?: string;
}

const defaultFilters: FilterState = {
    makers: [],
    grades: [],
    regions: [],
    colors: [],
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    maxMileage: '',
    displacement: [],
    inspection: false,
    minScore: {
        overall: '',
        engine: '',
        frame: '',
        exterior: ''
    }
};

const defaultCounts = {
    makers: {},
    grades: {},
    regions: {},
    colors: {}
};

export function MobileFilterSheet({
    isOpen,
    onClose,
    counts = defaultCounts,
    filters: initialFilters = defaultFilters,
    onApply,
    currencySymbol = '¥'
}: MobileFilterSheetProps) {
    const t = useTranslations();
    // Local state for editing filters before applying
    const [localFilters, setLocalFilters] = useState<FilterState>(initialFilters);

    // Sync local filters when sheet opens or initial filters change
    useEffect(() => {
        if (isOpen) {
            setLocalFilters(initialFilters);
        }
    }, [isOpen, initialFilters]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleMakerToggle = (maker: string) => {
        const newMakers = localFilters.makers.includes(maker)
            ? localFilters.makers.filter(m => m !== maker)
            : [...localFilters.makers, maker];
        setLocalFilters({ ...localFilters, makers: newMakers });
    };

    const handleGradeToggle = (grade: string) => {
        const newGrades = localFilters.grades.includes(grade)
            ? localFilters.grades.filter(g => g !== grade)
            : [...localFilters.grades, grade];
        setLocalFilters({ ...localFilters, grades: newGrades });
    };

    const handleRegionToggle = (region: string) => {
        const newRegions = localFilters.regions.includes(region)
            ? localFilters.regions.filter(r => r !== region)
            : [...localFilters.regions, region];
        setLocalFilters({ ...localFilters, regions: newRegions });
    };

    const handleColorToggle = (color: string) => {
        const newColors = localFilters.colors.includes(color)
            ? localFilters.colors.filter(c => c !== color)
            : [...localFilters.colors, color];
        setLocalFilters({ ...localFilters, colors: newColors });
    };

    const handleDisplacementToggle = (disp: string) => {
        const newDisp = localFilters.displacement.includes(disp)
            ? localFilters.displacement.filter(d => d !== disp)
            : [...localFilters.displacement, disp];
        setLocalFilters({ ...localFilters, displacement: newDisp });
    };

    const handleInputChange = (field: keyof FilterState, value: string | boolean | any) => {
        setLocalFilters({ ...localFilters, [field]: value });
    };

    const handleScoreChange = (field: keyof typeof localFilters.minScore, value: string) => {
        setLocalFilters({
            ...localFilters,
            minScore: { ...localFilters.minScore, [field]: value }
        });
    };

    const clearAll = () => {
        setLocalFilters(defaultFilters);
    };

    const handleApply = () => {
        onApply(localFilters);
        onClose();
    };

    // Count active filters
    const activeFilterCount =
        localFilters.makers.length +
        localFilters.grades.length +
        localFilters.regions.length +
        localFilters.colors.length +
        localFilters.displacement.length +
        (localFilters.minPrice ? 1 : 0) +
        (localFilters.maxPrice ? 1 : 0) +
        (localFilters.minYear ? 1 : 0) +
        (localFilters.maxYear ? 1 : 0) +
        (localFilters.maxMileage ? 1 : 0) +
        (localFilters.inspection ? 1 : 0) +
        (localFilters.minScore.engine ? 1 : 0) +
        (localFilters.minScore.frame ? 1 : 0) +
        (localFilters.minScore.exterior ? 1 : 0) +
        (localFilters.minScore.overall ? 1 : 0);

    // Get sorted makers by count descending
    const sortedMakers = Object.entries(counts.makers)
        .sort(([, a], [, b]) => b - a)
        .map(([maker]) => maker);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Bottom Sheet */}
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl max-h-[85vh] flex flex-col animate-slide-up">
                {/* Handle */}
                <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
                    <h3 className="font-bold text-lg text-gray-900">{t('auctions.filters.title')}</h3>
                    <button
                        onClick={clearAll}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        {t('auctions.filters.clearAll')}
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-6">
                        {/* Makers */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.make')}</h4>
                            <div className="flex flex-wrap gap-2">
                                {sortedMakers.length > 0 ? sortedMakers.slice(0, 12).map((maker) => (
                                    <label
                                        key={maker}
                                        className={`flex items-center gap-2 cursor-pointer border px-3 py-2 rounded-full text-sm transition-colors ${localFilters.makers.includes(maker)
                                                ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                                                : 'border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={localFilters.makers.includes(maker)}
                                            onChange={() => handleMakerToggle(maker)}
                                            className="sr-only"
                                        />
                                        <span>{maker}</span>
                                        <span className="opacity-70">({counts.makers[maker]})</span>
                                    </label>
                                )) : (
                                    <p className="text-xs text-gray-400">No makers found</p>
                                )}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Displacement */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.displacement')}</h4>
                            <div className="flex flex-wrap gap-2">
                                {['50cc', '125cc', '250cc', '400cc', 'over400cc'].map((disp) => (
                                    <label
                                        key={disp}
                                        className={`cursor-pointer border px-3 py-2 rounded-full text-sm transition-colors ${localFilters.displacement.includes(disp)
                                                ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                                                : 'border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={localFilters.displacement.includes(disp)}
                                            onChange={() => handleDisplacementToggle(disp)}
                                            className="sr-only"
                                        />
                                        <span>{disp === 'over400cc' ? t('auctions.filters.displacementOver400') : `~ ${disp}`}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Grade */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('bike.condition')} (AWA)</h4>
                            <div className="grid grid-cols-6 gap-2">
                                {['S', 'A', 'B', 'C', 'D', 'E'].map((grade) => (
                                    <label key={grade} className="cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={localFilters.grades.includes(grade)}
                                            onChange={() => handleGradeToggle(grade)}
                                        />
                                        <div className={`text-center py-2 border rounded-lg text-sm font-bold transition-all ${localFilters.grades.includes(grade)
                                            ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                                            }`}>
                                            {grade}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Region */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.region')}</h4>
                            <div className="flex flex-wrap gap-2">
                                {Object.keys(counts.regions).map((region) => (
                                    <label
                                        key={region}
                                        className={`cursor-pointer border px-3 py-2 rounded-full text-sm transition-colors ${localFilters.regions.includes(region)
                                                ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                                                : 'border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={localFilters.regions.includes(region)}
                                            onChange={() => handleRegionToggle(region)}
                                            className="sr-only"
                                        />
                                        <span>{region || 'Unknown'}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Price Range */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">
                                {t('auctions.filters.priceRange')} ({currencySymbol})
                            </h4>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="number"
                                    placeholder="Min"
                                    className="h-10 text-sm"
                                    value={localFilters.minPrice}
                                    onChange={(e) => handleInputChange('minPrice', e.target.value)}
                                />
                                <span className="text-gray-400">-</span>
                                <Input
                                    type="number"
                                    placeholder="Max"
                                    className="h-10 text-sm"
                                    value={localFilters.maxPrice}
                                    onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Year Range */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.year')}</h4>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="number"
                                    placeholder="Min"
                                    className="h-10 text-sm"
                                    value={localFilters.minYear}
                                    onChange={(e) => handleInputChange('minYear', e.target.value)}
                                />
                                <span className="text-gray-400">-</span>
                                <Input
                                    type="number"
                                    placeholder="Max"
                                    className="h-10 text-sm"
                                    value={localFilters.maxYear}
                                    onChange={(e) => handleInputChange('maxYear', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Mileage */}
                        <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.mileage')}</h4>
                            <Input
                                type="number"
                                placeholder="Max km"
                                className="h-10 text-sm w-full"
                                value={localFilters.maxMileage}
                                onChange={(e) => handleInputChange('maxMileage', e.target.value)}
                            />
                        </div>

                        <div className="h-px bg-gray-100" />

                        {/* Inspection */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={localFilters.inspection}
                                onChange={(e) => handleInputChange('inspection', e.target.checked)}
                                className="w-5 h-5 border-2 border-gray-300 rounded text-[#0F4C81]"
                            />
                            <span className="text-sm font-bold text-gray-900">{t('auctions.filters.inspection')}</span>
                        </div>

                        {/* Bottom padding for safe area */}
                        <div className="h-24" />
                    </div>
                </div>

                {/* Fixed Apply Button */}
                <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 safe-area-bottom">
                    <Button
                        variant="primary"
                        className="w-full py-3 text-base font-bold"
                        onClick={handleApply}
                    >
                        {t('common.apply') || '適用'} {activeFilterCount > 0 && `(${activeFilterCount})`}
                    </Button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
                .safe-area-bottom {
                    padding-bottom: max(1rem, env(safe-area-inset-bottom));
                }
            `}</style>
        </>
    );
}

// Floating Action Button for Filter
interface FilterFABProps {
    onClick: () => void;
    activeCount?: number;
}

export function FilterFAB({ onClick, activeCount = 0 }: FilterFABProps) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#0F4C81] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0a3a64] transition-colors active:scale-95"
            aria-label="Open filters"
        >
            {/* Three lines filter icon */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="6" y1="12" x2="18" y2="12" />
                <line x1="8" y1="18" x2="16" y2="18" />
            </svg>

            {/* Badge for active filter count */}
            {activeCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {activeCount > 9 ? '9+' : activeCount}
                </span>
            )}
        </button>
    );
}
