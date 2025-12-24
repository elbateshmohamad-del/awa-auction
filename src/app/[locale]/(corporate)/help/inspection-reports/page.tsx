import { Badge } from "@/components/ui/Badge";
import { useTranslations } from 'next-intl';

export default function InspectionReportsPage() {
    const t = useTranslations('guide.inspection');

    const grades = ['s', '5', '4', '3', 'r'] as const;
    const points = ['engine', 'frame', 'electric', 'exterior', 'suspension'] as const;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600 mb-12">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('grading.title')}</h2>
                    <div className="space-y-4">
                        {grades.map((grade) => (
                            <div key={grade} className="flex items-start p-4 border rounded-lg bg-white shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                                    {t(`grading.${grade}.grade`)}
                                </div>
                                <div>
                                    <p className="text-gray-700 font-medium">{t(`grading.${grade}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('points.title')}</h2>
                    <div className="bg-gray-50 rounded-xl p-8">
                        <ul className="space-y-4">
                            {points.map((point) => (
                                <li key={point} className="flex items-center text-gray-800 text-lg">
                                    <span className="text-green-500 mr-3">✓</span>
                                    {t(`points.${point}`)}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
