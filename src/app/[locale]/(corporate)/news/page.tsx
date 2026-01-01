import { createPageMetadata } from '@/lib/metadata';
import NewsClient from './NewsClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'news');
}

export default function NewsPage() {
    return <NewsClient />;
}

