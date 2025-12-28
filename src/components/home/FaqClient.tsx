'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function FaqClient() {
    const t = useTranslations('faqPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[21px] text-[#86868B]">{t('subtitle')}</p>
                </div>
            </section>

            {/* Page Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[900px]">

                    {/* Categories */}
                    <div className="faq-categories">

                        {/* About Bidding */}
                        <div className="faq-category">
                            <h2>{t('bidding.title')}</h2>
                            <div className="faq-item">
                                <h3>{t('bidding.q1')}</h3>
                                <p>{t('bidding.a1')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('bidding.q2')}</h3>
                                <p>{t('bidding.a2')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('bidding.q3')}</h3>
                                <p>{t('bidding.a3')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('bidding.q4')}</h3>
                                <p>{t('bidding.a4')}</p>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="faq-category">
                            <h2>{t('payment.title')}</h2>
                            <div className="faq-item">
                                <h3>{t('payment.q1')}</h3>
                                <p>{t('payment.a1')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('payment.q2')}</h3>
                                <p>{t('payment.a2')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('payment.q3')}</h3>
                                <p>{t('payment.a3')}</p>
                            </div>
                        </div>

                        {/* Shipping */}
                        <div className="faq-category">
                            <h2>{t('shippingFaq.title')}</h2>
                            <div className="faq-item">
                                <h3>{t('shippingFaq.q1')}</h3>
                                <p>{t('shippingFaq.a1')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('shippingFaq.q2')}</h3>
                                <p>{t('shippingFaq.a2')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('shippingFaq.q3')}</h3>
                                <p>{t('shippingFaq.a3')}</p>
                            </div>
                        </div>

                        {/* Inspection & Quality */}
                        <div className="faq-category">
                            <h2>{t('inspectionFaq.title')}</h2>
                            <div className="faq-item">
                                <h3>{t('inspectionFaq.q1')}</h3>
                                <p>{t('inspectionFaq.a1')}</p>
                            </div>
                            <div className="faq-item">
                                <h3>{t('inspectionFaq.q2')}</h3>
                                <p>{t('inspectionFaq.a2')}</p>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="faq-category">
                            <h2>{t('supportFaq.title')}</h2>
                            <div className="faq-item">
                                <h3>{t('supportFaq.q1')}</h3>
                                <p>{t('supportFaq.a1')}</p>
                            </div>
                        </div>

                    </div>

                    {/* Still Have Questions */}
                    <div className="still-have-questions">
                        <h2>{t('stillHaveQuestions.title')}</h2>
                        <p>{t('stillHaveQuestions.subtitle')}</p>
                        <Link href="/contact" className="bkb-btn-primary">{t('stillHaveQuestions.button')}</Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
