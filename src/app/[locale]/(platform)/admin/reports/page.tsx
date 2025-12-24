import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Empty arrays - data will come from API when connected
const monthlyStats: { month: string; revenue: number; auctions: number; users: number }[] = [];
const topBuyers: { name: string; country: string; orders: number; spent: number }[] = [];
const topBikes: { model: string; sold: number; revenue: number }[] = [];

export default async function AdminReportsPage() {
    const t = await getTranslations('admin.reportsPage');

    // Summary with translations
    const summaryStats = [
        { label: t('summary.totalRevenue'), value: '¥261.8M', change: '+18%', icon: '💰' },
        { label: t('summary.totalAuctions'), value: '796', change: '+12%', icon: '🔨' },
        { label: t('summary.activeUsers'), value: '1,284', change: '+25%', icon: '👥' },
        { label: t('summary.avgOrderValue'), value: '¥820K', change: '+5%', icon: '📊' },
    ];

    // Region sales with translations
    const regionSales = [
        { region: t('salesByRegion.southeastAsia'), percentage: 65, color: 'bg-[#0F4C81]' },
        { region: t('salesByRegion.oceania'), percentage: 15, color: 'bg-blue-400' },
        { region: t('salesByRegion.middleEast'), percentage: 12, color: 'bg-blue-300' },
        { region: t('salesByRegion.africa'), percentage: 5, color: 'bg-blue-200' },
        { region: t('salesByRegion.others'), percentage: 3, color: 'bg-gray-300' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <select className="h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]">
                        <option>{t('period.last6Months')}</option>
                        <option>{t('period.last12Months')}</option>
                        <option>{t('period.thisYear')}</option>
                        <option>{t('period.allTime')}</option>
                    </select>
                    <Button variant="primary">{t('exportReport')}</Button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {summaryStats.map((stat, i) => (
                    <Card key={i}>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">{stat.icon}</span>
                                <span className="text-xs text-gray-500">{stat.label}</span>
                            </div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-green-600 font-medium">{stat.change} {t('summary.vsPrevPeriod')}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Revenue Chart Placeholder */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('revenueTrend.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-end justify-between gap-2 px-4">
                            {monthlyStats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                                    <div
                                        className="w-full bg-[#0F4C81] rounded-t-lg transition-all hover:bg-blue-700"
                                        style={{ height: `${(stat.revenue / 55) * 100}%` }}
                                    />
                                    <span className="text-xs text-gray-500">{stat.month}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center text-sm text-gray-500">
                            {t('revenueTrend.subtitle')}
                        </div>
                    </CardContent>
                </Card>

                {/* Geographic Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('salesByRegion.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {regionSales.map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">{item.region}</span>
                                        <span className="font-bold">{item.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Buyers */}
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>{t('topBuyers.title')}</CardTitle>
                        <Button variant="ghost" size="sm">{t('topBuyers.viewAll')}</Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-6 py-3 text-left">{t('topBuyers.table.buyer')}</th>
                                    <th className="px-6 py-3 text-left">{t('topBuyers.table.orders')}</th>
                                    <th className="px-6 py-3 text-right">{t('topBuyers.table.totalSpent')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {topBuyers.map((buyer, i) => (
                                    <tr key={i} className="hover:bg-blue-50/50">
                                        <td className="px-6 py-3">
                                            <p className="font-medium text-gray-900">{buyer.name}</p>
                                            <p className="text-xs text-gray-500">{buyer.country}</p>
                                        </td>
                                        <td className="px-6 py-3">{buyer.orders}</td>
                                        <td className="px-6 py-3 text-right font-bold text-[#0F4C81]">
                                            ¥{(buyer.spent / 1000000).toFixed(1)}M
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                {/* Top Selling Bikes */}
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>{t('topModels.title')}</CardTitle>
                        <Button variant="ghost" size="sm">{t('topModels.viewAll')}</Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-6 py-3 text-left">{t('topModels.table.model')}</th>
                                    <th className="px-6 py-3 text-left">{t('topModels.table.sold')}</th>
                                    <th className="px-6 py-3 text-right">{t('topModels.table.revenue')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {topBikes.map((bike, i) => (
                                    <tr key={i} className="hover:bg-blue-50/50">
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-2">
                                                <span>🏍️</span>
                                                <span className="font-medium text-gray-900">{bike.model}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3">{bike.sold} {t('topModels.units')}</td>
                                        <td className="px-6 py-3 text-right font-bold text-[#0F4C81]">
                                            ¥{(bike.revenue / 1000000).toFixed(0)}M
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
