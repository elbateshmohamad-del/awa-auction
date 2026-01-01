import { createPageMetadata } from '@/lib/metadata';
import HelpClient from './HelpClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'help');
}

export default function HelpPage() {
    return <HelpClient />;
}
