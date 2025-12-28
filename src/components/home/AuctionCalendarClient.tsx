'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function AuctionCalendarClient() {
    const t = useTranslations('calendarPage');

    // Helper to generate some dummy dates for a calendar view
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[21px] text-[#86868B]">{t('subtitle')}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[1200px]">

                    {/* Featured Events */}
                    <div className="mb-20">
                        <h2 className="text-[32px] font-bold mb-8 text-[#1D1D1F]">{t('events.title')}</h2>
                        <div className="bg-[#F5F5F7] rounded-[20px] p-8 flex flex-col md:flex-row items-center gap-8 border border-[#D2D2D7]">
                            <div className="w-16 h-16 bg-[#1D1D1F] rounded-full flex items-center justify-center text-white text-2xl">
                                📅
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-[24px] font-bold text-[#1D1D1F] mb-1">{t('events.weekly')}</h3>
                                <p className="text-[#007AFF] font-medium mb-2">{t('events.time')}</p>
                                <p className="text-[#86868B]">{t('events.desc')}</p>
                            </div>
                            <div>
                                <Link href="/auctions" className="px-6 py-3 bg-[#1D1D1F] text-white rounded-full font-medium hover:bg-opacity-90 transition">
                                    View Auctions
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Special Events Grid */}
                    <div className="mb-20">
                        <h2 className="text-[32px] font-bold mb-8 text-[#1D1D1F]">{t('specialEvents.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8 hover:shadow-lg transition-shadow">
                                <div className="text-sm font-bold text-[#007AFF] mb-2 uppercase tracking-wide">{t('specialEvents.event1.date')}</div>
                                <h3 className="text-[24px] font-bold text-[#1D1D1F] mb-2">{t('specialEvents.event1.title')}</h3>
                                <p className="text-[#86868B]">{t('specialEvents.event1.desc')}</p>
                            </div>
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8 hover:shadow-lg transition-shadow">
                                <div className="text-sm font-bold text-[#007AFF] mb-2 uppercase tracking-wide">{t('specialEvents.event2.date')}</div>
                                <h3 className="text-[24px] font-bold text-[#1D1D1F] mb-2">{t('specialEvents.event2.title')}</h3>
                                <p className="text-[#86868B]">{t('specialEvents.event2.desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#F5F5F7] rounded-[30px] p-12 text-center max-w-[800px] mx-auto">
                        <h2 className="text-[32px] font-bold mb-4 text-[#1D1D1F]">{t('cta.title')}</h2>
                        <p className="text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                        <button className="bkb-btn-primary">
                            {t('cta.button')}
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
}
