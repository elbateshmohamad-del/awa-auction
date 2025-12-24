"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500 max-w-md w-full">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    ⚠️
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
                <p className="text-gray-600 mb-6">
                    We apologize for the inconvenience. An unexpected error has occurred.
                </p>
                <div className="flex flex-col gap-3">
                    <Button onClick={() => reset()} variant="primary" className="w-full">
                        Try again
                    </Button>
                    <Button onClick={() => window.location.href = '/'} variant="ghost" className="w-full">
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
