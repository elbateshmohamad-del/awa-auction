"use client";

import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';

export default function GettingStartedPage() {
    const t = useTranslations();

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">{t('help.gettingStarted')}</h1>
                <p className="text-xl text-neutral-600">{t('guide.howToBuy.description')}</p>
            </div>

            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex md:flex-row flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 1</div>
                        <h2 className="text-2xl font-bold mb-3">{t('auth.register.title')}</h2>
                        <p className="text-neutral-600 mb-4">
                            {t('kyc.subtitle')}
                        </p>
                        <Link href="/register">
                            <Button>{t('header.auth.signUp')}</Button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        📝
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex md:flex-row-reverse flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 2</div>
                        <h2 className="text-2xl font-bold mb-3">{t('common.search')}</h2>
                        <p className="text-neutral-600 mb-4">
                            {t('auctions.subtitle')}
                        </p>
                        <Link href="/auctions">
                            <Button variant="secondary">{t('common.auctions')}</Button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🔍
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex md:flex-row flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 3</div>
                        <h2 className="text-2xl font-bold mb-3">{t('auctions.placeBid')}</h2>
                        <p className="text-neutral-600 mb-4">
                            {t('guide.howToBid.description')}
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🔨
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex md:flex-row-reverse flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 4</div>
                        <h2 className="text-2xl font-bold mb-3">{t('checkout.title')} & {t('services.shipping.title')}</h2>
                        <p className="text-neutral-600 mb-4">
                            {t('services.shipping.description')}
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🚢
                    </div>
                </div>
            </div>
        </div>
    );
}
