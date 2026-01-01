"use client";

import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';

export default function GettingStartedClient() {
    const t = useTranslations();

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('help.gettingStarted')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B]">{t('guide.howToBuy.description')}</p>
                </div>
            </section>

            {/* Step 1 */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex md:flex-row flex-col gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg inline-block mb-4 text-lg">STEP 1</div>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6 leading-tight">{t('auth.register.title')}</h2>
                            <p className="text-[18px] md:text-[20px] text-[#86868B] mb-8 leading-relaxed">
                                {t('kyc.subtitle')}
                            </p>
                            <Link href="/register">
                                <Button className="text-lg px-8 py-4">{t('header.auth.signUp')}</Button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/step1-registration.png" alt="Registration" className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex md:flex-row-reverse flex-col gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg inline-block mb-4 text-lg">STEP 2</div>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6 leading-tight">{t('common.search')}</h2>
                            <p className="text-[18px] md:text-[20px] text-[#86868B] mb-8 leading-relaxed">
                                {t('auctions.subtitle')}
                            </p>
                            <Link href="/auctions">
                                <Button variant="secondary" className="text-lg px-8 py-4">{t('common.auctions')}</Button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/step2-search.png" alt="Search" className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3 */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex md:flex-row flex-col gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg inline-block mb-4 text-lg">STEP 3</div>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6 leading-tight">{t('auctions.placeBid')}</h2>
                            <p className="text-[18px] md:text-[20px] text-[#86868B] mb-8 leading-relaxed">
                                {t('guide.howToBid.description')}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/step3-bidding.png" alt="Bidding" className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 4 */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex md:flex-row-reverse flex-col gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg inline-block mb-4 text-lg">STEP 4</div>
                            <h2 className="text-[36px] md:text-[48px] font-bold mb-6 leading-tight">{t('checkout.title')} & {t('services.shipping.title')}</h2>
                            <p className="text-[18px] md:text-[20px] text-[#86868B] mb-8 leading-relaxed">
                                {t('services.shipping.description')}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/step4-shipping.png" alt="Shipping" className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
