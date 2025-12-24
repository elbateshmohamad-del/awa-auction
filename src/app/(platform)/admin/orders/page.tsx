import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminOrdersPage() {
    const orders = [
        { id: "ORD-001", user: "John Doe", amount: "$12,500", status: "Paid", date: "2023-10-25" },
        { id: "ORD-002", user: "Jane Smith", amount: "$8,200", status: "Pending", date: "2023-10-26" },
        { id: "ORD-003", user: "Robert Brown", amount: "$4,100", status: "Shipped", date: "2023-10-27" },
        { id: "ORD-004", user: "Emily White", amount: "$15,000", status: "Processing", date: "2023-10-27" },
        { id: "ORD-005", user: "Michael Green", amount: "$2,300", status: "Cancelled", date: "2023-10-28" },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Order Management</h1>
                <Button>Export CSV</Button>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex gap-4 mb-4">
                    <Input placeholder="Search orders..." className="max-w-sm" />
                    <select className="border rounded px-3 py-2">
                        <option>All Status</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Shipped</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4 font-semibold text-neutral-600">Order ID</th>
                                <th className="p-4 font-semibold text-neutral-600">Customer</th>
                                <th className="p-4 font-semibold text-neutral-600">Amount</th>
                                <th className="p-4 font-semibold text-neutral-600">Status</th>
                                <th className="p-4 font-semibold text-neutral-600">Date</th>
                                <th className="p-4 font-semibold text-neutral-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b hover:bg-neutral-50">
                                    <td className="p-4 font-medium">{order.id}</td>
                                    <td className="p-4">{order.user}</td>
                                    <td className="p-4">{order.amount}</td>
                                    <td className="p-4">
                                        <Badge variant={
                                            order.status === "Paid" ? "green" :
                                                order.status === "Pending" ? "yellow" :
                                                    order.status === "Shipped" ? "blue" :
                                                        order.status === "Cancelled" ? "red" : "default"
                                        }>
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-neutral-500">{order.date}</td>
                                    <td className="p-4">
                                        <Button variant="outline" size="sm">View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
