'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

import { useRouter } from '@/i18n/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const t = useTranslations('auth.loginPage');
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            // Force a hard refresh/navigation to ensure state propagates if needed, 
            // but router.push should be fine if context updates. 
            // However, for consistency with the layout check, we'll just push.
            router.push('/dashboard');
            router.refresh();
        } catch (err: any) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Design Element */}
            <div className="hidden md:flex md:w-1/2 bg-[#0F4C81] relative overflow-hidden items-center justify-center p-12">
                {/* Dynamic skewed background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#0a355c]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[#3B82F6] opacity-10 transform skew-x-[-20deg] translate-x-1/2"></div>

                <div className="relative z-10 text-white max-w-lg">
                    <div className="mb-6 inline-block border-l-4 border-[#3B82F6] pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                        <h1 className="text-4xl font-bold tracking-tight mb-2 !text-white" style={{ color: '#ffffff' }}>{t('heroTitle')}</h1>
                        <p className="!text-white text-lg" style={{ color: '#ffffff' }}>{t('heroSubtitle')}</p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4 rtl:flex-row-reverse">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">⚡</div>
                            <div>
                                <h3 className="font-bold !text-white" style={{ color: '#ffffff' }}>{t('lightningTitle')}</h3>
                                <p className="!text-white text-sm" style={{ color: '#ffffff' }}>{t('lightningDesc')}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rtl:flex-row-reverse">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">🔒</div>
                            <div>
                                <h3 className="font-bold !text-white" style={{ color: '#ffffff' }}>{t('secureTitle')}</h3>
                                <p className="!text-white text-sm" style={{ color: '#ffffff' }}>{t('secureDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left rtl:md:text-right">
                        <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                            AWA AUCTION
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">{t('signIn')}</h2>
                        <p className="mt-2 text-gray-600">
                            {t('newToAwa')}{' '}
                            <Link href="/register" className="font-medium text-[#2563EB] hover:text-[#0F4C81] underline decoration-2 decoration-transparent hover:decoration-[#0F4C81] transition-all">
                                {t('createAccount')}
                            </Link>
                        </p>
                    </div>

                    <Card className="border-t-4 border-t-[#0F4C81]">
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm font-medium">
                                        {error}
                                    </div>
                                )}
                                <Input
                                    label={t('email')}
                                    type="email"
                                    placeholder=""
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label className="block text-sm font-medium text-gray-700">{t('password')}</label>
                                        <Link href="/forgot-password" className="text-sm font-medium text-[#2563EB] hover:text-[#0F4C81]">
                                            {t('forgotPassword')}
                                        </Link>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder=""
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="w-full awa-button-primary">
                                    <span>{t('signInBtn')}</span>
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">{t('orContinueWith')}</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <Button variant="secondary" className="w-full" type="button" onClick={() => alert('Social login coming soon!')}>
                                        <span>Google</span>
                                    </Button>
                                    <Button variant="secondary" className="w-full" type="button" onClick={() => alert('Social login coming soon!')}>
                                        <span>Facebook</span>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <p className="text-center text-sm text-gray-500">
                        {t('termsNotice')}{' '}
                        <Link href="/terms" className="text-[#0F4C81] hover:underline">{t('termsOfService')}</Link>
                        {' '}{t('and')}{' '}
                        <Link href="/privacy" className="text-[#0F4C81] hover:underline">{t('privacyPolicy')}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
