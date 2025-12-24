"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const kycQueue = [
    { id: 1, user: 'Michael Wong', type: 'Individual', subDate: '2025-04-10', docs: ['Passport.pdf', 'ProofOfAddress.jpg'] },
    { id: 2, user: 'Global Motors Inc.', type: 'Corporate', subDate: '2025-04-11', docs: ['BusinessLicense.pdf', 'DirectorID.pdf'] },
    { id: 3, user: 'Elena Costa', type: 'Individual', subDate: '2025-04-12', docs: ['ID_Front.jpg', 'ID_Back.jpg', 'UtilityBill.pdf'] },
];

export default function AdminKycPage() {
    const [selectedRequest, setSelectedRequest] = useState<number | null>(null);

    const currentRequest = kycQueue.find(r => r.id === selectedRequest) || kycQueue[0];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">KYC Review</h1>
                    <p className="text-sm text-gray-500">Verify user identities and business documents.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Review Queue List */}
                <div className="space-y-4">
                    <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">Pending Review ({kycQueue.length})</h3>
                    {kycQueue.map((req) => (
                        <Card
                            key={req.id}
                            className={`cursor-pointer transition-all ${selectedRequest === req.id || (!selectedRequest && req.id === 1) ? 'ring-2 ring-blue-500 shadow-md' : 'hover:bg-gray-50'}`}
                            onClick={() => setSelectedRequest(req.id)}
                        >
                            <CardContent className="p-4">
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold text-gray-900">{req.user}</span>
                                    <span className="text-xs font-mono text-gray-400">{req.subDate}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded">{req.type}</span>
                                    <span>{req.docs.length} documents</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Document Preview & Actions */}
                <div className="lg:col-span-2">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="border-b border-gray-100 pb-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>{currentRequest.user}</CardTitle>
                                    <p className="text-sm text-gray-500 mt-1">Applicant Type: {currentRequest.type}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="danger" size="sm">Reject</Button>
                                    <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700 border-none">Approve</Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 bg-gray-50/50">
                            <h4 className="font-bold text-sm text-gray-900 mb-4">Submitted Documents</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {currentRequest.docs.map((doc, i) => (
                                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-3 aspect-[4/3] group cursor-pointer hover:border-blue-500 transition-colors">
                                        <div className="text-4xl">📄</div>
                                        <span className="text-sm text-gray-600 font-medium truncate w-full text-center px-2">{doc}</span>
                                        <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">Click to preview</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Internal Notes</label>
                                <textarea className="w-full rounded-md border-gray-300 shadow-sm text-sm" placeholder="Add notes about this verification..."></textarea>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
