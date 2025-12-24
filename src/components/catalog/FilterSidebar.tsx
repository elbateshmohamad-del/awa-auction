"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// Define types for the filter state and props
export interface FilterState {
    makers: string[];
    grades: string[];
    minPrice: string;
    maxPrice: string;
}

interface FilterSidebarProps {
    counts: {
        makers: Record<string, number>;
        grades: Record<string, number>;
    };
    filters: FilterState;
    onFilterChange: (newFilters: FilterState) => void;
    currencySymbol?: string;
}

// Default empty state to avoid crashes if parent doesn't provide data immediately
const defaultFilters: FilterState = {
    makers: [],
    grades: [],
    minPrice: '',
    maxPrice: ''
};

const defaultCounts = {
    makers: {},
    grades: {}
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

    const handlePriceChange = (field: 'minPrice' | 'maxPrice', value: string) => {
        safeOnFilterChange({ ...filters, [field]: value });
    };

    const clearAll = () => {
        safeOnFilterChange({
            makers: [],
            grades: [],
            minPrice: '',
            maxPrice: ''
        });
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
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
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

                    {/* Inspection Grade */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-3">{t('bike.condition')}</h4>
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
                                onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                            />
                            <span className="text-gray-400">-</span>
                            <Input
                                type="number"
                                placeholder="Max"
                                className="h-9 text-sm"
                                value={filters.maxPrice}
                                onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
