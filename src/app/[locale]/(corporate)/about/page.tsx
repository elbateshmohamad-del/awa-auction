import AboutClient from '@/components/home/AboutClient';
import { createPageMetadata } from '@/lib/metadata';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'about');
}

export default function AboutPage() {
    return <AboutClient />;
}
