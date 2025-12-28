import CookiesClient from '@/components/home/CookiesClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'cookiesPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('intro')
    };
}

export default function CookiesPolicyPage() {
    return <CookiesClient />;
}
