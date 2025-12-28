import AuctionCalendarClient from '@/components/home/AuctionCalendarClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'calendarPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('subtitle')
    };
}

export default function AuctionCalendarPage() {
    return <AuctionCalendarClient />;
}
