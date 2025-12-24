'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Renaming to avoid potential conflict if any, but likely just fine to export.
export interface AuthUser {
    id: string;
    email: string;
    name: string | null;
    role: string;
    memberType: 'INDIVIDUAL' | 'CORPORATE';
    phoneNumber?: string | null;
    address?: string | null;
    corporateName?: string | null;
    corporateRegNum?: string | null;
    representative?: string | null;
    preferredCurrency?: 'USD' | 'EUR' | 'GBP' | 'EGP';
    permissions?: string[];
    memberId?: string | null;
}

// Active Bid Type
interface ActiveBid {
    bikeId: string;
    endTime: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: AuthUser | null;
    login: (email?: string, password?: string) => Promise<boolean>;
    logout: () => Promise<void>;
    activeBids: ActiveBid[];
    registerBid: (bikeId: string, endTime: Date) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeBids, setActiveBids] = useState<ActiveBid[]>([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }

        // Load active bids
        const storedBids = localStorage.getItem('awa_active_bids');
        if (storedBids) {
            try {
                const bids: ActiveBid[] = JSON.parse(storedBids);
                const now = new Date();
                const valid = bids.filter(b => new Date(b.endTime) > now);
                setActiveBids(valid);
            } catch (e) {
                console.error("Failed to parse active bids", e);
            }
        }

        setIsLoading(false);
    }, []);

    const login = async (email?: string, password?: string) => {
        if (!email || !password) {
            throw new Error("Email and password required");
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Login failed');
        }

        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (error) {
            console.error('Logout API failed:', error);
        }

        localStorage.removeItem('user');
        localStorage.removeItem('awa_active_bids'); // Clear bids on logout? Or keep?
        // Usually clearing is safer for shared computers.
        setUser(null);
        setActiveBids([]);
        setIsAuthenticated(false);
    };

    const registerBid = (bikeId: string, endTime: Date) => {
        const newBid = { bikeId, endTime: endTime.toISOString() };
        setActiveBids(prev => {
            if (prev.some(b => b.bikeId === bikeId)) return prev;
            const updated = [...prev, newBid];
            localStorage.setItem('awa_active_bids', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout, activeBids, registerBid }}>
            {children}
        </AuthContext.Provider>
    );
}

// export type { User }; // Removed invalid export

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
