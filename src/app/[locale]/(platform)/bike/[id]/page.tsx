import { Metadata } from 'next';
import BikeDetailClient from './BikeDetailClient';
import { getBikeById } from '@/lib/bike-database';

// Types for params
type Props = {
    params: Promise<{ id: string }>
}

// Fetch real bike data for metadata
async function getBikeData(id: string) {
    const bike = getBikeById(id);
    if (!bike) {
        return {
            id,
            name: "Bike Not Found",
            startPrice: 0,
            awaReport: "",
            images: [],
        };
    }
    return bike;
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const bike = await getBikeData(resolvedParams.id);

    // Clean up the name
    const cleanName = bike.name.replace(/\s+/g, ' ').trim();

    return {
        title: cleanName,
        description: bike.awaReport || `Premium motorcycle auction - Bid now on ${cleanName}`,
        openGraph: {
            title: `${cleanName} | AWA Auction`,
            description: `Starting Price: ¥${bike.startPrice.toLocaleString()}. Bid now to secure this premium vehicle.`,
            images: bike.images?.[0] ? [bike.images[0]] : ['/placeholder.jpg'],
        },
    }
}

export default async function BikeDetailPage({ params }: Props) {
    const resolvedParams = await params;
    return <BikeDetailClient bikeId={resolvedParams.id} />;
}


