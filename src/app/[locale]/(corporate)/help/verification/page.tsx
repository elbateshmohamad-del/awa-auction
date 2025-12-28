import { useTranslations } from 'next-intl';

export default function VerificationPage() {
    const t = useTranslations('guide.verification');

    return (
        <div className="bg-white text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#60A5FA] relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="text-center max-w-[900px] px-6 relative z-10">
                    <div className="inline-block mb-6">
                        <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30">
                            🔒 安全・簡単
                        </span>
                    </div>
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6 text-white drop-shadow-lg">
                        {t('title')}
                    </h1>
                    <p className="text-[20px] md:text-[28px] text-white/90 mb-8 drop-shadow">
                        {t('subtitle')}
                    </p>
                    <p className="text-[16px] md:text-[18px] text-white/80 max-w-[700px] mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-32 bg-gradient-to-b from-white to-[#F5F7FA]">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-[40px] md:text-[56px] font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                            3つの簡単なステップ
                        </h2>
                        <p className="text-[18px] text-[#86868B] max-w-[600px] mx-auto">
                            わずか数分で完了します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                        {/* Step 1 */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    1
                                </div>

                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    🆔
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                                    {t('steps.id')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('steps.idDesc')}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    2
                                </div>

                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    🏠
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
                                    {t('steps.address')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('steps.addressDesc')}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    3
                                </div>

                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    📱
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                                    {t('steps.phone')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('steps.phoneDesc')}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why KYC Section */}
            <section className="py-24 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto max-w-6xl px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] md:text-[48px] font-bold mb-4">
                            {t('whyKyc.title')}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Security */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-5xl mb-6">🛡️</div>
                            <h3 className="text-2xl font-bold mb-4">{t('whyKyc.security')}</h3>
                            <p className="text-white/80 leading-relaxed">{t('whyKyc.securityDesc')}</p>
                        </div>

                        {/* Trust */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-5xl mb-6">🤝</div>
                            <h3 className="text-2xl font-bold mb-4">{t('whyKyc.trust')}</h3>
                            <p className="text-white/80 leading-relaxed">{t('whyKyc.trustDesc')}</p>
                        </div>

                        {/* Legal */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="text-5xl mb-6">📋</div>
                            <h3 className="text-2xl font-bold mb-4">{t('whyKyc.legal')}</h3>
                            <p className="text-white/80 leading-relaxed">{t('whyKyc.legalDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-[36px] md:text-[48px] font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                        今すぐ始めましょう
                    </h2>
                    <p className="text-[18px] text-[#86868B] mb-10 max-w-[600px] mx-auto">
                        本人確認を完了して、プレミアムバイクのオークションに参加しましょう
                    </p>
                    <a
                        href="/ja/dashboard/kyc"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        KYC認証を開始
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}
