"use client";

import { Input } from '@/components/ui/Input';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BikeSearchFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Initial state from URL
    const [search, setSearch] = useState(searchParams.get('q') || '');
    const [status, setStatus] = useState(searchParams.get('status') || '');

    // Debounce search input
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(timer);
    }, [search]);

    // Update URL when filters change
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (debouncedSearch) {
            params.set('q', debouncedSearch);
        } else {
            params.delete('q');
        }

        if (status && status !== 'All Status') {
            params.set('status', status);
        } else {
            params.delete('status');
        }

        // Avoid infinite loop / unnecessary replace if nothing changed
        if (params.toString() !== searchParams.toString()) {
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [debouncedSearch, status, router, pathname, searchParams]);

    return (
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
            <div className="flex-1 max-w-sm">
                <Input
                    placeholder="Search by Name, VIN, or Lot #"
                    className="bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <select
                className="h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="sold">Sold</option>
            </select>
        </div>
    );
}
