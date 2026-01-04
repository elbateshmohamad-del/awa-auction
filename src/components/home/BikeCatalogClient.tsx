'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function BikeCatalogClient() {
    const t = useTranslations('catalogPage');

    const manufacturers = [
        { name: t('manufacturers.honda'), logo: 'H' },
        { name: t('manufacturers.yamaha'), logo: 'Y' },
        { name: t('manufacturers.suzuki'), logo: 'S' },
        { name: t('manufacturers.kawasaki'), logo: 'K' },
        { name: t('manufacturers.ducati'), logo: 'D' },
        { name: t('manufacturers.bmw'), logo: 'B' },
        { name: t('manufacturers.harley'), logo: 'HD' },
        { name: t('manufacturers.triumph'), logo: 'T' }
    ];

    const featuredBikes = [
        { name: 'Honda CB750 Four', year: 1972, category: 'Vintage' },
        { name: 'Kawasaki Z1 900', year: 1973, category: 'Vintage' },
        { name: 'Ducati Panigale V4', year: 2024, category: 'Supersport' },
        { name: 'Yamaha YZF-R1', year: 2023, category: 'Supersport' },
    ];

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-20 lg:py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-lg md:text-[21px] text-[#86868B] mb-12">{t('subtitle')}</p>

                    {/* Search Bar */}
                    <div className="max-w-[600px] mx-auto flex gap-4 flex-col sm:flex-row">
                        <input
                            type="text"
                            placeholder={t('search.placeholder')}
                            className="flex-grow px-6 py-4 rounded-full border border-[#D2D2D7] bg-white text-[17px] focus:outline-none focus:border-[#007AFF] transition-colors"
                        />
                        <button className="bkb-btn-primary whitespace-nowrap">
                            {t('search.button')}
                        </button>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-10 md:py-[80px]">
                <div className="bkb-container max-w-[1200px]">

                    {/* Manufacturers Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
                        {manufacturers.map((m, index) => (
                            <div key={index} className="aspect-square bg-[#F5F5F7] rounded-[20px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#E5E5E7] transition-colors">
                                <div className="text-[32px] md:text-[40px] font-bold text-[#D2D2D7] mb-2">{m.logo}</div>
                                <div className="font-bold text-[#1D1D1F]">{m.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Featured Models */}
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-2xl md:text-[32px] font-bold mb-8 text-[#1D1D1F]">{t('featured.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {featuredBikes.map((bike, index) => (
                                <div key={index} className="bg-white border border-[#D2D2D7] rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-[4/3] bg-gray-200"></div>
                                    <div className="p-6">
                                        <div className="text-xs font-bold text-[#007AFF] mb-1">{bike.year}</div>
                                        <h3 className="text-[19px] font-bold text-[#1D1D1F] mb-1">{bike.name}</h3>
                                        <div className="text-sm text-[#86868B] mb-4">{bike.category}</div>
                                        <button className="text-[#007AFF] text-sm font-medium hover:underline">
                                            {t('featured.viewSpecs')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1D1D1F] text-white rounded-[30px] p-8 md:p-12 text-center max-w-[800px] mx-auto">
                        <h2 className="text-2xl md:text-[32px] font-bold mb-4">{t('cta.title')}</h2>
                        <p className="text-[#86868B] mb-8 text-base md:text-[19px]">{t('cta.subtitle')}</p>
                        <Link href="/contact" className="bkb-btn-primary w-full md:w-auto text-center justify-center">
                            {t('cta.button')}
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
