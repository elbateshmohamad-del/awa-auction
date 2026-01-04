import Link from 'next/link';
import { headers } from 'next/headers';
import { Button } from '@/components/ui/Button';

// 翻訳メッセージ（not-found は特殊なページで i18n コンテキスト外で呼ばれるため静的定義）
const translations = {
    ja: {
        title: 'ページが見つかりません',
        description: 'お探しのページは存在しないか、移動した可能性があります。',
        backHome: 'ホームに戻る'
    },
    en: {
        title: 'Page Not Found',
        description: "The page you're looking for doesn't exist or has been moved.",
        backHome: 'Back to Home'
    },
    ar: {
        title: 'الصفحة غير موجودة',
        description: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
        backHome: 'العودة للرئيسية'
    }
};

type Locale = 'ja' | 'en' | 'ar';

// URL パスから locale を推測
function getLocaleFromPath(pathname: string): Locale {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/ar')) return 'ar';
    return 'ja'; // デフォルト
}

export default async function NotFound() {
    // headers から x-pathname を取得（ミドルウェアで設定）
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '/';

    const locale = getLocaleFromPath(pathname);
    const t = translations[locale];
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
                    {/* 404 エラーコード */}
                    <p className="text-9xl font-black text-primary-600 mb-4">
                        404
                    </p>

                    {/* エラータイトル */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {t.title}
                    </h1>

                    {/* 説明文 */}
                    <p className="text-gray-600 mb-8 max-w-md">
                        {t.description}
                    </p>

                    <Link href={`/${locale}`}>
                        <Button variant="primary">{t.backHome}</Button>
                    </Link>
                </div>
            </body>
        </html>
    );
}
