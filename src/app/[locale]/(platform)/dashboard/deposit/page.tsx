import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function DashboardDepositPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Deposit Funds</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Current Balance */}
                <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                    <CardHeader>
                        <CardTitle className="text-white">Current Balance</CardTitle>
                        <CardDescription className="text-indigo-100">Available for bidding</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold mb-4">¥ 1,500,000</div>
                        <div className="flex gap-2 text-sm text-indigo-100">
                            <span>Locked: ¥ 200,000</span>
                            <span>•</span>
                            <span>Available: ¥ 1,300,000</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Add Funds */}
                <Card>
                    <CardHeader>
                        <CardTitle>Add Funds</CardTitle>
                        <CardDescription>Secure payment via Credit Card or Bank Transfer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Amount (¥)</label>
                                <Input type="number" placeholder="Enter amount..." />
                            </div>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Proceed to Payment</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Transaction History */}
            <h2 className="text-xl font-bold mt-8 mb-4">Transaction History</h2>
            <Card>
                <CardContent className="p-0">
                    <table className="w-full text-left">
                        <thead className="bg-neutral-50 text-neutral-600 text-sm">
                            <tr>
                                <th className="p-4">Date</th>
                                <th className="p-4">Description</th>
                                <th className="p-4">Method</th>
                                <th className="p-4 text-right">Amount</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="p-4">2023-10-20</td>
                                <td className="p-4">Deposit</td>
                                <td className="p-4">Credit Card</td>
                                <td className="p-4 text-right text-green-600">+ ¥ 500,000</td>
                                <td className="p-4"><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span></td>
                            </tr>
                            <tr>
                                <td className="p-4">2023-10-15</td>
                                <td className="p-4">Bid Payment (Honda CB400)</td>
                                <td className="p-4">Balance</td>
                                <td className="p-4 text-right text-red-600">- ¥ 350,000</td>
                                <td className="p-4"><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span></td>
                            </tr>
                            <tr>
                                <td className="p-4">2023-10-01</td>
                                <td className="p-4">Deposit</td>
                                <td className="p-4">Bank Transfer</td>
                                <td className="p-4 text-right text-green-600">+ ¥ 1,000,000</td>
                                <td className="p-4"><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
