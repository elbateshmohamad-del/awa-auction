"use client";

import DashboardLayout from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
    const t = useTranslations();
    const params = useParams();
    const locale = params.locale as string;
    const { user } = useAuth();

    const buttonBase = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const ghostVariant = "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300";
    const smSize = "px-3 py-1.5 text-sm";
    const mdSize = "px-4 py-2.5 text-base";

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.title')}</h1>
                <p className="text-gray-500">{t('dashboard.welcome')}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title={t('dashboard.activeBids')} value="0" icon="🔨" className="border-blue-500" />
                <StatCard title={t('dashboard.wonAuctions')} value="0" icon="🏆" className="border-yellow-500" />
                <StatCard title={t('dashboard.watchlist')} value="0" icon="👀" className="border-gray-500" />
                <StatCard title={t('dashboard.deposit')} value="¥0" icon="💰" className="border-green-500" />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Link href="/shipping-schedule">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500 h-full">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">Shipping Schedule</h3>
                                <p className="text-sm text-gray-500">Check schedules & book space</p>
                            </div>
                            <span className="text-3xl">🚢</span>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={`/${locale}/dashboard/orders`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-500 h-full">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">Order History</h3>
                                <p className="text-sm text-gray-500">Track won auctions & shipments</p>
                            </div>
                            <span className="text-3xl">📦</span>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Active Bids Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle>{t('dashboard.activeBids')}</CardTitle>
                            <Link
                                href={`/${locale}/dashboard/bids`}
                                className={`${buttonBase} ${ghostVariant} ${smSize} text-blue-600`}
                            >
                                {t('common.viewAll')}
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="py-8 text-center text-gray-500">
                                {t('common.noData', { defaultValue: 'データがありません' })}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle>{t('dashboard.overview')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="py-8 text-center text-gray-500">
                                {t('common.noData', { defaultValue: 'データがありません' })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    {/* Account Status */}
                    <Card className="bg-[#0F4C81] text-white border-none">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2">{t('dashboard.profile')}</h3>
                            {user?.memberId && (
                                <div className="text-sm text-blue-200 mb-2 font-mono">
                                    ID: {user.memberId}
                                </div>
                            )}
                            <div className="flex items-center gap-2 mb-4">
                                <Badge className="bg-green-500 text-white border-none">{t('kyc.status.approved')}</Badge>
                                <span className="text-sm text-blue-200">{t('subscription.free.name')}</span>
                            </div>
                            <p className="text-sm text-blue-100 mb-4">
                                {t('subscription.subtitle')}
                            </p>
                            <Link
                                href={`/${locale}/dashboard/subscription`}
                                className={`${buttonBase} ${mdSize} w-full bg-white text-[#0F4C81] hover:bg-gray-100 border-none`}
                            >
                                {t('subscription.selectPlan')}
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Watchlist Preview */}
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle>{t('dashboard.watchlist')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="py-8 text-center text-gray-500">
                                {t('common.noData', { defaultValue: 'データがありません' })}
                            </div>
                            <Link
                                href={`/${locale}/dashboard/watchlist`}
                                className={`${buttonBase} ${ghostVariant} ${mdSize} w-full text-sm text-gray-500 mt-2`}
                            >
                                {t('common.viewAll')} {t('dashboard.watchlist')}
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
