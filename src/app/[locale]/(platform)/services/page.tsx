import ServicesClient from '@/components/home/ServicesClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'servicesPage' });
    return {
        title: t('title'),
    };
}

export default function ServicesPage() {
    return <ServicesClient />;
}
