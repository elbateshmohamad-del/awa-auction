import { createPageMetadata } from '@/lib/metadata';
import GettingStartedClient from './GettingStartedClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'helpGettingStarted');
}

export default function GettingStartedPage() {
    return <GettingStartedClient />;
}
