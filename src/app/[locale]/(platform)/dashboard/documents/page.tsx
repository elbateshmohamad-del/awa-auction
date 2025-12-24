"use client";

import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useTranslations } from 'next-intl';

export default function DocumentsPage() {
    const t = useTranslations();

    const documents = [
        { name: 'Invoice #2024-001', type: 'PDF', date: '2024-12-01', size: '245 KB' },
        { name: 'Export Certificate', type: 'PDF', date: '2024-11-28', size: '1.2 MB' },
        { name: 'Bill of Lading', type: 'PDF', date: '2024-11-25', size: '890 KB' },
        { name: 'Insurance Certificate', type: 'PDF', date: '2024-11-20', size: '156 KB' },
    ];

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.documents') || 'Documents'}</h1>
                <p className="text-gray-500">{t('dashboard.documentsDesc') || 'View and download your documents'}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('dashboard.allDocuments') || 'All Documents'}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                                        <span className="text-red-600 text-sm font-bold">PDF</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{doc.name}</p>
                                        <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                                    </div>
                                </div>
                                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                    {t('common.download') || 'Download'}
                                </button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
