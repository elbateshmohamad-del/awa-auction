"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { fetchExchangeRate } from '@/lib/currency';

// --- Type Definitions ---
type PaymentStatus = 'Pending' | 'Overdue' | 'Partially Paid';

interface OrderDetail {
    vehicleName: string;
    vin: string;
    price: number;
}

interface CommunicationLog {
    date: string;
    type: 'Email' | 'Call' | 'System';
    note: string;
}

interface PendingPayment {
    order: string;
    buyer: string;
    email: string;
    phone: string;
    amount: number;
    dueDate: string;
    days: number;
    country: string;
    address: string;
    kycStatus: 'Verified' | 'Pending' | 'Unverified';
    items: OrderDetail[];
    logs: CommunicationLog[];
}

// Empty arrays - data will come from API when connected
const recentTransactions: { id: string; type: string; order?: string; user?: string; amount: number; status: string; date: string }[] = [];

const pendingPayments: PendingPayment[] = [];

export default function AdminFinancePage() {
    const t = useTranslations('admin.financePage');
    const tCommon = useTranslations('admin.common');
    const [rates, setRates] = useState([
        { currency: 'USD', rate: 0, change: '...' },
        { currency: 'EUR', rate: 0, change: '...' },
        { currency: 'GBP', rate: 0, change: '...' },
    ]);
    const [loadingRates, setLoadingRates] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [selectedPayment, setSelectedPayment] = useState<PendingPayment | null>(null);

    // Summary with translations
    const financeSummary = [
        { label: t('summary.totalRevenue'), value: '¥48,500,000', period: t('summary.thisMonth'), icon: '💰', change: '+12%' },
        { label: t('summary.pendingPayments'), value: '¥3,200,000', count: `8 ${t('summary.orders')}`, icon: '⏳', alert: true },
        { label: t('summary.completedPayouts'), value: '¥42,100,000', period: t('summary.thisMonth'), icon: '✅' },
        { label: t('summary.refunds'), value: '¥850,000', count: `3 ${t('summary.orders')}`, icon: '↩️' },
    ];

    const getTransactionTypeTranslation = (type: string) => {
        const typeMap: Record<string, string> = {
            'Payment Received': t('transactions.types.paymentReceived'),
            'Subscription': t('transactions.types.subscription'),
            'Deposit': t('transactions.types.deposit'),
            'Refund': t('transactions.types.refund'),
        };
        return typeMap[type] || type;
    };

    const getTransactionStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Completed': t('transactions.status.completed'),
            'Pending': t('transactions.status.pending'),
        };
        return statusMap[status] || status;
    };

    const getKycStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Verified': t('kycStatus.verified'),
            'Pending': t('kycStatus.pending'),
            'Unverified': t('kycStatus.unverified'),
        };
        return statusMap[status] || status;
    };

    const updateRates = async () => {
        setLoadingRates(true);
        try {
            const usd = await fetchExchangeRate('USD');
            const eur = await fetchExchangeRate('EUR');
            const gbp = await fetchExchangeRate('GBP');
            setRates([
                { currency: 'USD', rate: usd, change: '' },
                { currency: 'EUR', rate: eur, change: '' },
                { currency: 'GBP', rate: gbp, change: '' },
            ]);
            setLastUpdated(new Date().toLocaleString());
        } catch (e) {
            console.error('Failed to fetch rates', e);
        } finally {
            setLoadingRates(false);
        }
    };

    useEffect(() => { updateRates(); }, []);

    return (
        <div className="space-y-6 relative">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => alert('Transactions exported to CSV!')}>{t('exportTransactions')}</Button>
                    <Button variant="primary" onClick={() => alert('Payout process initiated!')}>{t('processPayouts')}</Button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {financeSummary.map((stat, i) => (
                    <Card key={i} className={stat.alert ? 'border-l-4 border-orange-500' : ''}>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">{stat.icon}</span>
                                <span className="text-xs text-gray-500">{stat.label}</span>
                            </div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500">
                                {stat.period || stat.count}
                                {stat.change && <span className="text-green-600 ml-2">{stat.change}</span>}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>{t('transactions.title')}</CardTitle>
                        <div className="flex gap-2">
                            <Input placeholder={t('transactions.searchPlaceholder')} className="w-48" />
                            <Button variant="ghost" size="sm">{t('transactions.viewAll')}</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-6 py-3 text-left">{t('transactions.table.transaction')}</th>
                                    <th className="px-6 py-3 text-left">{t('transactions.table.reference')}</th>
                                    <th className="px-6 py-3 text-right">{t('transactions.table.amount')}</th>
                                    <th className="px-6 py-3 text-left">{t('transactions.table.status')}</th>
                                    <th className="px-6 py-3 text-left">{t('transactions.table.date')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentTransactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-blue-50/50">
                                        <td className="px-6 py-3">
                                            <p className="font-medium text-gray-900">{getTransactionTypeTranslation(txn.type)}</p>
                                            <p className="text-xs text-gray-500 font-mono">{txn.id}</p>
                                        </td>
                                        <td className="px-6 py-3 font-mono text-[#0F4C81]">{txn.order || txn.user}</td>
                                        <td className={`px-6 py-3 text-right font-bold ${txn.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                            {txn.amount < 0 ? '-' : '+'}¥{Math.abs(txn.amount).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-3">
                                            <Badge variant={txn.status === 'Completed' ? 'success' : 'warning'}>
                                                {getTransactionStatusTranslation(txn.status)}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-3 text-gray-500 text-xs">{txn.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Pending Payments List */}
                    <Card>
                        <CardHeader><CardTitle>{t('pendingPayments.title')}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {pendingPayments.map((payment, i) => (
                                    <div key={i} className="p-3 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors cursor-pointer group" onClick={() => setSelectedPayment(payment)}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-[#0F4C81] group-hover:underline">{payment.order}</span>
                                                    <Badge variant="outline" className="bg-white text-xs border-orange-200">{t('pendingPayments.pending')}</Badge>
                                                </div>
                                                <p className="text-sm font-bold text-gray-800 mt-1">{payment.buyer}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-black text-lg text-[#0F4C81]">¥{payment.amount.toLocaleString()}</p>
                                                <p className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full inline-block mt-1">+{payment.days} {t('pendingPayments.days')}</p>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-400 text-center mt-1 border-t border-orange-200/50 pt-1 group-hover:text-orange-500">{t('pendingPayments.clickForDetails')}</div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="secondary" size="sm" className="w-full mt-4 font-bold" onClick={() => alert('Batch sending payment reminders...')}>{t('pendingPayments.sendRemindersAll')}</Button>
                        </CardContent>
                    </Card>

                    {/* Exchange Rates */}
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>{t('exchangeRates.title')}</CardTitle>
                            <Button variant="ghost" size="sm" onClick={updateRates} disabled={loadingRates}>
                                {loadingRates ? t('exchangeRates.updating') : t('exchangeRates.update')}
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {rates.map((rate, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="font-medium">1 {rate.currency}</span>
                                        <div className="text-right">
                                            <span className="font-bold">{rate.rate > 0 ? `¥${rate.rate.toFixed(2)}` : '---'}</span>
                                            {rate.change && <span className="text-xs ml-2 text-gray-400">{rate.change}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-3">
                                {lastUpdated ? `${t('exchangeRates.lastUpdated')}: ${lastUpdated}` : t('exchangeRates.clickToFetch')}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="secondary" className="w-full" onClick={() => alert('Invoice Generation feature coming soon!')}>{t('quickActions.generateInvoice')}</Button>
                            <Button variant="secondary" className="w-full" onClick={() => alert('Refund Process feature coming soon!')}>{t('quickActions.processRefund')}</Button>
                            <Button variant="secondary" className="w-full" onClick={() => alert('Bank Reconciliation feature coming soon!')}>{t('quickActions.bankReconciliation')}</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Payment Detail Modal */}
            {selectedPayment && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white rounded-t-xl z-10">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    {t('modal.title')}
                                    <Badge variant="outline" className="border-orange-500 text-orange-600 bg-orange-50">{t('pendingPayments.pending')}</Badge>
                                </h2>
                                <p className="text-sm text-gray-500">{t('modal.orderRef')}: {selectedPayment.order}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedPayment(null)} className="text-gray-400 hover:text-gray-600">✕</Button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto space-y-8">
                            {/* Customer Profile */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('modal.customerProfile')}</h3>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 grid grid-cols-2 gap-4">
                                    <div><p className="text-xs text-gray-500">{t('modal.name')}</p><p className="font-bold text-gray-800">{selectedPayment.buyer}</p></div>
                                    <div><p className="text-xs text-gray-500">{t('modal.kycStatus')}</p>
                                        <Badge variant={selectedPayment.kycStatus === 'Verified' ? 'success' : 'warning'}>{getKycStatusTranslation(selectedPayment.kycStatus)}</Badge>
                                    </div>
                                    <div><p className="text-xs text-gray-500">{t('modal.email')}</p><p className="text-sm font-medium">{selectedPayment.email}</p></div>
                                    <div><p className="text-xs text-gray-500">{t('modal.phone')}</p><p className="text-sm font-medium">{selectedPayment.phone}</p></div>
                                    <div className="col-span-2"><p className="text-xs text-gray-500">{t('modal.address')}</p><p className="text-sm text-gray-700">{selectedPayment.address} ({selectedPayment.country})</p></div>
                                </div>
                            </section>

                            {/* Order Breakdown */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('modal.orderBreakdown')}</h3>
                                <div className="border border-gray-100 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-gray-500 font-medium">{t('modal.itemDescription')}</th>
                                                <th className="px-4 py-2 text-left text-gray-500 font-medium">{t('modal.vin')}</th>
                                                <th className="px-4 py-2 text-right text-gray-500 font-medium">{t('modal.price')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {selectedPayment.items.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-4 py-2">{item.vehicleName}</td>
                                                    <td className="px-4 py-2 font-mono text-xs">{item.vin}</td>
                                                    <td className="px-4 py-2 text-right">¥{item.price.toLocaleString()}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-blue-50/50 font-bold">
                                                <td className="px-4 py-2" colSpan={2}>{t('modal.totalAmountDue')}</td>
                                                <td className="px-4 py-2 text-right text-[#0F4C81]">¥{selectedPayment.amount.toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Communication Log */}
                            <section>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('modal.communicationLog')}</h3>
                                <div className="space-y-3">
                                    {selectedPayment.logs.map((log, idx) => (
                                        <div key={idx} className="flex gap-3 text-sm">
                                            <div className="text-gray-400 text-xs w-24 pt-1">{log.date}</div>
                                            <div className="flex-1 bg-white border border-gray-100 p-2 rounded shadow-sm">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Badge variant="outline" className="text-[10px] h-5 px-1 bg-gray-50">{log.type}</Badge>
                                                </div>
                                                <p className="text-gray-700">{log.note}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {selectedPayment.logs.length === 0 && <p className="text-xs text-gray-400 italic">{t('modal.noLogs')}</p>}
                                </div>
                            </section>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex justify-end gap-3 sticky bottom-0">
                            <Button variant="secondary" onClick={() => alert(`Opening mail app for ${selectedPayment.email}...`)}>✉️ {t('modal.sendEmail')}</Button>
                            <Button variant="secondary" onClick={() => alert(`Dialing ${selectedPayment.phone}...`)}>📞 {t('modal.callCustomer')}</Button>
                            <Button variant="primary" onClick={() => alert('Marking as paid manually...')}>{t('modal.markAsPaid')}</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
