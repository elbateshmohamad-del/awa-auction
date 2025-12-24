import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function DashboardTrackingPage() {
    const shipments = [
        {
            id: "TRK-998877",
            item: "2020 Kawasaki Ninja 400",
            status: "In Transit",
            location: "Port of Yokohama",
            eta: "Nov 15, 2025",
            destination: "Sydney, Australia"
        },
        {
            id: "TRK-112233",
            item: "2018 Yamaha MT-07",
            status: "Customs Clearance",
            location: "Osaka Port",
            eta: "Nov 20, 2025",
            destination: "Dubai, UAE"
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Shipment Tracking</h1>
                <Button variant="outline">Track by ID</Button>
            </div>

            <div className="space-y-6">
                {shipments.map((shipment) => (
                    <Card key={shipment.id} className="overflow-hidden">
                        <div className="bg-neutral-50 border-b p-4 flex justify-between items-center">
                            <div className="font-mono font-medium text-neutral-600">Tracking ID: {shipment.id}</div>
                            <Badge variant="blue">{shipment.status}</Badge>
                        </div>
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{shipment.item}</h3>
                                    <p className="text-neutral-500 mb-4">Destination: {shipment.destination}</p>
                                    <div className="flex gap-4">
                                        <div>
                                            <div className="text-xs text-neutral-400 uppercase tracking-wide">Current Location</div>
                                            <div className="font-medium">{shipment.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-neutral-400 uppercase tracking-wide">Estimated Arrival</div>
                                            <div className="font-medium">{shipment.eta}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar Visual */}
                                <div className="relative pt-6">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-neutral-200 rounded overflow-hidden">
                                        <div className="h-full bg-blue-600 w-2/3"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-neutral-400 mt-2">
                                        <span>Processed</span>
                                        <span>Shipped</span>
                                        <span className="text-blue-600 font-bold">In Transit</span>
                                        <span>Customs</span>
                                        <span>Delivered</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
