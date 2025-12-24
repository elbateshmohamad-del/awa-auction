import { useTranslations } from 'next-intl';

export default function SecurityPage() {
    const t = useTranslations('guide.security');

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                <div className="text-6xl mb-6">🔒</div>
                <h2 className="text-2xl font-bold mb-4">{t('subtitle')}</h2>
                <p className="text-lg text-gray-600 max-w-lg mx-auto">
                    {t('support')}
                </p>
            </div>
        </div>
    );
}
