import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'meta' });
    return {
        title: {
            template: `%s | ${t('admin')}`,
            default: t('admin'),
        },
    };
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="md:ml-64 min-h-screen flex flex-col">
                {/* Admin Top Bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
                    <h1 className="text-lg font-bold text-gray-700">AWA Admin</h1>
                    <div className="flex items-center gap-4">
                        {/* Language Switcher - Fixed to physical right side regardless of RTL */}
                        <div className="fixed top-4 z-[60] bg-white rounded-lg shadow-md" style={{ right: '1rem' }}>
                            <LanguageSwitcher />
                        </div>
                        <div className="h-6 w-px bg-gray-200 mx-1 hidden md:block"></div>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse hidden md:block"></span>
                        <span className="text-xs text-gray-500 font-mono hidden md:block">Online</span>
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
