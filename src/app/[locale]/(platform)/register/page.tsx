'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

import { useRouter } from '@/i18n/navigation';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
    const t = useTranslations('auth.registerPage');
    const router = useRouter();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError(t('passwordsDoNotMatch') || 'Passwords do not match'); // Fallback if translation missing
            setIsLoading(false);
            return;
        }

        try {
            // 1. Register
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    name: `${formData.firstName} ${formData.lastName}`
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            // 2. Auto Login
            await login(formData.email, formData.password);

            // 3. Redirect
            router.push('/dashboard');
            router.refresh();

        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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

                    <div className="mt-12 grid grid-cols-1 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 !text-white" style={{ color: '#ffffff' }}>{t('globalAccessTitle')}</h3>
                            <p className="!text-white text-sm" style={{ color: '#ffffff' }}>{t('globalAccessDesc')}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2 !text-white" style={{ color: '#ffffff' }}>{t('professionalGradeTitle')}</h3>
                            <p className="!text-white text-sm" style={{ color: '#ffffff' }}>{t('professionalGradeDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left rtl:md:text-right">
                        <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                            AWA AUCTION
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">{t('createAccount')}</h2>
                        <p className="mt-2 text-gray-600">
                            {t('alreadyHaveAccount')}{' '}
                            <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#0F4C81] underline decoration-2 decoration-transparent hover:decoration-[#0F4C81] transition-all">
                                {t('signIn')}
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
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        name="firstName"
                                        label={t('firstName')}
                                        placeholder=""
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="lastName"
                                        label={t('lastName')}
                                        placeholder=""
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Input
                                    name="email"
                                    label={t('email')}
                                    type="email"
                                    placeholder=""
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                                <Input
                                    name="password"
                                    label={t('password')}
                                    type="password"
                                    placeholder=""
                                    hint={t('passwordHint')}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <Input
                                    name="confirmPassword"
                                    label={t('confirmPassword')}
                                    type="password"
                                    placeholder=""
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#0F4C81] focus:ring-[#0F4C81] border-gray-300 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 rtl:ml-0 rtl:mr-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-gray-700">{t('agreeToTerms')}</label>
                                        <p className="text-gray-500">{t('termsNotice')} <Link href="/terms" className="text-[#0F4C81] hover:underline">{t('termsOfService')}</Link>.</p>
                                    </div>
                                </div>

                                <button type="submit" className="w-full awa-button-primary" disabled={isLoading}>
                                    <span>{isLoading ? 'Processing...' : t('createAccountBtn')}</span>
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
