
"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function KycPage() {
    const t = useTranslations('dashboard.kyc');
    const { user, isAuthenticated } = useAuth();
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            fetchDocuments();
        }
    }, [user]);

    const fetchDocuments = async () => {
        if (!user) return;
        try {
            const res = await fetch(`/api/user/kyc?userId=${user.id}`);
            const data = await res.json();
            if (data.success) {
                setDocuments(data.documents);
            }
        } catch (error) {
            console.error('Failed to fetch documents', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (!event.target.files || event.target.files.length === 0 || !user) return;

        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('userId', user.id);
        formData.append('type', type);
        formData.append('file', file);

        setUploading(true);
        setMessage('');

        try {
            const res = await fetch('/api/user/kyc', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                setMessage(t('successfullyUploaded', { type: t(`documents.${type}`) }));
                fetchDocuments();
            } else {
                setMessage(t('error', { message: data.error }));
            }
        } catch (error) {
            setMessage(t('uploadFailed'));
        } finally {
            setUploading(false);
        }
    };

    if (!isAuthenticated) return <div className="p-8">{t('pleaseLogin')}</div>;
    if (loading) return <div className="p-8">{t('loading')}</div>;

    const isCorporate = user?.memberType === 'CORPORATE';

    // Define required documents
    const requiredDocs = isCorporate
        ? [
            { id: 'COMPANY_REGISTRATION', required: true },
            { id: 'PASSPORT', required: true }, // Representative ID
            { id: 'POA', required: false }
        ]
        : [
            { id: 'PASSPORT', required: true },
            { id: 'UTILITY_BILL', required: true }
        ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-blue-600 font-medium">{t('accountType')}</p>
                        <p className="text-lg font-bold text-gray-900">{isCorporate ? t('corporate') : t('individual')}</p>
                    </div>
                    <Link href="/dashboard/settings" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                        {t('change')} →
                    </Link>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{t('status')}:
                        <span className={`ml-2 px-3 py-1 rounded-full text-sm ${documents.some(d => d.status === 'REJECTED') ? 'bg-red-100 text-red-800' :
                            documents.every(d => d.status === 'APPROVED') && documents.length > 0 ? 'bg-green-100 text-green-800' :
                                documents.length > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                            {documents.length === 0 ? t('notSubmitted') :
                                documents.some(d => d.status === 'REJECTED') ? t('rejected') :
                                    documents.every(d => d.status === 'APPROVED') ? t('verified') : t('pendingReview')}
                        </span>
                    </h2>
                </div>

                {message && (
                    <div className={`p-4 mb-4 rounded ${message.includes('Error') || message.includes('エラー') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                        {message}
                    </div>
                )}

                <div className="space-y-6">
                    {requiredDocs.map((doc) => {
                        const existingDoc = documents.find(d => d.type === doc.id);
                        return (
                            <div key={doc.id} className="border rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">{t(`documents.${doc.id}`)} {doc.required && <span className="text-red-500">{t('required')}</span>}</h3>
                                        {existingDoc && (
                                            <div className="mt-2 text-sm">
                                                <p className="text-gray-600">{t('submittedOn', { date: new Date(existingDoc.createdAt).toLocaleDateString() })}</p>
                                                <p className={`font-semibold ${existingDoc.status === 'APPROVED' ? 'text-green-600' :
                                                    existingDoc.status === 'REJECTED' ? 'text-red-600' : 'text-yellow-600'
                                                    }`}>
                                                    {t('docStatus', { status: existingDoc.status })}
                                                </p>
                                                {existingDoc.rejectionReason && (
                                                    <p className="text-red-600 mt-1">{t('reason', { reason: existingDoc.rejectionReason })}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {!existingDoc || existingDoc.status === 'REJECTED' ? (
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleUpload(e, doc.id)}
                                                    className="hidden"
                                                    id={`upload-${doc.id}`}
                                                    accept=".jpg,.jpeg,.png,.pdf"
                                                    disabled={uploading}
                                                />
                                                <label
                                                    htmlFor={`upload-${doc.id}`}
                                                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    {uploading ? t('uploading') : (existingDoc ? t('reUpload') : t('upload'))}
                                                </label>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 text-sm">{t('submitted')}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
