'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export function LocaleSync() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Helper to get cookie
        const getCookie = (name: string) => {
            if (typeof document === 'undefined') return undefined;
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const savedLocale = getCookie('NEXT_LOCALE');

        // If cookie exists, is valid, and different from current locale
        // We force a switch. This handles the "Back Button" scenario where 
        // middleware is bypassed by bfcache.
        if (savedLocale &&
            savedLocale !== locale &&
            ['ja', 'en', 'ar'].includes(savedLocale)) {

            // Use replace to avoid adding another entry to history stack
            router.replace(pathname, { locale: savedLocale as 'ja' | 'en' | 'ar' });
        }
    }, [locale, pathname, router]);

    return null;
}
