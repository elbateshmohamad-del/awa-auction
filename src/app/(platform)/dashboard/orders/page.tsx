import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function DashboardOrdersPage() {
    const orders = [
        { id: "ORD-8821", item: "2018 Yamaha MT-07", amount: "¥ 680,000", status: "Processing", date: "2023-11-01" },
        { id: "ORD-7743", item: "2020 Kawasaki Ninja 400", amount: "¥ 550,000", status: "Shipped", date: "2023-10-15" },
        { id: "ORD-6629", item: "2015 Honda Rebel 250", amount: "¥ 320,000", status: "Delivered", date: "2023-09-20" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">My Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="font-mono text-sm text-neutral-500">#{order.id}</span>
                                <span className="text-sm text-neutral-400">{order.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900">{order.item}</h3>
                            <div className="font-bold text-neutral-700 mt-1">{order.amount}</div>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                            <Badge variant={
                                order.status === 'Delivered' ? 'green' :
                                    order.status === 'Shipped' ? 'blue' : 'yellow'
                            }>
                                {order.status}
                            </Badge>
                            <Button variant="outline" size="sm">View Details</Button>
                        </div>
                    </div>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="text-center py-12 text-neutral-500">
                    <p>You haven't placed any orders yet.</p>
                    <Button className="mt-4" variant="outline">Browse Catalogue</Button>
                </div>
            )}
        </div>
    );
}
