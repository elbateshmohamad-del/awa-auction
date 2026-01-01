import { createPageMetadata } from '@/lib/metadata';
import ShippingGuideClient from './ShippingGuideClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'helpShippingGuide');
}

export default function ShippingGuidePage() {
    return <ShippingGuideClient />;
}
