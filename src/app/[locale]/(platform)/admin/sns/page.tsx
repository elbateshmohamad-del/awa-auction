"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

// --- Type Definitions ---
type SubmissionStatus = 'Pending' | 'Approved' | 'Rejected';

interface SnsSubmission {
    id: number;
    user?: string; // Optional if not in DB, logic might need adjustment if DB doesn't have user name
    userId: string;
    platform: string;
    postUrl: string;
    submittedAt: string;
    status: SubmissionStatus;
    verifiedViews?: number;
    verifiedLikes?: number;
    verifiedComments?: number;
    verifiedShares?: number;
    rewardGranted?: string;
}

// MOCK DATA
const initialSubmissions: SnsSubmission[] = [
    { id: 1, userId: 'AWA-8888', user: 'Taro Yamada', platform: 'YouTube', postUrl: 'https://youtube.com/watch?v=demo1', status: 'Pending', submittedAt: '2025/12/20' },
    { id: 2, userId: 'AWA-5555', user: 'Hanako Suzuki', platform: 'Instagram', postUrl: 'https://instagram.com/p/demo2', status: 'Approved', verifiedViews: 500, verifiedLikes: 100, verifiedComments: 10, rewardGranted: '¥1,500 Points', submittedAt: '2025/12/19' },
];

export default function AdminSnsPage() {
    const t = useTranslations('admin.snsPage');
    const tCommon = useTranslations('admin.common');

    const [submissions, setSubmissions] = useState<SnsSubmission[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Form inputs
    const [inputMetrics, setInputMetrics] = useState({ views: 0, likes: 0, comments: 0, shares: 0 });

    const selectedSubmission = submissions.find(s => s.id === selectedId);

    // MOCK DATA FETCH FOR DEMO
    useEffect(() => {
        // fetchSubmissions(); 
        setSubmissions(initialSubmissions); // Use the mock data defined at top of file
        setIsLoading(false);
    }, []);

    const handleSelect = (sub: SnsSubmission) => {
        setSelectedId(sub.id);
        // Pre-fill if already verified
        setInputMetrics({
            views: sub.verifiedViews || 0,
            likes: sub.verifiedLikes || 0,
            comments: sub.verifiedComments || 0,
            shares: sub.verifiedShares || 0
        });
    };

    const calculateReward = (views: number, likes: number, comments: number, shares: number, platform: string) => {
        let amount = 0;
        let cap = 30000;

        // Platform specific multipliers
        // YouTube Long (How to detect? Assume 'YouTube' default is Long for now, or need subtype. Detailed logic omitted for simplicity unless requested)
        // Let's assume 'YouTube' = Long, others = Short logic for now as per simple requirement, or check URL?
        // Requirement said: A. YouTube (Long), B. Shorts/IG/TikTok (Short).
        // Since we only capture 'platform' string, we might need manual toggle for 'Long Form'.
        // For MVP, I will assume YouTube is Long Form (1.0 yen) and others are Short (0.1 yen). 
        // If needed I can add a checkbox "Is Long Form?".

        if (platform === 'YouTube') {
            cap = 100000;
            amount = (views * 1.0) + (likes * 10) + (comments * 50);
        } else if (platform === 'X') {
            cap = 30000;
            amount = (views * 0.05) + (likes * 1.0) + (comments * 5) + (shares * 10);
        } else if (platform === 'Instagram') {
            // Static vs Reels distinction? Assume Static for 'Instagram' key? 
            // Requirement C: Instagram (Static) Likes*5.
            // Requirement B: Shorts/Reels.
            // Let's assume 'Instagram' = Static for now since TikTok covers video heavy? 
            // Actually, I'll default to the "Shorts/Standard" logic for TikTok, and special logic for X/YT.
            // Instagram: Likes * 5 (Static)
            cap = 30000;
            amount = (likes * 5) + (comments * 10); // Views ignored for static? Or low weight?
        } else {
            // TikTok, etc (Shorts)
            cap = 30000;
            amount = (views * 0.1) + (likes * 1.0) + (comments * 5);
        }

        if (amount > cap) amount = cap;

        // Tier Logic (Alternative)
        // Tier 1: Fee 100% OFF (High Engagement) -> How do we define 'High'? 
        // For now, return Performance Point value.
        return `¥${amount.toLocaleString()} Points`;
    };

    const handleApprove = async () => {
        if (!selectedSubmission) return;

        const reward = calculateReward(inputMetrics.views, inputMetrics.likes, inputMetrics.comments, inputMetrics.shares, selectedSubmission.platform);

        if (!confirm(`Grant Reward: ${reward}? (Demo Mode)`)) return;

        // DEMO: Update local state directly
        setSubmissions(prev => prev.map(s => s.id === selectedSubmission.id ? {
            ...s,
            status: 'Approved',
            verifiedViews: inputMetrics.views,
            verifiedLikes: inputMetrics.likes,
            verifiedComments: inputMetrics.comments,
            verifiedShares: inputMetrics.shares,
            rewardGranted: reward
        } : s));
        setSelectedId(null);
    };

    const handleReject = async () => {
        if (!selectedSubmission) return;
        if (!confirm('Reject submission? (Demo Mode)')) return;

        // DEMO: Update local state directly
        setSubmissions(prev => prev.map(s => s.id === selectedSubmission.id ? {
            ...s,
            status: 'Rejected',
            rewardGranted: 'Rejected'
        } : s));
        setSelectedId(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* LIST */}
                <Card className="lg:col-span-2 min-h-[500px]">
                    <CardHeader>
                        <CardTitle>{t('submissionQueue')}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        {isLoading ? <div className="p-6">{tCommon('loading')}</div> : (
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500">
                                    <tr>
                                        <th className="px-6 py-3 text-left">{t('table.userId')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.platform')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.date')}</th>
                                        <th className="px-6 py-3 text-left">{t('table.status')}</th>
                                        <th className="px-6 py-3 text-right">{t('table.result')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {submissions.length === 0 && (
                                        <tr><td colSpan={5} className="p-6 text-center text-gray-400">{tCommon('noData')}</td></tr>
                                    )}
                                    {submissions.map((sub) => (
                                        <tr key={sub.id}
                                            className={`hover:bg-blue-50/50 cursor-pointer ${selectedId === sub.id ? 'bg-blue-50 border-l-4 border-[#0F4C81]' : ''}`}
                                            onClick={() => handleSelect(sub)}
                                        >
                                            <td className="px-6 py-3">
                                                <p className="font-bold text-gray-900">{sub.user}</p>
                                            </td>
                                            <td className="px-6 py-3"><Badge variant="secondary">{sub.platform}</Badge></td>
                                            <td className="px-6 py-3 text-gray-500">{sub.submittedAt}</td>
                                            <td className="px-6 py-3"><Badge variant={sub.status === 'Approved' ? 'success' : sub.status === 'Pending' ? 'warning' : 'secondary'}>{sub.status === 'Pending' ? t('status.pending') : sub.status === 'Approved' ? t('status.approved') : t('status.rejected')}</Badge></td>
                                            <td className="px-6 py-3 text-right font-bold text-[#0F4C81]">{sub.rewardGranted || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </CardContent>
                </Card>

                {/* REVIEW */}
                <Card className="h-fit sticky top-6 border-2 border-blue-100 shadow-md">
                    <CardHeader className="bg-gray-50/50 pb-4 border-b border-gray-100">
                        <CardTitle>{t('reviewVerify')}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        {!selectedSubmission ? (
                            <div className="text-center text-gray-400 py-10">{t('selectSubmission')}</div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                                    <div className="text-xl font-mono font-black text-center bg-white py-2 rounded border border-yellow-200 select-all">
                                        #{selectedSubmission.userId}
                                    </div>
                                    <Button variant="outline" className="w-full mt-2" onClick={() => window.open(selectedSubmission.postUrl, '_blank')}>
                                        {t('openPostLink')}
                                    </Button>
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                    <div>
                                        <label className="text-xs font-bold block mb-1">{t('views')}</label>
                                        <Input type="number" value={inputMetrics.views} onChange={e => setInputMetrics({ ...inputMetrics, views: Number(e.target.value) })} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold block mb-1">{t('likes')}</label>
                                        <Input type="number" value={inputMetrics.likes} onChange={e => setInputMetrics({ ...inputMetrics, likes: Number(e.target.value) })} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold block mb-1">{t('comments')}</label>
                                        <Input type="number" value={inputMetrics.comments} onChange={e => setInputMetrics({ ...inputMetrics, comments: Number(e.target.value) })} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold block mb-1">{t('shares')}</label>
                                        <Input type="number" value={inputMetrics.shares} onChange={e => setInputMetrics({ ...inputMetrics, shares: Number(e.target.value) })} />
                                    </div>
                                </div>

                                {selectedSubmission.status === 'Pending' && (
                                    <div className="pt-4 space-y-3">
                                        <div className="bg-gray-100 p-3 rounded text-center">
                                            <span className="text-xs text-gray-500 block">{t('calculatedReward')}</span>
                                            <span className="font-bold text-[#0F4C81]">
                                                {calculateReward(inputMetrics.views, inputMetrics.likes, inputMetrics.comments, inputMetrics.shares, selectedSubmission.platform)}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="secondary" onClick={handleReject} className="flex-1">{tCommon('reject')}</Button>
                                            <Button variant="primary" onClick={handleApprove} className="flex-[2]">{tCommon('approve')}</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
