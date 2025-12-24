"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
    const t = useTranslations();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#0F4C81] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#ffffff' }}>{t('contact.title')}</h1>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.send')}</h2>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">{t('common.success')}</h3>
                                    <p className="text-green-600">{t('checkout.success.message')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">{t('contact.form.name')}</label>
                                            <Input placeholder={t('contact.form.name')} required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">{t('contact.form.name')}</label>
                                            <Input placeholder={t('contact.form.name')} required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('contact.form.email')}</label>
                                        <Input type="email" placeholder={t('contact.form.email')} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('contact.form.subject')}</label>
                                        <select className="w-full h-10 rounded-lg border-gray-300 focus:border-[#0F4C81] focus:ring-[#0F4C81]">
                                            <option>{t('help.title')}</option>
                                            <option>{t('common.auctions')}</option>
                                            <option>{t('services.shipping.title')}</option>
                                            <option>{t('checkout.paymentMethod')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('contact.form.message')}</label>
                                        <textarea
                                            className="w-full rounded-lg border-gray-300 focus:border-[#0F4C81] focus:ring-[#0F4C81] min-h-[150px]"
                                            placeholder={t('contact.form.message')}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                                        {t('contact.form.send')}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('help.contact')}</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.form.email')}</h3>
                                        <p className="text-gray-600">{t('contact.info.email')}</p>
                                        <p className="text-gray-400 text-sm">{t('contact.info.hours')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.phoneLabel')}</h3>
                                        <p className="text-gray-600">{t('contact.info.phone')}</p>
                                        <p className="text-gray-400 text-sm">{t('contact.info.hours')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.addressLabel')}</h3>
                                        <p className="text-gray-600">
                                            {t.rich('contact.info.address', {
                                                br: () => <br />
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gray-100 rounded-xl h-48 flex items-center justify-center text-gray-400">
                                🗺️ Map
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
