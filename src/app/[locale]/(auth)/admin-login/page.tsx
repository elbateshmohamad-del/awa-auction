'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

import { useRouter } from '@/i18n/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AdminLoginPage() {
    const t = useTranslations('auth.loginPage');
    const router = useRouter();
    const { login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const success = await login(email, password);
            if (success) {
                // Check role
                const userJson = localStorage.getItem('user');
                if (userJson) {
                    const user = JSON.parse(userJson);
                    if (user.role === 'ADMIN' || user.role === 'STAFF') {
                        router.push('/admin');
                        router.refresh();
                    } else {
                        // User is valid but not staff
                        setError('アクセス拒否: 管理者権限が必要です。');
                        logout(); // Clear session
                    }
                } else {
                    router.push('/admin'); // Fallback
                }
            }
        } catch (err: any) {
            setError(err.message || 'ログインに失敗しました');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F4C81] via-[#0a355c] to-[#05203a] p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-block text-4xl font-black text-white mb-2">
                        <span className="text-blue-300">AWA</span> ADMIN
                    </Link>
                    <h2 className="text-xl text-blue-100">管理者ポータル</h2>
                </div>

                <Card className="border-t-4 border-t-blue-400 bg-white shadow-xl">
                    <CardContent className="pt-8 pb-8 px-6 sm:px-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">ログイン</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="bg-blue-50 text-blue-700 p-3 rounded-md text-sm font-medium border border-blue-200">
                                    {error}
                                </div>
                            )}
                            <Input
                                label="メールアドレス"
                                type="email"
                                placeholder="admin@awa.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="block text-sm font-medium text-gray-700">パスワード</label>
                                </div>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#0F4C81] hover:bg-[#0a355c] disabled:bg-[#0F4C81]/70 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>ログイン中...</span>
                                    </>
                                ) : (
                                    <span>管理画面にログイン</span>
                                )}
                            </button>
                        </form>
                    </CardContent>
                </Card>

                <div className="text-center space-y-4">
                    <p className="text-sm text-blue-200">
                        <Link href="/login" className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1">
                            <span>←</span>
                            <span>通常のログインに戻る</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
