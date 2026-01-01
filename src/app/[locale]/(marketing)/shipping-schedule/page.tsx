"use client";

import { useTranslations } from 'next-intl';
import { Ship } from 'lucide-react';

export default function ShippingSchedulePage() {
    const t = useTranslations('shippingSchedule');

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Ship className="w-12 h-12 text-blue-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                {t('comingSoonTitle')}
            </h1>

            <p className="text-lg text-gray-600 max-w-lg text-center leading-relaxed">
                {t('comingSoonDesc')}
            </p>
        </div>
    );
}
