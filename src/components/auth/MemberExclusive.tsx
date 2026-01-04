"use client";

import { Link } from '@/i18n/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function MemberExclusive() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations('common');

    // Create callbackUrl from current path and search params
    const getCallbackUrl = () => {
        const currentPath = pathname || '/';
        const queryString = searchParams.toString();
        return encodeURIComponent(queryString ? `${currentPath}?${queryString}` : currentPath);
    };

    const callbackUrl = getCallbackUrl();

    return (
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50 mx-auto max-w-4xl mt-8">
            <CardContent className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                <div className="p-4 bg-gray-200 rounded-full">
                    <Lock className="w-8 h-8 text-gray-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">
                        {t('memberExclusive') || 'Member Exclusive'}
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        {t('memberExclusiveDesc') || 'Please login to view this content.'}
                        <br />
                        <span className="text-sm">
                            {t('memberExclusiveBenefits') || 'Members get access to auctions, campaign rewards, and more.'}
                        </span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href={`/login?callbackUrl=${callbackUrl}`}>
                        <Button className="bg-[#0F4C81] text-white hover:bg-[#0c3b66]">
                            {t('login')}
                        </Button>
                    </Link>
                    <Link href={`/register?callbackUrl=${callbackUrl}`}>
                        <Button variant="outline">
                            {t('signUp')}
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
