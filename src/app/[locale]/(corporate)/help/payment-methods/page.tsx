import { useTranslations } from 'next-intl';

export default function PaymentMethodsPage() {
    const t = useTranslations('guide.payment');
    const methods = ['bank'] as const;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600 mb-12">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>
            </div>

            <div className="space-y-6">
                {methods.map((method) => (
                    <div key={method} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                            {method === 'bank' ? '🏦' : method === 'card' ? '💳' : '🅿️'}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{t(`methods.${method}.title`)}</h2>
                            <p className="text-gray-600">
                                {t(`methods.${method}.desc`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
