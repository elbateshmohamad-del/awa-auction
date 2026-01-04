import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { Button } from '@/components/ui/Button';

export default async function NotFound() {
    const locale = await getLocale();
    const t = await getTranslations('errors.notFound');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            {/* 404 エラーコード */}
            <p className="text-9xl font-black text-primary-600 mb-4">
                404
            </p>

            {/* エラータイトル */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t('title')}
            </h1>

            {/* 説明文 */}
            <p className="text-gray-600 mb-8 max-w-md">
                {t('description')}
            </p>

            <Link href={`/${locale}`}>
                <Button variant="primary">{t('backHome')}</Button>
            </Link>
        </div>
    );
}
