import AdminBikeDetailClient from './AdminBikeDetailClient';

export default async function AdminBikeDetailPage(props: { params: Promise<{ id: string; locale: string }> }) {
    const params = await props.params;
    const { id, locale } = params;

    return <AdminBikeDetailClient bikeId={id} locale={locale} />;
}
