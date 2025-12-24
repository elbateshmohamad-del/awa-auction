import { Badge } from "@/components/ui/Badge";
import { useTranslations } from 'next-intl';

export default function AuctionTypesPage() {
    const t = useTranslations('guide.howToBid.types');

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-6">🔴</div>
                    <h2 className="text-2xl font-bold mb-4">{t('live.title')}</h2>
                    <Badge className="mb-4">{t('live.badge')}</Badge>
                    <p className="text-gray-600 leading-relaxed">
                        {t('live.description')}
                    </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-6">🤖</div>
                    <h2 className="text-2xl font-bold mb-4">{t('proxy.title')}</h2>
                    <Badge variant="secondary" className="mb-4">{t('proxy.badge')}</Badge>
                    <p className="text-gray-600 leading-relaxed">
                        {t('proxy.description')}
                    </p>
                </div>
            </div>
        </div>
    );
}
