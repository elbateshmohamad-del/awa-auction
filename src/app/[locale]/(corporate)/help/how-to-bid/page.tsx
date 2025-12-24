import { Badge } from "@/components/ui/Badge";
import { useTranslations } from 'next-intl';

export default function HowToBidPage() {
    const t = useTranslations('guide.howToBid');

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="prose max-w-none text-neutral-600">
                <p className="lead text-xl mb-6">
                    {t('subtitle')}
                </p>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">{t('types.title')}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">{t('types.live.title')}</h4>
                        <Badge className="mb-2">{t('types.live.badge')}</Badge>
                        <p>{t('types.live.description')}</p>
                    </div>
                    <div className="border p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">{t('types.proxy.title')}</h4>
                        <Badge variant="secondary" className="mb-2">{t('types.proxy.badge')}</Badge>
                        <p>{t('types.proxy.description')}</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">{t('rules.title')}</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                    <li><strong>{t('rules.increments.label')}</strong> {t('rules.increments.text')}</li>
                    <li><strong>{t('rules.sniper.label')}</strong> {t('rules.sniper.text')}</li>
                    <li><strong>{t('rules.binding.label')}</strong> {t('rules.binding.text')}</li>
                </ul>

                <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">{t('tips.title')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>{t('tips.items.research')}</li>
                    <li>{t('tips.items.budget')}</li>
                    <li>{t('tips.items.watchlist')}</li>
                    <li>{t('tips.items.inspection')}</li>
                </ul>
            </div>
        </div>
    );
}
