"use client";

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Lock } from 'lucide-react';

export function MemberExclusive() {
    return (
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50 mx-auto max-w-4xl mt-8">
            <CardContent className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                <div className="p-4 bg-gray-200 rounded-full">
                    <Lock className="w-8 h-8 text-gray-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Member Exclusive</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Please login to view this content.
                        <br />
                        <span className="text-sm">Members get access to auctions, campaign rewards, and more.</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="/login">
                        <Button className="bg-[#0F4C81] text-white hover:bg-[#0c3b66]">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="outline">
                            Create Account
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
