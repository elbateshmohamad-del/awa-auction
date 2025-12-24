"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link } from '@/i18n/navigation';
import { Modal } from '@/components/ui/Modal';
import { CheckCircle } from 'lucide-react';

// Types (should share this, but local for now)
type Container = {
    id: string;
    destination: string;
    price: string;
    etd: string;
    status: string;
};

type Bike = {
    id: string;
    name: string;
    images: string[];
    startPrice: number; // Mocking 'won price'
};

export default function CreateReservationPage() {
    const t = useTranslations('reservation'); // Need to add these keys later
    const searchParams = useSearchParams();
    const router = useRouter();
    const containerId = searchParams.get('containerId');

    const [container, setContainer] = useState<Container | null>(null);
    const [availableBikes, setAvailableBikes] = useState<Bike[]>([]);
    const [selectedBikeIds, setSelectedBikeIds] = useState<string[]>([]);
    const [addressType, setAddressType] = useState<'registered' | 'new'>('registered');
    const [newAddress, setNewAddress] = useState('');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Container Details
                const contRes = await fetch('/api/containers');
                const containers = await contRes.json();
                const found = containers.find((c: Container) => c.id === containerId);
                setContainer(found || null);

                // 2. Fetch User's Bikes (Mock: fetching all active bikes for demo)
                const bikeRes = await fetch('/api/bikes');
                const bikesResponse = await bikeRes.json();
                const allBikes = bikesResponse.data || bikesResponse;

                // Filter only active bikes and take first 5
                const activeBikes = Array.isArray(allBikes)
                    ? allBikes.filter((b: any) => b.status === 'active').slice(0, 5)
                    : [];

                setAvailableBikes(activeBikes);
            } catch (error) {
                console.error('Failed to load data', error);
            } finally {
                setLoading(false);
            }
        };

        if (containerId) fetchData();
    }, [containerId]);

    const handleToggleBike = (id: string) => {
        if (selectedBikeIds.includes(id)) {
            setSelectedBikeIds(selectedBikeIds.filter(bid => bid !== id));
        } else {
            setSelectedBikeIds([...selectedBikeIds, id]);
        }
    };

    const handleSubmit = async () => {
        if (selectedBikeIds.length === 0) {
            alert('Please select at least one bike.');
            return;
        }
        if (addressType === 'new' && !newAddress.trim()) {
            alert('Please enter a shipping address.');
            return;
        }

        setSubmitting(true); // Set submitting state
        const payload = {
            containerId: container?.id,
            bikeIds: selectedBikeIds,
            shippingAddress: {
                type: addressType,
                details: addressType === 'registered' ? 'Registered Address (Mock)' : newAddress
            }
        };

        try {
            const res = await fetch('/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                // alert('Reservation confirmed!'); // Replaced with modal
                // router.push('/shipping-schedule'); // Replaced with modal
                setShowSuccessModal(true);
            } else {
                alert('Failed to submit reservation.');
            }
        } catch (error) {
            console.error('Submission error', error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push('/shipping-schedule');
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;
    if (!container) return <div className="p-8 text-center">Container not found. <Link href="/shipping-schedule" className="text-blue-600 underline">Back</Link></div>;

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Book Container Space</h1>
                    <p className="text-gray-500">Complete your reservation for {container.destination}</p>
                </div>

                {/* 1. Container Info */}
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">1. Selected Voyage</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-500">Destination</p>
                                <p className="font-semibold">{container.destination}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Departure</p>
                                <p className="font-semibold">{container.etd}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Price per Unit</p>
                                <p className="font-semibold text-blue-600">${container.price}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. Select Bikes */}
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">2. Select Bikes to Ship</h2>
                        <div className="space-y-4">
                            {availableBikes.length === 0 ? (
                                <p className="text-gray-500">No available bikes found in your storage.</p>
                            ) : (
                                availableBikes.map(bike => (
                                    <div
                                        key={bike.id}
                                        className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${selectedBikeIds.includes(bike.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                        onClick={() => handleToggleBike(bike.id)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedBikeIds.includes(bike.id)}
                                            onChange={() => { }}
                                            className="h-5 w-5 text-blue-600 rounded"
                                        />
                                        <div className="h-16 w-24 bg-gray-200 rounded overflow-hidden shrink-0">
                                            {bike.images?.[0] ? (
                                                <img src={bike.images[0]} alt={bike.name} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">{bike.name}</p>
                                            <p className="text-sm text-gray-500">ID: {bike.id}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* 3. Shipping Address */}
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">3. Shipping Address</h2>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
                                <input
                                    type="radio"
                                    name="address"
                                    checked={addressType === 'registered'}
                                    onChange={() => setAddressType('registered')}
                                    className="h-4 w-4 text-blue-600"
                                />
                                <div>
                                    <p className="font-semibold">Use Registered Address</p>
                                    <p className="text-sm text-gray-500">123 Main St, Tokyo, Japan (Default)</p>
                                </div>
                            </label>

                            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
                                <input
                                    type="radio"
                                    name="address"
                                    checked={addressType === 'new'}
                                    onChange={() => setAddressType('new')}
                                    className="h-4 w-4 text-blue-600"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold mb-2">Ship to Different Address</p>
                                    <Input
                                        placeholder="Enter full address..."
                                        disabled={addressType !== 'new'}
                                        value={newAddress}
                                        onChange={(e) => setNewAddress(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </label>
                        </div>
                    </CardContent>
                </Card>

                {/* Confirm Action */}
                <div className="flex justify-end gap-4 pt-6 pb-12">
                    <Link href="/shipping-schedule">
                        <Button variant="outline" type="button" disabled={submitting}>Cancel</Button>
                    </Link>
                    <Button onClick={handleSubmit} disabled={submitting || loading}>
                        {submitting ? 'Processing...' : 'Confirm Reservation'}
                    </Button>
                </div>
            </div>

            <Modal isOpen={showSuccessModal} onClose={handleCloseModal} title="予約完了">
                <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center">
                    <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">予約を受け付けました</h3>
                        <p className="text-gray-500">
                            選択された {selectedBikeIds.length} 台のバイクの配送スペースを確保しました。
                            <br />
                            詳細は配送スケジュールページで確認できます。
                        </p>
                    </div>
                    <Button onClick={handleCloseModal} className="w-full max-w-sm" size="lg">
                        配送スケジュールへ戻る
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
