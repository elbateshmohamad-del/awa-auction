import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function GettingStartedPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Getting Started with AWA Auction</h1>
                <p className="text-xl text-neutral-600">Your journey to importing quality Japanese vehicles starts here.</p>
            </div>

            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex md:flex-row flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 1</div>
                        <h2 className="text-2xl font-bold mb-3">Create an Account</h2>
                        <p className="text-neutral-600 mb-4">
                            Sign up for free to browse our catalogue. To place bids, you'll need to verify your identity and make a security deposit.
                        </p>
                        <Link href="/register">
                            <Button>Sign Up Now</Button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        📝
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex md:flex-row-reverse flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 2</div>
                        <h2 className="text-2xl font-bold mb-3">Find Your Vehicle</h2>
                        <p className="text-neutral-600 mb-4">
                            Search thousands of listings. Use our advanced filters to find specific makes, models, and conditions. Check the detailed inspection sheets.
                        </p>
                        <Link href="/catalog">
                            <Button variant="outline">Browse Catalog</Button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🔍
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex md:flex-row flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 3</div>
                        <h2 className="text-2xl font-bold mb-3">Place Your Bid</h2>
                        <p className="text-neutral-600 mb-4">
                            Enter your maximum bid amount. Our system will automatically bid on your behalf up to your limit. You'll be notified if you win.
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🔨
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex md:flex-row-reverse flex-col gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded inline-block mb-3">STEP 4</div>
                        <h2 className="text-2xl font-bold mb-3">Payment & Shipping</h2>
                        <p className="text-neutral-600 mb-4">
                            If you win, you'll receive an invoice. Once paid, we handle all the logistics to ship the vehicle to your nearest port.
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-neutral-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center text-4xl">
                        🚢
                    </div>
                </div>
            </div>
        </div>
    );
}
