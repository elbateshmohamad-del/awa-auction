import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'meta' });
    return {
        title: {
            template: `%s | ${t('dashboard')}`,
            default: t('dashboard'),
        },
    };
}

import DashboardGuard from './DashboardGuard';

export default function DashboardLayout({ children }: Props) {
    return (
        <DashboardGuard>
            {children}
        </DashboardGuard>
    );
}
