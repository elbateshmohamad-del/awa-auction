import { useTranslations } from 'next-intl';

export default function SecurityPage() {
    const t = useTranslations('security_center');

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
                            🔒 {t('badge')}
                        </span>
                    </div>
                    <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-2px] mb-6 text-white drop-shadow-lg">
                        {t('title')}
                    </h1>
                    <p className="text-[20px] md:text-[28px] text-white/90 drop-shadow">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-gradient-to-b from-white to-[#F5F7FA]">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-[40px] md:text-[56px] font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                            {t('features_title')}
                        </h2>
                        <p className="text-[18px] text-[#86868B] max-w-[600px] mx-auto">
                            {t('features_subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Feature 1 - SSL */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    🔒
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
                                    {t('features.ssl.title')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('features.ssl.desc')}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 - 2FA */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    🔑
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
                                    {t('features.auth.title')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('features.auth.desc')}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 - Data Protection */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6 text-7xl flex justify-center filter drop-shadow-lg">
                                    🛡️
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                                    {t('features.data.title')}
                                </h3>
                                <p className="text-[#86868B] text-center leading-relaxed">
                                    {t('features.data.desc')}
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

            {/* Additional Security Info Section */}
            <section className="py-24 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
                    <h2 className="text-[36px] md:text-[48px] font-bold mb-6">
                        {t('monitoring.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full mb-8"></div>
                    <p className="text-[18px] text-white/80 leading-relaxed max-w-[700px] mx-auto mb-8">
                        {t('monitoring.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl mb-3">🔍</div>
                            <h3 className="font-bold text-lg mb-2">{t('monitoring.realtime.title')}</h3>
                            <p className="text-sm text-white/70">{t('monitoring.realtime.desc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold text-lg mb-2">{t('monitoring.response.title')}</h3>
                            <p className="text-sm text-white/70">{t('monitoring.response.desc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl mb-3">📊</div>
                            <h3 className="font-bold text-lg mb-2">{t('monitoring.audit.title')}</h3>
                            <p className="text-sm text-white/70">{t('monitoring.audit.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
