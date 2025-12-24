"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';

// Data Types
type Container = {
    id: string;
    name: string;
    type: '20ft' | '40ft';
    status: 'open' | 'closingSoon' | 'scheduled' | 'closed';
    destination: string;
    capacity: number;
    filled: number;
    etd: string;
    eta: string;
    price: string;
    features: string[];
};

export default function AdminContainersPage() {
    const t = useTranslations('admin.containersPage');
    const tCommon = useTranslations('admin.common');
    const [containers, setContainers] = useState<Container[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newItem, setNewItem] = useState<Partial<Container>>({
        destination: '',
        type: '40ft',
        status: 'open',
        filled: 0,
        capacity: 40,
        features: []
    });

    useEffect(() => {
        fetchContainers();
    }, []);

    const fetchContainers = async () => {
        try {
            const res = await fetch('/api/containers');
            if (res.ok) {
                const data = await res.json();
                setContainers(data);
            }
        } catch (error) {
            console.error('Failed to fetch containers', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusTranslation = (status: string) => {
        const key = status === 'Closing Soon' ? 'closingSoon' :
            status === 'Scheduled' ? 'scheduled' :
                status === 'Open' ? 'open' : status;

        // Try precise key first, then fallback
        try {
            return t(`status.${key}`);
        } catch {
            return status;
        }
    };

    const handleCreate = async () => {
        const destInput = newItem.destination || 'OTH';
        const destCode = destInput.substring(0, 3).toUpperCase();
        // Mock name generation suitable for client side before real logic if any
        const name = `${destCode}-${String(containers.length + 1).padStart(3, '0')}`;

        const payload = {
            ...newItem,
            name,
            status: newItem.status || 'open',
            price: newItem.price || '0',
            features: newItem.features || []
        };

        try {
            const res = await fetch('/api/containers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                fetchContainers(); // Refresh list
                setIsCreateModalOpen(false);
                setNewItem({
                    destination: '',
                    type: '40ft',
                    status: 'open',
                    filled: 0,
                    capacity: 400,
                    features: []
                });
            } else {
                alert('Failed to create container');
            }
        } catch (error) {
            console.error('Error creating container:', error);
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <Button variant="primary" onClick={() => setIsCreateModalOpen(true)}>+ {t('createNew')}</Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-medium">{t('table.routeName')}</th>
                                <th className="px-6 py-4 font-medium">{t('table.schedule')}</th>
                                <th className="px-6 py-4 font-medium">{t('table.loadStatus')}</th>
                                <th className="px-6 py-4 font-medium">{t('table.priceUnit')}</th>
                                <th className="px-6 py-4 font-medium">{t('table.status')}</th>
                                <th className="px-6 py-4 font-medium text-right">{t('table.actions')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {containers.map((container) => {
                                const fillPercent = Math.round((container.filled / container.capacity) * 100);
                                return (
                                    <tr key={container.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-blue-50 text-2xl flex items-center justify-center">
                                                    {container.destination === 'Thailand' ? '🇹🇭' :
                                                        container.destination === 'Vietnam' ? '🇻🇳' :
                                                            container.destination === 'Philippines' ? '🇵🇭' : '🌏'}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{container.destination}</p>
                                                    <p className="text-xs text-gray-500 font-mono">{container.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs">
                                                <p><span className="text-gray-400 w-8 inline-block">ETD:</span> <span className="font-medium text-gray-900">{container.etd}</span></p>
                                                <p><span className="text-gray-400 w-8 inline-block">ETA:</span> <span className="font-medium text-gray-900">{container.eta}</span></p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-32">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="font-bold">{fillPercent}%</span>
                                                    <span className="text-gray-400">{container.filled}/{container.capacity}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className={`h-1.5 rounded-full ${fillPercent > 90 ? 'bg-red-500' : 'bg-green-500'}`}
                                                        style={{ width: `${fillPercent}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {container.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={container.status === 'open' ? 'green' : container.status === 'closingSoon' ? 'warning' : 'default'} size="sm">
                                                {getStatusTranslation(container.status)}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href={`/admin/containers/${container.id}`}>
                                                <Button variant="secondary" size="sm">
                                                    {t('manageLoad')}
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            {/* Create Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title={t('modal.title')}
            >
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Input
                                label={t('modal.destination')}
                                placeholder={t('modal.destinationPlaceholder')}
                                value={newItem.destination || ''}
                                onChange={(e) => setNewItem({ ...newItem, destination: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('modal.containerType')}</label>
                            <select
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base bg-white focus:outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10"
                                value={newItem.type}
                                onChange={(e) => {
                                    const type = e.target.value as any;
                                    setNewItem({
                                        ...newItem,
                                        type,
                                        capacity: type === '20ft' ? 20 : 40
                                    });
                                }}
                            >
                                <option value="40ft">{t('modal.type40ft')}</option>
                                <option value="20ft">{t('modal.type20ft')}</option>
                            </select>
                        </div>
                        <div>
                            <Input
                                label={t('modal.capacity')}
                                type="number"
                                value={newItem.capacity || ''}
                                onChange={(e) => setNewItem({ ...newItem, capacity: Number(e.target.value) })}
                            />
                        </div>
                        <div>
                            <Input
                                label={t('modal.pricePerUnit')}
                                placeholder="$200"
                                value={newItem.price || ''}
                                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                            />
                        </div>
                        <div>
                            <Input
                                label={t('modal.etd')}
                                type="date"
                                value={newItem.etd || ''}
                                onChange={(e) => setNewItem({ ...newItem, etd: e.target.value })}
                            />
                        </div>
                        <div>
                            <Input
                                label={t('modal.eta')}
                                type="date"
                                value={newItem.eta || ''}
                                onChange={(e) => setNewItem({ ...newItem, eta: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsCreateModalOpen(false)}>{t('modal.cancel')}</Button>
                        <Button variant="primary" onClick={handleCreate}>{t('modal.create')}</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
