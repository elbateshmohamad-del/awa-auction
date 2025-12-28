'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

export default function ContactClient() {
    const t = useTranslations('contact_redesign');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormSubmitted(true);
        setIsSubmitting(false);
        alert(t('form.success'));
    };

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-medium mb-6 animate-fade-in-up">
                        {t('hero.badge')}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-28 bg-gray-50 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <div className="space-y-12 animate-fade-in-left">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">{t('info.title')}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {t('info.description')}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Headquarters */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-[#1D1D1F]">{t('info.headquarters.title')}</h3>
                                        <p className="text-gray-600">{t('info.headquarters.address')}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-[#1D1D1F]">{t('info.phone.title')}</h3>
                                        <div className="space-y-1 text-gray-600">
                                            <p><span className="font-medium text-gray-900">{t('info.phone.international')}:</span> +81 3-1234-5678</p>
                                            <p><span className="font-medium text-gray-900">{t('info.phone.tollFree')}:</span> 0120-123-456</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-[#1D1D1F]">{t('info.email.title')}</h3>
                                        <div className="space-y-1 text-gray-600">
                                            <p><span className="font-medium text-gray-900">{t('info.email.support')}:</span> support@awa-auction.com</p>
                                            <p><span className="font-medium text-gray-900">{t('info.email.sales')}:</span> sales@awa-auction.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="relative animate-fade-in-right">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[32px] blur-xl opacity-50"></div>
                            <div className="relative bg-white p-8 md:p-10 rounded-[24px] shadow-xl border border-gray-100">
                                <h2 className="text-2xl font-bold mb-6 text-[#1D1D1F]">{t('form.title')}</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">{t('form.name')}</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">{t('form.email')}</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">{t('form.subject')}</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900 appearance-none cursor-pointer">
                                                <option>{t('form.subjects.general')}</option>
                                                <option>{t('form.subjects.auction')}</option>
                                                <option>{t('form.subjects.shipping')}</option>
                                                <option>{t('form.subjects.partnership')}</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">{t('form.message')}</label>
                                        <textarea
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                {t('form.submitting')}
                                            </>
                                        ) : (
                                            <>
                                                {t('form.submit')}
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
