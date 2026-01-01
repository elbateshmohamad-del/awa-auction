import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        ここには何もありません
                    </h1>

                    <Link href="/">
                        <Button variant="primary">トップに戻る</Button>
                    </Link>
                </div>
            </body>
        </html>
    );
}
