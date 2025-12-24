"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function NewBikePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/bikes">
                    <Button variant="ghost" size="sm">← Back</Button>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Add New Listing</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form (Left) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Info */}
                    <Card>
                        <CardHeader className="pb-4 border-b border-gray-100">
                            <CardTitle>Basic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Maker" placeholder="Kawasaki" />
                                <Input label="Model Name" placeholder="Ninja ZX-10R" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Input label="Year" type="number" placeholder="2022" />
                                <Input label="Mileage (km)" type="text" placeholder="8,500" />
                                <Input label="Engine Size" placeholder="1000cc" />
                            </div>
                            <Input label="VIN / Frame Number" placeholder="ZXT02L-000000" />
                        </CardContent>
                    </Card>

                    {/* Pricing & Auction */}
                    <Card>
                        <CardHeader className="pb-4 border-b border-gray-100">
                            <CardTitle>Auction Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Start Price (JPY)" type="number" placeholder="1000000" />
                                <Input label="Reserve Price (Optional)" type="number" placeholder="1500000" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Start Date" type="datetime-local" />
                                <Input label="End Date" type="datetime-local" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Description */}
                    <Card>
                        <CardHeader className="pb-4 border-b border-gray-100">
                            <CardTitle>Description & Notes</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Description</label>
                                <textarea className="w-full min-h-[120px] rounded-md border-gray-300 shadow-sm focus:border-[#0F4C81] focus:ring-[#0F4C81]" placeholder="Enter detailed description..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mechanic Notes</label>
                                <textarea className="w-full min-h-[80px] rounded-md border-gray-300 shadow-sm focus:border-[#0F4C81] focus:ring-[#0F4C81]" placeholder="Internal notes on condition..."></textarea>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar (Right) */}
                <div className="space-y-6">
                    {/* Status Card */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Publish Status</h3>
                            <div className="space-y-4">
                                <select className="w-full rounded-md border-gray-300 shadow-sm">
                                    <option>Draft</option>
                                    <option>Active</option>
                                    <option>Scheduled</option>
                                </select>
                                <Button variant="primary" className="w-full">Save & Publish</Button>
                                <Button variant="secondary" className="w-full">Save Draft</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Image Upload */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Photos</h3>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                                <span className="text-2xl block mb-2">📷</span>
                                <p className="text-sm text-gray-500">Click to upload photos</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="aspect-square bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-xs text-gray-400">
                                        Img {i}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
