'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

export default function AdminDashboardPage() {
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('admin.dashboardPage');
    const { user } = useAuth();
    // Hydration mismatch prevention
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Helper to check permission
    const hasPermission = (permissionId?: string) => {
        if (!permissionId) return true; // No restriction
        // Logic should match AdminSidebar/AuthContext
        if (!user) return false;
        if (user.role === 'ADMIN') return true;
        if (user.role === 'STAFF') {
            // Ensure permissions array exists
            const perms = user.permissions || [];
            return perms.includes(permissionId);
        }
        return false;
    };

    // Quick Access Items with Permissions
    const quickAccess = [
        { title: t('quickAccess.bikeInventory'), icon: '🏍️', href: '/admin/bikes', bg: 'bg-blue-50', text: 'text-blue-700', permissionId: 'bikes' },
        { title: t('quickAccess.auctions'), icon: '🔨', href: '/admin/auctions', bg: 'bg-indigo-50', text: 'text-indigo-700', permissionId: 'auctions' },
        { title: t('quickAccess.users'), icon: '👥', href: '/admin/users', bg: 'bg-green-50', text: 'text-green-700', permissionId: 'users' },
        { title: t('quickAccess.orders'), icon: '📦', href: '/admin/orders', bg: 'bg-amber-50', text: 'text-amber-700', permissionId: 'orders' },
        { title: t('quickAccess.content'), icon: '📝', href: '/admin/content', bg: 'bg-purple-50', text: 'text-purple-700', permissionId: 'content' },
        { title: t('quickAccess.finance'), icon: '💰', href: '/admin/finance', bg: 'bg-emerald-50', text: 'text-emerald-700', permissionId: 'finance' },
    ];

    // Stats with Permissions
    const stats = [
        { label: t('metrics.totalRevenue'), value: '¥48,500,000', change: '+12%', isUp: true, icon: '💰', permissionId: 'finance' },
        { label: t('metrics.activeAuctions'), value: '142', change: '+5', isUp: true, icon: '🔨', permissionId: 'auctions' },
        { label: t('metrics.newUsers'), value: '28', change: '-2', isUp: false, icon: '👥', permissionId: 'users' },
        { label: t('metrics.pendingKyc'), value: '7', change: t('metrics.actionReq'), isUp: false, alert: true, icon: '📝', permissionId: 'users' },
    ];

    // Recent Activity with Permissions
    const recentActivity = [
        { title: t('recentActivity.newUserReg'), desc: t('recentActivity.userRegDesc'), time: '12 mins ago', permissionId: 'users' },
        { title: t('recentActivity.auctionEnded'), desc: t('recentActivity.auctionEndedDesc'), time: '45 mins ago', permissionId: 'auctions' },
        { title: t('recentActivity.paymentReceived'), desc: t('recentActivity.paymentReceivedDesc'), time: '1 hour ago', permissionId: 'finance' },
        { title: t('recentActivity.systemAlert'), desc: t('recentActivity.backupDesc'), time: '3 hours ago', permissionId: 'dashboard' }, // General
        { title: t('recentActivity.newBid'), desc: t('recentActivity.newBidDesc'), time: '5 hours ago', permissionId: 'auctions' },
    ];

    // Pending Tasks with Permissions
    const pendingTasks = [
        { label: t('pendingTasks.reviewKyc'), permissionId: 'users' },
        { label: t('pendingTasks.confirmPayment'), permissionId: 'finance' }, // finance/orders
        { label: t('pendingTasks.updateRates'), permissionId: 'finance' },
    ];

    if (!mounted) return null;

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{t('title')}</h2>
                    <p className="text-sm text-gray-500">{t('welcome')}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm">{t('actions.downloadReport')}</Button>
                    <Button variant="primary" size="sm">{t('actions.systemHealth')}</Button>
                </div>
            </div>

            {/* Quick Access Grid */}
            <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{t('quickAccess.title')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {quickAccess.filter(item => hasPermission(item.permissionId)).map((item) => {
                        const href = `/${locale}${item.href.startsWith('/') ? item.href : '/' + item.href}`;
                        return (
                            <Link key={item.title} href={href} className="block group">
                                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-transparent hover:border-[#0F4C81]">
                                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                                        <div className={`w-12 h-12 rounded-full ${item.bg} ${item.text} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-gray-700 group-hover:text-[#0F4C81]">{item.title}</span>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* KPI Grid */}
            <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{t('metrics.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.filter(item => hasPermission(item.permissionId)).map((stat, i) => (
                        <Card key={i} className={`border-l-4 ${stat.alert ? 'border-red-500' : 'border-[#0F4C81]'}`}>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase">{stat.label}</span>
                                    <span className="text-2xl">{stat.icon}</span>
                                </div>
                                <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                                <div className={`text-xs font-bold ${stat.isUp ? 'text-green-600' : stat.alert ? 'text-red-600' : 'text-gray-500'}`}>
                                    {stat.change}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Actions */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>{t('recentActivity.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivity.filter(item => hasPermission(item.permissionId)).map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100 last:border-0 h-full">
                                    <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{item.title}</p>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                            {recentActivity.filter(item => hasPermission(item.permissionId)).length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">No recent activity visible for your permissions.</p>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Pending Tasks */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('pendingTasks.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {pendingTasks.filter(item => hasPermission(item.permissionId)).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                        <span className="text-sm text-gray-700">{item.label}</span>
                                    </li>
                                ))}
                                {pendingTasks.filter(item => hasPermission(item.permissionId)).length === 0 && (
                                    <li className="text-sm text-gray-500 text-center">No pending tasks.</li>
                                )}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* System Status - Visible to Dashboard Access (all staff with access) */}
                    <div className="bg-gradient-to-br from-[#0F4C81] to-blue-900 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="font-bold text-lg mb-2">{t('systemStatus.title')}</h3>
                        <div className="space-y-2 text-sm text-white">
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.serverLoad')}</span>
                                <span className="font-bold text-white">12%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.database')}</span>
                                <span className="font-bold text-green-400">{t('systemStatus.healthy')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.apiLatency')}</span>
                                <span className="font-bold text-white">45ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
