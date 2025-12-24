import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";

export default function DashboardSubscriptionPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold mb-2">My Subscription</h1>
                <p className="text-neutral-600">Manage your subscription plan and billing.</p>
            </div>

            {/* Current Plan */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-indigo-900 text-xl">Current Plan: Premium</CardTitle>
                            <CardDescription className="text-indigo-700 mt-1">
                                Billed monthly · Next payment: Dec 15, 2025
                            </CardDescription>
                        </div>
                        <Badge variant="blue" className="text-lg px-4 py-1">Active</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-indigo-900">$49</span>
                        <span className="text-indigo-700">/month</span>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    <Button variant="outline" className="bg-white hover:bg-neutral-50">Manage Billing</Button>
                    <Link href="/subscription">
                        <Button variant="link" className="text-indigo-700">View All Plans</Button>
                    </Link>
                </CardFooter>
            </Card>

            {/* Benefits */}
            <div>
                <h3 className="font-semibold text-lg mb-4">Your Plan Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-green-500 text-xl">✓</span>
                            <span>Reduced transaction fees (3%)</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-green-500 text-xl">✓</span>
                            <span>Priority Support 24/7</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-green-500 text-xl">✓</span>
                            <span>Advanced Analytics Dashboard</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-green-500 text-xl">✓</span>
                            <span>Unlimited Watchlist</span>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="border-t pt-6">
                <h3 className="font-semibold text-neutral-500 mb-2">Danger Zone</h3>
                <Button variant="destructive" size="sm">Cancel Subscription</Button>
            </div>
        </div>
    );
}
