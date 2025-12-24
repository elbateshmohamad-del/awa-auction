import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useTranslations } from 'next-intl';

export default function DashboardTrackingPage() {
    const t = useTranslations('dashboard.tracking');

    // In a real app, this data would come from an API and be localized there or formatted here.
    // For now, we will leave the dates/locations as is, but translate the static labels.
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

    const steps = ['processed', 'shipped', 'transit', 'customs', 'delivered'] as const;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{t('title')}</h1>
                <Button variant="secondary">{t('trackById')}</Button>
            </div>

            <div className="space-y-6">
                {shipments.map((shipment) => (
                    <Card key={shipment.id} className="overflow-hidden">
                        <div className="bg-neutral-50 border-b p-4 flex justify-between items-center">
                            <div className="font-mono font-medium text-neutral-600">{t('id')}: {shipment.id}</div>
                            <Badge variant="info">{shipment.status}</Badge>
                        </div>
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{shipment.item}</h3>
                                    <p className="text-neutral-500 mb-4">{t('destination')}: {shipment.destination}</p>
                                    <div className="flex gap-4">
                                        <div>
                                            <div className="text-xs text-neutral-400 uppercase tracking-wide">{t('currentLocation')}</div>
                                            <div className="font-medium">{shipment.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-neutral-400 uppercase tracking-wide">{t('eta')}</div>
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
                                        <span className={shipment.status === 'Processed' ? 'text-blue-600 font-bold' : ''}>{t('steps.processed')}</span>
                                        <span className={shipment.status === 'Shipped' ? 'text-blue-600 font-bold' : ''}>{t('steps.shipped')}</span>
                                        <span className={shipment.status === 'In Transit' ? 'text-blue-600 font-bold' : ''}>{t('steps.transit')}</span>
                                        <span className={shipment.status === 'Customs Clearance' ? 'text-blue-600 font-bold' : ''}>{t('steps.customs')}</span>
                                        <span className={shipment.status === 'Delivered' ? 'text-blue-600 font-bold' : ''}>{t('steps.delivered')}</span>
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
