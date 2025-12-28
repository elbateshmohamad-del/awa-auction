'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function SuccessStoriesClient() {
    const t = useTranslations('successStoriesPage');

    const stories = [
        {
            name: t('stories.story1.name'),
            location: t('stories.story1.location'),
            quote: t('stories.story1.quote'),
            bgColor: "bg-blue-50"
        },
        {
            name: t('stories.story2.name'),
            location: t('stories.story2.location'),
            quote: t('stories.story2.quote'),
            bgColor: "bg-green-50"
        },
        {
            name: t('stories.story3.name'),
            location: t('stories.story3.location'),
            quote: t('stories.story3.quote'),
            bgColor: "bg-orange-50"
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

                    {/* Stats */}
                    <div className="flex justify-center gap-10 md:gap-20 mb-20">
                        <div className="text-center">
                            <div className="text-[40px] font-bold text-[#1D1D1F] mb-1">{t('stats.dealers')}</div>
                            <div className="text-[#86868B]">Global Network</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[40px] font-bold text-[#1D1D1F] mb-1">{t('stats.countries')}</div>
                            <div className="text-[#86868B]">Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[40px] font-bold text-[#1D1D1F] mb-1">{t('stats.satisfaction')}</div>
                            <div className="text-[#86868B]">Rate</div>
                        </div>
                    </div>

                    {/* Stories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {stories.map((story, index) => (
                            <div key={index} className={`rounded-[20px] p-8 ${story.bgColor} flex flex-col h-full`}>
                                <div className="text-[40px] text-[#007AFF] font-serif mb-6 leading-none">“</div>
                                <p className="text-[19px] text-[#1D1D1F] italic leading-relaxed mb-8 flex-grow">
                                    {story.quote}
                                </p>
                                <div>
                                    <div className="font-bold text-[#1D1D1F] mb-1">{story.name}</div>
                                    <div className="text-sm text-[#86868B]">{story.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1D1D1F] text-white rounded-[30px] p-12 text-center max-w-[800px] mx-auto">
                        <h2 className="text-[32px] font-bold mb-4">{t('cta.title')}</h2>
                        <p className="text-[#86868B] mb-8 text-[19px]">{t('cta.subtitle')}</p>
                        <Link href="/auth/register" className="bkb-btn-primary">
                            {t('cta.button')}
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
