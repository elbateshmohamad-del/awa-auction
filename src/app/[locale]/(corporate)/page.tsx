import HomeClient from '@/components/home/HomeClient';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'meta' });
    return {
        title: t('home'),
    };
}

export default function CorporateHomePage() {
    return <HomeClient />;
}
