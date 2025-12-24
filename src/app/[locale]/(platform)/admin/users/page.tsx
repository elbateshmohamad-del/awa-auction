"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

type User = {
    id: number;
    name: string;
    email: string;
    type: string;
    status: string;
    registered: string;
    role: string;
};

export default function AdminUsersPage() {
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('admin.usersPage');
    const tCommon = useTranslations('admin.common');

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');

    // Fetch users on mount
    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/admin/users');
            const data = await res.json();
            if (data.users) {
                // Map API data to UI model
                const mapped = data.users.map((u: any) => ({
                    id: u.id,
                    name: u.name || 'Unknown',
                    email: u.email,
                    role: u.role || 'USER',
                    type: u.memberType === 'CORPORATE' ? 'Corporate' : 'Individual',
                    status: 'Active',
                    registered: new Date(u.createdAt).toLocaleDateString()
                }));
                setUsers(mapped);
            }
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = typeFilter === 'all' || user.type === typeFilter;
        return matchesSearch && matchesType;
    });

    const getTypeTranslation = (type: string) => {
        const typeMap: Record<string, string> = {
            'Individual': tCommon('individual'),
            'Corporate': tCommon('corporate'),
        };
        return typeMap[type] || type;
    };

    if (isLoading) return <div className="p-8 text-center">Loading users...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">顧客管理 (Users)</h1>
                    <p className="text-sm text-gray-500">一般ユーザー（顧客）の一覧と詳細確認</p>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    {/* Filters */}
                    <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50 flex-wrap">
                        <div className="flex-1 min-w-[200px] max-w-sm">
                            <Input
                                placeholder={t('searchPlaceholder')}
                                className="bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select
                            className="h-10 rounded-md border-gray-300 text-sm"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="all">{tCommon('allTypes')}</option>
                            <option value="Individual">{tCommon('individual')}</option>
                            <option value="Corporate">{tCommon('corporate')}</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">{t('table.user')}</th>
                                    <th className="px-6 py-3">{t('table.type')}</th>
                                    <th className="px-6 py-3">{t('table.status')}</th>
                                    <th className="px-6 py-3">{t('table.registered')}</th>
                                    <th className="px-6 py-3 text-right">{tCommon('actions')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            {tCommon('noData')}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-900">{user.name}</span>
                                                    <span className="text-xs text-gray-500">{user.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{getTypeTranslation(user.type)}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{user.registered}</td>
                                            <td className="px-6 py-4 text-right">
                                                <Link href={`/${locale}/admin/users/${user.id}`}>
                                                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600">{tCommon('view')}</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-gray-100 flex justify-center">
                        <Button variant="ghost" size="sm" className="text-gray-500">{tCommon('loadMore')}</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
