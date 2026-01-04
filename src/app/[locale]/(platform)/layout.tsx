import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Suspense } from 'react';

// In the future this might change to a dashboard layout
export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Suspense fallback={<div className="h-16 bg-white border-b" />}>
                <Header />
            </Suspense>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
