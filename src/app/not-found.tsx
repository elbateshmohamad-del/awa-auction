import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#0F4C81] opacity-5 transform skew-x-[-20deg] translate-x-1/3"></div>

            <div className="relative z-10">
                <h1 className="text-9xl font-black text-[#0F4C81] opacity-20 select-none">404</h1>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/">
                            <Button variant="primary" size="lg">Return Home</Button>
                        </Link>
                        <Link href="/catalog">
                            <Button variant="secondary" size="lg">Browse Bikes</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
