import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock Auction Data
const auctionData = {
    id: 'AUC-2024-0142',
    bikeName: '2022 Kawasaki Ninja ZX-10R',
    lotNumber: 'LOT-2024-1234',
    status: 'Live',
    startPrice: 1500000,
    currentBid: 1850000,
    reservePrice: 1700000,
    reserveMet: true,
    bids: 18,
    watchers: 42,
    views: 856,
    startTime: '2025-12-10 10:00',
    endTime: '2025-12-15 18:00',
    timeRemaining: '3d 5h 22m',
    featured: true,
    autoExtend: true,
};

const bidHistory = [
    { id: 1, user: 'buyer_thai_88', userId: 'U-9928', amount: 1850000, time: '2025-12-12 09:45', ip: '203.xxx.xxx.xxx' },
    { id: 2, user: 'moto_phil_dealer', userId: 'U-8845', amount: 1800000, time: '2025-12-12 04:30', ip: '121.xxx.xxx.xxx' },
    { id: 3, user: 'jp_collector', userId: 'U-1023', amount: 1750000, time: '2025-12-11 22:15', ip: '126.xxx.xxx.xxx' },
    { id: 4, user: 'aus_imports', userId: 'U-7721', amount: 1700000, time: '2025-12-11 18:00', ip: '203.xxx.xxx.xxx' },
    { id: 5, user: 'buyer_thai_88', userId: 'U-9928', amount: 1650000, time: '2025-12-11 14:30', ip: '203.xxx.xxx.xxx' },
];

export default function AdminAuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/admin/auctions" className="text-gray-400 hover:text-gray-600">
                            ← Back to Auctions
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">{auctionData.id}</h1>
                        <Badge variant="success">🔴 LIVE</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{auctionData.bikeName}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary">Edit Settings</Button>
                    <Button variant="danger">End Auction</Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Current Bid', value: `¥${auctionData.currentBid.toLocaleString()}`, color: 'text-[#0F4C81]' },
                            { label: 'Total Bids', value: auctionData.bids, color: 'text-gray-900' },
                            { label: 'Watchers', value: auctionData.watchers, color: 'text-gray-900' },
                            { label: 'Views', value: auctionData.views, color: 'text-gray-900' },
                        ].map((stat, i) => (
                            <Card key={i}>
                                <CardContent className="p-4 text-center">
                                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                    <p className="text-xs text-gray-500">{stat.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Bid History */}
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Bid History</CardTitle>
                            <Button variant="ghost" size="sm">Export CSV</Button>
                        </CardHeader>
                        <CardContent className="p-0">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 font-medium">
                                    <tr>
                                        <th className="px-6 py-3">User</th>
                                        <th className="px-6 py-3">Amount</th>
                                        <th className="px-6 py-3">Time</th>
                                        <th className="px-6 py-3">IP</th>
                                        <th className="px-6 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {bidHistory.map((bid, i) => (
                                        <tr key={bid.id} className={`hover:bg-blue-50/50 ${i === 0 ? 'bg-green-50' : ''}`}>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-bold text-gray-900">{bid.user}</p>
                                                    <p className="text-xs text-gray-500 font-mono">{bid.userId}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#0F4C81]">
                                                ¥{bid.amount.toLocaleString()}
                                                {i === 0 && <span className="ml-2 text-xs text-green-600">Highest</span>}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{bid.time}</td>
                                            <td className="px-6 py-4 text-gray-500 font-mono text-xs">{bid.ip}</td>
                                            <td className="px-6 py-4 text-right">
                                                <Button variant="ghost" size="sm" className="text-gray-400">View User</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Auction Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Auction Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Status</span>
                                <Badge variant="success">{auctionData.status}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Time Remaining</span>
                                <span className="font-bold text-red-600">{auctionData.timeRemaining}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Start Price</span>
                                <span className="font-medium">¥{auctionData.startPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Reserve</span>
                                <span className="font-medium">
                                    ¥{auctionData.reservePrice.toLocaleString()}
                                    {auctionData.reserveMet && <span className="ml-2 text-xs text-green-600">✓ Met</span>}
                                </span>
                            </div>
                            <div className="pt-4 border-t border-gray-100 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Start</span>
                                    <span>{auctionData.startTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">End</span>
                                    <span>{auctionData.endTime}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Featured</span>
                                <Badge variant={auctionData.featured ? 'success' : 'secondary'}>
                                    {auctionData.featured ? 'Yes' : 'No'}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Auto-Extend</span>
                                <Badge variant={auctionData.autoExtend ? 'success' : 'secondary'}>
                                    {auctionData.autoExtend ? 'Enabled' : 'Disabled'}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="secondary" className="w-full">Extend Time (+1h)</Button>
                            <Button variant="secondary" className="w-full">Pause Auction</Button>
                            <Button variant="secondary" className="w-full">View on Site</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
