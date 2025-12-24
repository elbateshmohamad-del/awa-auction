import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ServicesPage() {
    const t = useTranslations();

    const services = [
        {
            icon: '🏍️',
            title: t('common.auctions'),
            description: t('auctions.subtitle'),
            features: [t('auctions.liveNow'), t('auctions.currentBid'), t('services.support.title'), t('services.support.description')],
            link: '/services/auction',
            color: 'blue',
        },
        {
            icon: '🔬',
            title: t('services.inspection.title'),
            description: t('services.inspection.description'),
            features: [t('bike.specifications'), t('bike.condition'), t('bike.inspectionReport'), t('about.values.quality')],
            link: '/services/inspection',
            color: 'green',
        },
        {
            icon: '🚢',
            title: t('services.shipping.title'),
            description: t('services.shipping.description'),
            features: [t('dashboard.tracking.title'), t('checkout.shipping'), t('about.values.trust'), t('services.support.title')],
            link: '/services/shipping',
            color: 'orange',
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">{t('services.title')}</p>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">{t('services.title')}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('about.vision.description')}
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 -mt-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className={`h-2 ${service.color === 'blue' ? 'bg-blue-500' : service.color === 'green' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                <CardContent className="p-8">
                                    <div className="text-5xl mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2 mb-8">
                                        {service.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="text-green-500">✓</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={service.link}>
                                        <Button variant="ghost" className="group-hover:text-[#0F4C81] font-bold">
                                            {t('common.learnMore')} →
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">{t('guide.title')}</h2>
                        <p className="text-gray-500">{t('guide.howToBuy.description')}</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: t('common.search'), desc: t('auctions.subtitle') },
                            { step: '02', title: t('auctions.placeBid'), desc: t('auctions.timeRemaining') },
                            { step: '03', title: t('dashboard.wonAuctions'), desc: t('checkout.placeOrder') },
                            { step: '04', title: t('services.shipping.title'), desc: t('services.shipping.description') },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-[#0F4C81] text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0F4C81]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">{t('help.title')}</h2>
                    <p className="text-blue-200 mb-8">{t('services.support.description')}</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="accent" size="lg">{t('footer.support.contactUs')}</Button>
                        </Link>
                        <Link href="/help/faq">
                            <Button variant="secondary" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                {t('help.faq')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
