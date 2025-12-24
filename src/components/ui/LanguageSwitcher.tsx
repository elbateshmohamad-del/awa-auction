'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

const languages = [
    { code: 'ja', shortCode: 'JP', name: '日本語' },
    { code: 'en', shortCode: 'EN', name: 'English' },
    { code: 'ar', shortCode: 'AR', name: 'العربية' },
] as const;

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode: string) => {
        router.replace(pathname, { locale: langCode as 'ja' | 'en' | 'ar' });
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700"
                aria-label="Select language"
            >
                <span className="font-bold">{currentLanguage.shortCode}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            <span><strong>{lang.shortCode}</strong> {lang.name}</span>
                            {locale === lang.code && (
                                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
