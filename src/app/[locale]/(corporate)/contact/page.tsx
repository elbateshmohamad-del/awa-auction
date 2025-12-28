import ContactClient from '@/components/home/ContactClient';
import { createPageMetadata } from '@/lib/metadata';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    return createPageMetadata(locale, 'contact');
}

export default function ContactPage() {
    return <ContactClient />;
}
