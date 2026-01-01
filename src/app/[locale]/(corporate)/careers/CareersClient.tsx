'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

export default function CareersClient() {
    const t = useTranslations('careers');

    // Get jobs from translations array. 
    // Since map isn't directly supported on translation object in all versions, we construct indices.
    const jobIndices: number[] = [];

    const scrollToPositions = () => {
        document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-neutral-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-[#0F4C81] text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="info" className="mb-4">{t('badge')}</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#ffffff' }}>{t('title')}</h1>
                    <p className="text-xl text-[#E0F2FE] max-w-2xl mx-auto mb-8">
                        {t('subtitle')}
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[#0F4C81] hover:bg-[#E0F2FE]"
                        onClick={scrollToPositions}
                    >
                        {t('cta')}
                    </Button>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('culture.title')}</h2>
                        <p className="text-neutral-600">
                            {t('culture.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">{t('culture.growth.title')}</h3>
                            <p className="text-neutral-600">{t('culture.growth.desc')}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌏</div>
                            <h3 className="text-xl font-semibold mb-2">{t('culture.global.title')}</h3>
                            <p className="text-neutral-600">{t('culture.global.desc')}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💡</div>
                            <h3 className="text-xl font-semibold mb-2">{t('culture.innovation.title')}</h3>
                            <p className="text-neutral-600">{t('culture.innovation.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="positions" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">{t('positions.title')}</h2>
                {jobIndices.length > 0 ? (
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {jobIndices.map((index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-2xl text-[#0F4C81]">{t(`positions.jobs.${index}.title`)}</CardTitle>
                                            <p className="text-lg mt-1 text-gray-500">
                                                {t(`positions.jobs.${index}.department`)} · {t(`positions.jobs.${index}.location`)}
                                            </p>
                                        </div>
                                        <Badge>{t(`positions.jobs.${index}.type`)}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-600 mb-6">{t(`positions.jobs.${index}.description`)}</p>
                                    <Button variant="secondary">{t('positions.apply')}</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-lg border border-neutral-200 max-w-2xl mx-auto">
                        <div className="text-4xl mb-4">🙌</div>
                        <h3 className="text-xl font-semibold text-[#0F4C81] mb-2">
                            {t('positions.noOpenings')}
                        </h3>
                    </div>
                )}
            </section>
        </div>
    );
}
