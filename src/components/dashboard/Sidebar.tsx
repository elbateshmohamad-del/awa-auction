"use client";

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from '@/i18n/navigation';

type NavItemKey = 'overview' | 'myBids' | 'watchlist' | 'myOrders' | 'documents' | 'kyc.title' | 'settings.title';

const navItems: { href: string; labelKey: NavItemKey; icon: string }[] = [
    { href: '/dashboard', labelKey: 'overview', icon: '📊' },
    { href: '/dashboard/bids', labelKey: 'myBids', icon: '🔨' },
    { href: '/dashboard/watchlist', labelKey: 'watchlist', icon: '👀' },
    { href: '/dashboard/orders', labelKey: 'myOrders', icon: '📦' },
    { href: '/dashboard/documents', labelKey: 'documents', icon: '📄' },
    { href: '/dashboard/kyc', labelKey: 'kyc.title', icon: '🆔' },
    { href: '/sns-campaign', labelKey: 'snsCampaign' as NavItemKey, icon: '🎁' },
    { href: '/dashboard/settings', labelKey: 'settings.title', icon: '⚙️' },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('dashboard');
    const tCommon = useTranslations('common');
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.refresh();
        router.push('/');
    };

    // Get initials
    const initials = user?.name
        ? user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2)
        : 'JD';

    const displayName = user?.name || 'Guest User';
    const displayRole = user?.role === 'ADMIN' ? 'Administrator' : 'Individual Member';

    return (
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-full fixed left-0 top-0 pt-16 z-10">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-[#0F4C81]">
                        {initials}
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">{displayName}</p>
                        <p className="text-xs text-gray-500">{displayRole}</p>
                    </div>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const href = `/${locale}${item.href.startsWith('/') ? item.href : '/' + item.href}`;
                        const isActive = pathname === href;

                        return (
                            <Link key={item.href} href={href}>
                                <span className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-50 text-[#0F4C81]"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                )}>
                                    <span className="text-lg">{item.icon}</span>
                                    {t(item.labelKey)}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-gray-100">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={handleLogout}
                >
                    <span className="mr-2">🚪</span> {tCommon('logout')}
                </Button>
            </div>
        </aside>
    );
}
