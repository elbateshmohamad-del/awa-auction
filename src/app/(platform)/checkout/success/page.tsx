"use client";

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function CheckoutSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 flex items-center justify-center py-12">
                <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center border-t-8 border-[#0F4C81]">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-in zoom-in duration-500">
                        🎉
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Payment Successful!</h1>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        Thank you for your payment. Your order has been confirmed and is now being processed for shipping.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Order Number:</span>
                            <span className="font-mono font-bold text-gray-900">#ORD-2025-8829</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Amount Paid:</span>
                            <span className="font-mono font-bold text-gray-900">¥2,062,500</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Date:</span>
                            <span className="font-mono font-bold text-gray-900">{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link href="/dashboard">
                            <Button variant="primary" className="w-full">
                                View My Orders
                            </Button>
                        </Link>
                        <Link href="/catalog">
                            <Button variant="ghost" className="w-full text-gray-500">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
