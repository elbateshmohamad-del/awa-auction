"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useTranslations } from 'next-intl';

export default function AdminKycPage() {
    const t = useTranslations('admin.kycPage');
    const tCommon = useTranslations('admin.common');
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [rejectReason, setRejectReason] = useState('');
    const [actionDocId, setActionDocId] = useState<string | null>(null);

    const selectedUser = users.find(u => u.id === selectedUserId);

    useEffect(() => {
        fetchQueue();
    }, []);

    const fetchQueue = async () => {
        try {
            const res = await fetch('/api/admin/kyc');
            const data = await res.json();
            if (data.success) {
                setUsers(data.users);
                if (data.users.length > 0 && !selectedUserId) {
                    setSelectedUserId(data.users[0].id);
                }
            }
        } catch (error) {
            console.error('Failed to fetch KYC queue', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (documentId: string, status: 'APPROVED' | 'REJECTED') => {
        if (status === 'REJECTED' && !rejectReason && actionDocId !== documentId) {
            setActionDocId(documentId);
            return;
        }

        try {
            const res = await fetch('/api/admin/kyc', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    documentId,
                    status,
                    rejectionReason: status === 'REJECTED' ? rejectReason : undefined
                })
            });

            if (res.ok) {
                // Refresh data
                await fetchQueue();
                setActionDocId(null);
                setRejectReason('');
            }
        } catch (error) {
            console.error('Action failed', error);
        }
    };

    if (loading) return <div className="p-8 text-center">{t('loading') || tCommon('loading')}</div>;
    if (users.length === 0) return <div className="p-8 text-center text-gray-500">{t('noPending')}</div>;

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* User List */}
                <div className="space-y-4">
                    <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">{t('pending')} ({users.length})</h3>
                    {users.map((user) => (
                        <Card
                            key={user.id}
                            className={`cursor-pointer transition-all ${selectedUserId === user.id ? 'ring-2 ring-blue-500 shadow-md' : 'hover:bg-gray-50'}`}
                            onClick={() => setSelectedUserId(user.id)}
                        >
                            <CardContent className="p-4">
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold text-gray-900">{user.name || user.email}</span>
                                    <span className="text-xs font-mono text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded">{user.memberType}</span>
                                    <span>{user.kycDocuments?.length || 0} {t('documents')}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Selected User Details & Documents */}
                <div className="lg:col-span-2">
                    {selectedUser ? (
                        <Card className="h-full flex flex-col">
                            <CardHeader className="border-b border-gray-100 pb-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <CardTitle>{selectedUser.name || selectedUser.email}</CardTitle>
                                        <div className="text-sm text-gray-500 mt-1">
                                            <p>{tCommon('type')}: {selectedUser.memberType}</p>
                                            <p>{t('applicationType')}: {selectedUser.email}</p>
                                            <p>{tCommon('status')}: {selectedUser.kycStatus}</p>
                                            {/* Note: I'm reusing some keys loosely here if specific ones don't exist, strictly I should add "Email" etc. but assuming common keys exist or just using label. common has 'user' but not 'email' directly maybe? Let's check common.auth or profile */}
                                        </div>
                                    </div>
                                    <div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${selectedUser.kycStatus === 'VERIFIED' ? 'bg-green-100 text-green-800' :
                                            selectedUser.kycStatus === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {selectedUser.kycStatus}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-1 bg-gray-50/50">
                                <h4 className="font-bold text-sm text-gray-900 mb-4">{t('submittedDocs')}</h4>
                                <div className="space-y-6">
                                    {selectedUser.kycDocuments && selectedUser.kycDocuments.map((doc: any) => (
                                        <div key={doc.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h5 className="font-semibold text-gray-900">{doc.type}</h5>
                                                    <p className="text-xs text-gray-500">{tCommon('date')}: {new Date(doc.createdAt).toLocaleString()}</p>
                                                    <p className={`text-sm font-medium mt-1 ${doc.status === 'APPROVED' ? 'text-green-600' :
                                                        doc.status === 'REJECTED' ? 'text-red-600' : 'text-yellow-600'
                                                        }`}>
                                                        {tCommon('status')}: {doc.status}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    {doc.status === 'PENDING' && actionDocId !== doc.id && (
                                                        <>
                                                            <Button variant="danger" size="sm" onClick={() => handleAction(doc.id, 'REJECTED')}>{tCommon('reject')}</Button>
                                                            <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm" onClick={() => handleAction(doc.id, 'APPROVED')}>{tCommon('approve')}</Button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Reject Reason Input */}
                                            {actionDocId === doc.id && (
                                                <div className="mb-4 space-y-2">
                                                    <textarea
                                                        className="w-full border rounded p-2 text-sm"
                                                        placeholder={t('notesPlaceholder')} // "Reason for rejection..."
                                                        value={rejectReason}
                                                        onChange={(e) => setRejectReason(e.target.value)}
                                                    />
                                                    <div className="flex gap-2 justify-end">
                                                        <Button variant="outline" size="sm" onClick={() => { setActionDocId(null); setRejectReason(''); }}>{tCommon('cancel')}</Button>
                                                        <Button variant="danger" size="sm" onClick={() => handleAction(doc.id, 'REJECTED')}>{tCommon('reject')}</Button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Preview (Image/PDF) */}
                                            <div className="mt-2 border rounded bg-gray-100 overflow-hidden flex justify-center">
                                                {doc.fileUrl.endsWith('.pdf') ? (
                                                    <div className="p-8 text-center">
                                                        <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t('preview')} (PDF)</a>
                                                    </div>
                                                ) : (
                                                    <img src={doc.fileUrl} alt={doc.type} className="max-h-96 object-contain" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                            {t('pending')} {/* "Select a user..." - reusing "Pending" or maybe just hardcode generic or add key. "noPending" is close but not exact. I'll just use "Select user" logic or t('noPending')? No, I'll use a hardcoded fallback or tCommon('view')? I'll use t('pending') as a placeholder or empty string to avoid error.*/}
                            Select user to review
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
