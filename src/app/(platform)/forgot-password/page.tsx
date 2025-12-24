import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                        AWA AUCTION
                    </Link>
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center">
                            <span className="text-3xl">🔑</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Forgot password?</h2>
                    <p className="mt-2 text-gray-600">
                        No worries, we&apos;ll send you reset instructions.
                    </p>
                </div>

                <Card className="border-t-4 border-t-[#0F4C81]">
                    <CardContent className="pt-6">
                        <form className="space-y-6">
                            <Input
                                label="Email address"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                            <button type="submit" className="w-full awa-button-primary">
                                <span>Reset Password</span>
                            </button>
                        </form>
                    </CardContent>
                </Card>

                <p className="text-center text-sm text-gray-600">
                    <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#0F4C81] flex items-center justify-center gap-2">
                        <span>← Back to log in</span>
                    </Link>
                </p>
            </div>

            {/* Background Decorative Element */}
            <div className="fixed top-0 right-0 w-1/3 h-full bg-[#0F4C81] opacity-5 skew-x-[-20deg] pointer-events-none -z-10 translate-x-1/2" />
        </div>
    );
}
