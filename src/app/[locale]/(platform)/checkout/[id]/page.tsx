"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { PaymentForm } from '@/components/checkout/PaymentForm';

export default function CheckoutPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [step, setStep] = useState<1 | 2>(1); // 1: Shipping, 2: Payment

    // Mock Invoice Data
    const invoice = {
        itemPrice: 1850000,
        shipping: 120000,
        fee: 92500, // 5%
        total: 2062500,
        bikeName: '2022 Kawasaki Ninja ZX-10R',
        image: '/placeholder.jpg'
    };

    const handlePaymentComplete = () => {
        router.push('/checkout/success');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#0F4C81] text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    Checkout
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Flow */}
                    <div className="flex-1 space-y-6">

                        {/* Step 1: Shipping Address */}
                        <Card className={`transition-all ${step === 1 ? 'ring-2 ring-[#0F4C81] shadow-lg' : 'opacity-60'}`}>
                            <CardHeader className="border-b border-gray-100 pb-4">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="flex items-center gap-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#0F4C81] text-white' : 'bg-gray-200 text-gray-500'}`}>1</span>
                                        Shipping Information
                                    </CardTitle>
                                    {step === 2 && <button onClick={() => setStep(1)} className="text-xs text-blue-600 font-bold underline">Edit</button>}
                                </div>
                            </CardHeader>
                            {step === 1 && (
                                <CardContent className="pt-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Country / Region" defaultValue="Thailand" />
                                        <Input label="Port of Discharge" defaultValue="Laem Chabang" />
                                    </div>
                                    <Input label="Street Address" placeholder="123 Sukhumvit Road" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="City" placeholder="Bangkok" />
                                        <Input label="Postal Code" placeholder="10110" />
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-[#0F4C81] text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </CardContent>
                            )}
                        </Card>

                        {/* Step 2: Payment */}
                        <Card className={`transition-all ${step === 2 ? 'ring-2 ring-[#0F4C81] shadow-lg' : 'opacity-60'}`}>
                            <CardHeader className="border-b border-gray-100 pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#0F4C81] text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
                                    Payment Method
                                </CardTitle>
                            </CardHeader>
                            {step === 2 && (
                                <CardContent className="pt-6">
                                    <PaymentForm onComplete={handlePaymentComplete} />
                                </CardContent>
                            )}
                        </Card>

                    </div>

                    {/* Right Column: Order Summary (Sticky) */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-24 space-y-4">
                            <Card>
                                <CardHeader className="bg-gray-50 border-b border-gray-100 py-3">
                                    <h3 className="font-bold text-gray-700">Order Summary</h3>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-2xl">🏍️</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-sm text-gray-900 leading-tight">{invoice.bikeName}</p>
                                            <p className="text-xs text-gray-500 mt-1">Lot #82910</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Winning Bid</span>
                                            <span>¥{invoice.itemPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Auction Fee (5%)</span>
                                            <span>¥{invoice.fee.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Est. Shipping</span>
                                            <span>¥{invoice.shipping.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="border-t-2 border-dashed border-gray-200 pt-4">
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold text-gray-900">Total</span>
                                            <span className="font-black text-2xl text-[#0F4C81]">¥{invoice.total.toLocaleString()}</span>
                                        </div>
                                        <p className="text-right text-[10px] text-gray-400 mt-1">Include all taxes and fees</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg text-green-800 text-xs font-medium">
                                <span>🔒</span>
                                <p>Your payment information is encrypted and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
