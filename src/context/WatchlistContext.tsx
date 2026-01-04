"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useRouter, usePathname } from '@/i18n/navigation';

interface WatchlistContextType {
    watchlist: string[];
    addToWatchlist: (bikeId: string) => void;
    removeFromWatchlist: (bikeId: string) => void;
    isInWatchlist: (bikeId: string) => boolean;
    toggleWatchlist: (bikeId: string) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
    const { user, isAuthenticated } = useAuth();
    const [watchlist, setWatchlist] = useState<string[]>([]);
    const router = useRouter();
    const pathname = usePathname();

    // Load watchlist on user change
    useEffect(() => {
        if (isAuthenticated && user?.id) {
            const stored = localStorage.getItem(`watchlist_${user.id}`);
            if (stored) {
                try {
                    setWatchlist(JSON.parse(stored));
                } catch (e) {
                    console.error('Failed to parse watchlist', e);
                    setWatchlist([]);
                }
            } else {
                setWatchlist([]);
            }
        } else {
            setWatchlist([]);
        }
    }, [isAuthenticated, user]);

    // Save watchlist on change
    useEffect(() => {
        if (isAuthenticated && user?.id) {
            localStorage.setItem(`watchlist_${user.id}`, JSON.stringify(watchlist));
        }
    }, [watchlist, isAuthenticated, user]);

    const addToWatchlist = (bikeId: string) => {
        if (!isAuthenticated) {
            router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
            return;
        }
        if (!watchlist.includes(bikeId)) {
            setWatchlist(prev => [...prev, bikeId]);
        }
    };

    const removeFromWatchlist = (bikeId: string) => {
        if (!isAuthenticated) return;
        setWatchlist(prev => prev.filter(id => id !== bikeId));
    };

    const toggleWatchlist = (bikeId: string) => {
        if (!isAuthenticated) {
            router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
            return;
        }
        if (isInWatchlist(bikeId)) {
            removeFromWatchlist(bikeId);
        } else {
            addToWatchlist(bikeId);
        }
    };

    const isInWatchlist = (bikeId: string) => {
        return watchlist.includes(bikeId);
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist, toggleWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (context === undefined) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
}
