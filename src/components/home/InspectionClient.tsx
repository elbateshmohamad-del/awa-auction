'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function InspectionClient() {
    const t = useTranslations('inspectionPage');

    return (
        <div className="bg-[#FFFFFF] text-[#1D1D1F]">
            {/* Page Hero */}
            <section className="py-[150px] pb-[60px] bg-gradient-to-br from-[#F5F5F7] to-[#FFFFFF] text-center">
                <div className="bkb-container">
                    <h1 className="text-[56px] font-bold tracking-[-1.5px] mb-4 text-[#1D1D1F]">{t('title')}</h1>
                    <p className="text-[21px] text-[#86868B]">{t('subtitle')}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-[80px]">
                <div className="bkb-container max-w-[1000px]">

                    {/* Intro */}
                    <div className="text-center mb-16">
                        <p className="text-[21px] text-[#86868B] max-w-[800px] mx-auto mb-10">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-20">
                        <h2 className="text-[32px] font-bold text-center mb-12 text-[#1D1D1F]">{t('process.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                                <div className="text-[#007AFF] text-[24px] font-bold mb-2">01</div>
                                <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('process.step1.title')}</h3>
                                <p className="text-[#86868B]">{t('process.step1.desc')}</p>
                            </div>
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                                <div className="text-[#007AFF] text-[24px] font-bold mb-2">02</div>
                                <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('process.step2.title')}</h3>
                                <p className="text-[#86868B]">{t('process.step2.desc')}</p>
                            </div>
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                                <div className="text-[#007AFF] text-[24px] font-bold mb-2">03</div>
                                <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('process.step3.title')}</h3>
                                <p className="text-[#86868B]">{t('process.step3.desc')}</p>
                            </div>
                            <div className="bg-white border border-[#D2D2D7] rounded-[20px] p-8">
                                <div className="text-[#007AFF] text-[24px] font-bold mb-2">04</div>
                                <h3 className="text-[20px] font-bold mb-3 text-[#1D1D1F]">{t('process.step4.title')}</h3>
                                <p className="text-[#86868B]">{t('process.step4.desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Grading System */}
                    <div className="mb-20">
                        <h2 className="text-[32px] font-bold text-center mb-12 text-[#1D1D1F]">{t('grades.title')}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold text-[#1D1D1F] w-[150px] bg-[#F5F5F7]">{t('grades.s.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.s.desc')}</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold text-[#1D1D1F] bg-[#F5F5F7]">{t('grades.5.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.5.desc')}</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold text-[#1D1D1F] bg-[#F5F5F7]">{t('grades.4.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.4.desc')}</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold text-[#1D1D1F] bg-[#F5F5F7]">{t('grades.3.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.3.desc')}</td>
                                    </tr>
                                    <tr className="border-b border-[#D2D2D7]">
                                        <td className="p-4 font-bold text-[#1D1D1F] bg-[#F5F5F7]">{t('grades.2.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.2.desc')}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-[#1D1D1F] bg-[#F5F5F7]">{t('grades.1.grade')}</td>
                                        <td className="p-4 text-[#86868B]">{t('grades.1.desc')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sample Report & CTA */}
                    <div className="bg-[#F5F5F7] rounded-[30px] p-12 text-center">
                        <div className="mb-10">
                            <h3 className="text-[24px] font-bold mb-4 text-[#1D1D1F]">{t('report.title')}</h3>
                            <p className="text-[#86868B] mb-6">{t('report.desc')}</p>
                            <button className="text-[#007AFF] font-medium hover:underline flex items-center justify-center mx-auto gap-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="currentColor" />
                                </svg>
                                {t('report.downloadSample')}
                            </button>
                        </div>

                        <div className="h-[1px] bg-[#D2D2D7] w-full max-w-[400px] mx-auto mb-10"></div>

                        <h2 className="text-[32px] font-bold mb-4 text-[#1D1D1F]">{t('cta.title')}</h2>
                        <p className="text-[#86868B] mb-8">{t('cta.subtitle')}</p>
                        <Link href="/auctions" className="bkb-btn-primary">
                            {t('cta.button')}
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
