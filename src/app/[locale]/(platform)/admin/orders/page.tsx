"use client";

import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminOrdersPage() {
    const params = useParams();
    const locale = params.locale as string;
    const router = useRouter();
    const t = useTranslations('admin.ordersPage');
    const tCommon = useTranslations('admin.common');

    const orders: { id: string; user: string; amount: string; status: string; date: string }[] = [];

    const getStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Paid': t('status.paid'),
            'Pending': t('status.pending'),
            'Shipped': t('status.shipped'),
            'Processing': t('status.processing'),
            'Cancelled': t('status.cancelled'),
        };
        return statusMap[status] || status;
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">{t('title')}</h1>
                <Button>{tCommon('exportCsv')}</Button>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex gap-4 mb-4">
                    <Input placeholder={t('searchPlaceholder')} className="max-w-sm" />
                    <select className="border rounded px-3 py-2">
                        <option value="all">{tCommon('allStatus')}</option>
                        <option value="Paid">{t('status.paid')}</option>
                        <option value="Pending">{t('status.pending')}</option>
                        <option value="Shipped">{t('status.shipped')}</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4 font-semibold text-neutral-600">{t('table.orderId')}</th>
                                <th className="p-4 font-semibold text-neutral-600">{t('table.customer')}</th>
                                <th className="p-4 font-semibold text-neutral-600">{tCommon('amount')}</th>
                                <th className="p-4 font-semibold text-neutral-600">{tCommon('status')}</th>
                                <th className="p-4 font-semibold text-neutral-600">{tCommon('date')}</th>
                                <th className="p-4 font-semibold text-neutral-600">{tCommon('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-gray-500">
                                        {tCommon('noData')}
                                    </td>
                                </tr>
                            ) : (
                                orders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-b hover:bg-neutral-50 cursor-pointer transition-colors"
                                        onClick={() => router.push(`/${locale}/admin/orders/${order.id}`)}
                                    >
                                        <td className="p-4 font-medium">{order.id}</td>
                                        <td className="p-4">{order.user}</td>
                                        <td className="p-4">{order.amount}</td>
                                        <td className="p-4">
                                            <Badge variant={
                                                order.status === "Paid" ? "green" :
                                                    order.status === "Pending" ? "yellow" :
                                                        order.status === "Shipped" ? "blue" :
                                                            order.status === "Cancelled" ? "red" : "default"
                                            }>
                                                {getStatusTranslation(order.status)}
                                            </Badge>
                                        </td>
                                        <td className="p-4 text-neutral-500">{order.date}</td>
                                        <td className="p-4">
                                            <Button variant="outline" size="sm">{tCommon('view')}</Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

