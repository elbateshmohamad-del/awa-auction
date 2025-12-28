"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardSettingsPage() {
    const t = useTranslations('dashboard.settings');

    const { user, login, activeBids } = useAuth();

    const [formData, setFormData] = useState({
        phoneNumber: '',
        address: '',
        memberType: 'INDIVIDUAL',
        corporateName: '',
        corporateRegNum: '',
        representative: '',
        preferredCurrency: 'USD'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                phoneNumber: user.phoneNumber || '',
                address: user.address || '',
                memberType: user.memberType || 'INDIVIDUAL',
                corporateName: user.corporateName || '',
                corporateRegNum: user.corporateRegNum || '',
                representative: user.representative || '',
                preferredCurrency: user.preferredCurrency || 'USD'
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, email: user?.email })
            });

            if (!res.ok) throw new Error('Failed to update profile');

            const data = await res.json();

            // Update localStorage with new user data
            if (data.success && data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            setMessage(t('form.success'));

            // Force reload to update context
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        } catch (err) {
            setMessage(t('form.error'));
        } finally {
            setIsLoading(false);
        }
    };

    const currencies = [
        { code: 'USD', symbol: '$', name: '米ドル', flag: '🇺🇸' },
        { code: 'EUR', symbol: '€', name: 'ユーロ', flag: '🇪🇺' },
        { code: 'GBP', symbol: '£', name: '英ポンド', flag: '🇬🇧' },
        { code: 'EGP', symbol: 'E£', name: 'エジプトポンド', flag: '🇪🇬' }
    ];

    return (
        <DashboardLayout>
            <div className="bg-gradient-to-b from-white to-[#F5F7FA]">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#60A5FA] py-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="container mx-auto max-w-4xl px-6 relative z-10">
                        <div className="text-center text-white">
                            <div className="inline-block mb-4">
                                <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
                                    ⚙️ {t('title')}
                                </span>
                            </div>
                            <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-2px] drop-shadow-lg">
                                アカウント設定
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12">
                    <div className="container mx-auto max-w-4xl px-6">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Message */}
                            {message && (
                                <div className={`p-6 mb-8 rounded-2xl border-2 ${message.includes('Error') || message.includes('エラー') || message.includes('失敗') ?
                                    'bg-red-50 border-red-200 text-red-800' :
                                    'bg-green-50 border-green-200 text-green-800'
                                    } flex items-center gap-3 animate-fadeIn`}>
                                    <span className="text-2xl">{message.includes('Error') || message.includes('エラー') || message.includes('失敗') ? '⚠️' : '✅'}</span>
                                    <p className="font-medium">{message}</p>
                                </div>
                            )}

                            {/* Currency Settings Card */}
                            <div className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center text-white text-2xl">
                                            💱
                                        </div>
                                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                                            {t('currency')}
                                        </h2>
                                    </div>

                                    <label className="block text-sm font-medium text-gray-700 mb-4">
                                        お支払い通貨 / Payment Currency
                                    </label>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency.code}
                                                type="button"
                                                disabled={activeBids.length > 0}
                                                onClick={() => setFormData(prev => ({ ...prev, preferredCurrency: currency.code }))}
                                                className={`group/currency relative p-6 rounded-2xl border-2 transition-all text-center transform hover:scale-105 ${formData.preferredCurrency === currency.code
                                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg'
                                                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                                                    } ${activeBids.length > 0 ? 'cursor-not-allowed' : ''} ${activeBids.length > 0 && formData.preferredCurrency !== currency.code ? 'opacity-50 grayscale' : ''
                                                    }`}
                                                title={activeBids.length > 0 ? 'アクティブな入札があるため変更できません' : ''}
                                            >
                                                {formData.preferredCurrency === currency.code && (
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                )}
                                                <div className="text-3xl mb-2">{currency.flag}</div>
                                                <div className="font-bold text-xl mb-1">{currency.symbol}</div>
                                                <div className="text-xs font-semibold text-gray-600">{currency.code}</div>
                                                <div className="text-xs text-gray-500 mt-1">{currency.name}</div>
                                            </button>
                                        ))}
                                    </div>

                                    {activeBids.length > 0 ? (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                                            <span className="text-xl">⚠️</span>
                                            <p className="text-sm font-medium text-red-800">
                                                アクティブな入札中のため通貨変更はロックされています
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500 flex items-center gap-2">
                                            <span>ℹ️</span>
                                            選択した通貨で全ての価格が表示されます
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Profile Settings Card */}
                            <div className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center text-white text-2xl">
                                            👤
                                        </div>
                                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                                            {t('profile')}
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Account Type */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">{t('form.accountType')}</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, memberType: 'INDIVIDUAL' }))}
                                                    className={`p-6 rounded-2xl border-2 transition-all text-center transform hover:scale-105 ${formData.memberType === 'INDIVIDUAL'
                                                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg'
                                                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                                                        }`}
                                                >
                                                    <div className="text-3xl mb-2">👤</div>
                                                    <div className="font-bold">{t('form.individual')}</div>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, memberType: 'CORPORATE' }))}
                                                    className={`p-6 rounded-2xl border-2 transition-all text-center transform hover:scale-105 ${formData.memberType === 'CORPORATE'
                                                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg'
                                                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                                                        }`}
                                                >
                                                    <div className="text-3xl mb-2">🏢</div>
                                                    <div className="font-bold">{t('form.corporate')}</div>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                {t('form.phoneNumber')} <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="+81 90-1234-5678"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                                required
                                            />
                                        </div>

                                        {/* Address */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                {t('form.address')} <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                                required
                                            />
                                        </div>

                                        {/* Corporate Details */}
                                        {formData.memberType === 'CORPORATE' && (
                                            <div className="space-y-6 pt-6 border-t-2 border-gray-100">
                                                <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                                                    <span>🏢</span>
                                                    {t('form.corporateDetails')}
                                                </h3>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.companyName')}</label>
                                                    <input
                                                        type="text"
                                                        name="corporateName"
                                                        value={formData.corporateName}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.registrationNumber')}</label>
                                                    <input
                                                        type="text"
                                                        name="corporateRegNum"
                                                        value={formData.corporateRegNum}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.representativeName')}</label>
                                                    <input
                                                        type="text"
                                                        name="representative"
                                                        value={formData.representative}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="flex justify-end gap-4">
                                <Link
                                    href="/dashboard"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
                                >
                                    キャンセル
                                </Link>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin">⏳</div>
                                            {t('form.saving')}
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {t('form.save')}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
