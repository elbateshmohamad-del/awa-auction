"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, AlertCircle, Youtube, Instagram, Twitter, Lock } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

interface Bike {
    id: string;
    name: string;
    bid: string;
    img: string;
}

export default function SnsCampaignPage() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        platform: 'YouTube',
        bikeId: '',
        postUrl: ''
    });
    const [updateFormData, setUpdateFormData] = useState({
        submissionId: '',
        currentViews: '',
        currentLikes: '',
        currentComments: ''
    });

    // Dynamic data state instead of hardcoded
    const [purchasedBikes, setPurchasedBikes] = useState<Bike[]>([]);
    const [isLoadingBikes, setIsLoadingBikes] = useState(false);

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [activeTab, setActiveTab] = useState<'new' | 'update'>('new');
    const bikeScrollRef = useRef<HTMLDivElement>(null);

    // Fetch user bikes on mount (if authenticated)
    useEffect(() => {
        if (isAuthenticated) {
            setIsLoadingBikes(true);
            fetch('/api/user/bikes')
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setPurchasedBikes(data.bikes);
                    }
                })
                .catch(err => console.error(err))
                .finally(() => setIsLoadingBikes(false));
        }
    }, [isAuthenticated]);

    // Horizontal scroll on mouse wheel
    useEffect(() => {
        const el = bikeScrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            el.scrollBy({
                left: e.deltaY * 2,
                behavior: 'auto'
            });
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, [status, isAuthenticated]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        try {
            const res = await fetch('/api/sns', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Submission failed');
            }

            setStatus('success');
            setFormData({ ...formData, postUrl: '' }); // Reset URL only
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    };

    if (isLoading) {
        return <div className="min-h-screen pt-32 text-center">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto pt-32 pb-12 px-4 space-y-12">
            {/* HERO SECTION */}
            <div className="text-center space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-violet-500 text-white border-0 px-4 py-1 text-sm">
                    Beta Campaign
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                    Post & Earn Rewards
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Share your AWA experience on social media and get up to <span className="font-bold text-[#0F4C81]">100% OFF</span> your fees.
                    Your content fuels our community.
                </p>
            </div>

            {!isAuthenticated ? (
                /* GUEST VIEW - LOGIN PROMPT */
                <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
                    <CardContent className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                        <div className="p-4 bg-gray-200 rounded-full">
                            <Lock className="w-8 h-8 text-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900">Member Exclusive</h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                Please login to view eligible bikes and submit your campaign participation.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href={`/login?callbackUrl=${encodeURIComponent(pathname)}`}>
                                <Button className="bg-[#0F4C81] text-white hover:bg-[#0c3b66]">
                                    Log In
                                </Button>
                            </Link>
                            <Link href={`/register?callbackUrl=${encodeURIComponent(pathname)}`}>
                                <Button variant="outline">
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                /* AUTHENTICATED VIEW */
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* SUBMISSION FORM */}
                    <Card className="border-2 border-blue-50 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500" />
                        <CardHeader className="pb-2">
                            {/* TAB NAVIGATION */}
                            <div className="flex border-b border-gray-200 mb-4">
                                <button
                                    type="button"
                                    onClick={() => { setActiveTab('new'); setStatus('idle'); }}
                                    className={`flex-1 py-3 text-sm font-medium transition-all border-b-2 ${activeTab === 'new'
                                        ? 'border-[#0F4C81] text-[#0F4C81]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    📤 新規申請
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setActiveTab('update'); setStatus('idle'); }}
                                    className={`flex-1 py-3 text-sm font-medium transition-all border-b-2 ${activeTab === 'update'
                                        ? 'border-[#0F4C81] text-[#0F4C81]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    📊 1週間後の報告
                                </button>
                            </div>
                            <CardTitle>{activeTab === 'new' ? 'Submit Your Post' : 'Report Your Stats'}</CardTitle>
                            <CardDescription>
                                {activeTab === 'new'
                                    ? 'Enter your post details below to claim rewards.'
                                    : 'Update your views and likes after 1 week to receive your reward.'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {status === 'success' ? (
                                <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95">
                                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {activeTab === 'new' ? 'Submission Received!' : 'Stats Updated!'}
                                        </h3>
                                        <p className="text-gray-500">
                                            {activeTab === 'new'
                                                ? 'We will notify you in 1 week to update your stats.'
                                                : 'Your reward will be calculated and applied shortly.'}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => setStatus('idle')}
                                        variant="outline"
                                    >
                                        {activeTab === 'new' ? 'Submit Another' : 'Update Another'}
                                    </Button>
                                </div>
                            ) : activeTab === 'new' ? (
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* BIKE SELECTION */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-700">Select Purchased Bike</label>

                                        {isLoadingBikes ? (
                                            <div className="p-8 text-center text-gray-400 text-sm bg-gray-50 rounded-xl">Loading your bikes...</div>
                                        ) : purchasedBikes.length === 0 ? (
                                            <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                                                <p className="text-gray-500 text-sm font-medium">No eligible bikes found.</p>
                                                <p className="text-xs text-gray-400 mt-1">Only bikes won within 30 days are displayed.</p>
                                            </div>
                                        ) : (
                                            <div
                                                ref={bikeScrollRef}
                                                className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x cursor-grab"
                                            >
                                                {purchasedBikes.map((bike) => (
                                                    <div
                                                        key={bike.id}
                                                        onClick={() => setFormData({ ...formData, bikeId: bike.id })}
                                                        className={`relative group cursor-pointer rounded-xl border-2 overflow-hidden transition-all text-left min-w-[280px] w-[280px] flex-shrink-0 snap-center ${formData.bikeId === bike.id
                                                            ? 'border-[#0F4C81] bg-blue-50 ring-2 ring-[#0F4C81] ring-opacity-20'
                                                            : 'border-gray-200 hover:border-blue-300 bg-white'
                                                            }`}
                                                    >
                                                        <div className="aspect-video bg-gray-100 relative">
                                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                                                                {/* Use bike img or placeholder */}
                                                                <img src={bike.img || "/placeholder-bike.jpg"} alt="Bike" className="w-full h-full object-cover" />
                                                            </div>
                                                        </div>
                                                        <div className="p-3">
                                                            <div className="font-bold text-gray-900 text-sm truncate">{bike.name}</div>
                                                            <div className="text-xs text-gray-500 font-mono mt-1">{bike.bid}</div>
                                                        </div>
                                                        {formData.bikeId === bike.id && (
                                                            <div className="absolute top-2 right-2 bg-[#0F4C81] text-white rounded-full p-1 shadow-md">
                                                                <CheckCircle2 size={14} />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {purchasedBikes.length > 0 && (
                                            <p className="text-xs text-gray-500">Only bikes purchased in the last 30 days are eligible.</p>
                                        )}
                                    </div>

                                    {/* PLATFORM */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Platform</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {['YouTube', 'Instagram', 'TikTok', 'X'].map((p) => (
                                                <button
                                                    key={p}
                                                    type="button"
                                                    disabled={purchasedBikes.length === 0}
                                                    onClick={() => setFormData({ ...formData, platform: p })}
                                                    className={`py-2 px-1 rounded-lg border text-xs font-medium transition-all ${formData.platform === p
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100'
                                                        : 'border-gray-200 hover:border-blue-200 text-gray-600'
                                                        } ${purchasedBikes.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* POST URL */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Post URL</label>
                                        <Input
                                            placeholder="https://..."
                                            value={formData.postUrl}
                                            onChange={(e) => setFormData({ ...formData, postUrl: e.target.value })}
                                            required
                                            disabled={purchasedBikes.length === 0}
                                        />
                                    </div>

                                    {/* CONFIRMATION CHECKLIST */}
                                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <h4 className="font-semibold text-sm text-gray-900">Confirmation</h4>
                                        <div className="space-y-2">
                                            <label className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" required className="mt-1" disabled={purchasedBikes.length === 0} />
                                                <span className="text-xs text-gray-600">I have included the tag <strong>#AWAauction</strong> in my post.</span>
                                            </label>
                                            <label className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" required className="mt-1" disabled={purchasedBikes.length === 0} />
                                                <span className="text-xs text-gray-600">The post is set to <strong>Public</strong> visibility.</span>
                                            </label>
                                            <label className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" required className="mt-1" disabled={purchasedBikes.length === 0} />
                                                <span className="text-xs text-gray-600">I understand I must update stats in <strong>1 week</strong>.</span>
                                            </label>
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {errorMsg}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#0F4C81] hover:bg-[#0c3b66] text-white"
                                        disabled={status === 'submitting' || purchasedBikes.length === 0}
                                    >
                                        {status === 'submitting' ? 'Submitting...' : 'Submit Post'}
                                    </Button>
                                </form>
                            ) : (
                                /* 1-WEEK UPDATE FORM */
                                <form onSubmit={(e) => { e.preventDefault(); setStatus('success'); }} className="space-y-6">
                                    {/* SELECT PAST SUBMISSION */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-700">過去の申請を選択</label>
                                        <select
                                            value={updateFormData.submissionId}
                                            onChange={(e) => setUpdateFormData({ ...updateFormData, submissionId: e.target.value })}
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                                            required
                                        >
                                            <option value="">-- 選択してください --</option>
                                            <option value="sub1">2024/12/01 - Kawasaki Ninja 400 (YouTube)</option>
                                            <option value="sub2">2024/12/05 - Yamaha YZF-R6 (Instagram)</option>
                                        </select>
                                        <p className="text-xs text-gray-500">1週間以上経過した申請のみ表示されます</p>
                                    </div>

                                    {/* CURRENT VIEWS */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">現在の再生回数</label>
                                        <Input
                                            type="number"
                                            placeholder="例: 15000"
                                            value={updateFormData.currentViews}
                                            onChange={(e) => setUpdateFormData({ ...updateFormData, currentViews: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* CURRENT LIKES */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">現在のいいね数</label>
                                        <Input
                                            type="number"
                                            placeholder="例: 500"
                                            value={updateFormData.currentLikes}
                                            onChange={(e) => setUpdateFormData({ ...updateFormData, currentLikes: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* CURRENT COMMENTS */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">現在のコメント数</label>
                                        <Input
                                            type="number"
                                            placeholder="例: 50"
                                            value={updateFormData.currentComments}
                                            onChange={(e) => setUpdateFormData({ ...updateFormData, currentComments: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {errorMsg}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? '送信中...' : '📊 報告を送信'}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    {/* RULES & INFO */}
                    <div className="space-y-6 text-sm text-gray-600">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg">💡 How it works</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Post a video/photo about your AWA bike.</li>
                                <li>Include your <strong>Member ID</strong> in the caption.</li>
                                <li>Submit the link on this page.</li>
                                <li>Get rewards based on Views & Likes!</li>
                            </ol>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg">💰 Reward Rates</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-red-100 rounded text-red-600"><Youtube size={16} /></div>
                                    <div>
                                        <p className="font-bold text-gray-900">YouTube Long Form</p>
                                        <p>1.0 JPY / View (Max 100k)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-pink-100 rounded text-pink-600"><Instagram size={16} /></div>
                                    <div>
                                        <p className="font-bold text-gray-900">Shorts / Reels / TikTok</p>
                                        <p>0.1 JPY / View (Max 30k)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-gray-100 rounded text-gray-900"><Twitter size={16} /></div>
                                    <div>
                                        <p className="font-bold text-gray-900">X (Twitter)</p>
                                        <p>Low view rate, High repost bonus</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 text-center">
                            *Rewards can be used for Shipping & Auction Fees. <br />
                            *Max usage limit: 20,000 JPY per vehicle.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
