import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function AdminNewAuctionPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/admin/auctions" className="text-gray-400 hover:text-gray-600">
                            ← Back to Auctions
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Create New Auction</h1>
                    <p className="text-sm text-gray-500">Set up a new auction for a bike listing.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Select Bike */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Select Bike</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Choose from Inventory
                                </label>
                                <select className="w-full h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]">
                                    <option>Select a bike...</option>
                                    <option>2022 Kawasaki Ninja ZX-10R (LOT-2024-1234)</option>
                                    <option>2020 Honda CBR1000RR-R (LOT-2024-1235)</option>
                                    <option>2021 Ducati Panigale V4S (LOT-2024-1236)</option>
                                </select>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 text-center">
                                <p className="text-gray-500">Or drag and drop bike data here</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Auction Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Auction Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Start Price (JPY)
                                    </label>
                                    <Input type="number" placeholder="1,000,000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Reserve Price (JPY)
                                    </label>
                                    <Input type="number" placeholder="Optional" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Start Date & Time
                                    </label>
                                    <Input type="datetime-local" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        End Date & Time
                                    </label>
                                    <Input type="datetime-local" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Bid Increment (JPY)
                                </label>
                                <select className="w-full h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]">
                                    <option>¥1,000</option>
                                    <option>¥5,000</option>
                                    <option>¥10,000</option>
                                    <option>¥50,000</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Visibility */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Visibility & Promotion</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="featured" className="rounded text-[#0F4C81] focus:ring-[#0F4C81]" />
                                <label htmlFor="featured" className="text-sm text-gray-700">Featured Auction (Show on homepage)</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="notify" className="rounded text-[#0F4C81] focus:ring-[#0F4C81]" />
                                <label htmlFor="notify" className="text-sm text-gray-700">Notify subscribers when auction starts</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="autoExtend" className="rounded text-[#0F4C81] focus:ring-[#0F4C81]" defaultChecked />
                                <label htmlFor="autoExtend" className="text-sm text-gray-700">Auto-extend on last-minute bids</label>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-4xl">
                                🏍️
                            </div>
                            <p className="font-bold text-gray-900 mb-1">Select a bike to preview</p>
                            <p className="text-sm text-gray-500">Auction details will appear here</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="primary" className="w-full">Create Auction</Button>
                            <Button variant="secondary" className="w-full">Save as Draft</Button>
                            <Button variant="ghost" className="w-full text-gray-500">Cancel</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
