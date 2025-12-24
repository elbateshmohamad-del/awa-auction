"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            ⚠️
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2">Something went wrong!</h2>
                        <p className="text-gray-500 mb-8">
                            A critical error occurred. Our team has been notified.
                        </p>
                        <div className="space-y-3">
                            <Button onClick={() => reset()} variant="primary" className="w-full">
                                Try again
                            </Button>
                            <Button onClick={() => window.location.href = '/'} variant="ghost" className="w-full">
                                Return Home
                            </Button>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 p-4 bg-gray-100 rounded text-left overflow-auto max-h-40 text-xs font-mono text-gray-700">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </body>
        </html>
    );
}
