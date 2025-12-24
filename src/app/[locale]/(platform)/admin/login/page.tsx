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
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Admin Design Element */}
            <div className="hidden md:flex md:w-1/2 bg-[#1a1a2e] relative overflow-hidden items-center justify-center p-12">
                {/* Dynamic gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-red-600 opacity-5 transform skew-x-[-20deg] translate-x-1/2"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-red-500/20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 border border-red-500/10 rounded-full"></div>
                <div className="absolute top-1/4 right-10 w-2 h-2 bg-red-500/50 rounded-full"></div>

                <div className="relative z-10 text-white max-w-lg">
                    <div className="mb-6 inline-block border-l-4 border-red-500 pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                        <h1 className="text-4xl font-bold tracking-tight mb-2 !text-white" style={{ color: '#ffffff' }}>
                            管理者ポータル
                        </h1>
                        <p className="!text-gray-300 text-lg" style={{ color: '#d1d5db' }}>
                            AWA Auction 管理システム
                        </p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4 rtl:flex-row-reverse">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-2xl">
                                🛡️
                            </div>
                            <div>
                                <h3 className="font-bold !text-white" style={{ color: '#ffffff' }}>セキュアアクセス</h3>
                                <p className="!text-gray-400 text-sm" style={{ color: '#9ca3af' }}>権限管理された安全な環境</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rtl:flex-row-reverse">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-2xl">
                                ⚙️
                            </div>
                            <div>
                                <h3 className="font-bold !text-white" style={{ color: '#ffffff' }}>完全な管理機能</h3>
                                <p className="!text-gray-400 text-sm" style={{ color: '#9ca3af' }}>バイク・オークション・ユーザー管理</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rtl:flex-row-reverse">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-2xl">
                                📊
                            </div>
                            <div>
                                <h3 className="font-bold !text-white" style={{ color: '#ffffff' }}>リアルタイム分析</h3>
                                <p className="!text-gray-400 text-sm" style={{ color: '#9ca3af' }}>詳細なレポートと統計情報</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left rtl:md:text-right">
                        <Link href="/" className="inline-block text-2xl font-black text-[#1a1a2e] mb-8">
                            <span className="text-red-600">AWA</span> ADMIN
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">管理者ログイン</h2>
                        <p className="mt-2 text-gray-600">
                            スタッフ専用のログインページです
                        </p>
                    </div>

                    <Card className="border-t-4 border-t-red-600">
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm font-medium border border-red-200">
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
                                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
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
                        <p className="text-sm text-gray-500">
                            <Link href="/login" className="text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-1">
                                <span>←</span>
                                <span>通常のログインに戻る</span>
                            </Link>
                        </p>
                        <p className="text-xs text-gray-400">
                            このページは管理者・スタッフ専用です
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
