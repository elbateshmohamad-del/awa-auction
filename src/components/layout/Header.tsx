'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { NotificationCenter } from './NotificationCenter';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useAuth } from '@/context/AuthContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations();
    const router = useRouter();
    const { isAuthenticated, logout } = useAuth();
    const pathname = usePathname();

    // Hide Header on Admin pages
    // Using simple string check strictly. Modify logic if specialized admin routes are needed.
    // pathname from i18n/navigation usually doesn't include locale, but checking both cases is safer if uncertain.
    // However, since we import from i18n/navigation, it returns path without locale.
    if (pathname && (pathname.startsWith('/admin') || pathname.startsWith('/admin-login'))) {
        return null;
    }

    const navigation = [
        { name: t('header.navigation.auctions'), href: '/auctions' },
        { name: t('header.navigation.services'), href: '/services' },
        { name: t('header.navigation.shippingSchedule'), href: '/shipping-schedule' },
        { name: t('header.navigation.about'), href: '/about' },
    ];

    const handleLogout = () => {
        logout();
        router.refresh();
        router.push('/');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200" dir="ltr">
            {/* Diagonal accent line */}
            <div className="h-1 bg-gradient-to-r from-[#0F4C81] via-[#3B82F6] to-[#0F4C81]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-[#0F4C81]">AWA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-[#0F4C81] font-medium transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                        <NotificationCenter />
                        <div className="h-6 w-px bg-gray-200"></div>

                        {isAuthenticated ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="font-bold text-gray-600 hover:text-gray-800"
                                >
                                    {t('header.auth.logout')}
                                </button>
                                <Link href="/dashboard">
                                    <Button className="font-bold skew-x-[-10deg]">
                                        <span className="skew-x-[10deg]">{t('header.auth.dashboard')}</span>
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="font-bold text-[#0F4C81] hover:text-[#0a355c]">
                                    {t('header.auth.login')}
                                </Link>
                                <Link href="/register">
                                    <Button className="font-bold skew-x-[-10deg]">
                                        <span className="skew-x-[10deg]">{t('header.auth.signUp')}</span>
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <LanguageSwitcher />
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                {isAuthenticated ? (
                                    <>
                                        <Link href="/dashboard" className="w-full">
                                            <Button variant="primary" className="w-full justify-center">{t('header.auth.dashboard')}</Button>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-left font-medium"
                                        >
                                            {t('header.auth.logout')}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="w-full">
                                            <Button variant="ghost" className="w-full justify-center">{t('header.auth.login')}</Button>
                                        </Link>
                                        <Link href="/register" className="w-full">
                                            <Button variant="primary" className="w-full justify-center">{t('header.auth.signUp')}</Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
