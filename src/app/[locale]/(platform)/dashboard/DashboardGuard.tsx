'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useEffect } from 'react';

export default function DashboardGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLoading, isAuthenticated, router, pathname]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#F5F5F7]">
                <div className="relative">
                    {/* Spinner Ring */}
                    <div className="w-16 h-16 border-4 border-[#0F4C81]/20 border-t-[#0F4C81] rounded-full animate-spin"></div>
                    {/* Center Logo/Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#0F4C81] animate-pulse">AWA</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect
    }

    return <>{children}</>;
}
