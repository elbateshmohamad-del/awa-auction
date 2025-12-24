"use client";

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

// Empty array - data will come from API when connected
const recentNotifications: { id: number; title: string; type: string; recipients: number; status: string; sentAt: string }[] = [];

export default function AdminNotificationsPage() {
    const t = useTranslations('admin.notificationsPage');
    const tCommon = useTranslations('admin.common');
    const router = useRouter();
    const params = useParams();
    const locale = params.locale || 'en';
    const [activeTab, setActiveTab] = useState<'overview' | 'automation'>('overview');

    // Stats with translations
    const notificationStats = [
        { label: t('stats.sentToday'), value: 156, icon: '📤' },
        { label: t('stats.pending'), value: 23, icon: '⏳' },
        { label: t('stats.failed'), value: 2, icon: '❌' },
        { label: t('stats.openRate'), value: '78%', icon: '👁️' },
    ];

    // Automation Rules with translations
    const [rules, setRules] = useState([
        // Sales & Bidding
        { id: 'bid-start', category: 'salesBidding', name: t('automation.rules.bidStart'), desc: t('automation.rules.bidStartDesc'), enabled: true },
        { id: 'bid-end', category: 'salesBidding', name: t('automation.rules.bidEnd'), desc: t('automation.rules.bidEndDesc'), enabled: true },
        { id: 'outbid', category: 'salesBidding', name: t('automation.rules.outbid'), desc: t('automation.rules.outbidDesc'), enabled: true },
        { id: 'saved-search', category: 'salesBidding', name: t('automation.rules.savedSearch'), desc: t('automation.rules.savedSearchDesc'), enabled: true },
        { id: 'recommend', category: 'salesBidding', name: t('automation.rules.recommend'), desc: t('automation.rules.recommendDesc'), enabled: false },
        // Payment & Logistics
        { id: 'invoice-auto', category: 'paymentLogistics', name: t('automation.rules.invoiceAuto'), desc: t('automation.rules.invoiceAutoDesc'), enabled: true },
        { id: 'dunning-3d', category: 'paymentLogistics', name: t('automation.rules.dunning3d'), desc: t('automation.rules.dunning3dDesc'), enabled: true },
        { id: 'dunning-due', category: 'paymentLogistics', name: t('automation.rules.dunningDue'), desc: t('automation.rules.dunningDueDesc'), enabled: true },
        { id: 'cart-recovery', category: 'paymentLogistics', name: t('automation.rules.cartRecovery'), desc: t('automation.rules.cartRecoveryDesc'), enabled: false },
        { id: 'ship-status', category: 'paymentLogistics', name: t('automation.rules.shipStatus'), desc: t('automation.rules.shipStatusDesc'), enabled: true },
        // CRM & Engagement
        { id: 'welcome', category: 'crmEngagement', name: t('automation.rules.welcome'), desc: t('automation.rules.welcomeDesc'), enabled: true },
        { id: 're-engage', category: 'crmEngagement', name: t('automation.rules.reEngage'), desc: t('automation.rules.reEngageDesc'), enabled: false },
        { id: 'birthday', category: 'crmEngagement', name: t('automation.rules.birthday'), desc: t('automation.rules.birthdayDesc'), enabled: false },
    ]);

    const categories = [
        { key: 'salesBidding', label: t('automation.categories.salesBidding') },
        { key: 'paymentLogistics', label: t('automation.categories.paymentLogistics') },
        { key: 'crmEngagement', label: t('automation.categories.crmEngagement') },
    ];

    const getStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Sent': t('recentNotifications.status.sent'),
            'Pending': t('recentNotifications.status.pending'),
            'Failed': t('recentNotifications.status.failed'),
        };
        return statusMap[status] || status;
    };

    const toggleRule = (id: string) => {
        setRules(rules.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'overview' ? 'bg-white text-[#0F4C81] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        {t('tabs.overview')}
                    </button>
                    <button
                        onClick={() => setActiveTab('automation')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'automation' ? 'bg-white text-[#0F4C81] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        {t('tabs.automation')}
                    </button>
                </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'overview' ? (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {notificationStats.map((stat, i) => (
                            <Card key={i}>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xl">{stat.icon}</span>
                                        <span className="text-xs text-gray-500">{stat.label}</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <Card className="lg:col-span-2">
                            <CardHeader className="flex flex-row justify-between items-center">
                                <CardTitle>{t('recentNotifications.title')}</CardTitle>
                                <Input placeholder={t('recentNotifications.searchPlaceholder')} className="w-48" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 text-gray-500">
                                        <tr>
                                            <th className="px-6 py-3 text-left">{t('recentNotifications.table.notification')}</th>
                                            <th className="px-6 py-3 text-left">{t('recentNotifications.table.type')}</th>
                                            <th className="px-6 py-3 text-left">{t('recentNotifications.table.recipients')}</th>
                                            <th className="px-6 py-3 text-left">{t('recentNotifications.table.status')}</th>
                                            <th className="px-6 py-3 text-right">{t('recentNotifications.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {recentNotifications.map((notif) => (
                                            <tr key={notif.id} className="hover:bg-blue-50/50">
                                                <td className="px-6 py-3 font-medium text-gray-900">{notif.title}</td>
                                                <td className="px-6 py-3">
                                                    <Badge variant={notif.type === 'Email' ? 'blue' : 'secondary'}>
                                                        {notif.type === 'Email' ? '📧' : '🔔'} {notif.type}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-3">{notif.recipients}</td>
                                                <td className="px-6 py-3">
                                                    <Badge variant="success">{getStatusTranslation(notif.status)}</Badge>
                                                </td>
                                                <td className="px-6 py-3 text-right">
                                                    <Button variant="ghost" size="sm">{t('recentNotifications.view')}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{t('quickActions.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="primary" className="w-full" onClick={() => router.push(`/${locale}/admin/notifications/create`)}>+ {t('quickActions.createBlast')}</Button>
                                    <Button variant="secondary" className="w-full justify-start" onClick={() => alert('Drafted!')}>
                                        📧 {t('quickActions.auctionReminder')}
                                    </Button>
                                    <Button variant="secondary" className="w-full justify-start" onClick={() => alert('Drafted!')}>
                                        📧 {t('quickActions.paymentReminder')}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </>
            ) : (
                /* AUTOMATION RULES TAB */
                <div className="grid lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
                    {categories.map((category) => (
                        <Card key={category.key} className="h-fit">
                            <CardHeader className="pb-3 border-b border-gray-100 bg-gray-50/50">
                                <CardTitle className="text-lg">{category.label}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-gray-100">
                                    {rules.filter(r => r.category === category.key).map((rule) => (
                                        <div key={rule.id} className="p-4 flex items-start justify-between hover:bg-gray-50 transition-colors">
                                            <div className="pr-4">
                                                <p className={`font-bold text-sm ${rule.enabled ? 'text-gray-900' : 'text-gray-400'}`}>
                                                    {rule.name}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">{rule.desc}</p>
                                            </div>
                                            <div
                                                onClick={() => toggleRule(rule.id)}
                                                className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out shrink-0 ${rule.enabled ? 'bg-[#0F4C81]' : 'bg-gray-200'}`}
                                            >
                                                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ease-in-out ${rule.enabled ? 'left-6' : 'left-1'}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
