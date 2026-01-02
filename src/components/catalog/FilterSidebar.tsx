"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// Define types for the filter state and props
export interface FilterState {
    makers: string[];
    grades: string[];
    regions: string[];
    colors: string[];
    minPrice: string;
    maxPrice: string;
    minYear: string;
    maxYear: string;
    maxMileage: string;
    displacement: string[]; // ['50cc', '125cc', '250cc', '400cc', 'over400cc']
    inspection: boolean;
    minScore: {
        overall: string;
        engine: string;
        frame: string;
        exterior: string;
    };
}

interface FilterSidebarProps {
    counts: {
        makers: Record<string, number>;
        grades: Record<string, number>;
        regions: Record<string, number>;
        colors: Record<string, number>;
    };
    filters: FilterState;
    onFilterChange: (newFilters: FilterState) => void;
    currencySymbol?: string;
}

// Default empty state to avoid crashes if parent doesn't provide data immediately
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

export function FilterSidebar({
    counts = defaultCounts,
    filters = defaultFilters,
    onFilterChange,
    currencySymbol = '¥'
}: Partial<FilterSidebarProps>) {
    const t = useTranslations();

    // If onFilterChange is missing (during migration/dev), use a dummy handler
    const safeOnFilterChange = onFilterChange || ((_f: FilterState) => console.warn('Filter handler missing'));

    const handleMakerToggle = (maker: string) => {
        const newMakers = filters.makers.includes(maker)
            ? filters.makers.filter(m => m !== maker)
            : [...filters.makers, maker];
        safeOnFilterChange({ ...filters, makers: newMakers });
    };

    const handleGradeToggle = (grade: string) => {
        const newGrades = filters.grades.includes(grade)
            ? filters.grades.filter(g => g !== grade)
            : [...filters.grades, grade];
        safeOnFilterChange({ ...filters, grades: newGrades });
    };

    const handleRegionToggle = (region: string) => {
        const newRegions = filters.regions.includes(region)
            ? filters.regions.filter(r => r !== region)
            : [...filters.regions, region];
        safeOnFilterChange({ ...filters, regions: newRegions });
    };

    const handleColorToggle = (color: string) => {
        const newColors = filters.colors.includes(color)
            ? filters.colors.filter(c => c !== color)
            : [...filters.colors, color];
        safeOnFilterChange({ ...filters, colors: newColors });
    };

    const handleDisplacementToggle = (disp: string) => {
        const newDisp = filters.displacement.includes(disp)
            ? filters.displacement.filter(d => d !== disp)
            : [...filters.displacement, disp];
        safeOnFilterChange({ ...filters, displacement: newDisp });
    };

    const handleInputChange = (field: keyof FilterState, value: string | boolean | any) => {
        safeOnFilterChange({ ...filters, [field]: value });
    };

    const handleScoreChange = (field: keyof typeof filters.minScore, value: string) => {
        safeOnFilterChange({
            ...filters,
            minScore: { ...filters.minScore, [field]: value }
        });
    };

    const clearAll = () => {
        safeOnFilterChange(defaultFilters);
    };

    // Get sorted makers by count descending
    const sortedMakers = Object.entries(counts.makers)
        .sort(([, a], [, b]) => b - a)
        .map(([maker]) => maker);

    return (
        <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900">{t('auctions.filters.title')}</h3>
                    <button
                        onClick={clearAll}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        {t('auctions.filters.clearAll')}
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Makers */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.make')}</h4>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                            {sortedMakers.length > 0 ? sortedMakers.map((maker) => (
                                <label key={maker} className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={filters.makers.includes(maker)}
                                            onChange={() => handleMakerToggle(maker)}
                                            className="peer w-4 h-4 border-2 border-gray-300 rounded text-[#0F4C81] focus:ring-[#0F4C81] focus:ring-offset-0"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{maker}</span>
                                    <span className="text-xs text-gray-400 ml-auto tabular-nums">({counts.makers[maker]})</span>
                                </label>
                            )) : (
                                <p className="text-xs text-gray-400">No makers found</p>
                            )}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Region */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.region')}</h4>
                        <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                            {Object.keys(counts.regions).map((region) => (
                                <label key={region} className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.regions.includes(region)}
                                        onChange={() => handleRegionToggle(region)}
                                        className="w-4 h-4 border-2 border-gray-300 rounded text-[#0F4C81] focus:ring-[#0F4C81]"
                                    />
                                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{region || 'Unknown'}</span>
                                    <span className="text-xs text-gray-400 ml-auto">({counts.regions[region]})</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Displacement */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.displacement')}</h4>
                        <div className="space-y-2">
                            {['50cc', '125cc', '250cc', '400cc', 'over400cc'].map((disp) => (
                                <label key={disp} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.displacement.includes(disp)}
                                        onChange={() => handleDisplacementToggle(disp)}
                                        className="w-4 h-4 border-2 border-gray-300 rounded text-[#0F4C81]"
                                    />
                                    <span className="text-sm text-gray-600">
                                        {disp === 'over400cc' ? t('auctions.filters.displacementOver400') : `~ ${disp}`}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Year Range */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.year')}</h4>
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                placeholder="Min"
                                className="h-9 text-sm"
                                value={filters.minYear}
                                onChange={(e) => handleInputChange('minYear', e.target.value)}
                            />
                            <span className="text-gray-400">-</span>
                            <Input
                                type="number"
                                placeholder="Max"
                                className="h-9 text-sm"
                                value={filters.maxYear}
                                onChange={(e) => handleInputChange('maxYear', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Mileage */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.mileage')}</h4>
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                placeholder="Max km"
                                className="h-9 text-sm w-full"
                                value={filters.maxMileage}
                                onChange={(e) => handleInputChange('maxMileage', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Color */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.color')}</h4>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(counts.colors).filter(c => c).map((color) => (
                                <label key={color} className="flex items-center gap-2 cursor-pointer border px-2 py-1 rounded text-xs hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        checked={filters.colors.includes(color)}
                                        onChange={() => handleColorToggle(color)}
                                        className="w-3 h-3 border-gray-300 rounded text-[#0F4C81]"
                                    />
                                    <span className="text-gray-600 truncate max-w-[80px]">{color}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Inspection */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={filters.inspection}
                            onChange={(e) => handleInputChange('inspection', e.target.checked)}
                            className="w-4 h-4 border-2 border-gray-300 rounded text-[#0F4C81]"
                        />
                        <span className="text-sm font-bold text-gray-900">{t('auctions.filters.inspection')}</span>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Scores */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('auctions.filters.minimumScores')}</h4>
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2 items-center">
                                <span className="text-xs text-gray-600">{t('auctions.filters.engine')}</span>
                                <Input
                                    type="number"
                                    min="0" max="10"
                                    placeholder="0"
                                    className="h-8 text-xs"
                                    value={filters.minScore.engine}
                                    onChange={(e) => handleScoreChange('engine', e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2 items-center">
                                <span className="text-xs text-gray-600">{t('auctions.filters.exterior')}</span>
                                <Input
                                    type="number"
                                    min="0" max="10"
                                    placeholder="0"
                                    className="h-8 text-xs"
                                    value={filters.minScore.exterior}
                                    onChange={(e) => handleScoreChange('exterior', e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2 items-center">
                                <span className="text-xs text-gray-600">{t('auctions.filters.frame')}</span>
                                <Input
                                    type="number"
                                    min="0" max="10"
                                    placeholder="0"
                                    className="h-8 text-xs"
                                    value={filters.minScore.frame}
                                    onChange={(e) => handleScoreChange('frame', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Inspection Grade (AWA) */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('bike.condition')} (AWA)</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {['S', 'A', 'B', 'C', 'D', 'E'].map((grade) => (
                                <label key={grade} className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={filters.grades.includes(grade)}
                                        onChange={() => handleGradeToggle(grade)}
                                    />
                                    <div className={`text-center py-2 border rounded-md text-sm font-bold transition-all ${filters.grades.includes(grade)
                                        ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                                        : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                                        }`}>
                                        {grade}
                                        {counts.grades[grade] > 0 && <span className="block text-[10px] font-normal opacity-80">{counts.grades[grade]}</span>}
                                    </div>
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
                        <div className="flex items-center gap-2 mb-4">
                            <Input
                                type="number"
                                placeholder="Min"
                                className="h-9 text-sm"
                                value={filters.minPrice}
                                onChange={(e) => handleInputChange('minPrice', e.target.value)}
                            />
                            <span className="text-gray-400">-</span>
                            <Input
                                type="number"
                                placeholder="Max"
                                className="h-9 text-sm"
                                value={filters.maxPrice}
                                onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
