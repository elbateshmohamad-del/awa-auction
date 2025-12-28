import SuccessStoriesClient from '@/components/home/SuccessStoriesClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'successStoriesPage' });
    return {
        title: `${t('title')} | AWA Auction`,
        description: t('subtitle')
    };
}

export default function SuccessStoriesPage() {
    return <SuccessStoriesClient />;
}
