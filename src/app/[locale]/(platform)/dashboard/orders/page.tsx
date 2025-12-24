"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Link } from '@/i18n/navigation';

export default function DashboardOrdersPage() {
    // Mock data with images
    const orders = [
        {
            id: "ORD-8821",
            item: "2018 Yamaha MT-07",
            amount: "¥ 680,000",
            status: "Processing",
            date: "2023-11-01",
            location: "Yokohama Port",
            eta: "Dec 20, 2023",
            image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
            id: "ORD-7743",
            item: "2020 Kawasaki Ninja 400",
            amount: "¥ 550,000",
            status: "Shipped",
            date: "2023-10-15",
            location: "En Route",
            eta: "Nov 25, 2023",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84f3d?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
            id: "ORD-6629",
            item: "2015 Honda Rebel 250",
            amount: "¥ 320,000",
            status: "Delivered",
            date: "2023-09-20",
            location: "Delivered",
            eta: "Arrived",
            image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400&h=300"
        },
    ];

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Delivered': return 'success';
            case 'Shipped': return 'info';
            case 'Processing': return 'warning';
            default: return 'default';
        }
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto pt-24 pb-8 px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#0F4C81]">Order History</h1>
                    <p className="text-gray-500 mt-1">Track and manage your recent purchases</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export Report
                </Button>
            </div>

            <div className="grid gap-6">
                {orders.map((order) => (
                    <Card key={order.id} padding="none" hoverable className="overflow-hidden group border-l-4 border-l-[#0F4C81]">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section */}
                                <div className="w-full md:w-72 h-48 md:h-auto relative bg-gray-200 shrink-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* minimal loading filler */}
                                    <img
                                        src={order.image}
                                        alt={order.item}
                                        className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            // Fallback if image fails
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 hidden">
                                        <span className="text-4xl">🏍️</span>
                                    </div>

                                    <div className="absolute top-3 left-3 z-20">
                                        <Badge className="bg-white/90 text-gray-800 backdrop-blur-md shadow-sm border border-white/50">
                                            {order.date}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">#{order.id}</span>
                                                <Badge variant={getStatusVariant(order.status)}>
                                                    {order.status}
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0F4C81] transition-colors">{order.item}</h3>
                                            <p className="text-sm text-gray-500">Shipping via Sea Freight (Container)</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <div className="text-2xl font-black text-[#0F4C81]">{order.amount}</div>
                                            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">Total Amount</div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div className="flex gap-6 text-sm text-gray-600 w-full sm:w-auto">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">location_on</span>
                                                    <span>{order.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">event</span>
                                                    <span>{order.eta}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 w-full sm:w-auto justify-end">
                                                <Button variant="ghost" size="sm">Invoice</Button>
                                                <Button size="sm">View Details</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        📦
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">No Orders Yet</h3>
                    <p className="text-gray-500 mb-6">Start bidding or reserving bikes to see them here.</p>
                    <Link href="/auctions">
                        <Button>Browse Auctions</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
