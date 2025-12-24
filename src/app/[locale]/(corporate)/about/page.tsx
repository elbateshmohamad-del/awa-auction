import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    const t = useTranslations();

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-[#0F4C81] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: '#93c5fd' }}>{t('about.title')}</p>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ color: '#ffffff' }}>
                        {t('about.mission.description')}
                    </h1>
                    <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#bfdbfe' }}>
                        {t('about.vision.description')}
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="w-12 h-1 bg-[#0F4C81] mb-6"></div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">{t('about.mission.title')}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('about.mission.description')}
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-1 bg-[#3B82F6] mb-6"></div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">{t('about.vision.title')}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('about.vision.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">10K+</p>
                            <p className="text-gray-500 font-medium mt-2">{t('common.auctions')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">50+</p>
                            <p className="text-gray-500 font-medium mt-2">{t('services.shipping.description')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">98%</p>
                            <p className="text-gray-500 font-medium mt-2">{t('about.values.quality')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#0F4C81]">2015</p>
                            <p className="text-gray-500 font-medium mt-2">{t('about.title')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t('about.values.title')}</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            {t('about.vision.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🔍
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.inspection.title')}</h3>
                            <p className="text-gray-600">
                                {t('services.inspection.description')}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🌍
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.shipping.title')}</h3>
                            <p className="text-gray-600">
                                {t('services.shipping.description')}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                🛡️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.values.trust')}</h3>
                            <p className="text-gray-600">
                                {t('services.finance.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-4" style={{ color: '#ffffff' }}>{t('home.hero.enterAuction')}</h2>
                    <p className="mb-8 max-w-xl mx-auto font-medium" style={{ color: '#ffffff' }}>
                        {t('auctions.subtitle')}
                    </p>
                    <Link href="/auctions">
                        <button className="bg-white hover:bg-gray-100 text-[#0F4C81] font-bold px-8 py-3 rounded-full transition-colors">
                            {t('common.auctions')}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
