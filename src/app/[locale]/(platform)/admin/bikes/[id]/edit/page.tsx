"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface Bike {
    id: string;
    bdsId: string;
    name: string;
    vin: string;
    auctionNumber: string;
    status: string;
    awaGrade: string;
    startPrice: number;
    videoUrls?: string[];
    inspectionDetails: {
        engine: Record<string, string>;
        frontSuspension: Record<string, string>;
        exterior: Record<string, string>;
        rearSuspension: Record<string, string>;
        electrical: Record<string, string>;
        frame: Record<string, string>;
    };
    // Helper fields for editing images as comma-separated strings
    engineImages?: string;
    frontImages?: string;
    exteriorImages?: string;
    rearImages?: string;
    electricalImages?: string;
    frameImages?: string;
}

export default function AdminBikeEditPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const locale = params.locale as string;

    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<Bike>>({
        name: "",
        vin: "",
        auctionNumber: "",
        status: "active",
        awaGrade: "A",
        videoUrls: ["", ""], // Placeholder for left/right
        engineImages: "",
        frontImages: "",
        exteriorImages: "",
        rearImages: "",
        electricalImages: "",
        frameImages: "",
    });

    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBike() {
            try {
                const response = await fetch(`/api/bikes/${id}`);
                const data = await response.json();
                if (data.success) {
                    const bike = data.data;
                    // Provide defaults for editing convenience
                    setFormData({
                        ...bike,
                        videoUrls: [
                            bike.videoUrls?.[0] || "",
                            bike.videoUrls?.[1] || ""
                        ],
                        // Flatten inspection images if they were stored (not currently in main schema but useful for UI)
                        // For now we just keep these fields available for input even if not mapped perfectly to backend yet
                    });
                } else {
                    setError(data.error || 'Bike not found');
                }
            } catch (err) {
                setError('Failed to load bike data');
            } finally {
                setLoading(false);
            }
        }
        fetchBike();
    }, [id]);

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleVideoChange = (index: number, value: string) => {
        setFormData(prev => {
            const newUrls = [...(prev.videoUrls || ["", ""])];
            newUrls[index] = value;
            return { ...prev, videoUrls: newUrls };
        });
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            // Use API to update bike
            const res = await fetch(`/api/bikes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setSaveSuccess(true);
                setTimeout(() => {
                    setSaveSuccess(false);
                    // Redirect back to detail page
                    router.push(`/${locale}/admin/bikes/${id}`);
                }, 1500);
            } else {
                alert('Update failed: ' + (data.error || 'Unknown error'));
            }
        } catch (e) {
            console.error(e);
            alert('Failed to save changes');
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading bike details...</div>;
    if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href={`/${locale}/admin/bikes/${id}`} className="text-gray-400 hover:text-gray-600">
                            ← Back to Detail
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Edit Bike Listing</h1>
                    <p className="text-sm text-gray-500 font-mono mt-1">ID: {id}</p>
                </div>
                <div className="flex gap-2">
                    <Link href={`/${locale}/admin/bikes/${id}`}>
                        <Button variant="secondary">Cancel</Button>
                    </Link>
                    <Button
                        variant="primary"
                        onClick={handleSave}
                        disabled={isSaving}
                    >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            {/* Success Message */}
            {saveSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    ✓ Changes saved successfully!
                </div>
            )}

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Basic Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            label="Bike Name"
                            value={formData.name || ''}
                            onChange={(e) => handleChange('name', e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="VIN / Frame No."
                                value={formData.vin || ''}
                                onChange={(e) => handleChange('vin', e.target.value)}
                            />
                            <Input
                                label="Auction Number"
                                value={formData.auctionNumber || ''}
                                onChange={(e) => handleChange('auctionNumber', e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => handleChange('status', e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="active">Active</option>
                                    <option value="sold">Sold</option>
                                    <option value="draft">Draft</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">AWA Grade</label>
                                <select
                                    value={formData.awaGrade}
                                    onChange={(e) => handleChange('awaGrade', e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="S">S - Premium</option>
                                    <option value="A">A - Excellent</option>
                                    <option value="B">B - Good</option>
                                    <option value="C">C - Fair</option>
                                    <option value="D">D - Poor</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Video URLs */}
                <Card>
                    <CardHeader>
                        <CardTitle>🎥 Engine Sound Videos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            label="Left Engine Sound URL"
                            value={formData.videoUrls?.[0] || ''}
                            onChange={(e) => handleVideoChange(0, e.target.value)}
                            hint="Direct link to MP4 video file"
                        />
                        <Input
                            label="Right Engine Sound URL"
                            value={formData.videoUrls?.[1] || ''}
                            onChange={(e) => handleVideoChange(1, e.target.value)}
                            hint="Direct link to MP4 video file"
                        />
                    </CardContent>
                </Card>

                {/* Inspection Images */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>📷 Inspection Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-500 mb-4">Enter image URLs separated by commas for each category.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Input
                                label="⚙️ Engine Images"
                                value={formData.engineImages || ''}
                                onChange={(e) => handleChange('engineImages', e.target.value)}
                            />
                            <Input
                                label="🔧 Front Suspension Images"
                                value={formData.frontImages || ''}
                                onChange={(e) => handleChange('frontImages', e.target.value)}
                            />
                            <Input
                                label="✨ Exterior Images"
                                value={formData.exteriorImages || ''}
                                onChange={(e) => handleChange('exteriorImages', e.target.value)}
                            />
                            <Input
                                label="⛓️ Rear Suspension Images"
                                value={formData.rearImages || ''}
                                onChange={(e) => handleChange('rearImages', e.target.value)}
                            />
                            <Input
                                label="⚡ Electrical Images"
                                value={formData.electricalImages || ''}
                                onChange={(e) => handleChange('electricalImages', e.target.value)}
                            />
                            <Input
                                label="🏗️ Frame Images"
                                value={formData.frameImages || ''}
                                onChange={(e) => handleChange('frameImages', e.target.value)}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
