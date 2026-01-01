import { createPageMetadata } from '@/lib/metadata';
import BlogClient from './BlogClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'blog');
}

export default function BlogPage() {
    return <BlogClient />;
}
