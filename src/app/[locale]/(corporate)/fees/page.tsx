import { useTranslations } from 'next-intl';

export default function FeesPage() {
    const t = useTranslations('guide.fees');
    const items = ['auction', 'shipping', 'insurance', 'tax'] as const;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600 mb-12">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {items.map((item) => (
                    <div key={item} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`list.${item}.title`)}</h3>
                        <p className="text-gray-600">
                            {t(`list.${item}.desc`)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
