import { Metadata } from 'next';
import BikeDetailClient from './BikeDetailClient';

// Types for params
type Props = {
    params: { id: string }
}

// Mock Data Fetcher
const getBikeData = (id: string) => {
    return {
        id: 1,
        name: "2022 Kawasaki Ninja ZX-10R KRT Edition",
        basePrice: 1850000,
        description: "Pristine condition KRT edition. Low mileage and full service history.",
    };
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const bike = getBikeData(params.id);

    return {
        title: bike.name,
        description: bike.description,
        openGraph: {
            title: `${bike.name} | AWA Auction`,
            description: `Current Price: ¥${bike.basePrice.toLocaleString()}. Bid now to secure this premium vehicle.`,
            images: ['/placeholder.jpg'],
        },
    }
}

export default function BikeDetailPage({ params }: Props) {
    return <BikeDetailClient />;
}
