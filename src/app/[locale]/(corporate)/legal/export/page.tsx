import { createPageMetadata } from '@/lib/metadata';
import ExportClient from './ExportClient';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'legalExport');
}

export default function ExportPage() {
    return <ExportClient />;
}
