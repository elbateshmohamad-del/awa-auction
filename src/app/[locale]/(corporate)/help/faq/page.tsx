import { createPageMetadata } from '@/lib/metadata';
import FaqClient from '@/components/home/FaqClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'helpFaq');
}

export default function FaqPage() {
    return <FaqClient />;
}
