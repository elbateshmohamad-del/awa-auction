"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardSettingsPage() {
    const t = useTranslations('dashboard.settings');

    const { user, login, activeBids } = useAuth(); // We'll need a way to refresh the user data. For now, login might not refresh data if we don't implement a refresh method. 
    // *Self-correction*: AuthContext needs a way to update the user state without full re-login. 
    // I'll implement the form and assuming the user updates, we might need to reload or hit an endpoint.
    // For MVP, page reload after save is easiest.

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

            // Force reload to update context for now (simpler than refactoring context)
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        } catch (err) {
            setMessage(t('form.error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold">{t('title')}</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {message && (
                        <div className={`p-3 rounded text-sm ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {message}
                        </div>
                    )}

                    {/* Currency / Display Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('currency')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        お支払い通貨 / Payment Currency
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { code: 'USD', symbol: '$', name: '米ドル', flag: '🇺🇸' },
                                            { code: 'EUR', symbol: '€', name: 'ユーロ', flag: '🇪🇺' },
                                            { code: 'GBP', symbol: '£', name: '英ポンド', flag: '🇬🇧' },
                                            { code: 'EGP', symbol: 'E£', name: 'エジプトポンド', flag: '🇪🇬' }
                                        ].map((currency) => (
                                            <button
                                                key={currency.code}
                                                type="button"
                                                disabled={activeBids.length > 0}
                                                onClick={() => setFormData(prev => ({ ...prev, preferredCurrency: currency.code }))}
                                                className={`p-4 rounded-lg border-2 transition-all text-center 
                                                    ${formData.preferredCurrency === currency.code
                                                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                                    } 
                                                    ${activeBids.length > 0 ? 'cursor-not-allowed' : ''}
                                                    ${activeBids.length > 0 && formData.preferredCurrency !== currency.code ? 'opacity-50 grayscale' : ''}
                                                `}
                                                title={activeBids.length > 0 ? 'アクティブな入札があるため変更できません' : ''}
                                            >
                                                <div className="text-2xl mb-1">{currency.flag}</div>
                                                <div className="font-bold text-lg">{currency.symbol}</div>
                                                <div className="text-xs text-gray-500">{currency.code}</div>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {activeBids.length > 0 ? (
                                            <span className="text-red-500 font-bold flex items-center gap-1">
                                                ⚠️ アクティブな入札中のため通貨変更はロックされています
                                            </span>
                                        ) : (
                                            '選択した通貨で全ての価格が表示されます'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Profile Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('profile')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.accountType')}</label>
                                    <select
                                        name="memberType"
                                        value={formData.memberType}
                                        onChange={handleChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="INDIVIDUAL">{t('form.individual')}</option>
                                        <option value="CORPORATE">{t('form.corporate')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.phoneNumber')} *</label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+81 90-1234-5678"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.address')} *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {formData.memberType === 'CORPORATE' && (
                                    <div className="space-y-4 pt-4 border-t border-gray-200">
                                        <h3 className="font-semibold text-gray-900">{t('form.corporateDetails')}</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.companyName')}</label>
                                            <input
                                                type="text"
                                                name="corporateName"
                                                value={formData.corporateName}
                                                onChange={handleChange}
                                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.registrationNumber')}</label>
                                            <input
                                                type="text"
                                                name="corporateRegNum"
                                                value={formData.corporateRegNum}
                                                onChange={handleChange}
                                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.representativeName')}</label>
                                            <input
                                                type="text"
                                                name="representative"
                                                value={formData.representative}
                                                onChange={handleChange}
                                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button type="submit" className="min-w-[120px]" disabled={isLoading}>
                            {isLoading ? t('form.saving') : t('form.save')}
                        </Button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
}
