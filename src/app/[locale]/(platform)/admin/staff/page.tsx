"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

// Define permissions structure
const ALL_PERMISSIONS = [
    { id: 'dashboard', label: 'ダッシュボード' },
    { id: 'bikes', label: 'バイク管理' },
    { id: 'auctions', label: 'オークション管理' },
    { id: 'users', label: '顧客管理' },
    { id: 'orders', label: '注文・配送管理' },
    { id: 'content', label: 'コンテンツ管理' },
    { id: 'finance', label: '財務管理' },
    { id: 'settings', label: 'システム設定' },
];

type StaffUser = {
    id: string; // UUID from Prisma
    name: string;
    email: string;
    role: 'ADMIN' | 'STAFF';
    permissions: string[]; // List of permission IDs
    createdAt: string;
};

export default function AdminStaffPage() {
    // const t = useTranslations('admin.staffPage'); // Keys not created yet, hardcoding for now

    const [staffList, setStaffList] = useState<StaffUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editingUser, setEditingUser] = useState<StaffUser | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'STAFF',
        permissions: [] as string[]
    });

    const fetchStaff = async () => {
        try {
            const res = await fetch('/api/admin/staff');
            if (res.ok) {
                const data = await res.json();
                setStaffList(data.staff);
            } else {
                console.error("Failed to fetch staff");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    // State for password confirmation
    const [confirmPassword, setConfirmPassword] = useState('');

    const openCreateModal = () => {
        setEditingUser(null);
        setFormData({
            name: '',
            email: '',
            password: '',
            role: 'STAFF',
            permissions: []
        });
        setConfirmPassword('');
        setIsModalOpen(true);
    };

    const openEditModal = (user: StaffUser) => {
        setEditingUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            password: '', // Leave empty to keep unchanged
            role: user.role as string,
            permissions: user.permissions
        });
        setConfirmPassword('');
        setIsModalOpen(true);
    };

    const handlePermissionToggle = (permId: string) => {
        setFormData(prev => {
            const current = prev.permissions;
            if (current.includes(permId)) {
                return { ...prev, permissions: current.filter(p => p !== permId) };
            } else {
                return { ...prev, permissions: [...current, permId] };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Password matching validation
        if (formData.password && formData.password !== confirmPassword) {
            alert('パスワードが一致しません。再度入力してください。');
            return;
        }

        setIsSubmitting(true);

        const url = '/api/admin/staff';
        const method = editingUser ? 'PUT' : 'POST';
        const body = editingUser
            ? { ...formData, userId: editingUser.id }
            : formData;

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchStaff();
                alert(editingUser ? 'Updated successfully' : 'Created successfully');
            } else {
                const err = await res.json();
                alert(err.error || 'Operation failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (userId: string) => {
        if (!confirm('本当にこのスタッフを削除しますか？\nこの操作は取り消せません。')) return;

        try {
            const res = await fetch(`/api/admin/staff?id=${userId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                // alert('削除しました'); // Optional: simple feedback
                fetchStaff();
            } else {
                const err = await res.json();
                alert(err.error || '削除に失敗しました');
            }
        } catch (error) {
            console.error(error);
            alert('エラーが発生しました');
        }
    };

    if (isLoading) return <div className="p-8">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">スタッフ管理 (Staff Management)</h1>
                    <p className="text-sm text-gray-500">管理者とスタッフのアカウント管理・権限設定</p>
                </div>
                <Button onClick={openCreateModal}>+ 新規スタッフ作成</Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">名前 / メール</th>
                                    <th className="px-6 py-3">ロール</th>
                                    <th className="px-6 py-3">許可された権限</th>
                                    <th className="px-6 py-3 text-right">操作</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {staffList.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-gray-900">{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                                ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.role === 'ADMIN' ? (
                                                <span className="text-gray-400 text-xs">All Permissions (Super Admin)</span>
                                            ) : (
                                                <div className="flex flex-wrap gap-1">
                                                    {user.permissions && user.permissions.length > 0 ? (
                                                        user.permissions.map(p => {
                                                            const label = ALL_PERMISSIONS.find(ap => ap.id === p)?.label || p;
                                                            return <span key={p} className="bg-gray-100 px-2 py-0.5 rounded text-xs border">{label}</span>;
                                                        })
                                                    ) : (
                                                        <span className="text-red-500 text-xs">権限なし</span>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button size="sm" variant="ghost" onClick={() => openEditModal(user)}>
                                                    編集
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-transparent shadow-none"
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    削除
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">{editingUser ? '編集: ' + editingUser.name : '新規スタッフ作成'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold mb-1">名前</label>
                                    <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1">メール</label>
                                    <Input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} disabled={!!editingUser} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold mb-1">パスワード {editingUser && <span className="text-xs font-normal text-gray-500">(変更時のみ)</span>}</label>
                                    <Input
                                        type="password"
                                        value={formData.password}
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                        required={!editingUser}
                                        placeholder={editingUser ? "変更しない場合は空欄" : ""}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1">パスワード（確認）</label>
                                    <Input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        required={!editingUser || formData.password.length > 0}
                                        placeholder="再度入力"
                                        className={formData.password && confirmPassword && formData.password !== confirmPassword ? "border-red-500 focus:ring-red-500" : ""}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-1">ロール</label>
                                <select className="w-full border rounded p-2" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}>
                                    <option value="STAFF">STAFF (運営スタッフ)</option>
                                    <option value="ADMIN">ADMIN (管理者)</option>
                                </select>
                            </div>

                            {/* Permissions - Only show for STAFF */}
                            {formData.role === 'STAFF' && (
                                <div className="border p-4 rounded bg-gray-50">
                                    <label className="block text-sm font-bold mb-2">アクセス許可 (Permissions)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {ALL_PERMISSIONS.map(p => (
                                            <label key={p.id} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.permissions.includes(p.id)}
                                                    onChange={() => handlePermissionToggle(p.id)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm">{p.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>キャンセル</Button>
                                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? '保存中...' : '保存'}</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
