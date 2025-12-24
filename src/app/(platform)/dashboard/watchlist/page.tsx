import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/Card';

export default function WatchlistPage() {
    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Watchlist</h1>
                <p className="text-gray-500">Keep an eye on the bikes you love.</p>
            </div>

            <Card>
                <CardContent className="p-12 text-center text-gray-500">
                    <span className="text-4xl block mb-4">👀</span>
                    <p>Watchlist items will appear here.</p>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
