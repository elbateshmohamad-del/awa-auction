import VideoGuidesClient from '@/components/home/VideoGuidesClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'videoGuidesPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('subtitle')
    };
}

export default function VideoGuidesPage() {
    return <VideoGuidesClient />;
}
