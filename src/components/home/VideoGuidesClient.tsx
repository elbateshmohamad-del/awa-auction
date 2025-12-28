'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function VideoGuidesClient() {
    const t = useTranslations('videoGuidesPage');

    const guides = [
        {
            key: 'guide1',
            category: t('categories.gettingStarted'),
            duration: '3:45',
            color: 'bg-blue-100'
        },
        {
            key: 'guide2',
            category: t('categories.bidding'),
            duration: '5:12',
            color: 'bg-green-100'
        },
        {
            key: 'guide3',
            category: t('categories.bidding'),
            duration: '4:30',
            color: 'bg-yellow-100'
        },
        {
            key: 'guide4',
            category: t('categories.logistics'),
            duration: '6:05',
            color: 'bg-purple-100'
        }
    ];

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

                    {/* Intro */}
                    <div className="text-center mb-16">
                        <p className="text-[21px] text-[#86868B] max-w-[800px] mx-auto mb-10">
                            {t('intro')}
                        </p>

                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-4 mb-20">
                            <button className="px-6 py-2 rounded-full bg-[#1D1D1F] text-white font-medium">{t('categories.gettingStarted')}</button>
                            <button className="px-6 py-2 rounded-full border border-[#D2D2D7] text-[#1D1D1F] font-medium hover:bg-[#F5F5F7]">{t('categories.bidding')}</button>
                            <button className="px-6 py-2 rounded-full border border-[#D2D2D7] text-[#1D1D1F] font-medium hover:bg-[#F5F5F7]">{t('categories.logistics')}</button>
                        </div>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {guides.map((guide, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className={`aspect-video rounded-[20px] mb-4 relative overflow-hidden ${guide.color}`}>
                                    {/* Placeholder Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-[#1D1D1F]">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {guide.duration}
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="text-xs font-bold text-[#007AFF] mb-2 uppercase tracking-wide">{guide.category}</div>
                                    <h3 className="text-[24px] font-bold mb-2 text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors">
                                        {t(`guides.${guide.key}.title`)}
                                    </h3>
                                    <p className="text-[#86868B]">{t(`guides.${guide.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-[#F5F5F7] rounded-[30px] p-12 text-center max-w-[800px] mx-auto">
                        <h2 className="text-[32px] font-bold mb-4 text-[#1D1D1F]">{t('cta.title')}</h2>
                        <p className="text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                        <Link href="/faq" className="bkb-btn-primary">
                            {t('cta.button')}
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
