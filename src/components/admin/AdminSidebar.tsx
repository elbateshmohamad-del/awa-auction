"use client";

import Link from 'next/link';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { LogOut } from 'lucide-react';

// Navigation items with permission mapping
// permissionId corresponds to the ID used in AdminStaffPage
const adminNavItems = [
    { href: '/admin', labelKey: 'dashboard', icon: '📊', permissionId: 'dashboard' },
    { href: '/admin/bikes', labelKey: 'bikes', icon: '🏍️', permissionId: 'bikes' },
    { href: '/admin/prices', labelKey: 'prices', icon: '💹', permissionId: 'bikes' }, // Market prices
    { href: '/admin/auctions', labelKey: 'auctions', icon: '🔨', permissionId: 'auctions' },
    { href: '/admin/users', labelKey: 'users', icon: '👥', permissionId: 'users' },
    { href: '/admin/kyc', labelKey: 'kyc', icon: '📋', permissionId: 'users' }, // Grouped with users
    { href: '/admin/orders', labelKey: 'orders', icon: '📦', permissionId: 'orders' },
    { href: '/admin/containers', labelKey: 'containers', icon: '🚢', permissionId: 'orders' }, // Grouped with orders
    { href: '/admin/content', labelKey: 'content', icon: '📝', permissionId: 'content' },
    { href: '/admin/finance', labelKey: 'finance', icon: '💰', permissionId: 'finance' },
    { href: '/admin/reports', labelKey: 'reports', icon: '📈', permissionId: 'dashboard' }, // Accessible with dashboard
    { href: '/admin/notifications', labelKey: 'notifications', icon: '🔔', permissionId: 'content' }, // Grouped with content
    { href: '/admin/sns', labelKey: 'sns', icon: '📱', permissionId: 'content' }, // Grouped with content
    { href: '/admin/settings', labelKey: 'settings', icon: '⚙️', permissionId: 'settings' },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();
    const locale = params.locale as string;
    const tSidebar = useTranslations('admin.sidebar');
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push(`/${locale}/admin-login`);
    };

    // Filter items based on user permissions
    const visibleItems = adminNavItems.filter(item => {
        if (!user) return false;
        if (user.role === 'ADMIN') return true; // Admin sees everything

        // Staff check
        if (user.role === 'STAFF') {
            const perms = user.permissions || [];
            return perms.includes(item.permissionId);
        }

        return false;
    });

    return (
        <aside className="w-64 bg-slate-900 border-r border-gray-800 hidden md:flex flex-col h-full fixed left-0 top-0 z-50 text-white">
            {/* Admin Header */}
            <Link href={`/${locale}/admin`} className="h-16 flex flex-col justify-center px-6 border-b border-gray-800 hover:bg-gray-800 transition-colors group">
                <span className="text-xl font-black tracking-tight group-hover:text-white transition-colors">AWA <span className="text-blue-500">ADMIN</span></span>
                <span className="text-[10px] text-gray-500 font-medium group-hover:text-blue-400 transition-colors flex items-center gap-1 uppercase tracking-wider">
                    <span>←</span> {tSidebar('backToDashboard')}
                </span>
            </Link>

            <div className="p-4 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="mb-6 px-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{tSidebar('menu')}</p>
                    <nav className="space-y-1">
                        {/* Users & Features Navigation */}
                        {visibleItems.map((item) => {
                            const href = `/${locale}${item.href.startsWith('/') ? item.href : '/' + item.href}`;
                            // Simple translation fallback if key missing (using labelKey as is)
                            const label = tSidebar.has(item.labelKey)
                                ? tSidebar(item.labelKey)
                                : item.labelKey.charAt(0).toUpperCase() + item.labelKey.slice(1);

                            return (
                                <Link key={item.href} href={href}>
                                    <span className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                        pathname === href
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    )}>
                                        <span className="text-lg">{item.icon}</span>
                                        {label}
                                    </span>
                                </Link>
                            );
                        })}

                        {/* Admin Only Section */}
                        {user?.role === 'ADMIN' && (
                            <>
                                <div className="my-4 border-t border-gray-800"></div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{tSidebar('administration')}</p>
                                <Link href={`/${locale}/admin/staff`}>
                                    <span className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                        pathname?.includes('/admin/staff')
                                            ? "bg-purple-600 text-white shadow-md shadow-purple-900/20"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    )}>
                                        <span className="text-lg">🛡️</span>
                                        {tSidebar('staffManagement')}
                                    </span>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>

            {/* Profile Section */}
            <div className="p-4 bg-slate-950 border-t border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                        {user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                            {user?.name || 'Admin User'}
                        </p>
                        <p className="text-xs text-gray-400 truncate capitalize">
                            {user?.role === 'ADMIN' ? tSidebar('administrator') : user?.role?.toLowerCase() || tSidebar('staff')}
                        </p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full justify-center text-gray-300 hover:text-white hover:bg-red-900/20 hover:border-red-800/50 border-gray-700 transition-colors"
                    onClick={handleLogout}
                    title="Sign Out"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    <span>{tSidebar('signOut')}</span>
                </Button>
            </div>
        </aside>
    );
}
