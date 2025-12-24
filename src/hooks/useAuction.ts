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
        status: new Date() > endTime ? 'LIVE' : 'ENDED',
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
    const placeBid = useCallback((amount: number) => {
        if (state.status === 'ENDED') return false;
        if (amount < state.minBid) return false;

        const newBid: Bid = {
            id: Math.random().toString(36).substr(2, 9),
            bidder: 'You',
            amount: amount,
            timestamp: new Date(),
            isMine: true
        };

        setState(prev => ({
            ...prev,
            currentPrice: amount,
            minBid: amount + 10000,
            bids: [newBid, ...prev.bids]
        }));

        return true;
    }, [state.minBid, state.status]);

    // Competitor Logic (Simulates an opponent)
    useEffect(() => {
        if (!SIMULATION_ENABLED || state.status === 'ENDED') return;

        const interval = setInterval(() => {
            // Competitor only bids if:
            // 1. User is winning
            // 2. Current price is within competitor budget
            // 3. Random chance to make it feel organic
            const isUserWinning = state.bids.length > 0 && state.bids[0].isMine;

            if (isUserWinning && state.currentPrice < COMPETITOR_MAX_BUDGET) {
                if (Math.random() > 0.6) { // 40% chance to bid tick
                    // Competitor bids min increment (Directly raising price)
                    const newPrice = state.currentPrice + 10000;
                    const mockBid: Bid = {
                        id: Math.random().toString(36).substr(2, 9),
                        bidder: `Competitor`,
                        amount: newPrice,
                        timestamp: new Date(),
                        isMine: false
                    };

                    setState(prev => ({
                        ...prev,
                        currentPrice: newPrice,
                        minBid: newPrice + 10000,
                        bids: [mockBid, ...prev.bids]
                    }));
                }
            }
        }, 3000); // Check every 3 seconds

        return () => clearInterval(interval);
    }, [state.bids, state.currentPrice, state.minBid, state.status]);

    return {
        ...state,
        connectionStatus,
        placeBid
    };
}
