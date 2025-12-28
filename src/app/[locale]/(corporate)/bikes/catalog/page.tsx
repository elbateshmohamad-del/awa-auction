import BikeCatalogClient from '@/components/home/BikeCatalogClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'catalogPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('subtitle')
    };
}

export default function BikeCatalogPage() {
    return <BikeCatalogClient />;
}
