import { useTranslations } from 'next-intl';

export default function ShippingGuidePage() {
    const t = useTranslations('guide.shipping');
    const methods = ['roro', 'container', 'air'] as const;
    const regions = ['asia', 'oceania', 'na', 'europe', 'africa'] as const;

    return (
        <div className="max-w-5xl mx-auto pt-24 pb-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {methods.map((method) => (
                    <div key={method} className="bg-neutral-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">{t(`methods.${method}.title`)}</h3>
                        <p className="text-neutral-600 text-sm mb-4">{t(`methods.${method}.desc`)}</p>
                        <ul className="text-sm list-disc pl-4 space-y-1">
                            <li>{t(`methods.${method}.benefits.0`)}</li>
                            <li>{t(`methods.${method}.benefits.1`)}</li>
                            <li>{t(`methods.${method}.benefits.2`)}</li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="overflow-x-auto">
                <h3 className="font-bold text-xl mb-4">{t('rates.title')}</h3>
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-neutral-100 border-b">
                            <th className="p-4">{t('rates.headers.region')}</th>
                            <th className="p-4">{t('rates.headers.port')}</th>
                            <th className="p-4">{t('rates.headers.time')}</th>
                            <th className="p-4">{t('rates.headers.cost')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regions.map((region) => (
                            <tr key={region} className="border-b">
                                <td className="p-4">{t(`rates.rows.${region}.region`)}</td>
                                <td className="p-4">{t(`rates.rows.${region}.port`)}</td>
                                <td className="p-4">{t(`rates.rows.${region}.time`)}</td>
                                <td className="p-4">{t(`rates.rows.${region}.cost`)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-xs text-neutral-500 mt-2">{t('rates.disclaimer')}</p>
            </div>
        </div>
    );
}
