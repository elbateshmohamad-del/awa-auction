"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock Data
type Bike = { id: number; name: string; vin: string; destination: string; size: number };
type Container = { id: string; name: string; type: '20ft' | '40ft'; status: string; destination: string; bikes: Bike[], capacity: number };

const initialPendingBikes: Bike[] = [
    { id: 101, name: '2022 Kawasaki Ninja', vin: 'ZX1002-1', destination: 'Thailand', size: 10 },
    { id: 102, name: '2019 Yamaha R1', vin: 'RN65-22', destination: 'Thailand', size: 10 },
    { id: 103, name: 'Honda Super Cub', vin: 'C125-99', destination: 'Thailand', size: 4 },
    { id: 104, name: 'Suzuki Hayabusa', vin: 'GSX1300-88', destination: 'Vietnam', size: 12 },
    { id: 105, name: 'Ducati Panigale', vin: 'V4S-77', destination: 'Thailand', size: 10 },
];

const initialContainers: Container[] = [
    { id: 'CONT-8821', name: 'TH-BKK-001', type: '40ft', status: 'Planning', destination: 'Thailand', bikes: [], capacity: 400 }, // Size units (mock)
    { id: 'CONT-8822', name: 'VN-HCM-002', type: '20ft', status: 'Loading', destination: 'Vietnam', bikes: [], capacity: 200 }
];

export default function AdminContainersPage() {
    const [selectedContainerId, setSelectedContainerId] = useState<string>(initialContainers[0].id);
    const [containers, setContainers] = useState(initialContainers);
    const [pendingBikes, setPendingBikes] = useState(initialPendingBikes);

    const activeContainer = containers.find(c => c.id === selectedContainerId) || containers[0];
    const currentLoad = activeContainer.bikes.reduce((sum, b) => sum + b.size, 0);
    const loadPercentage = Math.round((currentLoad / activeContainer.capacity) * 100);

    // Move bike to container
    const handleAddToContainer = (bike: Bike) => {
        // Basic validation
        if (bike.destination !== activeContainer.destination) {
            alert(`Destination mismatch! Bike is for ${bike.destination}, container is for ${activeContainer.destination}.`);
            return;
        }
        if (currentLoad + bike.size > activeContainer.capacity) {
            alert("Container is full!");
            return;
        }

        setContainers(prev => prev.map(c => {
            if (c.id === activeContainer.id) {
                return { ...c, bikes: [...c.bikes, bike] };
            }
            return c;
        }));
        setPendingBikes(prev => prev.filter(b => b.id !== bike.id));
    };

    // Remove bike from container
    const handleRemoveFromContainer = (bike: Bike) => {
        setContainers(prev => prev.map(c => {
            if (c.id === activeContainer.id) {
                return { ...c, bikes: c.bikes.filter(b => b.id !== bike.id) };
            }
            return c;
        }));
        setPendingBikes(prev => [...prev, bike]);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Logistics Planning</h1>
                    <p className="text-sm text-gray-500">Manage container loading and shipping schedules.</p>
                </div>
                <Button variant="primary">+ New Container Job</Button>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">

                {/* LEFT: Container Selector & Info */}
                <div className="col-span-3 flex flex-col gap-4 overflow-y-auto pr-2">
                    <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Active Jobs</h3>
                    {containers.map((container) => (
                        <Card
                            key={container.id}
                            className={`cursor-pointer transition-all border-l-4 ${selectedContainerId === container.id ? 'border-l-blue-600 ring-2 ring-blue-100' : 'border-l-transparent hover:bg-gray-50'}`}
                            onClick={() => setSelectedContainerId(container.id)}
                        >
                            <CardContent className="p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold text-gray-900">{container.name}</span>
                                    <Badge variant={container.status === 'Loading' ? 'warning' : 'default'} size="sm">{container.status}</Badge>
                                </div>
                                <div className="text-xs text-gray-500 mb-3 space-y-1">
                                    <p>Type: {container.type}</p>
                                    <p>Dest: {container.destination}</p>
                                </div>
                                {/* Mini Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div
                                        className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${Math.round((container.bikes.reduce((s, b) => s + b.size, 0) / container.capacity) * 100)}%`
                                        }}
                                    ></div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CENTER: Container Visualization (Loading Plan) */}
                <div className="col-span-5 flex flex-col">
                    <Card className="flex-1 flex flex-col bg-gray-50 border-2 border-dashed border-gray-300">
                        <CardHeader className="bg-white border-b border-gray-200 py-3">
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>{activeContainer.type} Container: {activeContainer.name}</CardTitle>
                                    <p className="text-xs text-gray-400 mt-1">Destination: {activeContainer.destination}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-[#0F4C81]">{loadPercentage}%</div>
                                    <p className="text-[10px] text-gray-500 uppercase">Capacity Used</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 p-4 overflow-y-auto relative">
                            {/* Visual representation of container interior */}
                            <div className="space-y-2">
                                {activeContainer.bikes.length === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-xl pointer-events-none">
                                        EMPTY CONTAINER
                                    </div>
                                )}
                                {activeContainer.bikes.map((bike) => (
                                    <div
                                        key={bike.id}
                                        className="bg-white p-3 rounded shadow-sm border border-blue-200 flex justify-between items-center group hover:shadow-md transition-all cursor-pointer"
                                        onClick={() => handleRemoveFromContainer(bike)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs font-bold">
                                                {bike.size}u
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-gray-900">{bike.name}</p>
                                                <p className="text-xs text-gray-500 font-mono">{bike.vin}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-red-500 opacity-0 group-hover:opacity-100 font-bold">Unload ✕</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        {/* Visual Capacity Bar */}
                        <div className="h-4 bg-gray-200 w-full relative">
                            <div className={`absolute left-0 top-0 bottom-0 transition-all duration-500 ${loadPercentage > 90 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${loadPercentage}%` }}></div>
                        </div>
                    </Card>
                </div>

                {/* RIGHT: Unassigned Inventory */}
                <div className="col-span-4 flex flex-col bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-bold text-gray-700">Dock (Unassigned Inventory)</h3>
                        <p className="text-xs text-gray-500">Click item to load into {activeContainer.name}</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {pendingBikes.filter(b => b.destination === activeContainer.destination).length === 0 && (
                            <p className="text-center text-gray-400 text-sm py-8">No matching cargo for this destination.</p>
                        )}
                        {pendingBikes.map((bike) => (
                            <div
                                key={bike.id}
                                className={`p-3 rounded border border-gray-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all ${bike.destination === activeContainer.destination ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'
                                    }`}
                                onClick={() => handleAddToContainer(bike)}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-sm text-gray-800">{bike.name}</span>
                                    <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">{bike.destination}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span className="font-mono">{bike.vin}</span>
                                    <span className="font-bold text-blue-600">Size: {bike.size}u</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
