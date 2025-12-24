import { useTranslations } from 'next-intl';

export default function DeliveryTimesPage() {
    const t = useTranslations('guide.delivery');
    const regions = ['asia', 'oceania', 'na', 'europe', 'africa'] as const;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600 mb-12">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <p className="text-sm text-yellow-800">
                        {t('note')}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region) => (
                    <div key={region} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`regions.${region}.name`)}</h3>
                        <div className="flex items-center text-blue-600 font-semibold text-xl">
                            <span className="mr-2">✈</span>
                            {t(`regions.${region}.time`)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
