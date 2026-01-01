import { createPageMetadata } from '@/lib/metadata';
import CookiesClient from './CookiesClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'cookies');
}

export default function CookiesPage() {
    return <CookiesClient />;
}
