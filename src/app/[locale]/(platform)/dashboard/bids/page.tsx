import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';

export default function MyBidsPage() {
    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Bids</h1>
                <p className="text-gray-500">Track all your active and past bids.</p>
            </div>

            <Card>
                <CardContent className="p-12 text-center text-gray-500">
                    <span className="text-4xl block mb-4">🔨</span>
                    <p>Bidding history list will go here.</p>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
