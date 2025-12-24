import { useTranslations } from 'next-intl';

export default function RefundPolicyPage() {
    const t = useTranslations('guide.legal.refunds');

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600">
                <p className="lead text-xl mb-8">
                    {t('subtitle')}
                </p>

                <div className="bg-white border p-8 rounded-xl shadow-sm mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('deposit.title')}</h3>
                    <p className="mb-4">{t('deposit.desc')}</p>
                </div>

                <div className="bg-white border p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('cancellation.title')}</h3>
                    <p>{t('cancellation.desc')}</p>
                </div>
            </div>
        </div>
    );
}
