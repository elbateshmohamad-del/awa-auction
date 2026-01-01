import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
    variable: "--font-noto-sans-arabic",
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        template: '%s | AWA Auction',
        default: 'AWA Auction - Premium Japanese Motorcycle Auction',
    },
    description: 'Global access to premium Japanese used motorcycles. Real-time bidding, verified inspections, and seamless logistics.',
    keywords: ['motorcycle auction', 'japanese used bikes', 'kawasaki ninja', 'yamaha r1', 'export bikes'],
    authors: [{ name: 'AWA Platform' }],
    creator: 'AWA Platform',
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
    },
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
        title: 'AWA Auction - Premium Japanese Motorcycle Auction',
        description: 'Bid on thousands of inspected Japanese motorcycles. We handle logistics worldwide.',
        url: 'http://localhost:3000',
        siteName: 'AWA Auction',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AWA Auction',
        description: 'Premium Japanese Motorcycle Auction Platform',
        creator: '@awa_auction',
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

import { AuthProvider } from '@/context/AuthContext';

import { WatchlistProvider } from '@/context/WatchlistContext';
import { AuthSessionProvider } from '@/components/providers/SessionProvider';

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as 'ja' | 'en' | 'ar')) {
        notFound();
    }

    // Get messages for the locale
    const messages = await getMessages();

    // Determine text direction
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${inter.variable} ${notoSansJP.variable} ${notoSansArabic.variable} font-sans antialiased bg-white text-gray-900`}
            >
                <NextIntlClientProvider messages={messages}>
                    <AuthSessionProvider>
                        <AuthProvider>
                            <WatchlistProvider>
                                {children}
                            </WatchlistProvider>
                        </AuthProvider>
                    </AuthSessionProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
