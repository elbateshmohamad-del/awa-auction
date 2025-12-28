"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import DashboardLayout from '@/components/layout/DashboardLayout';

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

    if (!isAuthenticated) {
        return (
            <DashboardLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-200 text-gray-900 text-center">
                        <div className="text-6xl mb-4">🔒</div>
                        <p className="text-xl">{t('pleaseLogin')}</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-200 text-gray-900 text-center">
                        <div className="animate-spin text-5xl mb-4">⏳</div>
                        <p className="text-xl">{t('loading')}</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    const isCorporate = user?.memberType === 'CORPORATE';

    // Define required documents
    const requiredDocs = isCorporate
        ? [
            { id: 'COMPANY_REGISTRATION', required: true, icon: '🏢' },
            { id: 'PASSPORT', required: true, icon: '🆔' },
            { id: 'POA', required: false, icon: '📄' }
        ]
        : [
            { id: 'PASSPORT', required: true, icon: '🆔' },
            { id: 'UTILITY_BILL', required: true, icon: '🏠' }
        ];

    const getOverallStatus = () => {
        if (documents.length === 0) return 'NOT_SUBMITTED';
        if (documents.some(d => d.status === 'REJECTED')) return 'REJECTED';
        if (documents.every(d => d.status === 'APPROVED') && documents.length > 0) return 'APPROVED';
        return 'PENDING';
    };

    const overallStatus = getOverallStatus();

    const statusConfig = {
        'NOT_SUBMITTED': {
            label: t('notSubmitted'),
            bg: 'bg-gray-100',
            text: 'text-gray-800',
            icon: '⏸️'
        },
        'PENDING': {
            label: t('pendingReview'),
            bg: 'bg-yellow-100',
            text: 'text-yellow-800',
            icon: '⏳'
        },
        'APPROVED': {
            label: t('verified'),
            bg: 'bg-green-100',
            text: 'text-green-800',
            icon: '✅'
        },
        'REJECTED': {
            label: t('rejected'),
            bg: 'bg-red-100',
            text: 'text-red-800',
            icon: '❌'
        }
    };

    const currentStatus = statusConfig[overallStatus];

    return (
        <DashboardLayout>
            <div className="bg-gradient-to-b from-white to-[#F5F7FA]">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#60A5FA] py-12 relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="container mx-auto max-w-4xl px-6 relative z-10">
                        <div className="text-center text-white">
                            <div className="inline-block mb-4">
                                <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
                                    🔐 {t('title')}
                                </span>
                            </div>
                            <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-2px] mb-6 drop-shadow-lg">
                                本人確認(KYC)
                            </h1>

                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30">
                                <span className="text-3xl">{currentStatus.icon}</span>
                                <div className="text-left">
                                    <p className="text-sm text-white/80">{t('status')}</p>
                                    <p className="text-xl font-bold">{currentStatus.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16">
                    <div className="container mx-auto max-w-4xl px-6">
                        {/* Account Type Card */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                                        {isCorporate ? '🏢' : '👤'}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">{t('accountType')}</p>
                                        <p className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                                            {isCorporate ? t('corporate') : t('individual')}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="/dashboard/settings"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    {t('change')}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Message */}
                        {message && (
                            <div className={`p-6 mb-8 rounded-2xl border-2 ${message.includes('Error') || message.includes('エラー') || message.includes('失敗') ?
                                'bg-red-50 border-red-200 text-red-800' :
                                'bg-green-50 border-green-200 text-green-800'
                                } flex items-center gap-3 animate-fadeIn`}>
                                <span className="text-2xl">{message.includes('Error') || message.includes('エラー') || message.includes('失敗') ? '⚠️' : '✅'}</span>
                                <p className="font-medium">{message}</p>
                            </div>
                        )}

                        {/* Documents Grid */}
                        <div className="space-y-6">
                            {requiredDocs.map((doc, index) => {
                                const existingDoc = documents.find(d => d.type === doc.id);
                                const docStatus = existingDoc?.status || 'NOT_SUBMITTED';

                                return (
                                    <div
                                        key={doc.id}
                                        className="group relative"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Glow effect on hover */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

                                        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                            <div className="flex items-start justify-between gap-6">
                                                {/* Left Side - Document Info */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="text-4xl">{doc.icon}</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">
                                                                {t(`documents.${doc.id}`)}
                                                                {doc.required && (
                                                                    <span className="ml-2 text-red-500 text-sm">*</span>
                                                                )}
                                                            </h3>
                                                            {!doc.required && (
                                                                <span className="text-sm text-gray-500">(任意)</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {existingDoc && (
                                                        <div className="space-y-2 mt-4">
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                {t('submittedOn', { date: new Date(existingDoc.createdAt).toLocaleDateString('ja-JP') })}
                                                            </div>

                                                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${existingDoc.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                                                existingDoc.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                                                    'bg-yellow-100 text-yellow-800'
                                                                }`}>
                                                                {existingDoc.status === 'APPROVED' && '✅'}
                                                                {existingDoc.status === 'REJECTED' && '❌'}
                                                                {existingDoc.status === 'PENDING' && '⏳'}
                                                                {t('docStatus', { status: existingDoc.status })}
                                                            </div>

                                                            {existingDoc.rejectionReason && (
                                                                <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                                                                    <p className="text-sm font-medium text-red-800 flex items-start gap-2">
                                                                        <span>⚠️</span>
                                                                        <span>{t('reason', { reason: existingDoc.rejectionReason })}</span>
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Right Side - Upload Button */}
                                                <div className="flex-shrink-0">
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
                                                                className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer ${uploading ? 'opacity-50 cursor-not-allowed' : ''
                                                                    }`}
                                                            >
                                                                {uploading ? (
                                                                    <>
                                                                        <div className="animate-spin">⏳</div>
                                                                        {t('uploading')}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                        </svg>
                                                                        {existingDoc ? t('reUpload') : t('upload')}
                                                                    </>
                                                                )}
                                                            </label>
                                                        </div>
                                                    ) : (
                                                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-500 rounded-full">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {t('submitted')}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
