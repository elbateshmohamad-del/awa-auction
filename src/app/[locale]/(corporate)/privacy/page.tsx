import { createPageMetadata } from '@/lib/metadata';
import PrivacyClient from './PrivacyClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'privacy');
}

export default function PrivacyPage() {
    return <PrivacyClient />;
}
