'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState, useCallback } from 'react';

interface AdminTask {
    id: string;
    type: string;
    title: string;
    description?: string;
    permissionId: string;
    completed: boolean;
    createdAt: string;
    dueDate?: string;
    assignedToName?: string;
}

export default function AdminDashboardPage() {
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('admin.dashboardPage');
    const { user } = useAuth();
    // Hydration mismatch prevention
    const [mounted, setMounted] = useState(false);
    // Pending Tasks from API
    const [pendingTasks, setPendingTasks] = useState<AdminTask[]>([]);
    const [tasksLoading, setTasksLoading] = useState(true);

    // Fetch tasks from API
    const fetchTasks = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/tasks');
            if (res.ok) {
                const data = await res.json();
                setPendingTasks(data.tasks || []);
            }
        } catch (error) {
            console.error('タスク取得エラー:', error);
        } finally {
            setTasksLoading(false);
        }
    }, []);

    useEffect(() => {
        setMounted(true);
        fetchTasks();
    }, [fetchTasks]);

    // Task completion confirmation modal state
    const [confirmTask, setConfirmTask] = useState<{ id: string; title: string } | null>(null);
    const [isCompleting, setIsCompleting] = useState(false);

    // Open confirmation modal
    const openConfirmModal = (taskId: string, taskTitle: string) => {
        setConfirmTask({ id: taskId, title: taskTitle });
    };

    // Handle task completion after confirmation
    const handleConfirmComplete = async () => {
        if (!confirmTask) return;

        setIsCompleting(true);
        try {
            const res = await fetch('/api/admin/tasks', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ taskId: confirmTask.id, completed: true }),
            });

            if (res.ok) {
                // Remove from list
                setPendingTasks(prev => prev.filter(task => task.id !== confirmTask.id));
                setConfirmTask(null);
            } else {
                const errorData = await res.json().catch(() => ({}));
                console.error('タスク完了エラー:', res.status, errorData);
                alert(`タスクの完了に失敗しました: ${res.status}`);
            }
        } catch (error) {
            console.error('タスク完了エラー:', error);
            alert('タスクの完了に失敗しました。ネットワークエラーが発生しました。');
        } finally {
            setIsCompleting(false);
        }
    };

    // Task creation modal state
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [newTask, setNewTask] = useState({
        type: 'custom',
        title: '',
        description: '',
        permissionId: 'dashboard',
        assignedToName: '',
    });
    const [isCreating, setIsCreating] = useState(false);

    // Handle task creation
    const handleCreateTask = async () => {
        if (!newTask.title.trim()) return;

        setIsCreating(true);
        try {
            const res = await fetch('/api/admin/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            if (res.ok) {
                const data = await res.json();
                setPendingTasks(prev => [data.task, ...prev]);
                setShowAddTaskModal(false);
                setNewTask({ type: 'custom', title: '', description: '', permissionId: 'dashboard', assignedToName: '' });
            }
        } catch (error) {
            console.error('タスク作成エラー:', error);
        } finally {
            setIsCreating(false);
        }
    };

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

    // Stats with Permissions - No dummy data
    const stats = [
        { label: t('metrics.totalRevenue'), value: '-', change: '-', isUp: false, icon: '💰', permissionId: 'finance' },
        { label: t('metrics.activeAuctions'), value: '0', change: '-', isUp: false, icon: '🔨', permissionId: 'auctions' },
        { label: t('metrics.newUsers'), value: '0', change: '-', isUp: false, icon: '👥', permissionId: 'users' },
        { label: t('metrics.pendingKyc'), value: '0', change: '-', isUp: false, alert: false, icon: '📝', permissionId: 'users' },
    ];

    // Recent Activity - Empty (no dummy data)
    const recentActivity: { title: string; desc: string; time: string; permissionId: string }[] = [];

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
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>{t('pendingTasks.title')}</CardTitle>
                            {user?.role === 'ADMIN' && (
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => setShowAddTaskModal(true)}
                                >
                                    {t('pendingTasks.addButton')}
                                </Button>
                            )}
                        </CardHeader>
                        <CardContent>
                            {tasksLoading ? (
                                <p className="text-sm text-gray-500 text-center">{t('pendingTasks.loading', { defaultValue: '読み込み中...' })}</p>
                            ) : (
                                <ul className="space-y-3">
                                    {pendingTasks.filter(task => hasPermission(task.permissionId)).map((task) => (
                                        <li key={task.id} className="flex items-center gap-3 p-2 rounded-lg">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                onChange={() => openConfirmModal(task.id, task.title)}
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {/* 権限ラベル */}
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                                        {t(`pendingTasks.modal.permissions.${task.permissionId}`, { defaultValue: task.permissionId })}
                                                    </span>
                                                    {/* 担当者表示 */}
                                                    {task.assignedToName && (
                                                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                                            {t('pendingTasks.assignedTo', { name: task.assignedToName, defaultValue: `担当: ${task.assignedToName}` })}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-700 font-medium">{task.title}</span>
                                                {task.description && (
                                                    <p className="text-xs text-gray-500">{task.description}</p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                    {pendingTasks.filter(task => hasPermission(task.permissionId)).length === 0 && (
                                        <li className="text-sm text-gray-500 text-center">{t('pendingTasks.noTasks', { defaultValue: '保留中のタスクはありません' })}</li>
                                    )}
                                </ul>
                            )}
                        </CardContent>
                    </Card>

                    {/* Add Task Modal */}
                    {showAddTaskModal && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
                                <h3 className="text-lg font-bold mb-4">{t('pendingTasks.modal.title')}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendingTasks.modal.labelTitle')} *</label>
                                        <input
                                            type="text"
                                            value={newTask.title}
                                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder={t('pendingTasks.modal.placeholderTitle')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendingTasks.modal.labelDescription')}</label>
                                        <textarea
                                            value={newTask.description}
                                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            rows={2}
                                            placeholder={t('pendingTasks.modal.placeholderDescription')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendingTasks.modal.labelPermission')}</label>
                                        <select
                                            value={newTask.permissionId}
                                            onChange={(e) => setNewTask({ ...newTask, permissionId: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="dashboard">{t('pendingTasks.modal.permissions.dashboard')}</option>
                                            <option value="users">{t('pendingTasks.modal.permissions.users')}</option>
                                            <option value="finance">{t('pendingTasks.modal.permissions.finance')}</option>
                                            <option value="auctions">{t('pendingTasks.modal.permissions.auctions')}</option>
                                            <option value="orders">{t('pendingTasks.modal.permissions.orders')}</option>
                                            <option value="bikes">{t('pendingTasks.modal.permissions.bikes')}</option>
                                            <option value="content">{t('pendingTasks.modal.permissions.content')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendingTasks.modal.labelType')}</label>
                                        <select
                                            value={newTask.type}
                                            onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="custom">{t('pendingTasks.modal.types.custom')}</option>
                                            <option value="kyc_review">{t('pendingTasks.modal.types.kyc_review')}</option>
                                            <option value="payment_confirm">{t('pendingTasks.modal.types.payment_confirm')}</option>
                                            <option value="rate_update">{t('pendingTasks.modal.types.rate_update')}</option>
                                            <option value="inventory_check">{t('pendingTasks.modal.types.inventory_check')}</option>
                                            <option value="shipping_prep">{t('pendingTasks.modal.types.shipping_prep')}</option>
                                            <option value="document_create">{t('pendingTasks.modal.types.document_create')}</option>
                                            <option value="customer_support">{t('pendingTasks.modal.types.customer_support')}</option>
                                            <option value="auction_setup">{t('pendingTasks.modal.types.auction_setup')}</option>
                                            <option value="bike_inspection">{t('pendingTasks.modal.types.bike_inspection')}</option>
                                            <option value="container_booking">{t('pendingTasks.modal.types.container_booking')}</option>
                                            <option value="invoice_issue">{t('pendingTasks.modal.types.invoice_issue')}</option>
                                            <option value="refund_process">{t('pendingTasks.modal.types.refund_process')}</option>
                                            <option value="system_maintenance">{t('pendingTasks.modal.types.system_maintenance')}</option>
                                            <option value="data_update">{t('pendingTasks.modal.types.data_update')}</option>
                                            <option value="report_generate">{t('pendingTasks.modal.types.report_generate')}</option>
                                            <option value="meeting">{t('pendingTasks.modal.types.meeting')}</option>
                                            <option value="follow_up">{t('pendingTasks.modal.types.follow_up')}</option>
                                            <option value="reminder">{t('pendingTasks.modal.types.reminder')}</option>
                                        </select>
                                    </div>

                                    {/* 担当者入力（自由テキスト） */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('pendingTasks.modal.labelAssignee', { defaultValue: '担当者（任意）' })}</label>
                                        <input
                                            type="text"
                                            value={newTask.assignedToName}
                                            onChange={(e) => setNewTask({ ...newTask, assignedToName: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder={t('pendingTasks.placeholderAssignee', { defaultValue: '例: 山田太郎' })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 mt-6">
                                    <Button
                                        variant="secondary"
                                        onClick={() => setShowAddTaskModal(false)}
                                    >
                                        {t('pendingTasks.modal.cancel')}
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={handleCreateTask}
                                        disabled={isCreating || !newTask.title.trim()}
                                    >
                                        {isCreating ? t('pendingTasks.modal.creating') : t('pendingTasks.modal.create')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Task Completion Confirmation Modal */}
                    {confirmTask && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl">
                                <h3 className="text-lg font-bold mb-4">{t('pendingTasks.modal.title', { defaultValue: '確認' })}</h3>
                                <p className="text-gray-700 mb-6">
                                    {t('pendingTasks.confirmComplete', { title: confirmTask.title })}
                                </p>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="secondary"
                                        onClick={() => setConfirmTask(null)}
                                        disabled={isCompleting}
                                    >
                                        {t('pendingTasks.modal.cancel')}
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={handleConfirmComplete}
                                        disabled={isCompleting}
                                    >
                                        {isCompleting ? '処理中...' : 'OK'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* System Status - Visible to Dashboard Access (all staff with access) */}
                    <div className="bg-gradient-to-br from-[#0F4C81] to-blue-900 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="font-bold text-lg mb-2">{t('systemStatus.title')}</h3>
                        <div className="space-y-2 text-sm text-white">
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.serverLoad')}</span>
                                <span className="font-bold text-white">-</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.database')}</span>
                                <span className="font-bold text-white">-</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">{t('systemStatus.apiLatency')}</span>
                                <span className="font-bold text-white">-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
