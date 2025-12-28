"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';

export default function DashboardTrackingPage() {
    const t = useTranslations('dashboard.tracking');

    // In a real app, this data would come from an API and be localized there or formatted here.
    const shipments = [
        {
            id: "TRK-998877",
            item: "2020 Kawasaki Ninja 400",
            status: "In Transit",
            location: "Port of Yokohama",
            eta: "Nov 15, 2025",
            destination: "Sydney, Australia",
            progress: 60,
        },
        {
            id: "TRK-112233",
            item: "2018 Yamaha MT-07",
            status: "Customs Clearance",
            location: "Osaka Port",
            eta: "Nov 20, 2025",
            destination: "Dubai, UAE",
            progress: 80,
        },
    ];

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B] mb-12">
                        {t('subtitle')}
                    </p>
                    <Button variant="primary" className="text-lg px-8 py-4">{t('trackById')}</Button>
                </div>
            </section>

            {/* Shipments Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('activeShipments')}</h2>
                    <div className="space-y-8">
                        {shipments.map((shipment) => (
                            <div key={shipment.id} className="bg-white border border-[#D2D2D7] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                <div className="bg-[#F5F5F7] p-6 flex justify-between items-center">
                                    <div className="font-mono font-bold text-lg text-[#1D1D1F]">{t('id')}: {shipment.id}</div>
                                    <Badge variant="info" className="text-base px-4 py-2">{shipment.status}</Badge>
                                </div>
                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h3 className="font-bold text-2xl mb-2">{shipment.item}</h3>
                                            <p className="text-[#86868B] text-lg">{t('destination')}: {shipment.destination}</p>
                                        </div>
                                        <div className="flex gap-8">
                                            <div>
                                                <div className="text-sm text-[#86868B] uppercase tracking-wide mb-1">{t('currentLocation')}</div>
                                                <div className="font-bold text-lg">{shipment.location}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-[#86868B] uppercase tracking-wide mb-1">{t('eta')}</div>
                                                <div className="font-bold text-lg text-[#007AFF]">{shipment.eta}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="h-3 bg-[#E5E5E5] rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] rounded-full transition-all"
                                                style={{ width: `${shipment.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm text-[#86868B]">
                                        <span className={shipment.status === 'Processed' ? 'text-[#007AFF] font-bold' : ''}>{t('steps.processed')}</span>
                                        <span className={shipment.status === 'Shipped' ? 'text-[#007AFF] font-bold' : ''}>{t('steps.shipped')}</span>
                                        <span className={shipment.status === 'In Transit' ? 'text-[#007AFF] font-bold' : ''}>{t('steps.transit')}</span>
                                        <span className={shipment.status === 'Customs Clearance' ? 'text-[#007AFF] font-bold' : ''}>{t('steps.customs')}</span>
                                        <span className={shipment.status === 'Delivered' ? 'text-[#007AFF] font-bold' : ''}>{t('steps.delivered')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tracking Steps Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16">{t('deliveryProcess')}</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg flex-1 max-w-[180px]">
                            <div className="text-4xl mb-4">📦</div>
                            <div className="font-bold text-lg">{t('steps.processed')}</div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-[#007AFF]">
                                <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="md:hidden flex items-center">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#007AFF]">
                                <path d="M12 0V36M12 36L4 26M12 36L20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg flex-1 max-w-[180px]">
                            <div className="text-4xl mb-4">🚚</div>
                            <div className="font-bold text-lg">{t('steps.shipped')}</div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-[#007AFF]">
                                <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="md:hidden flex items-center">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#007AFF]">
                                <path d="M12 0V36M12 36L4 26M12 36L20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg flex-1 max-w-[180px]">
                            <div className="text-4xl mb-4">🚢</div>
                            <div className="font-bold text-lg">{t('steps.transit')}</div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-[#007AFF]">
                                <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="md:hidden flex items-center">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#007AFF]">
                                <path d="M12 0V36M12 36L4 26M12 36L20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg flex-1 max-w-[180px]">
                            <div className="text-4xl mb-4">🏛️</div>
                            <div className="font-bold text-lg">{t('steps.customs')}</div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-[#007AFF]">
                                <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="md:hidden flex items-center">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#007AFF]">
                                <path d="M12 0V36M12 36L4 26M12 36L20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg flex-1 max-w-[180px]">
                            <div className="text-4xl mb-4">✅</div>
                            <div className="font-bold text-lg">{t('steps.delivered')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
