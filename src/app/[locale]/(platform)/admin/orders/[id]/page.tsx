"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { ShoppingCart, CreditCard, Settings, FileText, Ship, CheckCircle } from 'lucide-react';
import { generateInvoicePDF } from '@/lib/invoice-generator';
import { fetchExchangeRate, applyMargin, CurrencyCode } from '@/lib/currency';

// Mock Order Data
const initialOrderData = {
    id: 'ORD-2024-1029',
    status: 'Processing',
    createdAt: '2025-12-08 10:30',
    updatedAt: '2025-12-12 09:00',
    buyer: {
        id: 'U-9928',
        name: 'Somchai Tanaka',
        email: 'somchai@example.com',
        country: 'Thailand',
    },
    bike: {
        id: 'BK-2024-001',
        name: '2019 Yamaha MT-09',
        vin: 'RN65-009876',
        lotNumber: 'LOT-2024-0098',
    },
    auction: {
        id: 'AUC-2024-0098',
        finalBid: 720000,
        auctionFee: 50000,
    },
    shipping: {
        method: 'RoRo',
        destination: 'Bangkok, Thailand',
        estimatedDelivery: '2025-01-15',
        cost: 85000,
        container: 'CNT-2024-0045',
    },
    payment: {
        subtotal: 720000,
        auctionFee: 50000,
        shippingFee: 85000,
        tax: 0,
        total: 855000,
        paid: 855000,
        status: 'Paid',
        paidAt: '2025-12-09 14:00',
    },
    timeline: [
        { event: 'Order Created', time: '2025-12-08 10:30', status: 'completed' },
        { event: 'Payment Received', time: '2025-12-09 14:00', status: 'completed' },
        { event: 'Processing Started', time: '2025-12-10 09:00', status: 'completed' },
        { event: 'Export Documents', time: 'Pending', status: 'pending' },
        { event: 'Shipped', time: 'Pending', status: 'pending' },
        { event: 'Delivered', time: 'Pending', status: 'pending' },
    ],
};

const getEventIcon = (event: string) => {
    switch (event) {
        case 'Order Created': return ShoppingCart;
        case 'Payment Received': return CreditCard;
        case 'Processing Started': return Settings;
        case 'Export Documents': return FileText;
        case 'Shipped': return Ship;
        case 'Delivered': return CheckCircle;
        default: return CheckCircle;
    }
};

export default function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const routeParams = useParams();
    const locale = routeParams.locale as string;
    const t = useTranslations('admin.orderDetailPage');

    const [order, setOrder] = useState(initialOrderData);
    const [invoicePreviewUrl, setInvoicePreviewUrl] = useState<string | null>(null);
    const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

    const STATUSES = ['Pending Payment', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

    const getStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Pending Payment': t('status.pendingPayment'),
            'Paid': t('status.paid'),
            'Processing': t('status.processing'),
            'Shipped': t('status.shipped'),
            'Delivered': t('status.delivered'),
            'Cancelled': t('status.cancelled'),
        };
        return statusMap[status] || status;
    };

    const getTimelineEventTranslation = (event: string) => {
        const eventMap: Record<string, string> = {
            'Order Created': t('timeline.orderCreated'),
            'Payment Received': t('timeline.paymentReceived'),
            'Processing Started': t('timeline.processingStarted'),
            'Export Documents': t('timeline.exportDocuments'),
            'Shipped': t('timeline.shipped'),
            'Delivered': t('timeline.delivered'),
            'Pending': t('timeline.pending'),
        };
        return eventMap[event] || event;
    };

    const getBadgeVariant = (status: string) => {
        switch (status) {
            case 'Pending Payment': return 'yellow';
            case 'Paid': return 'green';
            case 'Processing': return 'orange';
            case 'Shipped': return 'purple';
            case 'Delivered': return 'blue';
            case 'Cancelled': return 'red';
            default: return 'default';
        }
    };

    const handlePrintInvoice = async () => {
        try {
            const rawRate = await fetchExchangeRate(currency);
            const finalRate = applyMargin(rawRate, 3);
            const blob = generateInvoicePDF(order, finalRate, currency);
            const url = window.URL.createObjectURL(blob);
            setInvoicePreviewUrl(url);
        } catch (e) {
            console.error(e);
            alert('請求書生成中にエラーが発生しました。');
        }
    };

    const handleSendInvoice = async () => {
        if (!invoicePreviewUrl) return;
        const a = document.createElement('a');
        a.href = invoicePreviewUrl;
        a.download = `Invoice-${order.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setInvoicePreviewUrl(null);
        alert('管理者用控えをダウンロードしました。\nメール送信処理を開始します...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert(`✅ 送信完了: ${order.buyer.email}\n(添付: Invoice-${order.id}.pdf)`);
    };

    const handleUpdateShipping = () => {
        const newContainer = window.prompt('コンテナ番号を入力してください:', order.shipping.container);
        const newDate = window.prompt('到着予定日を入力してください:', order.shipping.estimatedDelivery);
        if (newContainer || newDate) {
            setOrder({
                ...order,
                shipping: {
                    ...order.shipping,
                    container: newContainer || order.shipping.container,
                    estimatedDelivery: newDate || order.shipping.estimatedDelivery
                }
            });
            alert('配送情報を更新しました。');
        }
    };

    const handleTrackContainer = () => {
        window.open(`https://www.google.com/search?q=${order.shipping.container}`, '_blank');
    };

    const handleGenerateDocs = () => {
        if (window.confirm('輸出書類（インボイス、B/L、抹消登録証）を一括作成しますか？')) {
            alert('書類を作成中...');
            setTimeout(() => alert('書類の作成が完了しました。'), 1000);
        }
    };

    const handleEmailBuyer = () => {
        const msg = window.prompt('購入者へのメッセージを入力してください:', '現在のステータス: ' + order.status);
        if (msg) {
            alert('送信中...');
            setTimeout(() => alert(`送信完了: ${order.buyer.name} (${order.buyer.email}) 宛にメールを送りました。`), 1000);
        }
    };

    const handleCancelOrder = () => {
        if (window.confirm('本当にこの注文をキャンセルしますか？\nこの操作は取り消せません。')) {
            setOrder({ ...order, status: 'Cancelled' });
            alert('注文を取り消しました。');
        }
    };

    const shippingItems = [
        { label: t('shipping.method'), value: order.shipping.method },
        { label: t('shipping.destination'), value: order.shipping.destination },
        { label: t('shipping.container'), value: order.shipping.container },
        { label: t('shipping.estDelivery'), value: order.shipping.estimatedDelivery },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <Link href={`/${locale}/admin/orders`} className="text-gray-400 hover:text-gray-600 text-sm">
                        {t('backToOrders')}
                    </Link>
                    <div className="flex items-center gap-3 mt-2">
                        <h1 className="text-2xl font-bold text-gray-900">{order.id}</h1>
                        <Badge variant={getBadgeVariant(order.status)}>{getStatusTranslation(order.status)}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{t('createdOn')} {order.createdAt}</p>
                </div>
                <div className="flex gap-2">
                    <select
                        className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#0F4C81]"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                    >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="EGP">EGP (E£)</option>
                        <option value="JPY">JPY (¥)</option>
                    </select>
                    <Button variant="secondary" onClick={handlePrintInvoice}>{t('printInvoice')}</Button>
                    <div className="relative">
                        <select
                            className="pl-4 pr-10 py-2.5 bg-[#0F4C81] text-white rounded-lg text-base font-semibold hover:bg-[#0D3D68] cursor-pointer appearance-none border-none outline-none"
                            value=""
                            onChange={(e) => {
                                const newStatus = e.target.value;
                                if (window.confirm(`ステータスを「${getStatusTranslation(newStatus)}」に変更しますか？`)) {
                                    setOrder({ ...order, status: newStatus });
                                }
                            }}
                        >
                            <option value="" disabled hidden>{t('updateStatus')}</option>
                            {STATUSES.map(s => (
                                <option key={s} value={s} className="text-gray-900 bg-white">{getStatusTranslation(s)}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/80">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Order Timeline */}
                    <Card>
                        <CardHeader><CardTitle>{t('timeline.title')}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="relative">
                                {order.timeline.map((item, i) => {
                                    const Icon = getEventIcon(item.event);
                                    return (
                                        <div key={i} className="flex gap-4 pb-0">
                                            <div className="flex flex-col items-center relative">
                                                <div className={`relative z-10 p-2 rounded-full border-2 ${item.status === 'completed' ? 'bg-white border-[#0F4C81] text-[#0F4C81] ring-4 ring-white' : 'bg-gray-100 border-transparent text-gray-400 ring-4 ring-white'}`}>
                                                    <Icon size={18} />
                                                </div>
                                                {i < order.timeline.length - 1 && (
                                                    <div className={`absolute top-8 bottom-[-8px] w-0.5 ${item.status === 'completed' ? 'bg-[#0F4C81]' : 'bg-gray-200'}`} />
                                                )}
                                            </div>
                                            <div className="flex-1 pb-8 pt-1">
                                                <p className="font-bold text-gray-900">{getTimelineEventTranslation(item.event)}</p>
                                                <p className={`text-sm ${item.status === 'completed' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                    {item.time === 'Pending' ? t('timeline.pending') : item.time}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bike Info */}
                    <Card>
                        <CardHeader><CardTitle>{t('vehicle.title')}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">🏍️</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">{order.bike.name}</p>
                                    <p className="text-sm text-gray-500 font-mono">VIN: {order.bike.vin}</p>
                                    <p className="text-sm text-gray-500">Lot: {order.bike.lotNumber}</p>
                                </div>
                                <Link href={`/${locale}/admin/bikes/${order.bike.id || 'mock-id'}`} className="ml-auto">
                                    <Button variant="secondary" size="sm">{t('vehicle.viewListing')}</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Shipping Info */}
                    <Card>
                        <CardHeader><CardTitle>{t('shipping.title')}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                {shippingItems.map((item, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500">{item.label}</p>
                                        <p className="font-medium text-gray-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-2">
                                <Button variant="secondary" size="sm" onClick={handleTrackContainer}>{t('shipping.trackContainer')}</Button>
                                <Button variant="secondary" size="sm" onClick={handleUpdateShipping}>{t('shipping.updateShipping')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Buyer Info */}
                    <Card>
                        <CardHeader><CardTitle>{t('buyer.title')}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#0F4C81] flex items-center justify-center text-white font-bold">ST</div>
                                <div>
                                    <p className="font-bold text-gray-900">{order.buyer.name}</p>
                                    <p className="text-xs text-gray-500 font-mono">{order.buyer.id}</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('buyer.email')}</span>
                                    <span>{order.buyer.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('buyer.country')}</span>
                                    <span>{order.buyer.country}</span>
                                </div>
                            </div>
                            <Link href={`/${locale}/admin/users/${order.buyer.id}`} className="w-full">
                                <Button variant="secondary" size="sm" className="w-full mt-4">{t('buyer.viewProfile')}</Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Payment Summary */}
                    <Card>
                        <CardHeader><CardTitle>{t('payment.title')}</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">{t('payment.finalBid')}</span>
                                <span>¥{order.payment.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">{t('payment.auctionFee')}</span>
                                <span>¥{order.payment.auctionFee.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">{t('payment.shipping')}</span>
                                <span>¥{order.payment.shippingFee.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                                <span>{t('payment.total')}</span>
                                <span className="text-[#0F4C81]">¥{order.payment.total.toLocaleString()}</span>
                            </div>
                            <div className="pt-2">
                                <Badge variant="success" className="w-full justify-center py-2">
                                    {getStatusTranslation(order.payment.status)} - {order.payment.paidAt}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="secondary" className="w-full" onClick={handleGenerateDocs}>{t('actions.generateDocs')}</Button>
                            <Button variant="secondary" className="w-full" onClick={handleEmailBuyer}>{t('actions.sendUpdate')}</Button>
                            <Button variant="danger" className="w-full" onClick={handleCancelOrder}>{t('actions.cancelOrder')}</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Modal
                isOpen={!!invoicePreviewUrl}
                onClose={() => setInvoicePreviewUrl(null)}
                title={t('invoicePreview.title')}
            >
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-500">{t('invoicePreview.description')}</p>
                    {invoicePreviewUrl && (
                        <iframe src={invoicePreviewUrl} className="w-full h-[60vh] border rounded-md" title="Invoice Preview" />
                    )}
                    <div className="flex justify-end gap-3 pt-2">
                        <Button variant="secondary" onClick={() => setInvoicePreviewUrl(null)}>{t('invoicePreview.cancel')}</Button>
                        <Button variant="primary" onClick={handleSendInvoice}>{t('invoicePreview.send')}</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
