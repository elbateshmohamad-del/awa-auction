import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function CorporateHomePage() {
    const t = useTranslations();

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 z-0"></div>
                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ color: '#ffffff' }}>
                        {t('home.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10">
                        {t('home.hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/auctions">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg">
                                {t('home.hero.enterAuction')}
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg bg-transparent border-2">
                                {t('home.hero.aboutAwa')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* News Ticker */}
            <div className="bg-slate-100 py-4 border-b">
                <div className="container mx-auto px-4 flex items-center gap-4">
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-wider">{t('home.news.title')}</span>
                    <div className="text-slate-700 text-sm">
                        <span className="mr-8">{t('home.news.item1')}</span>
                        <span className="mr-8">{t('home.news.item2')}</span>
                    </div>
                </div>
            </div>

            {/* Corporate Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t('home.sections.business.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('home.sections.business.description')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t('home.sections.sustainability.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('home.sections.sustainability.description')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t('home.sections.careers.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('home.sections.careers.description')}
                            </p>
                            <Link href="/careers" className="text-blue-600 font-bold mt-2 inline-block hover:underline">
                                {t('home.sections.careers.viewPositions')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
