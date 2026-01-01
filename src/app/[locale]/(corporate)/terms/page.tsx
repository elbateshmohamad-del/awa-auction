import { createPageMetadata } from '@/lib/metadata';
import TermsClient from './TermsClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'terms');
}

export default function TermsPage() {
    return <TermsClient />;
}
