import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="md:ml-64 min-h-screen flex flex-col">
                {/* Admin Top Bar (Can be separate component if needed) */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
                    <h1 className="text-lg font-bold text-gray-700">AWA Admin</h1>
                    <div className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-gray-500 font-mono">Online</span>
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-8 pt-16">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
