import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock KYC Data
const kycData = {
    id: 'KYC-2024-0456',
    userId: 'U-9930',
    userName: 'Ahmed Al-Hassan',
    email: 'ahmed@example.com',
    country: 'UAE',
    submittedAt: '2025-12-10 14:30',
    status: 'Pending Review',
    type: 'Individual',
    documents: [
        { name: 'Passport', type: 'ID Document', status: 'Uploaded', file: 'passport_scan.pdf' },
        { name: 'Proof of Address', type: 'Utility Bill', status: 'Uploaded', file: 'utility_bill.pdf' },
        { name: 'Selfie with ID', type: 'Verification Photo', status: 'Uploaded', file: 'selfie.jpg' },
    ],
    personalInfo: {
        fullName: 'Ahmed Mohammed Al-Hassan',
        dateOfBirth: '1988-05-15',
        nationality: 'UAE',
        address: '123 Sheikh Zayed Road, Dubai, UAE',
        occupation: 'Business Owner',
        sourceOfFunds: 'Business Income',
    },
    riskLevel: 'Low',
    previousApplications: 0,
};

export default function AdminKycDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <Link href="/admin/kyc" className="text-gray-400 hover:text-gray-600 text-sm">
                        ← Back to KYC Applications
                    </Link>
                    <div className="flex items-center gap-3 mt-2">
                        <h1 className="text-2xl font-bold text-gray-900">{kycData.id}</h1>
                        <Badge variant="warning">{kycData.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">
                        Submitted by {kycData.userName} ({kycData.userId}) on {kycData.submittedAt}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="danger">Reject</Button>
                    <Button variant="primary">Approve</Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Documents */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Submitted Documents</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {kycData.documents.map((doc, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-2xl">
                                                {doc.file.endsWith('.pdf') ? '📄' : '🖼️'}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{doc.name}</p>
                                                <p className="text-sm text-gray-500">{doc.type}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="success">{doc.status}</Badge>
                                            <Button variant="secondary" size="sm">View</Button>
                                            <Button variant="ghost" size="sm">Download</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(kycData.personalInfo).map(([key, value]) => (
                                    <div key={key} className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500 capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </p>
                                        <p className="font-medium text-gray-900">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Review Notes */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Review Notes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <textarea
                                className="w-full h-32 p-3 border border-gray-200 rounded-lg text-sm resize-none focus:ring-[#0F4C81] focus:border-[#0F4C81]"
                                placeholder="Add notes about this KYC application..."
                            />
                            <div className="mt-3 flex justify-end">
                                <Button variant="secondary" size="sm">Save Notes</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Application Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Application Type</span>
                                <span className="font-medium">{kycData.type}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Country</span>
                                <span className="font-medium">{kycData.country}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Risk Level</span>
                                <Badge variant="success">{kycData.riskLevel}</Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Previous Applications</span>
                                <span className="font-medium">{kycData.previousApplications}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* User Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle>User Account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#0F4C81] flex items-center justify-center text-white font-bold">
                                    AH
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{kycData.userName}</p>
                                    <p className="text-xs text-gray-500">{kycData.email}</p>
                                </div>
                            </div>
                            <Button variant="secondary" size="sm" className="w-full">View User Profile</Button>
                        </CardContent>
                    </Card>

                    {/* Verification Checklist */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Verification Checklist</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[
                                    'ID document is valid and not expired',
                                    'Photo matches ID document',
                                    'Address proof is recent (< 3 months)',
                                    'No signs of document tampering',
                                    'User is not on sanctions list',
                                ].map((item, i) => (
                                    <label key={i} className="flex items-center gap-3 text-sm">
                                        <input type="checkbox" className="rounded text-[#0F4C81] focus:ring-[#0F4C81]" />
                                        <span className="text-gray-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardContent className="p-4 space-y-2">
                            <Button variant="secondary" className="w-full">Request More Info</Button>
                            <Button variant="secondary" className="w-full">Flag for Review</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
