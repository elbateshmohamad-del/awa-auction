import { useTranslations } from 'next-intl';

export default function RefundPolicyPage() {
    const t = useTranslations('guide.legal.refunds');

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF]">
                <div className="text-center max-w-[900px] px-6">
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6">{t('title')}</h1>
                    <p className="text-[20px] md:text-[28px] text-[#86868B]">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Deposit Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#FFFFFF] py-16">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <div className="text-6xl mb-8">💰</div>
                    <h2 className="text-[36px] md:text-[48px] font-bold mb-8">{t('deposit.title')}</h2>
                    <p className="text-[#86868B] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                        {t('deposit.desc')}
                    </p>
                </div>
            </section>

            {/* Cancellation Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#F5F5F7] py-16">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <div className="text-6xl mb-8">🚫</div>
                    <h2 className="text-[36px] md:text-[48px] font-bold mb-8">{t('cancellation.title')}</h2>
                    <p className="text-[#86868B] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                        {t('cancellation.desc')}
                    </p>
                </div>
            </section>
        </div>
    );
}
