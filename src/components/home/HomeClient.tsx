'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import YourTurnOverlay from './YourTurnOverlay';

export default function HomeClient() {
    const t = useTranslations();

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            <YourTurnOverlay />
            {/* Hero Section - Text Only (Full Screen) */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] py-12 md:py-20">
                <div className="bkb-container text-center max-w-[1100px] px-6">
                    <h1 className="text-[36px] md:text-[72px] lg:text-[80px] font-bold leading-[1.1] tracking-[-2px] mb-6 md:mb-8 text-[#1D1D1F] whitespace-normal md:whitespace-nowrap">
                        {t('home.hero.title')}
                    </h1>
                    <p className="text-[16px] md:text-[24px] lg:text-[28px] text-[#86868B] mb-8 md:mb-12 font-normal leading-relaxed whitespace-normal md:whitespace-nowrap">
                        {t('home.hero.subtitle')}
                    </p>
                    <div className="flex gap-4 md:gap-5 justify-center flex-col sm:flex-row w-full sm:w-auto">
                        <Link href="/auctions" className="bkb-btn-primary w-full sm:w-auto text-center justify-center">
                            {t('home.hero.enterAuction')}
                        </Link>
                        <a href="#about" className="bkb-btn-secondary w-full sm:w-auto text-center justify-center">
                            {t('home.hero.aboutAwa')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Hero Image Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
                <div className="bkb-container max-w-[1200px] py-10 md:py-20">
                    <img
                        src="/hero.png"
                        alt="Premium Japanese Motorcycles"
                        className="w-full rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                    />
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16 md:py-20">
                <div className="bkb-container">
                    <div className="bkb-section-header">
                        <h2>{t('home.about.title')}</h2>
                        <p className="bkb-subtitle">{t('home.about.subtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                        <div className="text-[16px] md:text-[19px] leading-[1.8] text-[#86868B]">
                            <p className="mb-6">
                                {t('home.about.description1')}
                            </p>
                            <p>
                                {t('home.about.description2')}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:flex md:flex-col gap-x-4 gap-y-6 md:gap-10">
                            <div className="border-s-[3px] border-[#007AFF] ps-4 md:ps-6">
                                <div className="text-3xl md:text-[48px] font-bold text-[#1D1D1F] mb-1 md:mb-2">5,000+</div>
                                <div className="text-[15px] md:text-[17px] text-[#86868B]">{t('home.about.bikesDelivered')}</div>
                            </div>
                            <div className="border-s-[3px] border-[#007AFF] ps-4 md:ps-6">
                                <div className="text-3xl md:text-[48px] font-bold text-[#1D1D1F] mb-1 md:mb-2">120+</div>
                                <div className="text-[15px] md:text-[17px] text-[#86868B]">{t('home.about.countries')}</div>
                            </div>
                            <div className="border-s-[3px] border-[#007AFF] ps-4 md:ps-6">
                                <div className="text-3xl md:text-[48px] font-bold text-[#1D1D1F] mb-1 md:mb-2">98%</div>
                                <div className="text-[15px] md:text-[17px] text-[#86868B]">{t('home.about.satisfactionRate')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-24 md:h-0 bg-[#FFFFFF]"></div>

            {/* How It Works Section */}
            <section id="how-it-works" className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-24 md:py-32">
                <div className="bkb-container">
                    <div className="bkb-section-header">
                        <h2>{t('home.howItWorks.title')}</h2>
                        <p className="bkb-subtitle">{t('home.howItWorks.subtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                        {/* Step 1 */}
                        <div className="text-center p-4 md:p-10 mb-12 md:mb-0 last:mb-0">
                            <div className="text-4xl md:text-[72px] font-bold text-[#007AFF] opacity-60 mb-3 md:mb-5">01</div>
                            <h3 className="text-xl md:text-[24px] font-bold mb-3 md:mb-4 text-[#1D1D1F]">{t('home.howItWorks.step1Title')}</h3>
                            <p className="text-[15px] md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.howItWorks.step1Desc')}
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="text-center p-4 md:p-10 mb-12 md:mb-0 last:mb-0">
                            <div className="text-4xl md:text-[72px] font-bold text-[#007AFF] opacity-60 mb-3 md:mb-5">02</div>
                            <h3 className="text-xl md:text-[24px] font-bold mb-3 md:mb-4 text-[#1D1D1F]">{t('home.howItWorks.step2Title')}</h3>
                            <p className="text-[15px] md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.howItWorks.step2Desc')}
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="text-center p-5 md:p-10">
                            <div className="text-5xl md:text-[72px] font-bold text-[#007AFF] opacity-60 mb-5">03</div>
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.howItWorks.step3Title')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.howItWorks.step3Desc')}
                            </p>
                        </div>
                        {/* Step 4 */}
                        <div className="text-center p-5 md:p-10">
                            <div className="text-5xl md:text-[72px] font-bold text-[#007AFF] opacity-60 mb-5">04</div>
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.howItWorks.step4Title')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.howItWorks.step4Desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-24 md:h-0 bg-[#FFFFFF]"></div>

            {/* Features Section */}
            <section id="features" className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-24 md:py-32">
                <div className="bkb-container">
                    <div className="bkb-section-header">
                        <h2>{t('home.features.title')}</h2>
                        <p className="bkb-subtitle">{t('home.features.subtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                        {/* Feature 1 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/quality.png" alt="Quality" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.qualityTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.qualityDesc')}
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/shipping.png" alt="Shipping" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.shippingTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.shippingDesc')}
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/pricing.png" alt="Pricing" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.pricingTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.pricingDesc')}
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/payment.png" alt="Payment" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.paymentTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.paymentDesc')}
                            </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/bidding.png" alt="Bidding" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.biddingTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.biddingDesc')}
                            </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="p-8 md:p-10 bg-white border border-[#D2D2D7] rounded-[20px] transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#007AFF]">
                            <img src="/icons/support.png" alt="Support" className="w-16 h-16 mb-6 object-contain" />
                            <h3 className="text-2xl md:text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('home.features.supportTitle')}</h3>
                            <p className="text-base md:text-[17px] text-[#86868B] leading-[1.7]">
                                {t('home.features.supportDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#1D1D1F] text-center">
                <div className="bkb-container py-10 md:py-20">
                    <h2 className="text-4xl md:text-[72px] font-bold text-white mb-8 tracking-[-2px]">{t('home.cta.title')}</h2>
                    <p className="text-lg md:text-[28px] text-[#86868B] mb-12">{t('home.cta.subtitle')}</p>
                    <Link href="/register" className="bkb-btn-primary-large w-full md:w-auto text-center justify-center">
                        {t('home.cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
}

