import ShippingClient from '@/components/home/ShippingClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'shippingPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('subtitle')
    };
}

export default function ShippingPage() {
    return <ShippingClient />;
}
