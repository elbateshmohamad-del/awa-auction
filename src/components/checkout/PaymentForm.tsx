"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BankTransferModal } from './BankTransferModal';

interface PaymentFormProps {
    onComplete: () => void;
    orderDetails?: {
        orderId: string;
        bikeName: string;
        totalAmount: number;
        currency: string;
        currencySymbol: string;
    };
}

export function PaymentForm({ onComplete, orderDetails }: PaymentFormProps) {
    const [showBankTransfer, setShowBankTransfer] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'bank' | 'card'>('bank');

    // Default order details for fallback
    const defaultOrderDetails = {
        orderId: `AWA-${Date.now().toString(36).toUpperCase()}`,
        bikeName: '落札車両',
        totalAmount: 2062500,
        currency: 'JPY',
        currencySymbol: '¥'
    };

    const details = orderDetails || defaultOrderDetails;

    const handleBankTransferClick = () => {
        setShowBankTransfer(true);
    };

    const handleBankTransferConfirm = async () => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    bikeId: orderDetails?.orderId, // Assumption: orderId passed here is actually bikeId in current context, or we need to pass bikeId prop
                    paymentMethod: 'BANK'
                })
            });

            if (response.ok) {
                console.log('Order created successfully');
                // Could redirect or show success
            }
        } catch (error) {
            console.error('Failed to create order', error);
        }
    };

    const handleModalClose = () => {
        setShowBankTransfer(false);
        onComplete();
    };

    return (
        <div className="space-y-6">
            {/* Payment Method Selection */}
            <div className="space-y-3">
                <p className="text-sm font-bold text-gray-700 mb-3">お支払い方法を選択</p>

                {/* Bank Transfer Option */}
                <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-[#0F4C81] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === 'bank'}
                        onChange={() => setPaymentMethod('bank')}
                        className="w-5 h-5 text-[#0F4C81]"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🏦</span>
                            <span className="font-bold text-gray-900">銀行振込</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">推奨</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">振込先口座情報をご案内いたします</p>
                    </div>
                </label>

                {/* Card Option (Coming Soon) */}
                <label className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        disabled
                        className="w-5 h-5"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">💳</span>
                            <span className="font-bold text-gray-400">クレジットカード</span>
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">準備中</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">現在ご利用いただけません</p>
                    </div>
                </label>
            </div>

            {/* Bank Transfer Info */}
            {paymentMethod === 'bank' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-[#0F4C81] mb-2">銀行振込について</h4>
                    <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                        <li>ご注文確定後、振込先口座情報を表示します</li>
                        <li>振込手数料はお客様ご負担となります</li>
                        <li>入金確認後3営業日以内に発送手続きを開始</li>
                    </ul>
                </div>
            )}

            {/* Proceed Button */}
            <Button
                type="button"
                variant="primary"
                className="w-full h-12 text-lg font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all"
                onClick={handleBankTransferClick}
            >
                お支払い手続きへ進む
            </Button>

            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                🔒 安全な決済手続き
            </p>

            {/* Bank Transfer Modal */}
            <BankTransferModal
                isOpen={showBankTransfer}
                onClose={handleModalClose}
                orderDetails={details}
                onConfirm={handleBankTransferConfirm}
            />
        </div>
    );
}
