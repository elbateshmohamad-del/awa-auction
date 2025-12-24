import { useTranslations } from 'next-intl';

export default function VerificationPage() {
    const t = useTranslations('guide.verification');

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600 mb-12">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                <div className="flex md:flex-row flex-col justify-between items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-4xl mb-2">🆔</div>
                        <h3 className="font-bold text-lg">{t('steps.id')}</h3>
                    </div>
                    <div className="text-blue-300 text-2xl">→</div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-4xl mb-2">🏠</div>
                        <h3 className="font-bold text-lg">{t('steps.address')}</h3>
                    </div>
                    <div className="text-blue-300 text-2xl">→</div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-4xl mb-2">📱</div>
                        <h3 className="font-bold text-lg">{t('steps.phone')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
