
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const recentActivity = [
    { action: 'Placed bid on 2022 Kawasaki Ninja ZX-10R', amount: '¥1,850,000', time: '2 hours ago' },
    { action: 'Placed bid on 2021 Honda CB1000R', amount: '¥980,000', time: '1 day ago' },
    { action: 'Won auction for 2019 Yamaha MT-09', amount: '¥720,000', time: '3 days ago' },
    { action: 'Added to watchlist: 2020 Suzuki GSX-R1000', amount: '-', time: '5 days ago' },
];

const orders = [
    { id: 'ORD-1029', bike: '2019 Yamaha MT-09', amount: 720000, status: 'Shipped', date: '2025-12-05' },
    { id: 'ORD-0987', bike: '2018 Honda CBR650R', amount: 650000, status: 'Delivered', date: '2025-11-20' },
];

const countries = [
    'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia',
    'Australia', 'New Zealand', 'Singapore', 'Taiwan', 'South Korea',
    'United Kingdom', 'Germany', 'France', 'Italy', 'Netherlands',
    'Spain', 'Poland', 'Belgium', 'Sweden', 'Switzerland',
    'United States', 'Canada', 'Mexico', 'Brazil', 'Chile', 'Argentina',
    'UAE', 'Saudi Arabia', 'Kenya', 'South Africa', 'Nigeria',
    'China', 'India', 'Russia', 'Turkey', 'Other'
].sort();

export default function AdminUserDetailPage() {
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('admin.userDetailPage');

    const [user, setUser] = useState({
        id: 'U-9928',
        name: 'Somchai Tanaka',
        email: 'somchai@example.com',
        phone: '+66 89 123 4567',
        country: 'Thailand',
        language: 'English',
        status: 'Active',
        kycStatus: 'Verified',
        subscriptionPlan: 'Gold',
        joinDate: '2024-08-15',
        lastLogin: '2025-12-12 09:45',
        totalBids: 145,
        wonAuctions: 12,
        totalSpent: 18500000,
        deposit: 500000,
    });

    const [lastAction, setLastAction] = useState<string | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [messageText, setMessageText] = useState('');
    const [editForm, setEditForm] = useState(user);
    const [depositAmount, setDepositAmount] = useState(0);

    const handleAction = (action: string) => {
        if (action === 'Message') {
            setActiveModal('message');
            return;
        }
        if (action === 'Edit') {
            setEditForm(user);
            setActiveModal('edit');
            return;
        }
        if (action === 'View KYC Documents') {
            setActiveModal('kyc');
            return;
        }
        if (action === 'Adjust Deposit') {
            setDepositAmount(user.deposit);
            setActiveModal('deposit');
            return;
        }
        if (action === 'Change Subscription') {
            setEditForm(user);
            setActiveModal('subscription');
            return;
        }
        if (action === 'Approve KYC') {
            setUser({ ...user, kycStatus: 'Verified' });
            setLastAction('KYC Approved');
            setTimeout(() => setLastAction(null), 3000);
            return;
        }
        if (action === 'Reject KYC') {
            setUser({ ...user, kycStatus: 'Rejected' });
            setLastAction('KYC Rejected');
            setTimeout(() => setLastAction(null), 3000);
            return;
        }

        console.log(`Action triggered: ${action}`);
        setLastAction(action);
        setTimeout(() => setLastAction(null), 3000);
    };

    const handleSendMessage = () => {
        setActiveModal(null);
        setLastAction(`Message sent to ${user.name}`);
        setMessageText('');
        setTimeout(() => setLastAction(null), 3000);
    };

    const handleSaveUser = () => {
        setUser(editForm);
        setActiveModal(null);
        setLastAction(`User details updated successfully`);
        setTimeout(() => setLastAction(null), 3000);
    };

    const handleSaveDeposit = () => {
        setUser({ ...user, deposit: depositAmount });
        setActiveModal(null);
        setLastAction(`Deposit updated to ¥${depositAmount.toLocaleString()}`);
        setTimeout(() => setLastAction(null), 3000);
    };

    const handleSaveSubscription = () => {
        setUser({ ...user, subscriptionPlan: editForm.subscriptionPlan });
        setActiveModal(null);
        setLastAction(`Subscription changed to ${editForm.subscriptionPlan}`);
        setTimeout(() => setLastAction(null), 3000);
    };

    const stats = [
        { label: t('stats.totalBids'), value: user.totalBids, icon: '🔨' },
        { label: t('stats.wonAuctions'), value: user.wonAuctions, icon: '🏆' },
        { label: t('stats.totalSpent'), value: `¥${(user.totalSpent / 1000000).toFixed(1)}M`, icon: '💰' },
        { label: t('stats.deposit'), value: `¥${user.deposit.toLocaleString()}`, icon: '🏦' },
    ];

    const profileItems = [
        { label: t('profile.email'), value: user.email },
        { label: t('profile.phone'), value: user.phone },
        { label: t('profile.country'), value: user.country },
        { label: t('profile.language'), value: user.language },
        { label: t('profile.joined'), value: user.joinDate },
        { label: t('profile.lastLogin'), value: user.lastLogin },
    ];

    return (
        <div className="space-y-6">
            {lastAction && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-fade-in-down" role="alert">
                    <strong className="font-bold">{t('success')} </strong>
                    <span className="block sm:inline">{lastAction} {t('commandTriggered')}</span>
                </div>
            )}
            <div className="flex justify-between items-start">
                <div>
                    <Link href={`/${locale}/admin/users`} className="text-gray-400 hover:text-gray-600 text-sm">
                        {t('backToUsers')}
                    </Link>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="w-12 h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white font-bold text-lg">
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-sm text-gray-500 font-mono">{user.id}</p>
                        </div>
                        <Badge variant={
                            user.status === 'Active' ? 'success' :
                                user.status === 'Suspended' ? 'error' :
                                    'warning'
                        }>{user.status}</Badge>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => handleAction('Message')}>{t('sendMessage')}</Button>
                    <Button variant="primary" onClick={() => handleAction('Edit')}>{t('editUser')}</Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <Card key={i}>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span>{stat.icon}</span>
                                        <span className="text-xs text-gray-500">{stat.label}</span>
                                    </div>
                                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('recentActivity')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivity.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{item.action}</p>
                                            <p className="text-xs text-gray-500">{item.time}</p>
                                        </div>
                                        {item.amount !== '-' && (
                                            <span className="font-bold text-[#0F4C81]">{item.amount}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Orders */}
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>{t('orderHistory')}</CardTitle>
                            <Button variant="ghost" size="sm" onClick={() => handleAction('View All Orders')}>{t('viewAll')}</Button>
                        </CardHeader>
                        <CardContent className="p-0">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500">
                                    <tr>
                                        <th className="px-6 py-3 text-left">{t('table.orderId')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.bike')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.amount')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.status')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.date')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-blue-50/50 cursor-pointer" onClick={() => handleAction(`Order ${order.id}`)}>
                                            <td className="px-6 py-4 font-mono font-medium">{order.id}</td>
                                            <td className="px-6 py-4">{order.bike}</td>
                                            <td className="px-6 py-4 font-bold">¥{order.amount.toLocaleString()}</td>
                                            <td className="px-6 py-4">
                                                <Badge variant={order.status === 'Delivered' ? 'success' : 'secondary'}>
                                                    {order.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Profile Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('profileInfo')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {profileItems.map((item, i) => (
                                <div key={i} className="flex justify-between text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-medium text-gray-900">{item.value}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* KYC & Subscription */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('verification')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">{t('kycStatus')}</span>
                                <Badge variant={
                                    user.kycStatus === 'Verified' ? 'success' :
                                        user.kycStatus === 'Rejected' ? 'red' :
                                            'warning'
                                }>{user.kycStatus}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">{t('subscription')}</span>
                                <Badge variant={
                                    user.subscriptionPlan === 'Platinum' ? 'blue' :
                                        user.subscriptionPlan === 'Gold' ? 'yellow' :
                                            user.subscriptionPlan === 'Silver' ? 'secondary' :
                                                user.subscriptionPlan === 'Bronze' ? 'bronze' :
                                                    'default'
                                }>{user.subscriptionPlan}</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="secondary" className="w-full" onClick={() => handleAction('View KYC Documents')}>{t('actions.viewKycDocs')}</Button>
                            <Button variant="secondary" className="w-full" onClick={() => handleAction('Adjust Deposit')}>{t('actions.adjustDeposit')}</Button>
                            <Button variant="secondary" className="w-full" onClick={() => handleAction('Change Subscription')}>{t('actions.changeSubscription')}</Button>
                            <Button variant="danger" className="w-full" onClick={() => handleAction('Suspend User')}>{t('actions.suspendUser')}</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* KYC Documents Modal */}
            {activeModal === 'kyc' && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-2xl shadow-xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                        <CardHeader>
                            <CardTitle>{t('modals.kycTitle')} - {user.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('modals.governmentId')}</h3>
                                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <span className="text-gray-400">{t('modals.imagePlaceholder')}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">{t('modals.proofOfAddress')}</h3>
                                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <span className="text-gray-400">{t('modals.imagePlaceholder')}</span>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                                <Button variant="danger" onClick={() => {
                                    handleAction('Reject KYC');
                                    setActiveModal(null);
                                }}>{t('modals.reject')}</Button>
                                <Button variant="primary" onClick={() => {
                                    handleAction('Approve KYC');
                                    setActiveModal(null);
                                }}>{t('modals.approve')}</Button>
                                <Button variant="ghost" onClick={() => setActiveModal(null)}>{t('modals.close')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Message Modal */}
            {activeModal === 'message' && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-lg shadow-xl animate-in fade-in zoom-in duration-200">
                        <CardHeader>
                            <CardTitle>{t('modals.messageTitle')} {user.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.subject')}</label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    placeholder={t('modals.subjectPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.message')}</label>
                                <textarea
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81] min-h-[150px]"
                                    placeholder={t('modals.messagePlaceholder')}
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="ghost" onClick={() => setActiveModal(null)}>{t('modals.cancel')}</Button>
                                <Button variant="primary" onClick={handleSendMessage}>{t('modals.send')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Edit User Modal */}
            {activeModal === 'edit' && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-lg shadow-xl animate-in fade-in zoom-in duration-200">
                        <CardHeader>
                            <CardTitle>{t('modals.editTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.fullName')}</label>
                                    <input
                                        type="text"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.phone')}</label>
                                    <input
                                        type="text"
                                        value={editForm.phone}
                                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.emailAddress')}</label>
                                <input
                                    type="email"
                                    value={editForm.email}
                                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.country')}</label>
                                    <select
                                        value={editForm.country}
                                        onChange={(e) => setEditForm({ ...editForm, country: e.target.value })}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    >
                                        {countries.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.status')}</label>
                                    <select
                                        value={editForm.status}
                                        onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Suspended">Suspended</option>
                                        <option value="Pending KYC">Pending KYC</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="ghost" onClick={() => setActiveModal(null)}>{t('modals.cancel')}</Button>
                                <Button variant="primary" onClick={handleSaveUser}>{t('modals.saveChanges')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Adjust Deposit Modal */}
            {activeModal === 'deposit' && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-sm shadow-xl animate-in fade-in zoom-in duration-200">
                        <CardHeader>
                            <CardTitle>{t('modals.depositTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.currentDeposit')}</label>
                                <p className="text-lg font-bold text-gray-900">¥{user.deposit.toLocaleString()}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.newAmount')}</label>
                                <input
                                    type="number"
                                    value={depositAmount}
                                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                />
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="ghost" onClick={() => setActiveModal(null)}>{t('modals.cancel')}</Button>
                                <Button variant="primary" onClick={handleSaveDeposit}>{t('modals.updateDeposit')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Change Subscription Modal */}
            {activeModal === 'subscription' && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-sm shadow-xl animate-in fade-in zoom-in duration-200">
                        <CardHeader>
                            <CardTitle>{t('modals.subscriptionTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.currentPlan')}</label>
                                <Badge variant="warning">{user.subscriptionPlan}</Badge>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modals.newPlan')}</label>
                                <select
                                    value={editForm.subscriptionPlan}
                                    onChange={(e) => setEditForm({ ...editForm, subscriptionPlan: e.target.value })}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                >
                                    {['Free', 'Bronze', 'Silver', 'Gold', 'Platinum'].map(plan => (
                                        <option key={plan} value={plan}>{plan}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button variant="ghost" onClick={() => setActiveModal(null)}>{t('modals.cancel')}</Button>
                                <Button variant="primary" onClick={handleSaveSubscription}>{t('modals.updatePlan')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
