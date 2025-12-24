"use client";

import { useTranslations } from 'next-intl';

export default function FaqPage() {
    const t = useTranslations();

    const faqs = [
        {
            qKey: "faq.q1",
            aKey: "faq.a1"
        },
        {
            qKey: "faq.q2",
            aKey: "faq.a2"
        },
        {
            qKey: "faq.q3",
            aKey: "faq.a3"
        },
        {
            qKey: "faq.q4",
            aKey: "faq.a4"
        },
        {
            qKey: "faq.q5",
            aKey: "faq.a5"
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-12 pt-32 px-4">
            <h1 className="text-3xl font-bold text-center mb-10">{t('help.faq')}</h1>

            <div className="space-y-6">
                {faqs.map((item, i) => (
                    <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t(item.qKey)}</h3>
                        <p className="text-neutral-600 leading-relaxed">{t(item.aKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
