'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NewsClient() {
    const t = useTranslations('news');

    return (
        <div>
            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t('title')}</h1>
                </div>
            </section>

            {/* News List */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <p className="text-gray-600">
                        {t('noNews')}
                    </p>
                </div>
            </section>
        </div>
    );
}
