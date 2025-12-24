import DashboardLayout from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, John! Here&apos;s what&apos;s happening with your account.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Active Bids" value="3" icon="🔨" className="border-blue-500" />
                <StatCard title="Won Auctions" value="12" icon="🏆" className="border-yellow-500" />
                <StatCard title="Watchlist" value="5" icon="👀" className="border-gray-500" />
                <StatCard title="Deposit Balance" value="¥100,000" icon="💰" className="border-green-500" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Active Bids Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle>Active Bids</CardTitle>
                            <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((bid) => (
                                    <div key={bid} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center text-xl">🏍️</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-gray-900">2020 Honda CBR1000RR</h4>
                                                <Badge variant="warning">Ending soon</Badge>
                                            </div>
                                            <div className="flex justify-between items-center mt-1">
                                                <p className="text-sm text-gray-500">Current Bid: <span className="font-bold text-gray-900">¥1,250,000</span></p>
                                                <p className="text-xs text-gray-400">Ends in 2h 15m</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-2 bg-blue-500 rounded-full h-full"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Bid placed on Yamaha YZF-R1</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 bg-green-500 rounded-full h-full"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Deposit confirmed</p>
                                        <p className="text-xs text-gray-500">Yesterday</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 bg-yellow-500 rounded-full h-full"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Outbid on Suzuki GSX-R1000</p>
                                        <p className="text-xs text-gray-500">2 days ago</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    {/* Account Status */}
                    <Card className="bg-[#0F4C81] text-white border-none">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2">Account Status</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <Badge className="bg-green-500 text-white border-none">Active</Badge>
                                <span className="text-sm text-blue-200">Standard Plan</span>
                            </div>
                            <p className="text-sm text-blue-100 mb-4">
                                Your account is fully verified. You can bid up to ¥2,000,000.
                            </p>
                            <Button className="w-full bg-white text-[#0F4C81] hover:bg-gray-100 border-none">
                                Upgrade Limit
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Watchlist Preview */}
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle>Watchlist Top Picks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[1, 2].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏍️</div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 line-clamp-1">Kawasaki Ninja H2</p>
                                            <p className="text-xs text-gray-500">Thu, 15:00 JST</p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="ghost" className="w-full text-sm text-gray-500 mt-2">View All Watchlist</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
