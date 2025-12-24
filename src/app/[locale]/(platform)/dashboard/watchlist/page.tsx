"use client";

import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { useWatchlist } from '@/context/WatchlistContext';
import { BikeCard } from '@/components/catalog/BikeCard';
import { useAuth } from '@/context/AuthContext';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';

// Reusing interface (ideally share this)
interface Bike {
    id: string;
    bdsId: string;
    name: string;
    maker: string;
    region: string;
    mileage: string;
    startPrice: number;
    awaGrade: 'S' | 'A' | 'B' | 'C' | 'D';
    firstRegistration: string;
    images: string[];
    status: string;
    importedAt?: string;
    displacement?: string;
    color?: string;
}

export default function WatchlistPage() {
    const { watchlist, isInWatchlist } = useWatchlist();
    const { user } = useAuth();
    const [bikes, setBikes] = useState<Bike[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBikes() {
            try {
                const response = await fetch('/api/bikes');
                const data = await response.json();
                if (data.success) {
                    setBikes(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch bikes:', error);
            } finally {
                setLoading(false);
            }
        }
        if (watchlist.length > 0) {
            fetchBikes();
        } else {
            setLoading(false);
        }
    }, [watchlist.length]);

    const favoriteBikes = bikes.filter(bike => isInWatchlist(bike.id));

    // Helper for card props (simplified)
    const transformForCard = (bike: Bike) => {
        // Same logic as AuctionsPage for year/name
        let year = new Date().getFullYear();
        if (bike.firstRegistration) {
            const match = bike.firstRegistration.match(/R\s*(\d+)/);
            if (match) {
                year = 2018 + parseInt(match[1]);
            }
        }
        const cleanName = bike.name.replace(/\s+/g, ' ').trim();

        return {
            id: bike.id,
            name: cleanName || bike.maker,
            year,
            price: bike.startPrice,
            grade: bike.awaGrade,
            image: bike.images?.[0] || '/placeholder.jpg',
            mileage: bike.mileage || '0 km',
            location: bike.region || 'Japan',
            endsIn: 'Active', // Details less critical here
            bids: 0,
            displacement: bike.displacement,
            color: bike.color
        };
    };

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Watchlist</h1>
                <p className="text-gray-500">
                    {favoriteBikes.length} items saved
                </p>
            </div>

            {loading ? (
                <div className="p-12 text-center text-gray-500">Loading...</div>
            ) : favoriteBikes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteBikes.map(bike => (
                        <BikeCard
                            key={bike.id}
                            {...transformForCard(bike)}
                        // We can assume user preferred currency or pass generic props
                        />
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="p-12 text-center text-gray-500">
                        <span className="text-4xl block mb-4">👀</span>
                        <p className="mb-4">Your watchlist is empty.</p>
                        <Link href="/auctions">
                            <Button>Browse Auctions</Button>
                        </Link>
                    </CardContent>
                </Card>
            )}
        </DashboardLayout>
    );
}
