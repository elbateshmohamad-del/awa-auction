"use client";

import { useTranslations } from 'next-intl';

export default function InspectionReportsPage() {
    const t = useTranslations('guide.inspection');

    const grades = ['s', '5', '4', '3', 'r'] as const;
    const points = ['engine', 'frame', 'electric', 'exterior', 'suspension'] as const;

    const gradeColors: Record<string, string> = {
        's': 'bg-blue-600',
        '5': 'bg-sky-500',
        '4': 'bg-green-500',
        '3': 'bg-yellow-500',
        'r': 'bg-red-500',
    };

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B]">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Grading Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('grading.title')}</h2>
                    <div className="space-y-6">
                        {grades.map((grade) => (
                            <div key={grade} className="flex items-center rtl:flex-row-reverse p-8 bg-white border border-[#D2D2D7] rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className={`flex-shrink-0 w-20 h-20 ${gradeColors[grade]} text-white rounded-2xl flex items-center justify-center font-bold text-3xl ltr:mr-8 rtl:ml-8`}>
                                    {t(`grading.${grade}.grade`)}
                                </div>
                                <div className="flex-1">
                                    <p className="text-[#1D1D1F] font-medium text-xl rtl:text-right">{t(`grading.${grade}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspection Points Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('points.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {points.map((point, idx) => (
                            <div key={point} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="text-4xl mb-4">
                                    {idx === 0 && '🔧'}
                                    {idx === 1 && '🏗️'}
                                    {idx === 2 && '⚡'}
                                    {idx === 3 && '✨'}
                                    {idx === 4 && '🔩'}
                                </div>
                                <p className="text-[#1D1D1F] font-bold text-xl">{t(`points.${point}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
