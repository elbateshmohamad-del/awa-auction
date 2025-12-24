"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

// Mock Data
const initialUsers = [
    { id: 1001, name: 'John Doe', email: 'john@example.com', type: 'Individual', status: 'Active', country: 'USA', registered: '2025-01-10' },
    { id: 1002, name: 'Moto World Ltd.', email: 'contact@motoworld.co.jp', type: 'Corporate', status: 'Verified', country: 'Japan', registered: '2025-02-14' },
    { id: 1003, name: 'Sarah Smith', email: 'sarah.s@example.uk', type: 'Individual', status: 'Pending KYC', country: 'UK', registered: '2025-03-01' },
    { id: 1004, name: 'Best Bikes Co.', email: 'info@bestbikes.de', type: 'Corporate', status: 'Suspended', country: 'Germany', registered: '2024-11-20' },
    { id: 1005, name: 'Tanaka Taro', email: 'taro@example.jp', type: 'Individual', status: 'Active', country: 'Japan', registered: '2025-01-05' },
];

export default function AdminUsersPage() {
    const [users, setUsers] = useState(initialUsers);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="text-sm text-gray-500">Manage user accounts, roles, and access permissions.</p>
                </div>
                <Button variant="primary">+ Create User</Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    {/* Filters */}
                    <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
                        <div className="flex-1 max-w-sm">
                            <Input placeholder="Search users..." className="bg-white" />
                        </div>
                        <select className="h-10 rounded-md border-gray-300 text-sm">
                            <option>All Types</option>
                            <option>Individual</option>
                            <option>Corporate</option>
                        </select>
                        <select className="h-10 rounded-md border-gray-300 text-sm">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Verified</option>
                            <option>Pending KYC</option>
                            <option>Suspended</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">User</th>
                                    <th className="px-6 py-3">Type</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Country</th>
                                    <th className="px-6 py-3">Registered</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-bold text-gray-900">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{user.type}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                         ${user.status === 'Verified' ? 'bg-green-100 text-green-800' :
                                                    user.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                                                        user.status === 'Pending KYC' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{user.country}</td>
                                        <td className="px-6 py-4 text-gray-500">{user.registered}</td>
                                        <td className="px-6 py-4 text-right">
                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600">View</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-gray-100 flex justify-center">
                        <Button variant="ghost" size="sm" className="text-gray-500">Load More</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
