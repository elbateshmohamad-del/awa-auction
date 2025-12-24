'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface BankTransferModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderDetails: {
        orderId: string;
        bikeName: string;
        totalAmount: number;
        currency: string;
        currencySymbol: string;
    };
    onConfirm?: () => void;
}

// AWA Bank Account Information
const BANK_INFO = {
    ja: {
        bankName: '三菱UFJ銀行',
        branchName: '渋谷支店',
        branchCode: '150',
        accountType: '普通',
        accountNumber: '1234567',
        accountHolder: 'カ）エーダブリューエー',
        swiftCode: 'BOTKJPJT',
    },
    en: {
        bankName: 'MUFG Bank, Ltd.',
        branchName: 'Shibuya Branch',
        branchCode: '150',
        accountType: 'Savings',
        accountNumber: '1234567',
        accountHolder: 'AWA CO., LTD.',
        swiftCode: 'BOTKJPJT',
    }
};

export function BankTransferModal({ isOpen, onClose, orderDetails, onConfirm }: BankTransferModalProps) {
    const [copied, setCopied] = useState<string | null>(null);
    const [confirmed, setConfirmed] = useState(false);

    if (!isOpen) return null;

    const bank = BANK_INFO.ja; // TODO: Use i18n

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleConfirm = () => {
        setConfirmed(true);
        onConfirm?.();
    };

    if (confirmed) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <Card className="w-full max-w-md">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl">✓</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">注文を受け付けました</h2>
                        <p className="text-gray-600 mb-6">
                            お振込み確認後、3営業日以内に発送手続きを開始いたします。<br />
                            ご不明な点がございましたら、お気軽にお問い合わせください。
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                            <p className="text-sm text-gray-600">注文番号</p>
                            <p className="text-lg font-bold text-[#0F4C81]">{orderDetails.orderId}</p>
                        </div>
                        <Button variant="primary" size="lg" onClick={onClose} className="w-full">
                            ダッシュボードへ戻る
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <Card className="w-full max-w-lg my-8">
                <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-[#0F4C81] text-white p-6 rounded-t-lg">
                        <h2 className="text-xl font-bold mb-2">お振込み先のご案内</h2>
                        <p className="text-blue-100 text-sm">Bank Transfer Information</p>
                    </div>

                    {/* Order Summary */}
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">商品</span>
                            <span className="font-medium text-gray-900">{orderDetails.bikeName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">お支払い金額</span>
                            <span className="text-2xl font-black text-[#0F4C81]">
                                {orderDetails.currencySymbol}{orderDetails.totalAmount.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Bank Details */}
                    <div className="p-6 space-y-4">
                        <h3 className="font-bold text-gray-900 mb-4">振込先口座情報</h3>

                        {[
                            { label: '銀行名', value: bank.bankName, key: 'bank' },
                            { label: '支店名', value: `${bank.branchName} (${bank.branchCode})`, key: 'branch' },
                            { label: '口座種別', value: bank.accountType, key: 'type' },
                            { label: '口座番号', value: bank.accountNumber, key: 'account' },
                            { label: '口座名義', value: bank.accountHolder, key: 'holder' },
                            { label: 'SWIFTコード', value: bank.swiftCode, key: 'swift' },
                        ].map(({ label, value, key }) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                                <span className="text-sm text-gray-500">{label}</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900">{value}</span>
                                    <button
                                        onClick={() => copyToClipboard(value, key)}
                                        className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 transition-colors"
                                    >
                                        {copied === key ? '✓' : 'コピー'}
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Important Notes */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                            <h4 className="font-bold text-yellow-800 mb-2">⚠️ ご注意</h4>
                            <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                                <li>振込人名義は登録されたお名前でお振込みください</li>
                                <li>振込手数料はお客様ご負担となります</li>
                                <li>3営業日以内にお振込みがない場合、注文はキャンセルとなります</li>
                            </ul>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="p-6 bg-gray-50 rounded-b-lg flex gap-4">
                        <Button variant="outline" size="lg" onClick={onClose} className="flex-1">
                            キャンセル
                        </Button>
                        <Button variant="primary" size="lg" onClick={handleConfirm} className="flex-1">
                            注文を確定する
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
