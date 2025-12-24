'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function BikeImportButton() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{ count?: number, error?: string } | null>(null);

    const handleImport = async () => {
        setIsLoading(true);
        setResult(null);
        try {
            const res = await fetch('/api/bikes/import', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ maxBikes: 10 })
            });
            const data = await res.json();
            console.log("khsllllllllllrf");
            console.log(data);
            console.log(data.imported);
            console.log(data.skipped);
            console.log(data.errors);
            if (data.success) {
                setResult({ count: (data.imported?.length || 0) + (data.skipped || 0) });
                // Refresh the page to show new data
                // window.location.reload();
            } else {
                setResult({ error: data.errors?.[0] || 'Import failed' });
            }
        } catch (e) {
            setResult({ error: 'Connection error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {result?.error && <span className="text-red-500 text-sm">{result.error}</span>}
            {result?.count !== undefined && <span className="text-green-600 text-sm">Processed {result.count} bikes</span>}

            <Button
                onClick={handleImport}
                className="bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isLoading}
            >
                {isLoading ? 'Importing...' : 'Run BDS Scraper'}
            </Button>
        </div>
    );
}
