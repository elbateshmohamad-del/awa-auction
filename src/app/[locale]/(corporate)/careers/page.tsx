import { createPageMetadata } from '@/lib/metadata';
import CareersClient from './CareersClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'careers');
}

export default function CareersPage() {
    return <CareersClient />;
}
