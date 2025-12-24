"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

type Step = 'type' | 'content' | 'review';

export default function CreateNotificationPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('type');
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        type: 'Email' as 'Email' | 'Push',
        target: 'All Users',
        subject: '',
        message: '',
        scheduled: '', // empty means immediate
    });

    const handleSend = async () => {
        setLoading(true);
        // Simulator delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Notification Successfully Scheduled/Sent! 🚀');
        router.push('/en/admin/notifications');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <Button
                    variant="ghost"
                    className="mb-4 text-gray-500 hover:text-gray-900 -ml-4"
                    onClick={() => router.back()}
                >
                    ← Back to Notifications
                </Button>
                <h1 className="text-3xl font-bold text-gray-900">Create New Notification</h1>
                <p className="text-gray-500">Send updates to your users via Email or Push Notification.</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                <span className={step === 'type' ? 'text-[#0F4C81]' : ''}>1. Type & Target</span>
                <span>→</span>
                <span className={step === 'content' ? 'text-[#0F4C81]' : ''}>2. Compose</span>
                <span>→</span>
                <span className={step === 'review' ? 'text-[#0F4C81]' : ''}>3. Review</span>
            </div>

            <Card className="min-h-[400px]">
                <CardContent className="p-8">

                    {/* STEP 1: Type & Target */}
                    {step === 'type' && (
                        <div className="space-y-6 animate-in slide-in-from-right-4">
                            <div className="grid grid-cols-2 gap-6">
                                <div
                                    onClick={() => setFormData({ ...formData, type: 'Email' })}
                                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${formData.type === 'Email' ? 'border-[#0F4C81] bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                                >
                                    <span className="text-4xl mb-2 block">📧</span>
                                    <h3 className="font-bold text-lg text-gray-800">Email Broadcast</h3>
                                    <p className="text-sm text-gray-500">Send rich HTML emails to user inboxes.</p>
                                </div>

                                <div
                                    onClick={() => setFormData({ ...formData, type: 'Push' })}
                                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${formData.type === 'Push' ? 'border-[#0F4C81] bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                                >
                                    <span className="text-4xl mb-2 block">🔔</span>
                                    <h3 className="font-bold text-lg text-gray-800">Push Notification</h3>
                                    <p className="text-sm text-gray-500">Instant alerts to mobile devices.</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">Target Audience</label>
                                <select
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                                    value={formData.target}
                                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                                >
                                    <option>All Users (1,284)</option>
                                    <option>Active Bidders (142)</option>
                                    <option>Pending Payment Users (8)</option>
                                    <option>Newsletter Subscribers only</option>
                                </select>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button variant="primary" onClick={() => setStep('content')}>Next: Compose Content →</Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Content */}
                    {step === 'content' && (
                        <div className="space-y-6 animate-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">Subject / Title</label>
                                <Input
                                    placeholder={formData.type === 'Email' ? "Enter email subject..." : "Notification title..."}
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">Message Body</label>
                                <textarea
                                    className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <p className="text-xs text-gray-400 text-right">Markdown supported</p>
                            </div>

                            <div className="flex justify-between pt-4">
                                <Button variant="secondary" onClick={() => setStep('type')}>← Back</Button>
                                <Button
                                    variant="primary"
                                    onClick={() => setStep('review')}
                                    disabled={!formData.subject || !formData.message}
                                >
                                    Next: Review →
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Review */}
                    {step === 'review' && (
                        <div className="space-y-6 animate-in slide-in-from-right-4">
                            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                <h3 className="font-bold text-gray-500 uppercase tracking-wider text-xs">Summary</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs text-gray-400 block">Type</span>
                                        <Badge variant={formData.type === 'Email' ? 'blue' : 'secondary'}>{formData.type}</Badge>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-400 block">Target</span>
                                        <span className="font-bold text-gray-800">{formData.target}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-xs text-gray-400 block">Subject</span>
                                        <span className="font-bold text-lg text-gray-900">{formData.subject}</span>
                                    </div>
                                    <div className="col-span-2 border-t border-gray-200 pt-4 mt-2">
                                        <span className="text-xs text-gray-400 block mb-2">Message Preview</span>
                                        <div className="bg-white p-4 rounded border border-gray-200 text-gray-600 whitespace-pre-wrap">
                                            {formData.message}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4 items-center">
                                <Button variant="secondary" onClick={() => setStep('content')}>← Edit</Button>
                                <Button
                                    variant="primary"
                                    className="px-8 py-2 text-lg shadow-lg shadow-blue-500/30"
                                    onClick={handleSend}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : '🚀 Confirm & Send'}
                                </Button>
                            </div>
                        </div>
                    )}

                </CardContent>
            </Card>
        </div>
    );
}
