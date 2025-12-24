import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Design Element */}
            <div className="hidden md:flex md:w-1/2 bg-[#0F4C81] relative overflow-hidden items-center justify-center p-12">
                {/* Dynamic skewed background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#0a355c]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[#3B82F6] opacity-10 transform skew-x-[-20deg] translate-x-1/2"></div>

                <div className="relative z-10 text-white max-w-lg">
                    <div className="mb-6 inline-block border-l-4 border-[#3B82F6] pl-4">
                        <h1 className="text-4xl font-bold tracking-tight mb-2">Join the Revolution</h1>
                        <p className="text-blue-200 text-lg">Start bidding on premium Japanese motorcycles today.</p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2">Global Access</h3>
                            <p className="text-blue-100 text-sm">Ship to over 50 countries with handled customs paperwork.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                            <h3 className="font-bold text-xl mb-2">Professional Grade</h3>
                            <p className="text-blue-100 text-sm">Access detailed inspection reports normally reserved for dealers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block text-2xl font-black text-[#0F4C81] mb-8">
                            AWA AUCTION
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
                        <p className="mt-2 text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-[#2563EB] hover:text-[#0F4C81] underline decoration-2 decoration-transparent hover:decoration-[#0F4C81] transition-all">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <Card className="border-t-4 border-t-[#0F4C81]">
                        <CardContent className="pt-6">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="First Name" placeholder="John" required />
                                    <Input label="Last Name" placeholder="Doe" required />
                                </div>

                                <Input
                                    label="Email address"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                />

                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Create a strong password"
                                    hint="Must be at least 8 characters long"
                                    required
                                />

                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    required
                                />

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#0F4C81] focus:ring-[#0F4C81] border-gray-300 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-gray-700">I agree to the Terms</label>
                                        <p className="text-gray-500">By clicking create account, I agree to the <Link href="/terms" className="text-[#0F4C81] hover:underline">Terms of Service</Link>.</p>
                                    </div>
                                </div>

                                <button type="submit" className="w-full awa-button-primary">
                                    <span>Create Account</span>
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
