"use client";

import { useState, useEffect, useCallback } from 'react';

export type Bid = {
    id: string;
    bidder: string;
    amount: number;
    timestamp: Date;
    isMine: boolean;
};

export type AuctionState = {
    currentPrice: number;
    minBid: number;
    bids: Bid[];
    status: 'LIVE' | 'ENDED' | 'PAUSED';
    endTime: Date;
    timeLeft: string;
};

// Simulation settings
const SIMULATION_ENABLED = true;
const COMPETITOR_MAX_BUDGET = 800000; // Competitor gives up here

// Helper to format duration
function formatTimeLeft(endTime: Date): string {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();

    if (diff <= 0) return "FINISHED";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function useAuction(bikeId: string | undefined, initialPrice: number, endTime: Date) {
    const [state, setState] = useState<AuctionState>({
        currentPrice: initialPrice,
        minBid: initialPrice + 10000,
        bids: [],
        status: new Date() < endTime ? 'LIVE' : 'ENDED',
        endTime: endTime,
        timeLeft: "" // Empty initially to prevent hydration mismatch
    });

    const [connectionStatus, setConnectionStatus] = useState<'CONNECTED' | 'DISCONNECTED'>('CONNECTED');

    // Load from localStorage on mount or bikeId change
    useEffect(() => {
        if (!bikeId) return;

        const key = `auction_state_${bikeId}`;
        const stored = localStorage.getItem(key);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Restore dates
                parsed.bids = parsed.bids.map((b: any) => ({
                    ...b,
                    timestamp: new Date(b.timestamp)
                }));
                // If stored price is higher than initial, use stored (simulation)
                if (parsed.currentPrice >= initialPrice) {
                    setState(prev => ({ ...prev, ...parsed, endTime })); // Keep passed endTime or stored? Passed is better for sync.
                }
            } catch (e) {
                console.error("Failed to load auction state", e);
            }
        }
    }, [bikeId]);

    // Save to localStorage on state change
    useEffect(() => {
        if (!bikeId) return;
        if (state.bids.length > 0 || state.currentPrice > initialPrice) {
            const key = `auction_state_${bikeId}`;
            // Don't save timeLeft or status, recalculate them
            const { timeLeft, status, endTime, ...toSave } = state;
            localStorage.setItem(key, JSON.stringify(toSave));
        }
    }, [state.currentPrice, state.bids, bikeId]);

    // Update price when initialPrice changes... but only if we haven't bid yet?
    useEffect(() => {
        if (initialPrice > 0 && state.currentPrice === 0 && state.bids.length === 0) {
            // ... logic to set initial
            setState(prev => ({
                ...prev,
                currentPrice: initialPrice,
                minBid: initialPrice + 10000
            }));
        }
    }, [initialPrice]); // Removed state.currentPrice from deps to avoid loop if used incorrectly

    // Timer Logic
    useEffect(() => {
        // Run once immediately on client mount
        const calculateTime = () => {
            const newTimeLeft = formatTimeLeft(endTime);
            const isEnded = newTimeLeft === "FINISHED";

            setState(prev => ({
                ...prev,
                timeLeft: newTimeLeft,
                status: isEnded ? 'ENDED' : 'LIVE'
            }));

            return isEnded;
        };

        if (calculateTime()) return;

        const timer = setInterval(() => {
            if (calculateTime()) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    // Place a Bid (Direct Bid)
    // Place a Bid (Real API)
    const placeBid = useCallback(async (amount: number) => {
        if (state.status === 'ENDED') return false;

        // Optimistic check
        if (amount < state.minBid) {
            return { success: false, error: `Bid must be at least ¥${state.minBid.toLocaleString()}` };
        }

        try {
            const res = await fetch('/api/auctions/place-bid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bikeId, amount })
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, error: data.error || "Failed to place bid", errorData: data.errorData };
            }

            // Update State with Success
            const newBid: Bid = {
                id: data.bidId || Math.random().toString(36).substr(2, 9),
                bidder: 'You',
                amount: amount,
                timestamp: new Date(),
                isMine: true
            };

            setState(prev => ({
                ...prev,
                currentPrice: amount,
                minBid: amount + 1000, // Small increment for next
                bids: [newBid, ...prev.bids]
            }));

            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false, error: "Network error occurred" };
        }
    }, [bikeId, state.minBid, state.status]);

    // Competitor Bot - REMOVED for Real Implementation
    // The previous useEffect block for simulation is deleted.

    // Polling for Updates (Optional - simple sync)
    // To see other people's bids in real-time without WS, we could poll.
    // For now, definition of done only requires "reload maintains state".
    // I entered a simple poll in previous steps, let's keep or refine it.
    // The previous code had a timer logic but no data fetching poll.
    // Let's add simple data fetching poll every 5s if LIVE.
    /*
        useEffect(() => {
            if (state.status === 'ENDED' || state.status === 'PAUSED') return;
            const interval = setInterval(async () => {
                 // In real app: Fetch latest price from API
                 // For this step: I will implement just the bidding action first.
            }, 5000);
            return () => clearInterval(interval);
        }, [state.status]);
    */

    return {
        ...state,
        connectionStatus,
        placeBid
    };
}
