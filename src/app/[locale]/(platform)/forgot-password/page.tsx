'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function ForgotPasswordPage() {
    const t = useTranslations('auth.forgotPasswordPage');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                        AWA AUCTION
                    </Link>
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center">
                            <span className="text-3xl">🔑</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('title')}</h2>
                    <p className="mt-2 text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                <Card className="border-t-4 border-t-[#0F4C81]">
                    <CardContent className="pt-6">
                        <form className="space-y-6">
                            <Input
                                label={t('email')}
                                type="email"
                                placeholder=""
                                required
                            />

                            <button type="submit" className="w-full awa-button-primary">
                                <span>{t('resetBtn')}</span>
                            </button>
                        </form>
                    </CardContent>
                </Card>

                <p className="text-center text-sm text-gray-600">
                    <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#0F4C81] flex items-center justify-center gap-2">
                        <span>{t('backToLogin')}</span>
                    </Link>
                </p>
            </div>

            {/* Background Decorative Element */}
            <div className="fixed top-0 right-0 w-1/3 h-full bg-[#0F4C81] opacity-5 skew-x-[-20deg] pointer-events-none -z-10 translate-x-1/2" />
        </div>
    );
}
