"use client";

import { useState, use, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

// Mock Data Types
// Mock Data Types
type Bike = {
    id: number;
    name: string;
    vin: string;
    destination: string;
    size: number;
    // New detailed fields
    customerName: string;
    customerId: string;
    orderId: string;
    daysInStorage: number;
    photoUrl?: string; // Placeholder
};
type Container = { id: string; name: string; type: '20ft' | '40ft'; status: string; destination: string; bikes: Bike[], capacity: number };

// Mock Data
const initialPendingBikes: Bike[] = [
    { id: 101, name: '2022 Kawasaki Ninja', vin: 'ZX1002-1', destination: 'Thailand', size: 10, customerName: 'Abdul Rahim', customerId: '9928', orderId: 'ORD-1029', daysInStorage: 12 },
    { id: 102, name: '2019 Yamaha R1', vin: 'RN65-22', destination: 'Thailand', size: 10, customerName: 'Somchai T.', customerId: '8811', orderId: 'ORD-1033', daysInStorage: 45 },
    { id: 103, name: 'Honda Super Cub', vin: 'C125-99', destination: 'Thailand', size: 4, customerName: 'Abdul Rahim', customerId: '9928', orderId: 'ORD-1040', daysInStorage: 5 },
    { id: 104, name: 'Suzuki Hayabusa', vin: 'GSX1300-88', destination: 'Vietnam', size: 12, customerName: 'Nguyen Van A', customerId: '7722', orderId: 'ORD-0992', daysInStorage: 60 },
    { id: 105, name: 'Ducati Panigale', vin: 'V4S-77', destination: 'Thailand', size: 10, customerName: 'John Doe', customerId: '1122', orderId: 'ORD-1100', daysInStorage: 2 },
];

const mockContainer: Container = {
    id: 'CONT-8821',
    name: 'TH-BKK-001',
    type: '40ft',
    status: 'Planning',
    destination: 'Thailand',
    bikes: [],
    capacity: 400
};

export default function AdminContainerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [container, setContainer] = useState<Container>({ ...mockContainer, id: id }); // Use URL ID
    const [pendingBikes, setPendingBikes] = useState(initialPendingBikes);
    const [searchTerm, setSearchTerm] = useState('');
    const [photos, setPhotos] = useState<string[]>([]);

    const currentLoad = container.bikes.reduce((sum, b) => sum + b.size, 0);
    const loadPercentage = Math.round((currentLoad / container.capacity) * 100);

    // Filter Logic
    const filteredBikes = pendingBikes.filter(b =>
        b.destination === container.destination &&
        (b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.vin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.customerName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handlePhotoUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Create a local URL for preview
            const newPhotoUrl = URL.createObjectURL(file);
            setPhotos([...photos, newPhotoUrl]);
        }
        // Reset input so same file can be selected again if needed
        if (event.target) event.target.value = '';
    };

    const handleRemovePhoto = (indexToRemove: number) => {
        setPhotos(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    // Move bike to container
    const handleAddToContainer = (bike: Bike) => {
        if (bike.destination !== container.destination) {
            alert(`Destination mismatch! Bike is for ${bike.destination}, container is for ${container.destination}.`);
            return;
        }
        if (currentLoad + bike.size > container.capacity) {
            alert("Container is full!");
            return;
        }
        setContainer(prev => ({ ...prev, bikes: [...prev.bikes, bike] }));
        setPendingBikes(prev => prev.filter(b => b.id !== bike.id));
    };

    // Remove bike from container
    const handleRemoveFromContainer = (bike: Bike) => {
        setContainer(prev => ({ ...prev, bikes: prev.bikes.filter(b => b.id !== bike.id) }));
        setPendingBikes(prev => [...prev, bike]);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <Link href="/admin/containers" className="text-gray-400 hover:text-gray-600 text-sm mb-1 block">
                        ← Back to Schedule
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">Container Loading: {container.name}</h1>
                    <p className="text-sm text-gray-500">ID: {container.id} • {container.destination} • {container.type}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => alert("マニフェスト（積荷目録）PDFを作成・印刷します。\n(Printing Manifest...)")}>
                        Print Manifest (印刷)
                    </Button>
                    <Button variant="primary" onClick={() => alert("積込プランを確定し、コンテナをロックします。\n(Loading Confirmed!)")}>
                        Confirm Loading (確定)
                    </Button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* CENTER: Container Visualization (Loading Plan) */}
                <div className="col-span-8 flex flex-col">
                    <Card className="flex-1 flex flex-col bg-gray-50 border-2 border-dashed border-gray-300">
                        <CardHeader className="bg-white border-b border-gray-200 py-3">
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>{container.type} Container</CardTitle>
                                    <p className="text-xs text-gray-400 mt-1">Destination: {container.destination}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-[#0F4C81]">{loadPercentage}%</div>
                                    <p className="text-[10px] text-gray-500 uppercase">Capacity Used</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 p-4 overflow-y-auto relative">
                            <div className="space-y-2">
                                {container.bikes.length === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-xl pointer-events-none">
                                        EMPTY CONTAINER
                                    </div>
                                )}
                                {container.bikes.map((bike) => (
                                    <div
                                        key={bike.id}
                                        className="bg-white p-3 rounded shadow-sm border border-blue-200 flex justify-between items-center group hover:shadow-md transition-all cursor-pointer"
                                        onClick={() => handleRemoveFromContainer(bike)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs font-bold shrink-0">
                                                {bike.size}u
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-bold text-sm text-gray-900 truncate">{bike.name}</p>
                                                <p className="text-xs text-gray-500 font-mono truncate">{bike.vin} • {bike.customerName}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-red-500 opacity-0 group-hover:opacity-100 font-bold shrink-0">Unload ✕</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <div className="h-4 bg-gray-200 w-full relative">
                            <div className={`absolute left-0 top-0 bottom-0 transition-all duration-500 ${loadPercentage > 90 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${loadPercentage}%` }}></div>
                        </div>
                    </Card>

                    {/* Photos Section */}
                    <Card className="mt-6 border border-gray-200">
                        <CardHeader className="py-3 border-b border-gray-100 flex flex-row items-center justify-between">
                            <CardTitle className="text-base">Container Photos (Vanning)</CardTitle>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <Button size="sm" variant="secondary" onClick={handlePhotoUploadClick}>+ Upload Photo</Button>
                        </CardHeader>
                        <CardContent className="p-4">
                            {photos.length === 0 ? (
                                <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 text-gray-400 text-sm">
                                    No photos uploaded. Click "Upload Photo" to document loading.
                                </div>
                            ) : (
                                <div className="grid grid-cols-4 gap-4">
                                    {photos.map((url, i) => (
                                        <div key={i} className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative group">
                                            <img src={url} alt="Loading" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 gap-2">
                                                <Button size="sm" variant="ghost" className="text-white hover:text-white hover:bg-white/20 h-8 w-8 p-0" title="View">👁️</Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600 border-none"
                                                    onClick={() => handleRemovePhoto(i)}
                                                    title="Delete"
                                                >
                                                    ✕
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT: Unassigned Inventory */}
                <div className="col-span-4 flex flex-col bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 space-y-3">
                        <div>
                            <h3 className="font-bold text-gray-700">Dock (Unassigned Inventory)</h3>
                            <p className="text-xs text-gray-500">Click item to load into container</p>
                        </div>
                        <Input
                            placeholder="Search VIN, Order, Customer..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {filteredBikes.length === 0 && (
                            <p className="text-center text-gray-400 text-sm py-8">
                                {searchTerm ? 'No items match your search.' : 'No matching cargo for this destination.'}
                            </p>
                        )}
                        {filteredBikes.map((bike) => (
                            <div
                                key={bike.id}
                                className={`p-3 rounded border border-gray-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all ${bike.destination === container.destination ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}
                                onClick={() => handleAddToContainer(bike)}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">{bike.name}</p>
                                        <p className="text-[10px] text-gray-500">VIN: {bike.vin} | {bike.orderId}</p>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={bike.daysInStorage > 30 ? 'red' : 'default'} size="sm" className="ml-auto block w-fit mb-0.5">
                                            {bike.daysInStorage}d
                                        </Badge>
                                        <span className="text-[10px] text-gray-400">Storage</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 my-1.5 pt-1.5 flex justify-between items-center">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                                        <span className="bg-gray-100 p-1 rounded-full">👤</span>
                                        <span>{bike.customerName} <span className="text-gray-400">(ID:{bike.customerId})</span></span>
                                    </div>
                                    <span className="font-bold text-blue-600 text-xs">{bike.size}u</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
