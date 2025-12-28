import { Metadata } from 'next';
import MarketBikeDetail from '@/components/market/MarketBikeDetail';
import { getBikeById } from '@/lib/bike-database';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const bike = await getBikeById(resolvedParams.id);

    if (!bike) {
        return {
            title: 'Bike Not Found',
        }
    }

    const cleanName = bike.name.replace(/\s+/g, ' ').trim();

    return {
        title: `${cleanName} | Market`,
        description: `View details for ${cleanName}.`,
    }
}

export default async function MarketBikeDetailPage({ params }: Props) {
    const resolvedParams = await params;

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <MarketBikeDetail bikeId={resolvedParams.id} />
        </div>
    );
}
