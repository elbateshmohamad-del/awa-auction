import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Design Element */}
            <div className="hidden md:flex md:w-1/2 bg-[#0F4C81] relative overflow-hidden items-center justify-center p-12">
                {/* Dynamic skewed background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#0a355c]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[#3B82F6] opacity-10 transform skew-x-[-20deg] translate-x-1/2"></div>

                <div className="relative z-10 text-white max-w-lg">
                    <div className="mb-6 inline-block border-l-4 border-[#3B82F6] pl-4">
                        <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Back</h1>
                        <p className="text-blue-200 text-lg">Continue your journey to find the perfect ride.</p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">⚡</div>
                            <div>
                                <h3 className="font-bold">Lightning Fast Bidding</h3>
                                <p className="text-blue-200 text-sm">Real-time updates on all your active bids.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">🔒</div>
                            <div>
                                <h3 className="font-bold">Secure Transactions</h3>
                                <p className="text-blue-200 text-sm">Your data and payments are always protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                            AWA AUCTION
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-gray-600">
                            New to AWA?{' '}
                            <Link href="/register" className="font-medium text-[#2563EB] hover:text-[#0F4C81] underline decoration-2 decoration-transparent hover:decoration-[#0F4C81] transition-all">
                                Create an account
                            </Link>
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

                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label className="block text-sm font-medium text-gray-700">Password</label>
                                        <Link href="/forgot-password" className="text-sm font-medium text-[#2563EB] hover:text-[#0F4C81]">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button type="submit" className="w-full awa-button-primary">
                                    <span>Sign In</span>
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <Button variant="secondary" className="w-full">
                                        <span>Google</span>
                                    </Button>
                                    <Button variant="secondary" className="w-full">
                                        <span>Facebook</span>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <p className="text-center text-sm text-gray-500">
                        By signing in, you agree to our{' '}
                        <Link href="/terms" className="text-[#0F4C81] hover:underline">Terms of Service</Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="text-[#0F4C81] hover:underline">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
